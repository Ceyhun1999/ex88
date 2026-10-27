# Деплой ex88.ru

Инструкция для того, кто выкладывает сайт на сервер. Сайт статический: собирается одной командой в папку `dist/`, её и нужно отдавать через nginx. Базы данных, бэкенда и `npm install` нет.

## Что нужно на сервере

- **Node.js 18+**, только для сборки, без зависимостей. Собирать можно и на своей машине, а на сервер заливать готовую `dist/`.
- **nginx** с сертификатом для `ex88.ru` (и `www.ex88.ru`, если он нужен).
- DNS: `ex88.ru` и `www.ex88.ru` смотрят на сервер.

## 1. Разрешить домен в API (CORS)

Калькулятор обращается к API из браузера:

- `GET https://ex-88.pro/api/rates`
- `POST https://ex-88.pro/api/exchange/calculate` (с заголовком `Content-Type: application/json`, поэтому браузер шлёт preflight `OPTIONS`)

Для обоих нужно разрешить origin **`https://ex88.ru`** (и `https://www.ex88.ru`, если сайт будет открываться и так). Без этого калькулятор на сайте покажет «Курс временно недоступен».

Проверка:

```bash
curl -s -o /dev/null -D - -H "Origin: https://ex88.ru" https://ex-88.pro/api/rates | grep -i access-control-allow-origin
# ожидается: Access-Control-Allow-Origin: https://ex88.ru
```

## 2. Собрать сайт

```bash
git clone https://github.com/Ceyhun1999/ex88.git
cd ex88
node scripts/build.mjs
# dist/ ready: 8 pages, script /assets/js/main.<hash>.js, CSS inline …
```

Адрес сайта для `canonical`, `hreflang`, `sitemap.xml` и Open Graph задан в `scripts/build.mjs` константой `SITE = "https://ex88.ru"`. Если домен другой, поменяй её перед сборкой.

Готовый сайт лежит в `dist/`:

```
dist/
├── ru.html, en.html          # главная   → /ru, /en
├── ru/ en/                   # документы → /ru/terms, /ru/privacy, /ru/cookies (и /en/…)
├── assets/                   # скрипт с хэшем, шрифты, картинки
├── robots.txt, sitemap.xml
└── _redirects, _headers, serve.json   # для Netlify и локального просмотра, на nginx не нужны
```

Исходники (`index.html`, `terms.html` и т. д. в корне репозитория) на сервер **не выкладывать**: отдаётся только `dist/`.

## 3. Залить на сервер

```bash
rsync -av --delete dist/ user@server:/var/www/ex88/dist/
```

Путь можно взять любой, главное, чтобы он совпадал с `root` в конфиге nginx.

## 4. Настроить nginx

Готовый конфиг: [`deploy/nginx.conf`](deploy/nginx.conf). Что в нём есть:

- `http://` и `www` перенаправляются на `https://ex88.ru` одним переходом;
- `/` → `/ru`, старые адреса (`/terms`, `/privacy`, `/legal`, `*.html`, адреса со слэшем на конце) перенаправляются кодом 301 на новые, поэтому ссылки из поиска не сломаются;
- страницы отдаются без `.html`: `/ru`, `/en`, `/ru/terms`…;
- долгий кэш для `assets/js` и `assets/fonts` (у скрипта хэш в имени), 30 дней для картинок, `no-cache` для страниц;
- заголовки безопасности и gzip.

Что поменять под свой сервер:

- `ssl_certificate` / `ssl_certificate_key`: пути к своим сертификатам (в конфиге пример для Let's Encrypt);
- `root /var/www/ex88/dist;`: путь, куда залита `dist/`;
- если сертификата для `www` нет, убери второй блок `server` (`www.ex88.ru` на 443).

```bash
sudo cp deploy/nginx.conf /etc/nginx/sites-available/ex88.ru
sudo ln -s /etc/nginx/sites-available/ex88.ru /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

## 5. Проверить после выкладки

```bash
curl -sI https://ex88.ru/           | grep -i "^location"   # /ru
curl -sI https://ex88.ru/terms      | grep -i "^location"   # /ru/terms
curl -so /dev/null -w "%{http_code}\n" https://ex88.ru/ru    # 200
curl -so /dev/null -w "%{http_code}\n" https://ex88.ru/en    # 200
curl -so /dev/null -w "%{http_code}\n" https://ex88.ru/sitemap.xml  # 200
```

В браузере на `https://ex88.ru/ru`:

- [ ] курсы и сумма в калькуляторе появились (а не «Курс временно недоступен»);
- [ ] при способе «ATM» баты кратны 100, а сумма в рублях уменьшилась;
- [ ] «Обменять в Telegram» открывает бота;
- [ ] RU / EN переключается, тёмная тема работает, карта офисов грузится;
- [ ] в консоли браузера нет ошибок CORS.

После первой выкладки отправь `https://ex88.ru/sitemap.xml` в Google Search Console и Яндекс Вебмастер.

## Обновления

```bash
git pull
node scripts/build.mjs
rsync -av --delete dist/ user@server:/var/www/ex88/dist/
```

nginx перезапускать не нужно, только если менялся `deploy/nginx.conf`. Скрипт получает новое имя с хэшем при каждой сборке, поэтому у посетителей не останется старой версии в кэше.

**Откат:** собрать нужный коммит (`git checkout <коммит> && node scripts/build.mjs`) и залить `dist/` тем же `rsync`.

## Netlify (тестовый адрес)

На Netlify всё то же самое делается само: `netlify.toml` запускает `node scripts/build.mjs` и публикует `dist/` при каждом пуше в `main`. Для сервера с nginx Netlify не нужен.

## Если что-то не так

| Симптом | Причина |
|---|---|
| «Курс временно недоступен», в консоли `blocked by CORS policy` | домен сайта не разрешён в API (шаг 1) |
| `/ru` отдаёт 404 | `root` в nginx указывает не на `dist/`, или сайт не собран |
| открывается старая страница / нет стилей | залиты исходники вместо `dist/`, или в браузере старый кэш страницы |
| `www.ex88.ru` не открывается | нет DNS-записи или сертификата для `www` |

Вопросы по сайту и сборке: Jeywa Studio.
