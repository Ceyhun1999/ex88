(function () {
  "use strict";

  const BOT_USERNAME = "REPLACE_WITH_BOT_USERNAME";
  const BOT_URL = "https://t.me/" + BOT_USERNAME;
  const WHATSAPP_NUMBER = "REPLACE_WITH_WHATSAPP_NUMBER";
  const APP_URL = "REPLACE_WITH_APP_URL";

  /* Languages */
  const I18N = {
    ru: {
      title: "Ex88.ru — обмен рублей на баты и донги",
      description: "Посчитайте обмен рублей, долларов, тайских батов и вьетнамских донгов и продолжите в Telegram с менеджером.",
      tickerLabel: "Ориентировочные курсы обмена",
      caption: "обмен валют",
      countryGroup: "Где получить деньги",
      thailand: "Таиланд",
      vietnam: "Вьетнам",
      langGroup: "Язык сайта",
      navLabel: "Основная навигация",
      navExchange: "Обмен",
      navTransfers: "Переводы",
      navContacts: "Контакты",
      tgWrite: "Написать в Telegram",
      themeDark: "Тёмная тема",
      fabLabel: "Связаться с\u00a0менеджером",
      fabLabelShort: "Менеджер",
      officesTitle: "Офисы обмена",
      footerAbout: "Обмен рублей на\u00a0тайские баты и\u00a0вьетнамские донги с\u00a02016 года",
      footerNav: "Разделы",
      footerContact: "Связаться",
      footerApp: "Приложение",
      footerCompany: "Компания",
      footerLicense: "Лицензия",
      footerTerms: "Условия пользования",
      footerPrivacy: "Политика конфиденциальности",
      footerCookies: "Политика cookie",
      docTabs: "Документы",
      docTermsTitle: "Условия пользования — Ex88.ru",
      docTermsDesc: "Условия пользования сервисом обмена валют Ex88.ru, SATANG DANG & CO COMPANY LIMITED.",
      docPrivacyTitle: "Политика конфиденциальности — Ex88.ru",
      docPrivacyDesc: "Как Ex88.ru собирает, использует и хранит персональные данные клиентов.",
      docCookiesTitle: "Политика cookie — Ex88.ru",
      docCookiesDesc: "Какие данные сайт Ex88.ru хранит в браузере и какие сторонние сервисы загружает.",
      officesList: "Офисы",
      officeRoute: "Проложить маршрут",
      officeCopy: "Скопировать адрес",
      officeCopied: "Адрес скопирован",
      officeMap: "Карта офиса",
      faqTitle: "Частые вопросы",
      faqAskQuestion: "Не нашли ответ?",
      faqAskNote: "Менеджер ответит в\u00a0чате",
      faqChat1: "Не нашли ответ на\u00a0свой вопрос?",
      faqChat2: "Напишите нам, менеджер подскажет",
      faqChat3: "Как удобнее получить баты?",
      faqChat4: "Офис, банкомат без карты или курьер. Подберём, что ближе к\u00a0вам",
      faqAskBtn: "Спросить в\u00a0Telegram",
      faqLead: "Как перевести рубли, получить баты и\u00a0оплатить недвижимость в\u00a0Таиланде",
      faqGroupExchange: "Обмен и\u00a0получение денег",
      faqGroupProperty: "Недвижимость в\u00a0Таиланде",
      faqQ1: "Нужно ли\u00a0везти доллары или евро для обмена в\u00a0Таиланде?",
      faqA1: "Везти наличные доллары или евро не\u00a0обязательно. Вы\u00a0можете перевести рубли с\u00a0российской карты по\u00a0СБП или на\u00a0счет нашей компании и\u00a0получить тайские баты в\u00a0Таиланде в\u00a0офисе, доставкой или через банкомат.",
      faqQ2: "Как работает обмен рублей на\u00a0баты в\u00a0вашем сервисе?",
      faqA2: "Вы\u00a0оплачиваете счет рублями с\u00a0вашей российской карты и\u00a0получаете тайские баты в\u00a0Таиланде через наш офис, банкомат без карты или курьерскую доставку.",
      faqQ3: "Можно ли\u00a0обменять рубли на\u00a0баты без посещения офиса?",
      faqA3: "Да, тайские баты можно получить через банкомат по\u00a0пошаговой инструкции. Банкоматы расположены на\u00a0каждом шагу по\u00a0всему Таиланду, что делает этот способ быстрым и\u00a0удобным.",
      faqQ4: "Где располагаются ваши обменные офисы в\u00a0Таиланде?",
      faqA4: "Наш головной офис расположен в\u00a0столице Таиланда — городе Бангкок.",
      faqQ5: "Можно ли\u00a0получить наличные баты с\u00a0доставкой?",
      faqA5: "Да, мы\u00a0предоставляем курьерскую доставку наличных батов в\u00a0отели, апартаменты, виллы или любое удобное место.",
      faqQ6: "Как долго ждать баты после перевода рублей?",
      faqA6: "Получение батов обычно занимает минимальное время после подтверждения перевода, скорость зависит от\u00a0выбранного способа: офис, банкомат или курьер.",
      faqQ8: "Какие суммы можно обменять через ваш сервис?",
      faqA8: "Можно обменять как небольшие суммы на\u00a0ежедневные расходы, так и\u00a0крупные суммы на\u00a0отпуск или длительное пребывание. Конкретные лимиты указываются при оформлении заказа.",
      faqQ9: "Что выгоднее: банкомат, офис или курьер?",
      faqA9: "Сравнение безопасности и\u00a0удобства разных способов: банкомат доступен везде, обменный офис надежен и\u00a0предоставляет персональное обслуживание, курьер обеспечивает максимальный комфорт. Выбор зависит от\u00a0ваших потребностей.",
      faqQ10: "Можно ли\u00a0оплатить квартиру или виллу в\u00a0Таиланде из\u00a0России?",
      faqA10: "Да, оплата недвижимости в\u00a0Таиланде возможна из\u00a0России и\u00a0других стран. Сервис помогает конвертировать рубли и\u00a0обрабатывать платежи в\u00a0требуемой валюте.",
      faqQ11: "Помогает ли\u00a0Ex88 с\u00a0консультацией по\u00a0застройщикам в\u00a0Таиланде?",
      faqA11: "Да, сервис Ex88 имеет большой опыт работы с\u00a0тайским рынком и\u00a0застройщиками, предлагает консультации по\u00a0практическим нюансам сделок и\u00a0рискам на\u00a0этапе оплаты.",
      faqQ12: "Что такое справка Freehold и\u00a0зачем она нужна?",
      faqA12: "Справка Freehold — это подтверждение того, что средства на\u00a0покупку недвижимости были переведены из-за\u00a0границы, она требуется для регистрации недвижимости в\u00a0некоторых странах.",
      faqQ13: "Помогает ли\u00a0Ex88 с\u00a0оформлением справки Freehold?",
      faqA13: "Да, сервис Ex88 помогает с\u00a0транзакциями по\u00a0покупке недвижимости и\u00a0обработкой необходимых сопроводительных документов, включая справку Freehold.",
      faqQ14: "Можно ли\u00a0получить справку Freehold, если покупка оплачивается из\u00a0России?",
      faqA14: "Да, при корректном оформлении платежа и\u00a0соблюдении требований страны покупки.",
      contactStatus: "Наши менеджеры онлайн 24/7",
      contactTitle: "Выберите удобный способ обмена",
      contactGo: "Перейти",
      contactExchange: "Обменять",
      contactApp: "в\u00a0приложение",
      contactTg: "в\u00a0Telegram",
      contactWa: "в\u00a0WhatsApp",
      menuOpen: "Открыть меню",
      menuClose: "Закрыть меню",
      tickerPause: "Остановить бегущую строку",
      tickerResume: "Запустить бегущую строку",
      heroTitle: "Меняйте рубли на\u00a0баты и\u00a0донги без похода в\u00a0банк",
      heroLead: "Посчитайте сумму здесь, а\u00a0менеджер в\u00a0Telegram подтвердит курс и\u00a0подскажет, как получить деньги.",
      ratesTitle: "Курс на сегодня",
      ratesNote: "Нажмите на курс, чтобы подставить его в\u00a0расчёт",
      calcTitle: "Расчёт обмена",
      youSend: "Вы отдаёте",
      youReceive: "Вы получаете",
      currencyFromLabel: "Валюта, которую вы отдаёте",
      currencyToLabel: "Валюта, которую вы получаете",
      swapLabel: "Поменять валюты местами",
      submit: "Обменять в Telegram",
      calcHint: "Получите точный расчёт у\u00a0менеджера",
      pairTo: "в",
      per: "за",
      RUB: "Российский рубль",
      USD: "Доллар США",
      THB: "Тайский бат",
      VND: "Вьетнамский донг",
      USD_ONLINE: "Доллары США онлайн",
      rateLoading: "Загружаем курс…",
      rateError: "Курс временно недоступен. Менеджер назовёт его в\u00a0чате",
      rateMin: "Минимальная сумма —",
      receiveMethod: "Как получить",
      acceptTitle: "Мы принимаем рубли и\u00a0другие виды валют",
      bankSbp: "СБП",
      bankT: "Т-Банк",
      bankSber: "Сбербанк",
      bankAlfa: "Альфа-Банк",
      usd: "Доллары США",
      receiveTitle: "Способы получения",
      receiveLead: "Менеджер подберёт самый удобный способ",
      receiveOffice: "Наличные в\u00a0офисе",
      receiveOfficeText: "Приходите в\u00a0наш офис и\u00a0забираете баты или донги",
      receiveDelivery: "Доставка",
      receiveDeliveryText: "Курьер привезёт наличные к\u00a0отелю или вилле",
      receiveOnlyTH: "Только в\u00a0Таиланде",
      receiveAtm: "Банкомат без карты",
      receiveAtmText: "Снимаете наличные по\u00a0коду, карта не\u00a0нужна",
      receiveQr: "Перевод по\u00a0QR",
      receiveQrText: "Отправим деньги на\u00a0местный банковский счёт или по\u00a0QR-коду",
      receiveBills: "Оплата услуг и\u00a0счетов",
      receiveBillsText: "Оплатим аренду, коммунальные услуги и\u00a0другие счета за\u00a0вас",
      receiveUsd: "Доллары онлайн",
      receiveUsdText: "Получаете доллары США безналичным переводом",
      reviewsTitle: "Отзывы клиентов",
      reviewsPrev: "Предыдущие отзывы",
      reviewsNext: "Следующие отзывы",
      reviewsRating: "Оценка 5 из 5",
      reviewsPause: "Остановить автопрокрутку отзывов",
      reviewsPlay: "Запустить автопрокрутку отзывов",
    },
    en: {
      title: "Ex88.ru — exchange rubles for baht and dong",
      description: "Calculate an exchange of rubles, dollars, Thai baht and Vietnamese dong, then continue in Telegram with a manager.",
      tickerLabel: "Approximate exchange rates",
      caption: "currency exchange",
      countryGroup: "Where to receive money",
      thailand: "Thailand",
      vietnam: "Vietnam",
      langGroup: "Site language",
      navLabel: "Main navigation",
      navExchange: "Exchange",
      navTransfers: "Transfers",
      navContacts: "Contacts",
      tgWrite: "Message us on Telegram",
      themeDark: "Dark theme",
      fabLabel: "Contact a manager",
      fabLabelShort: "Manager",
      officesTitle: "Exchange offices",
      footerAbout: "Exchanging rubles for Thai baht and Vietnamese dong since 2016",
      footerNav: "Sections",
      footerContact: "Contact us",
      footerApp: "App",
      footerCompany: "Company",
      footerLicense: "License",
      footerTerms: "Terms of use",
      footerPrivacy: "Privacy policy",
      footerCookies: "Cookie policy",
      docTabs: "Documents",
      docTermsTitle: "Terms of Use — Ex88.ru",
      docTermsDesc: "Terms of use of the Ex88.ru currency exchange service, SATANG DANG & CO COMPANY LIMITED.",
      docPrivacyTitle: "Privacy Policy — Ex88.ru",
      docPrivacyDesc: "How Ex88.ru collects, uses and stores customers' personal data.",
      docCookiesTitle: "Cookie Policy — Ex88.ru",
      docCookiesDesc: "What the Ex88.ru website stores in your browser and which third-party services it loads.",
      officesList: "Offices",
      officeRoute: "Get directions",
      officeCopy: "Copy address",
      officeCopied: "Address copied",
      officeMap: "Office map",
      faqTitle: "Frequently asked questions",
      faqAskQuestion: "Didn't find an answer?",
      faqAskNote: "A manager will reply in the chat",
      faqChat1: "Couldn't find your answer?",
      faqChat2: "Message us and a manager will help",
      faqChat3: "What's the easiest way to get baht?",
      faqChat4: "An office, a cardless ATM or a courier. We'll pick what's closest to you",
      faqAskBtn: "Ask in Telegram",
      faqLead: "How to transfer rubles, receive baht and pay for property in Thailand",
      faqGroupExchange: "Exchange and receiving money",
      faqGroupProperty: "Property in Thailand",
      faqQ1: "Do I need to bring dollars or euros to exchange in Thailand?",
      faqA1: "You don't need to bring cash dollars or euros. You can transfer rubles from your Russian card via SBP or to our company's account and receive Thai baht in Thailand at an office, by delivery or from an ATM.",
      faqQ2: "How does exchanging rubles for baht work?",
      faqA2: "You pay the invoice in rubles from your Russian card and receive Thai baht in Thailand at our office, from a cardless ATM or by courier delivery.",
      faqQ3: "Can I exchange rubles for baht without visiting an office?",
      faqA3: "Yes, you can get Thai baht from an ATM by following step-by-step instructions. ATMs are on every corner all over Thailand, which makes this way quick and convenient.",
      faqQ4: "Where are your exchange offices in Thailand?",
      faqA4: "Our head office is in Bangkok, the capital of Thailand.",
      faqQ5: "Can I get cash baht delivered?",
      faqA5: "Yes, we deliver cash baht by courier to hotels, apartments, villas or any place that suits you.",
      faqQ6: "How long does it take to get baht after transferring rubles?",
      faqA6: "Baht usually arrive shortly after the transfer is confirmed. The speed depends on the method you choose: office, ATM or courier.",
      faqQ8: "What amounts can I exchange?",
      faqA8: "Both small amounts for daily spending and large sums for a holiday or a long stay. Specific limits are given when you place an order.",
      faqQ9: "Which is better: ATM, office or courier?",
      faqA9: "Each has its strengths: ATMs are everywhere, an exchange office is reliable and gives personal service, and a courier is the most comfortable. The choice depends on your needs.",
      faqQ10: "Can I pay for an apartment or villa in Thailand from Russia?",
      faqA10: "Yes, you can pay for property in Thailand from Russia and other countries. We help convert rubles and process payments in the required currency.",
      faqQ11: "Does Ex88 advise on developers in Thailand?",
      faqA11: "Yes, Ex88 has broad experience with the Thai market and developers and advises on the practical details of deals and the risks at the payment stage.",
      faqQ12: "What is a Freehold certificate and why do I need it?",
      faqA12: "A Freehold certificate confirms that the money for a property purchase was transferred from abroad. Some countries require it to register property.",
      faqQ13: "Does Ex88 help with a Freehold certificate?",
      faqA13: "Yes, Ex88 helps with property purchase transactions and the supporting documents they need, including the Freehold certificate.",
      faqQ14: "Can I get a Freehold certificate if the purchase is paid from Russia?",
      faqA14: "Yes, if the payment is made correctly and meets the requirements of the country where you buy.",
      contactStatus: "Our managers are online 24/7",
      contactTitle: "Choose how you want to exchange",
      contactGo: "Open",
      contactExchange: "Exchange",
      contactApp: "the app",
      contactTg: "in Telegram",
      contactWa: "on WhatsApp",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      tickerPause: "Pause the ticker",
      tickerResume: "Resume the ticker",
      heroTitle: "Exchange rubles for\u00a0baht and\u00a0dong, skip the\u00a0bank",
      heroLead: "Calculate the amount here, and\u00a0a\u00a0manager in Telegram will confirm the rate and explain how to receive your money.",
      ratesTitle: "Today\u2019s rates",
      ratesNote: "Click a rate to use it in the\u00a0calculation",
      calcTitle: "Exchange calculator",
      youSend: "You send",
      youReceive: "You receive",
      currencyFromLabel: "Currency you send",
      currencyToLabel: "Currency you receive",
      swapLabel: "Swap currencies",
      submit: "Exchange in Telegram",
      calcHint: "Get an exact quote from a manager",
      pairTo: "to",
      per: "per",
      RUB: "Russian ruble",
      USD: "US dollar",
      THB: "Thai baht",
      VND: "Vietnamese dong",
      USD_ONLINE: "US dollars online",
      rateLoading: "Loading the rate…",
      rateError: "The rate is unavailable right now. A manager will give it to you in the chat",
      rateMin: "Minimum amount:",
      receiveMethod: "How to receive",
      acceptTitle: "We accept rubles and\u00a0other currencies",
      bankSbp: "SBP",
      bankT: "T-Bank",
      bankSber: "Sberbank",
      bankAlfa: "Alfa-Bank",
      usd: "US dollars",
      receiveTitle: "Ways to receive",
      receiveLead: "A manager will pick the most convenient way for you",
      receiveOffice: "Cash at our office",
      receiveOfficeText: "Come to our office and pick up baht or dong",
      receiveDelivery: "Delivery",
      receiveDeliveryText: "A courier brings the cash to your hotel or villa",
      receiveOnlyTH: "Thailand only",
      receiveAtm: "Cardless ATM",
      receiveAtmText: "Withdraw cash with a code, no card needed",
      receiveQr: "QR transfer",
      receiveQrText: "We send money to a local bank account or pay by QR code",
      receiveBills: "Bills and services",
      receiveBillsText: "We pay rent, utilities and other bills for you",
      receiveUsd: "Dollars online",
      receiveUsdText: "Receive US dollars by bank transfer",
      reviewsTitle: "Client reviews",
      reviewsPrev: "Previous reviews",
      reviewsNext: "Next reviews",
      reviewsRating: "Rated 5 out of 5",
      reviewsPause: "Pause the reviews slideshow",
      reviewsPlay: "Play the reviews slideshow",
    },
  };

  // DEMO CONTENT: placeholder reviews for the layout. Replace with real client
  // reviews (with their permission) before the site goes live.
  const REVIEWS = [
    {
      name: { ru: "Анна К.", en: "Anna K." },
      city: { ru: "Пхукет", en: "Phuket" },
      text: {
        ru: "Меняла рубли на баты перед арендой виллы. Курс согласовали в чате за пару минут, наличные забрала в тот же день.",
        en: "I exchanged rubles for baht before renting a villa. We agreed on the rate in the chat within minutes and I picked up the cash the same day.",
      },
    },
    {
      name: { ru: "Дмитрий", en: "Dmitry" },
      city: { ru: "Нячанг", en: "Nha Trang" },
      text: {
        ru: "Нужно было срочно получить донги. Написал в Telegram вечером, утром деньги уже были у меня. Менеджер на связи всё время.",
        en: "I needed dong urgently. I messaged on Telegram in the evening and had the money by morning. The manager was in touch the whole time.",
      },
    },
    {
      name: { ru: "Мария и Олег", en: "Maria and Oleg" },
      city: { ru: "Паттайя", en: "Pattaya" },
      text: {
        ru: "Удобно, что калькулятор на сайте сразу показывает сумму. В чате подсказали, где проще забрать деньги рядом с отелем.",
        en: "Handy that the calculator shows the amount right away. In the chat they told us the easiest place to collect the money near our hotel.",
      },
    },
    {
      name: { ru: "Сергей", en: "Sergey" },
      city: { ru: "Бангкок", en: "Bangkok" },
      text: {
        ru: "Менял доллары на баты, сумма была крупная. Всё прошло спокойно, каждый шаг объяснили заранее.",
        en: "I exchanged a large amount of dollars for baht. Everything went smoothly and every step was explained in advance.",
      },
    },
    {
      name: { ru: "Екатерина", en: "Ekaterina" },
      city: { ru: "Самуи", en: "Koh Samui" },
      text: {
        ru: "Обращаюсь уже третий раз. Пишу сумму в Telegram, подтверждаю курс и получаю баты. Без очередей и походов в банк.",
        en: "This is my third time. I send the amount on Telegram, confirm the rate and get my baht. No queues and no trips to the bank.",
      },
    },
    {
      name: { ru: "Алексей", en: "Alexey" },
      city: { ru: "Дананг", en: "Da Nang" },
      text: {
        ru: "Первый раз менял деньги во Вьетнаме, переживал. Менеджер объяснил всё по шагам, получил донги на месте.",
        en: "It was my first exchange in Vietnam and I was nervous. The manager walked me through every step and I got my dong on the spot.",
      },
    },
    {
      name: { ru: "Ольга М.", en: "Olga M." },
      city: { ru: "Хуахин", en: "Hua Hin" },
      text: {
        ru: "Заказывала доставку наличных прямо к отелю. Курьер приехал в назначенное время, всё пересчитали вместе.",
        en: "I ordered cash delivery straight to my hotel. The courier arrived on time and we counted everything together.",
      },
    },
    {
      name: { ru: "Игорь", en: "Igor" },
      city: { ru: "Краби", en: "Krabi" },
      text: {
        ru: "Снимал баты в банкомате без карты по инструкции из чата. Заняло пять минут, никаких сложностей.",
        en: "I withdrew baht from an ATM without a card, following the instructions from the chat. It took five minutes with no trouble.",
      },
    },
    {
      name: { ru: "Наталья В.", en: "Natalia V." },
      city: { ru: "Чиангмай", en: "Chiang Mai" },
      text: {
        ru: "Жили в Чиангмае месяц, обращались несколько раз. Курс каждый раз называли заранее, без сюрпризов на месте.",
        en: "We stayed in Chiang Mai for a month and used the service several times. The rate was always named in advance, with no surprises.",
      },
    },
    {
      name: { ru: "Андрей", en: "Andrey" },
      city: { ru: "Хошимин", en: "Ho Chi Minh City" },
      text: {
        ru: "Нужны были донги для оплаты аренды. Менеджер быстро ответил и предложил удобный способ получения.",
        en: "I needed dong to pay rent. The manager replied quickly and suggested a convenient way to receive it.",
      },
    },
    {
      name: { ru: "Виктория", en: "Victoria" },
      city: { ru: "Фукуок", en: "Phu Quoc" },
      text: {
        ru: "Приятно, что можно написать в любое время. Ответили даже поздно вечером, утром всё уже было готово.",
        en: "It is nice that you can write at any time. They answered even late in the evening and everything was ready by morning.",
      },
    },
    {
      name: { ru: "Денис К.", en: "Denis K." },
      city: { ru: "Пхукет", en: "Phuket" },
      text: {
        ru: "Оплатили через сервис аренду виллы. Менеджер сам всё уточнил и прислал подтверждение оплаты.",
        en: "We paid for a villa rental through the service. The manager clarified everything himself and sent a payment confirmation.",
      },
    },
    {
      name: { ru: "Татьяна", en: "Tatiana" },
      city: { ru: "Паттайя", en: "Pattaya" },
      text: {
        ru: "Забирала наличные в офисе в Бангкоке. Встретили приветливо, обмен занял минут десять.",
        en: "I picked up cash at the office in Bangkok. The staff were friendly and the exchange took about ten minutes.",
      },
    },
    {
      name: { ru: "Михаил", en: "Mikhail" },
      city: { ru: "Нячанг", en: "Nha Trang" },
      text: {
        ru: "Понравилось, что нет скрытых комиссий. Сумму к получению назвали сразу, она не поменялась.",
        en: "I liked that there are no hidden fees. The amount I would receive was named right away and it did not change.",
      },
    },
    {
      name: { ru: "Юлия С.", en: "Yulia S." },
      city: { ru: "Самуи", en: "Koh Samui" },
      text: {
        ru: "Первый раз пользовалась такими сервисами и немного волновалась. Менеджер терпеливо отвечал на все вопросы.",
        en: "It was my first time using a service like this and I was a little nervous. The manager patiently answered all my questions.",
      },
    },
    {
      name: { ru: "Павел", en: "Pavel" },
      city: { ru: "Бангкок", en: "Bangkok" },
      text: {
        ru: "Часто бываю в Таиланде по работе. Удобно, что всё решается в одном чате, без банков и очередей.",
        en: "I often visit Thailand for work. It is convenient that everything is sorted in one chat, with no banks or queues.",
      },
    },
    {
      name: { ru: "Анастасия", en: "Anastasia" },
      city: { ru: "Дананг", en: "Da Nang" },
      text: {
        ru: "Получила донги перед поездкой в Хойан. Менеджер подсказал, где удобнее забрать, и всё получилось с первого раза.",
        en: "I got dong before a trip to Hoi An. The manager suggested where it was easiest to collect and it worked the first time.",
      },
    },
    {
      name: { ru: "Роман", en: "Roman" },
      city: { ru: "Паттайя", en: "Pattaya" },
      text: {
        ru: "Переводил деньги по QR-коду. Через пару минут после оплаты пришло подтверждение, всё прозрачно.",
        en: "I sent money by QR code. A confirmation came a couple of minutes after payment and everything was transparent.",
      },
    },
    {
      name: { ru: "Елена Д.", en: "Elena D." },
      city: { ru: "Хуахин", en: "Hua Hin" },
      text: {
        ru: "Рада, что нашла этот сервис. Не пришлось возить с собой наличные, а курс оказался выгоднее, чем в обменниках.",
        en: "I am glad I found this service. I did not have to carry cash, and the rate turned out better than at exchange booths.",
      },
    },
    {
      name: { ru: "Кирилл", en: "Kirill" },
      city: { ru: "Ханой", en: "Hanoi" },
      text: {
        ru: "Оплатили через менеджера несколько счетов за жильё. Всё сделали аккуратно и вовремя, рекомендую.",
        en: "We paid several housing bills through the manager. Everything was done carefully and on time. I recommend it.",
      },
    },
  ];

  let lang = "ru";
  try {
    const saved = localStorage.getItem("ex88-lang");
    if (saved === "ru" || saved === "en") lang = saved;
  } catch (e) {}

  const t = (key) => I18N[lang][key];
  const numberLocale = () => (lang === "en" ? "en-US" : "ru-RU");

  /* Mobile nav */
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");

  function setNavOpen(isOpen) {
    burger.setAttribute("aria-expanded", String(isOpen));
    burger.setAttribute("aria-label", t(isOpen ? "menuClose" : "menuOpen"));
    nav.classList.toggle("is-open", isOpen);
  }

  burger.addEventListener("click", () => {
    setNavOpen(burger.getAttribute("aria-expanded") !== "true");
  });

  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) setNavOpen(false);
  });

  document.getElementById("header-tg").href = BOT_URL;

  /* Theme: follows the system until the visitor picks one, then remembers it */
  const themeToggle = document.getElementById("theme-toggle");
  const darkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  let savedTheme = null;
  try { savedTheme = localStorage.getItem("theme"); } catch (e) {}

  function setTheme(theme) {
    const root = document.documentElement;
    root.classList.add("theme-switching");
    root.dataset.theme = theme;
    themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
    requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove("theme-switching")));
  }

  themeToggle.setAttribute("aria-pressed", String(document.documentElement.dataset.theme === "dark"));
  themeToggle.addEventListener("click", () => {
    savedTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("theme", savedTheme); } catch (e) {}
    setTheme(savedTheme);
  });
  darkScheme.addEventListener("change", () => {
    if (!savedTheme) setTheme(darkScheme.matches ? "dark" : "light");
  });

  /* Shared by every page: footer links, floating contact button, header shadow, language */
  document.getElementById("footer-tg").href = BOT_URL;
  document.getElementById("footer-wa").href = "https://wa.me/" + WHATSAPP_NUMBER;
  document.getElementById("footer-app").href = APP_URL;
  document.getElementById("footer-year").textContent = new Date().getFullYear();

  /* Floating contact button: opens instantly, closes on Esc, an outside click or a pick */
  const fab = document.getElementById("fab");
  const fabToggle = document.getElementById("fab-toggle");
  const fabList = document.getElementById("fab-list");
  document.getElementById("fab-tg").href = BOT_URL;
  document.getElementById("fab-wa").href = "https://wa.me/" + WHATSAPP_NUMBER;

  function setFabOpen(open) {
    fabToggle.setAttribute("aria-expanded", String(open));
    fabList.hidden = !open;
  }

  fabToggle.addEventListener("click", () => setFabOpen(fabList.hidden));
  fabList.addEventListener("click", (e) => {
    if (e.target.closest("a")) setFabOpen(false);
  });
  document.addEventListener("click", (e) => {
    if (!fabList.hidden && !fab.contains(e.target)) setFabOpen(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !fabList.hidden) {
      setFabOpen(false);
      fabToggle.focus();
    }
  });

  const siteHeader = document.getElementById("site-header");
  function updateHeaderShadow() {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 4);
  }
  window.addEventListener("scroll", updateHeaderShadow, { passive: true });
  updateHeaderShadow();

  /* In-page links: smooth scroll that stops just below the sticky header (measured, so it
     also holds on phones), instant with reduced motion. Focus moves to the block for
     keyboard and screen reader users. */
  const anchorMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function scrollToBlock(target, smooth) {
    const gap = 16;
    const top = target.getBoundingClientRect().top + window.scrollY - siteHeader.getBoundingClientRect().height - gap;
    window.scrollTo({ top: Math.max(0, top), behavior: smooth && !anchorMotion.matches ? "smooth" : "auto" });
  }

  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[href*="#"]');
    if (!link || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
    const url = new URL(link.href, location.href);
    if (url.pathname !== location.pathname || !url.hash || url.hash === "#") return;
    const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
    if (!target) return;
    e.preventDefault();
    history.pushState(null, "", url.hash);
    scrollToBlock(target, true);
    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  });

  // Arriving from another page with #block: line it up again once fonts and images have settled
  function alignHashTarget() {
    const target = location.hash.length > 1 && document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) scrollToBlock(target, false);
  }
  if (location.hash.length > 1) {
    window.addEventListener("load", alignHashTarget, { once: true });
    if (document.fonts) document.fonts.ready.then(alignHashTarget);
  }

  const langSwitch = document.querySelector('[data-switch="language"]');
  const langButtons = langSwitch.querySelectorAll(".country-switch__btn");

  // Texts, aria-labels and switches that exist on every page
  function applyCommon() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      el.setAttribute("aria-label", t(el.dataset.i18nAria));
    });
    document.querySelectorAll("[data-i18n-content]").forEach((el) => {
      el.setAttribute("content", t(el.dataset.i18nContent));
    });
    // Long documents carry both languages; only the active one is shown
    document.querySelectorAll("[data-lang-doc]").forEach((el) => {
      el.hidden = el.dataset.langDoc !== lang;
    });

    burger.setAttribute("aria-label", t(burger.getAttribute("aria-expanded") === "true" ? "menuClose" : "menuOpen"));
    langButtons.forEach((btn) => btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang)));
    langSwitch.dataset.active = String(Array.from(langButtons).findIndex((btn) => btn.dataset.lang === lang));
  }

  let applyPage = () => {};

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.dataset.lang === lang) return;
      lang = btn.dataset.lang;
      try {
        localStorage.setItem("ex88-lang", lang);
      } catch (e) {}
      applyCommon();
      applyPage();
    });
  });

  // Document pages (terms, privacy, cookies) need nothing below
  if (!document.getElementById("calculator")) {
    applyCommon();
    return;
  }

  /* FAQ accordion: opening a question closes the others. The `name` attribute on the
     <details> does this natively in current browsers; this covers older ones. */
  const faqPanel = document.querySelector(".faq__panel");
  faqPanel.addEventListener("toggle", (e) => {
    if (!e.target.open) return;
    faqPanel.querySelectorAll("details[open]").forEach((item) => {
      if (item !== e.target) item.open = false;
    });
  }, true);

  /* FAQ chat card: a short conversation plays in a loop. New bubbles push the older ones up
     (FLIP on transform), the manager "types" before each reply. Pauses off-screen and in
     hidden tabs; with reduced motion the first question and answer just stand still. */
  const FAQ_CHAT = [
    { from: "out", key: "faqChat1" },
    { from: "in", key: "faqChat2" },
    { from: "out", key: "faqChat3" },
    { from: "in", key: "faqChat4" },
  ];
  const faqChat = document.getElementById("faq-chat");
  const faqReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let faqChatStep = 0;
  let faqChatTimer = 0;
  let faqChatInView = false;

  function faqBubble(from, text) {
    const el = document.createElement("p");
    el.className = "faq__bubble faq__bubble--" + from;
    if (text) el.textContent = text;
    else {
      el.classList.add("faq__typing");
      el.innerHTML = "<span></span><span></span><span></span>";
    }
    return el;
  }

  // Add a bubble at the bottom and slide the stack up by its height
  function faqChatAdd(el) {
    faqChat.appendChild(el);
    const shift = el.offsetHeight + parseFloat(getComputedStyle(faqChat).rowGap || 0);
    faqChat.animate(
      [{ transform: "translateY(" + shift + "px)" }, { transform: "none" }],
      { duration: 380, easing: "cubic-bezier(0.2, 0, 0, 1)" }
    );
    el.classList.add("is-new");
  }

  function faqChatNext() {
    clearTimeout(faqChatTimer);
    if (!faqChatInView || document.hidden || faqReduceMotion.matches) return;

    if (faqChatStep >= FAQ_CHAT.length) {
      // Conversation over: hold, fade out, start again
      faqChatTimer = setTimeout(() => {
        faqChat.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 400, easing: "ease" }).onfinish = () => {
          faqChat.innerHTML = "";
          faqChatStep = 0;
          faqChatTimer = setTimeout(faqChatNext, 500);
        };
      }, 3500);
      return;
    }

    const msg = FAQ_CHAT[faqChatStep];
    if (msg.from === "in") {
      const typing = faqBubble("in");
      faqChatAdd(typing);
      faqChatTimer = setTimeout(() => {
        typing.replaceWith(faqBubble("in", t(msg.key)));
        faqChat.lastChild.classList.add("is-new");
        faqChatStep++;
        faqChatTimer = setTimeout(faqChatNext, 1600);
      }, 1500);
    } else {
      faqChatAdd(faqBubble("out", t(msg.key)));
      faqChatStep++;
      faqChatTimer = setTimeout(faqChatNext, 1100);
    }
  }

  function resetFaqChat() {
    clearTimeout(faqChatTimer);
    faqChat.innerHTML = "";
    faqChatStep = 0;
    if (faqReduceMotion.matches) {
      FAQ_CHAT.slice(0, 2).forEach((m) => faqChat.appendChild(faqBubble(m.from, t(m.key))));
      return;
    }
    faqChatTimer = setTimeout(faqChatNext, 600);
  }

  if ("IntersectionObserver" in window) {
    new IntersectionObserver((entries) => {
      faqChatInView = entries[0].isIntersecting;
      if (faqChatInView) faqChatNext();
      else clearTimeout(faqChatTimer);
    }).observe(faqChat.parentElement);
  } else {
    faqChatInView = true;
  }
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) faqChatNext();
  });
  faqReduceMotion.addEventListener("change", resetFaqChat);

  /* Offices: one tab per office; the card and the map follow the selected one.
     To add an office, add an entry here. */
  const OFFICES = [
    {
      id: "si-phraya",
      area: { ru: "Si Phraya", en: "Si Phraya" },
      city: { ru: "Бангкок", en: "Bangkok" },
      place: { ru: "Ex88 BangRak", en: "Ex88 BangRak" },
      // Matches the office's Google Maps listing, so the pin shows its name and address card
      mapQuery: "Ex88, 362/5 Si Phraya Rd, Bangkok",
      address: {
        ru: "362/5 Si Phraya Rd, Maha Phruttharam, Bang Rak, Бангкок 10500, Таиланд",
        en: "362/5 Si Phraya Rd, Maha Phruttharam, Bang Rak, Bangkok 10500, Thailand",
      },
      copy: "362/5 Si Phraya Rd, Maha Phruttharam, Bang Rak, Bangkok 10500, Thailand",
      lat: 13.7317149,
      lng: 100.5236788,
    },
    {
      id: "sukhumvit",
      area: { ru: "Sukhumvit 13", en: "Sukhumvit 13" },
      city: { ru: "Бангкок", en: "Bangkok" },
      place: { ru: "Biz concierge office, 6\u00a0этаж", en: "Biz concierge office, floor 6" },
      address: {
        ru: "Soi Sukhumvit 13, Khlong Toei Nuea, Watthana, Бангкок 10110, Таиланд",
        en: "Soi Sukhumvit 13, Khlong Toei Nuea, Watthana, Bangkok 10110, Thailand",
      },
      copy: "Floor 6, Soi Sukhumvit 13, Khlong Toei Nuea, Watthana, Bangkok 10110, Thailand",
      lat: 13.740799594058409,
      lng: 100.55746236932002,
    },
  ];

  const officeTabs = document.getElementById("office-tabs");
  const officePanel = document.getElementById("office-panel");
  const officePlace = document.getElementById("office-place");
  const officeRoute = document.getElementById("office-route");
  let officeCurrent = 0;

  function renderOffices() {
    officeTabs.hidden = OFFICES.length < 2;
    officeTabs.innerHTML = OFFICES.map((o, i) =>
      '<button type="button" role="tab" class="offices__tab" id="office-tab-' + o.id + '"' +
      ' translate="no" aria-controls="office-panel" aria-selected="' + (i === officeCurrent) + '" tabindex="' + (i === officeCurrent ? 0 : -1) + '">' +
      o.area[lang] +
      "</button>"
    ).join("");
    showOffice(officeCurrent);
    lockOfficeHeight();
  }

  function fillOffice(o) {
    document.getElementById("office-name").textContent = o.area[lang];
    officePlace.hidden = !o.place;
    officePlace.textContent = o.place ? o.place[lang] : "";
    document.getElementById("office-address").textContent = o.address[lang];
  }

  // The card takes the height of the longest office, so switching never makes the layout jump
  function lockOfficeHeight() {
    officePanel.style.minHeight = "";
    let tallest = 0;
    OFFICES.forEach((o) => {
      fillOffice(o);
      tallest = Math.max(tallest, officePanel.offsetHeight);
    });
    fillOffice(OFFICES[officeCurrent]);
    officePanel.style.minHeight = tallest + "px";
  }

  function showOffice(index, focusTab) {
    officeCurrent = index;
    const o = OFFICES[index];
    Array.from(officeTabs.children).forEach((tab, i) => {
      tab.setAttribute("aria-selected", String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
    });
    if (focusTab) officeTabs.children[index].focus();

    officePanel.setAttribute("aria-labelledby", "office-tab-" + o.id);
    fillOffice(o);
    officeRoute.href = "https://www.google.com/maps/dir/?api=1&destination=" + o.lat + "," + o.lng;
    officeCopy.dataset.address = o.copy;

    const mapQ = o.mapQuery ? encodeURIComponent(o.mapQuery) : o.lat + "," + o.lng;
    const mapSrc = "https://maps.google.com/maps?q=" + mapQ + "&z=16&hl=" + lang + "&output=embed";
    if (officeMap.getAttribute("src") !== mapSrc) officeMap.src = mapSrc;
    officeMap.title = t("officeMap") + ": " + o.area[lang];
  }

  let officeResize = 0;
  window.addEventListener("resize", () => {
    clearTimeout(officeResize);
    officeResize = setTimeout(lockOfficeHeight, 150);
  });
  if (document.fonts) document.fonts.ready.then(lockOfficeHeight);

  officeTabs.addEventListener("click", (e) => {
    const tab = e.target.closest('[role="tab"]');
    if (tab) showOffice(Array.from(officeTabs.children).indexOf(tab));
  });

  // Arrow keys move between offices, Home and End jump to the ends (ARIA tabs pattern)
  officeTabs.addEventListener("keydown", (e) => {
    const last = OFFICES.length - 1;
    const next = {
      ArrowRight: officeCurrent === last ? 0 : officeCurrent + 1,
      ArrowDown: officeCurrent === last ? 0 : officeCurrent + 1,
      ArrowLeft: officeCurrent === 0 ? last : officeCurrent - 1,
      ArrowUp: officeCurrent === 0 ? last : officeCurrent - 1,
      Home: 0,
      End: last,
    }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    showOffice(next, true);
  });

  /* Office: copy the Latin address for a taxi or Grab */
  const officeMap = document.getElementById("office-map");
  const officeCopy = document.getElementById("office-copy");
  const officeCopyLabel = document.getElementById("office-copy-label");
  const officeCopyStatus = document.getElementById("office-copy-status");
  let officeCopyTimer = 0;

  officeCopy.addEventListener("click", () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(officeCopy.dataset.address).then(() => {
      clearTimeout(officeCopyTimer);
      officeCopyLabel.textContent = t("officeCopied");
      officeCopyStatus.textContent = t("officeCopied");
      officeCopyTimer = setTimeout(() => {
        officeCopyTimer = 0;
        officeCopyLabel.textContent = t("officeCopy");
        officeCopyStatus.textContent = "";
      }, 2500);
    });
  });
  document.getElementById("contact-tg").href = BOT_URL;
  document.getElementById("faq-tg").href = BOT_URL;
  document.getElementById("contact-wa").href = "https://wa.me/" + WHATSAPP_NUMBER;
  document.getElementById("contact-app").href = APP_URL;

  /* Guilloche pattern, like the line work on banknotes. The lines slowly
     undulate; at tau = 0 every line matches the original static drawing. */
  function setupGuilloche(svg) {
    const ns = "http://www.w3.org/2000/svg";
    const size = 1000;
    const rings = 18;
    const ringGap = 22;
    const waves = 24;
    const steps = 720;
    const amp = 10;
    const swellA = 3;
    const swellB = 2;
    const loopSeconds = 48;
    const TAU = Math.PI * 2;

    svg.setAttribute("viewBox", -size / 2 + " " + -size / 2 + " " + size + " " + size);

    // Trig tables are computed once; per frame each point needs only multiplications.
    const cosT = new Float64Array(steps + 1);
    const sinT = new Float64Array(steps + 1);
    const sinW = new Float64Array(steps + 1);
    const cosW = new Float64Array(steps + 1);
    const sin3 = new Float64Array(steps + 1);
    const cos3 = new Float64Array(steps + 1);
    const sin5 = new Float64Array(steps + 1);
    const cos5 = new Float64Array(steps + 1);
    for (let i = 0; i <= steps; i++) {
      const t = (i / steps) * TAU;
      cosT[i] = Math.cos(t);
      sinT[i] = Math.sin(t);
      sinW[i] = Math.sin(waves * t);
      cosW[i] = Math.cos(waves * t);
      sin3[i] = Math.sin(3 * t);
      cos3[i] = Math.cos(3 * t);
      sin5[i] = Math.sin(5 * t);
      cos5[i] = Math.cos(5 * t);
    }

    const lines = [];
    for (let k = 0; k < rings; k++) {
      [1, -1].forEach((dir) => {
        const path = document.createElementNS(ns, "path");
        svg.appendChild(path);
        lines.push({ path, k, dir, base: 90 + k * ringGap, a0: k * 0.37, b0: k * 0.23 + dir });
      });
    }

    // All time terms use whole multiples of 2π·tau, so tau = 1 equals tau = 0: a seamless loop.
    function drawLine(line, tau) {
      const c = line.dir * line.k * 0.18 + line.dir * 2 * TAU * tau;
      const cw = Math.cos(c);
      const sw = Math.sin(c);
      const ca = Math.cos(line.a0 + TAU * tau) - Math.cos(line.a0);
      const sa = Math.sin(line.a0 + TAU * tau) - Math.sin(line.a0);
      const cb = Math.cos(line.b0 - TAU * tau) - Math.cos(line.b0);
      const sb = Math.sin(line.b0 - TAU * tau) - Math.sin(line.b0);

      let d = "M";
      for (let i = 0; i <= steps; i++) {
        const r = line.base
          + amp * (sinW[i] * cw + cosW[i] * sw)
          + swellA * (sin3[i] * ca + cos3[i] * sa)
          + swellB * (sin5[i] * cb + cos5[i] * sb);
        if (i) d += "L";
        d += Math.round(r * cosT[i] * 10) / 10 + " " + Math.round(r * sinT[i] * 10) / 10;
      }
      line.path.setAttribute("d", d + "Z");
    }

    const drawAll = (tau) => lines.forEach((line) => drawLine(line, tau));
    const tauAt = (ms) => (ms / 1000 / loopSeconds) % 1;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const smallScreen = window.matchMedia("(max-width: 767px)");
    let rafId = 0;
    let cursor = 0;
    let inView = true;

    // Each frame refreshes a few lines in turn, so every line updates
    // several times a second while the per-frame cost stays small.
    function frame(now) {
      const tau = tauAt(now);
      const perFrame = smallScreen.matches ? 4 : 8;
      for (let n = 0; n < perFrame; n++) {
        drawLine(lines[cursor], tau);
        cursor = (cursor + 1) % lines.length;
      }
      rafId = requestAnimationFrame(frame);
    }

    function update() {
      const shouldRun = inView && !document.hidden && !reduceMotion.matches;
      if (shouldRun && !rafId) {
        drawAll(tauAt(performance.now()));
        rafId = requestAnimationFrame(frame);
      } else if (!shouldRun && rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    }

    drawAll(reduceMotion.matches ? 0 : tauAt(performance.now()));

    if ("IntersectionObserver" in window) {
      new IntersectionObserver((entries) => {
        inView = entries[0].isIntersecting;
        update();
      }).observe(svg.closest(".hero__panel, .contact__panel, .faq__ask") || svg);
    }
    document.addEventListener("visibilitychange", update);
    reduceMotion.addEventListener("change", () => {
      if (reduceMotion.matches) drawAll(0);
      update();
    });
    update();
  }

  // Hero banner, the FAQ chat card and the closing contact panel share the same waves
  document.querySelectorAll("[data-guilloche]").forEach(setupGuilloche);

  /* Calculator. Rates come from the EX-88 API (GET /api/rates, https://ex-88.pro/docs);
     the API allows the site's domain via CORS. A rate depends on the amount (ranges) and
     on how the money is received: some ranges belong to one receive method. The rates
     list and the ticker show the general rate only. /api/exchange/calculate still needs
     a signed-in user, so the public calculator applies the ranges itself. */
  const RATES_URL = "https://ex-88.pro/api/rates";
  const RATES_REFRESH_MS = 10 * 60 * 1000;
  const RATES_RETRY_MS = 30 * 1000;

  // API currency code -> how the site shows it
  const CURRENCIES = {
    RUB: { code: "RUB", flag: "🇷🇺", decimals: 0, defaultAmount: 50000 },
    THB: { code: "THB", flag: "🇹🇭", decimals: 2, defaultAmount: 20000 },
    VND: { code: "VND", flag: "🇻🇳", decimals: 0, defaultAmount: 10000000 },
    "USD ONLINE": { code: "USD", flag: "🇺🇸", decimals: 2, defaultAmount: 500, nameKey: "USD_ONLINE" },
  };
  const RATES_LIST_SIZE = 5;

  const amountFromInput = document.getElementById("amount-from");
  const amountToInput = document.getElementById("amount-to");
  const currencyFromBtn = document.getElementById("currency-from");
  const currencyToBtn = document.getElementById("currency-to");
  const currencyFromList = document.getElementById("currency-list-from");
  const currencyToList = document.getElementById("currency-list-to");
  const swapBtn = document.getElementById("swap-btn");
  const rateLine = document.getElementById("rate-line");
  const submitBtn = document.getElementById("submit-btn");
  const resultRow = document.getElementById("result-row");
  const calculatorEl = document.getElementById("calculator");
  const ratesList = document.getElementById("rates-list");
  const tickerTrack = document.getElementById("ticker-track");
  const countrySwitch = document.querySelector('[data-switch="country"]');
  const countryButtons = countrySwitch.querySelectorAll(".country-switch__btn");
  const tickerEl = document.querySelector(".ticker");
  const tickerToggle = document.getElementById("ticker-toggle");
  const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  const ROLL_MS = 800;
  let lastResult = 0;
  let rollNext = false;
  let rollFrame = 0;

  // pairs: [{ from, to, order, rounded, step, methods: [{ id, title, time }], ranges: [{ min, max, fromRate, toRate, method }] }]
  let pairs = [];
  let ratesStatus = "loading"; // "loading" | "ready" | "error"
  const state = { from: "RUB", to: "THB", amountFrom: 50000, method: null };
  const receiveMethodBox = document.getElementById("receive-method");
  const receiveMethodOptions = document.getElementById("receive-method-options");

  const cur = (code) => CURRENCIES[code] || { code, flag: "", decimals: 2, defaultAmount: 0 };
  const curName = (code) => t(cur(code).nameKey || cur(code).code) || cur(code).code;
  const findPair = (from, to) => pairs.find((p) => p.from === from && p.to === to);
  const sources = () => [...new Set(pairs.map((p) => p.from))];
  const targets = (from) => pairs.filter((p) => p.from === from).map((p) => p.to);

  function parseRates(data) {
    return data
      .map((r) => ({
        from: r.fromCurrency,
        to: r.toCurrency,
        order: r.order,
        rounded: r.rounded,
        step: r.roundingStep,
        methods: (r.receiveMethods || [])
          .filter((m) => m.isActive !== false)
          .sort((a, b) => a.order - b.order)
          .map((m) => ({
            id: m.id,
            title: { ru: m.title, en: m.titleEn || m.title },
            time: { ru: m.time, en: m.timeEn || m.time },
          })),
        // method: null for the general rate, or the receive method the range belongs to
        ranges: r.ranges
          .map((g) => ({ min: g.minAmount, max: g.maxAmount, fromRate: parseFloat(g.fromRate), toRate: parseFloat(g.toRate), method: g.receiveMethodId || null }))
          .filter((g) => g.fromRate > 0 && g.toRate > 0)
          .sort((a, b) => a.min - b.min),
      }))
      .filter((p) => p.ranges.length)
      .sort((a, b) => a.order - b.order);
  }

  // A receive method's own ranges come first; where it has none, the general ranges apply
  function rangesFor(pair, method) {
    const own = method ? pair.ranges.filter((g) => g.method === method) : [];
    const general = pair.ranges.filter((g) => !g.method);
    const list = own.concat(general);
    return list.length ? list : pair.ranges;
  }

  const pairMin = (pair, method) => Math.min(...rangesFor(pair, method).map((g) => g.min));

  // Rate and result for an amount; status tells whether the amount fits the limits
  function quote(amount, from, to, method) {
    const pair = findPair(from, to);
    if (!pair) return null;
    const ranges = rangesFor(pair, method);
    let range = ranges.find((g) => amount >= g.min && (g.max == null || amount <= g.max));
    let status = "ok";
    if (!range) {
      // Below the minimum is refused; above the last range the server keeps its rate
      const sorted = ranges.slice().sort((a, b) => a.min - b.min);
      status = amount < sorted[0].min ? "below" : "ok";
      range = status === "below" ? sorted[0] : sorted[sorted.length - 1];
    }
    let value = (amount * range.toRate) / range.fromRate;
    if (pair.rounded && pair.step > 0) value = Math.floor(value / pair.step) * pair.step;
    return { value, range, status, pair };
  }

  // Both directions on one line: people read the rate both ways (2,61 as well as 0,383)
  function formatUnitRate(rate) {
    return rate >= 1
      ? rate.toLocaleString(numberLocale(), { minimumFractionDigits: 2, maximumFractionDigits: rate >= 100 ? 2 : 3 })
      : rate.toLocaleString(numberLocale(), { maximumSignificantDigits: 3 });
  }

  function showRates(from, to, range) {
    rateLine.classList.remove("is-warning");
    rateLine.innerHTML =
      "<span>1 " + cur(from).code + " = " + formatUnitRate(range.toRate / range.fromRate) + " " + cur(to).code + "</span>" +
      // Hidden "; " keeps the two rates apart when copied or read aloud; the bar shows the split
      '<span class="visually-hidden">; </span>' +
      '<span class="calculator__rate-back">1 ' + cur(to).code + " = " + formatUnitRate(range.fromRate / range.toRate) + " " + cur(from).code + "</span>";
  }

  // "1 THB = 2,60 RUB": always the side worth more as the unit
  function rateText(from, to, range) {
    return range.fromRate >= range.toRate
      ? "1 " + cur(to).code + " = " + formatRate(range.fromRate / range.toRate) + " " + cur(from).code
      : "1 " + cur(from).code + " = " + formatRate(range.toRate / range.fromRate) + " " + cur(to).code;
  }

  function formatNumber(value, decimals) {
    return value.toLocaleString(numberLocale(), {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }

  function formatRate(rate) {
    const max = rate >= 1000 ? 0 : rate >= 1 ? 2 : 4;
    return rate.toLocaleString(numberLocale(), {
      minimumFractionDigits: Math.min(2, max),
      maximumFractionDigits: max,
    });
  }

  function flashResult() {
    resultRow.classList.remove("is-updated");
    void resultRow.offsetWidth;
    resultRow.classList.add("is-updated");
  }

  function renderCurrencyButton(btn, code) {
    btn.querySelector(".currency-select__flag").textContent = cur(code).flag;
    btn.querySelector(".currency-select__code").textContent = cur(code).code;
  }

  function renderCurrencyList(listEl, codes, selected, onSelect) {
    listEl.innerHTML = "";
    codes.forEach((code) => {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("role", "option");
      btn.setAttribute("aria-selected", String(code === selected));
      btn.innerHTML =
        '<span class="currency-list__flag">' + cur(code).flag + "</span>" +
        '<span class="currency-list__code">' + cur(code).code + "</span>" +
        '<span class="currency-list__name">' + curName(code) + "</span>";
      btn.addEventListener("click", () => onSelect(code));
      li.appendChild(btn);
      listEl.appendChild(li);
    });
  }

  function renderRatesList() {
    ratesList.innerHTML = "";
    if (ratesStatus !== "ready") {
      // Same number of rows while loading, so the hero keeps its height. Loading rows carry a
      // moving sheen; after a failed load they stay still, so nothing pretends to be loading.
      const row = ratesStatus === "loading"
        ? '<li class="rates__item"><span class="rates__btn rates__btn--empty rates__btn--loading" aria-hidden="true">' +
          '<span class="skeleton skeleton--pair"></span><span class="skeleton skeleton--value"></span></span></li>'
        : '<li class="rates__item"><span class="rates__btn rates__btn--empty"><span class="rates__pair">…</span><span class="rates__value">—</span></span></li>';
      ratesList.innerHTML = row.repeat(RATES_LIST_SIZE);
      return;
    }
    pairs.slice(0, RATES_LIST_SIZE).forEach((pair) => {
      const { from, to } = pair;
      const range = rangesFor(pair, null).slice().sort((a, b) => a.min - b.min)[0];
      const unitIsTo = range.fromRate >= range.toRate;
      const value = unitIsTo ? range.fromRate / range.toRate : range.toRate / range.fromRate;
      const li = document.createElement("li");
      li.className = "rates__item";
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "rates__btn";
      btn.dataset.from = from;
      btn.dataset.to = to;
      btn.innerHTML =
        '<span class="rates__pair"><span class="rates__flags" aria-hidden="true">' +
        cur(from).flag + cur(to).flag + "</span>" + cur(from).code + " " + t("pairTo") + " " + cur(to).code + "</span>" +
        '<span class="rates__value">' + formatRate(value) +
        "<small>" + (unitIsTo ? cur(from).code : cur(to).code) + " " + t("per") + " 1 " +
        (unitIsTo ? cur(to).code : cur(from).code) + "</small></span>";
      btn.addEventListener("click", () => {
        setPair(from, to);
        amountFromInput.focus({ preventScroll: true });
      });
      li.appendChild(btn);
      ratesList.appendChild(li);
    });
    syncRatesList();
  }

  function renderTicker() {
    if (!tickerTrack) return;
    if (ratesStatus !== "ready") {
      tickerTrack.innerHTML = "";
      return;
    }
    const html = pairs.map((pair) => {
      return '<span class="ticker__item">' +
        '<span aria-hidden="true">' + cur(pair.from).flag + cur(pair.to).flag + "</span>" +
        '<span class="ticker__pair">' + cur(pair.from).code + " → " + cur(pair.to).code + "</span>" +
        '<span class="ticker__value">' + rateText(pair.from, pair.to, rangesFor(pair, null).slice().sort((a, b) => a.min - b.min)[0]) + "</span></span>";
    }).join("").repeat(2);
    tickerTrack.innerHTML = html + '<span class="ticker__copy" aria-hidden="true">' + html + "</span>";
  }

  function syncRatesList() {
    countryButtons.forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.to === state.to));
    });
    const countryIndex = Array.from(countryButtons).findIndex((btn) => btn.dataset.to === state.to);
    countrySwitch.dataset.active = countryIndex === -1 ? "none" : String(countryIndex);
    ratesList.querySelectorAll(".rates__btn[data-from]").forEach((btn) => {
      const active = btn.dataset.from === state.from && btn.dataset.to === state.to;
      btn.setAttribute("aria-pressed", String(active));
    });
  }

  function closeAllLists() {
    currencyFromList.hidden = true;
    currencyToList.hidden = true;
    currencyFromBtn.setAttribute("aria-expanded", "false");
    currencyToBtn.setAttribute("aria-expanded", "false");
  }

  function toggleList(listEl, btn) {
    const willOpen = listEl.hidden;
    closeAllLists();
    listEl.hidden = !willOpen;
    btn.setAttribute("aria-expanded", String(willOpen));
  }

  function setResult(result) {
    const decimals = cur(state.to).decimals;
    const from = lastResult;
    const canRoll = rollNext && !reduceMotionQuery.matches;
    rollNext = false;

    cancelAnimationFrame(rollFrame);
    lastResult = result;

    if (!canRoll) {
      amountToInput.value = formatNumber(result, decimals);
      return;
    }

    const startTime = performance.now();
    const step = (now) => {
      const t = Math.min((now - startTime) / ROLL_MS, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      amountToInput.value = formatNumber(from + (result - from) * eased, decimals);
      if (t < 1) rollFrame = requestAnimationFrame(step);
    };
    rollFrame = requestAnimationFrame(step);
  }

  // No number to show: loading, API unavailable, or the amount is outside the limits
  function clearResult(text, isWarning) {
    cancelAnimationFrame(rollFrame);
    rollNext = false;
    lastResult = 0;
    amountToInput.value = text;
    rateLine.classList.toggle("is-warning", Boolean(isWarning));
  }

  function recalc() {
    const params = new URLSearchParams({
      start: cur(state.from).code + "_" + cur(state.to).code + "_" + Math.round(state.amountFrom),
    });
    submitBtn.href = BOT_URL + "?" + params.toString();
    swapBtn.disabled = ratesStatus === "ready" && !findPair(state.to, state.from);

    const loading = ratesStatus === "loading";
    resultRow.classList.toggle("is-loading", loading);
    calculatorEl.setAttribute("aria-busy", String(loading));

    if (ratesStatus !== "ready") {
      clearResult(loading ? "" : "—", !loading);
      // The exchange arrows from the logo turn while the rates load
      rateLine.innerHTML = loading
        ? '<span class="rate-loader"><svg class="rate-loader__mark" viewBox="0 0 648 618" aria-hidden="true" focusable="false"><use href="#logo-mark"/></svg>' + t("rateLoading") + "</span>"
        : t("rateError");
      syncRatesList();
      return;
    }

    // Instant estimate from the rates, then the server's own calculation replaces it
    const q = quote(state.amountFrom, state.from, state.to, state.method);
    if (q.status === "below") showMinimum(pairMin(q.pair, state.method));
    else {
      setResult(q.value);
      showRates(state.from, state.to, q.range);
    }
    syncRatesList();
    scheduleServerQuote();
  }

  function showMinimum(min) {
    clearResult("—", true);
    rateLine.textContent = t("rateMin") + " " + formatNumber(min, 0) + " " + cur(state.from).code;
  }

  /* POST /api/exchange/calculate: the same calculation as the bot (rounding included).
     Debounced while typing; an older answer never overwrites a newer one. If the server
     does not answer, the estimate from the rates stays. */
  const CALC_URL = "https://ex-88.pro/api/exchange/calculate";
  let calcTimer = 0;
  let calcController = null;

  function scheduleServerQuote() {
    clearTimeout(calcTimer);
    if (calcController) calcController.abort();
    if (!(state.amountFrom > 0)) return;
    calcTimer = setTimeout(serverQuote, 300);
  }

  async function serverQuote() {
    const asked = { from: state.from, to: state.to, amount: state.amountFrom, method: state.method };
    calcController = new AbortController();
    try {
      const res = await fetch(CALC_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          fromCurrency: asked.from,
          toCurrency: asked.to,
          amount: asked.amount,
          amountCurrency: asked.from,
          receiveMethodId: asked.method || undefined,
        }),
        signal: calcController.signal,
      });
      const data = await res.json();
      const stillCurrent = asked.from === state.from && asked.to === state.to &&
        asked.amount === state.amountFrom && asked.method === state.method;
      if (!stillCurrent) return;
      if (res.ok && typeof data.toAmount === "number") {
        rateLine.classList.remove("is-warning");
        if (Math.abs(data.toAmount - lastResult) > 0.004) setResult(data.toAmount);
        const fromRate = parseFloat(data.rateFromAmount);
        const toRate = parseFloat(data.rateToAmount);
        if (fromRate > 0 && toRate > 0) showRates(asked.from, asked.to, { fromRate, toRate });
      } else if (res.status === 400 && /minimum/i.test(data.message || "")) {
        const fromMessage = parseFloat((data.message.match(/[\d.]+/) || [])[0]);
        const pair = findPair(asked.from, asked.to);
        showMinimum(fromMessage > 0 ? fromMessage : pairMin(pair, asked.method));
      }
    } catch (e) {
      // Aborted by a newer request, or the network failed: keep the estimate
    }
  }

  function renderAll() {
    renderCurrencyButton(currencyFromBtn, state.from);
    renderCurrencyButton(currencyToBtn, state.to);
    renderCurrencyList(currencyFromList, ratesStatus === "ready" ? sources() : [state.from], state.from, selectFrom);
    renderCurrencyList(currencyToList, ratesStatus === "ready" ? targets(state.from) : [state.to], state.to, selectTo);
    if (document.activeElement !== amountFromInput) {
      amountFromInput.value = formatNumber(state.amountFrom, cur(state.from).decimals);
    }
    renderReceiveMethods();
    recalc();
  }

  // How the money is received: a choice when the pair has several ways, a note when one
  function renderReceiveMethods() {
    const pair = ratesStatus === "ready" && findPair(state.from, state.to);
    const methods = pair ? pair.methods : [];
    receiveMethodBox.hidden = !methods.length;
    receiveMethodBox.classList.toggle("is-single", methods.length === 1);
    receiveMethodOptions.innerHTML = methods.map((m) => {
      const label = '<span class="receive-method__title">' + m.title[lang] + "</span>" +
        (m.time[lang] ? '<span class="receive-method__time">' + m.time[lang] + "</span>" : "");
      if (methods.length === 1) return '<span class="receive-method__opt">' + label + "</span>";
      return '<label class="receive-method__opt">' +
        '<input type="radio" name="receive-method" value="' + m.id + '"' + (m.id === state.method ? " checked" : "") + ">" +
        label + "</label>";
    }).join("");
  }

  receiveMethodOptions.addEventListener("change", (e) => {
    if (e.target.name !== "receive-method") return;
    state.method = e.target.value;
    rollNext = true;
    recalc();
    flashResult();
  });

  // A starting amount for a currency that is valid for the pair
  function defaultAmount(from, to) {
    const pair = findPair(from, to);
    return Math.max(cur(from).defaultAmount, pair ? pairMin(pair, null) : 0);
  }

  // Keep the chosen receive method if the new pair offers it, otherwise take the first one
  function syncMethod() {
    const pair = findPair(state.from, state.to);
    const methods = pair ? pair.methods : [];
    if (!methods.some((m) => m.id === state.method)) state.method = methods.length ? methods[0].id : null;
  }

  function setPair(from, to, amount) {
    if (ratesStatus === "ready" && !findPair(from, to)) {
      // Keep the requested side and pick the first currency it can be exchanged with
      if (targets(from).length) to = targets(from)[0];
      else from = pairs.find((p) => p.to === to)?.from || pairs[0].from;
    }
    if (amount === undefined && from !== state.from) amount = defaultAmount(from, to);
    if (amount !== undefined) state.amountFrom = amount;
    state.from = from;
    state.to = to;
    if (ratesStatus === "ready") syncMethod();
    rollNext = true;
    renderAll();
    flashResult();
  }

  function selectFrom(code) {
    closeAllLists();
    setPair(code, state.to);
  }

  function selectTo(code) {
    closeAllLists();
    setPair(state.from, code);
  }

  async function loadRates() {
    try {
      const res = await fetch(RATES_URL, { headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error("HTTP " + res.status);
      const parsed = parseRates(await res.json());
      if (!parsed.length) throw new Error("No rates");
      const first = ratesStatus !== "ready";
      pairs = parsed;
      ratesStatus = "ready";
      if (!findPair(state.from, state.to)) setPair(state.from, state.to);
      syncMethod();
      if (first) rollNext = true;
      renderRatesList();
      renderTicker();
      renderAll();
      setTimeout(loadRates, RATES_REFRESH_MS);
    } catch (e) {
      // Keep showing the last rates if a refresh fails; otherwise say so and retry
      if (ratesStatus !== "ready") {
        ratesStatus = "error";
        renderAll();
      }
      setTimeout(loadRates, ratesStatus === "ready" ? RATES_REFRESH_MS : RATES_RETRY_MS);
    }
  }

  amountFromInput.addEventListener("focus", () => {
    const plain = state.amountFrom ? String(state.amountFrom) : "";
    amountFromInput.value = lang === "en" ? plain : plain.replace(".", ",");
  });

  amountFromInput.addEventListener("input", () => {
    // English: "," groups thousands, "." is the decimal mark. Russian: both are decimal marks.
    const decimalMark = lang === "en" ? "." : ",";
    const clean = lang === "en" ? /[^\d.]/g : /[^\d.,]/g;
    let raw = amountFromInput.value.replace(clean, "");
    if (lang !== "en") raw = raw.replace(/\./g, ",");
    const parts = raw.split(decimalMark);
    if (parts.length > 2) raw = parts[0] + decimalMark + parts.slice(1).join("");
    if (raw !== amountFromInput.value) amountFromInput.value = raw;
    state.amountFrom = raw === "" ? 0 : parseFloat(raw.replace(",", ".")) || 0;
    recalc();
  });

  amountFromInput.addEventListener("blur", () => {
    amountFromInput.value = formatNumber(state.amountFrom, cur(state.from).decimals);
  });

  currencyFromBtn.addEventListener("click", () => toggleList(currencyFromList, currencyFromBtn));
  currencyToBtn.addEventListener("click", () => toggleList(currencyToList, currencyToBtn));

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".currency-select, .currency-list")) closeAllLists();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllLists();
      setNavOpen(false);
    }
  });

  swapBtn.addEventListener("click", () => {
    if (ratesStatus !== "ready" || !findPair(state.to, state.from)) return;
    const q = quote(state.amountFrom, state.from, state.to, state.method);
    const factor = Math.pow(10, cur(state.to).decimals);
    const received = q.status === "ok" ? Math.round(q.value * factor) / factor : undefined;
    setPair(state.to, state.from, received === undefined ? defaultAmount(state.to, state.from) : received);
  });

  if (tickerToggle) tickerToggle.addEventListener("click", () => {
    const paused = tickerEl.classList.toggle("is-paused");
    tickerToggle.setAttribute("aria-pressed", String(paused));
    tickerToggle.setAttribute(
      "aria-label",
      t(paused ? "tickerResume" : "tickerPause")
    );
  });

  countryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const to = btn.dataset.to;
      const from = findPair(state.from, to) ? state.from : findPair("RUB", to) ? "RUB" : state.from;
      setPair(from === to ? "RUB" : from, to);
      setNavOpen(false);
    });
  });

  loadRates();

  /* Reviews slider: native horizontal scroll with snap, so touch swipe works as is */
  const reviewsTrack = document.getElementById("reviews-track");
  const reviewsPrev = document.getElementById("reviews-prev");
  const reviewsNext = document.getElementById("reviews-next");
  const STAR = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l2.94 5.96 6.56.95-4.75 4.63 1.12 6.54L12 17.5l-5.87 3.08 1.12-6.54L2.5 9.41l6.56-.95z" fill="currentColor"/></svg>';

  function initials(name) {
    return name.split(/\s+/).filter((w) => /^\p{Lu}/u.test(w)).slice(0, 2).map((w) => w[0]).join("");
  }

  // Endless loop: a few cloned cards on each side (as many as the widest view shows);
  // once a scroll settles on a clone, the track jumps to the identical real card.
  const REVIEWS_CLONES = 3;
  const REVIEWS_INTERVAL = 5000; // ms between slides; the longest review needs about 5 s to read
  const reviewsAuto = document.getElementById("reviews-auto");
  let reviewsIndex = REVIEWS_CLONES;

  function reviewHtml(r, isClone) {
    const name = r.name[lang];
    return '<li class="review"' + (isClone ? ' aria-hidden="true"' : "") + ">" +
      '<div class="review__bubble">' +
      '<div class="review__head">' +
      '<p class="review__from"><span class="review__name">' + name + "</span>" +
      '<span class="review__city">' + r.city[lang] + "</span></p>" +
      '<span class="review__avatar" aria-hidden="true">' + initials(name) + "</span>" +
      "</div>" +
      '<p class="review__stars" role="img" aria-label="' + t("reviewsRating") + '">' + STAR.repeat(5) + "</p>" +
      '<blockquote class="review__text">' + r.text[lang] + "</blockquote>" +
      "</div></li>";
  }

  function renderReviews() {
    reviewsTrack.innerHTML =
      REVIEWS.slice(-REVIEWS_CLONES).map((r) => reviewHtml(r, true)).join("") +
      REVIEWS.map((r) => reviewHtml(r, false)).join("") +
      REVIEWS.slice(0, REVIEWS_CLONES).map((r) => reviewHtml(r, true)).join("");
    reviewsIndex = REVIEWS_CLONES;
    reviewsTrack.scrollLeft = reviewsIndex * reviewStep();
  }

  function reviewStep() {
    const cards = reviewsTrack.children;
    if (cards.length < 2) return reviewsTrack.clientWidth;
    return cards[1].offsetLeft - cards[0].offsetLeft;
  }

  function scrollReviewsBy(delta) {
    reviewsTrack.scrollTo({
      left: (Math.round(reviewsTrack.scrollLeft / reviewStep()) + delta) * reviewStep(),
      behavior: reduceMotionQuery.matches ? "auto" : "smooth",
    });
  }

  // Runs once a scroll has fully stopped, so it never cuts a smooth scroll short
  function settleReviews() {
    const step = reviewStep();
    const index = Math.round(reviewsTrack.scrollLeft / step);
    if (index < REVIEWS_CLONES) reviewsTrack.scrollLeft += REVIEWS.length * step;
    else if (index >= REVIEWS_CLONES + REVIEWS.length) reviewsTrack.scrollLeft -= REVIEWS.length * step;
    reviewsIndex = Math.round(reviewsTrack.scrollLeft / step);
  }

  if ("onscrollend" in window) {
    reviewsTrack.addEventListener("scrollend", settleReviews);
  } else {
    let reviewsSettle = 0;
    reviewsTrack.addEventListener("scroll", () => {
      clearTimeout(reviewsSettle);
      reviewsSettle = setTimeout(settleReviews, 200);
    }, { passive: true });
  }

  /* Autoplay every REVIEWS_INTERVAL (5 s). Stops while hovered, focused from the keyboard, touched, off-screen
     or in a hidden tab; the pause button stops it for good (WCAG 2.2.2). Off by default
     with reduced motion. */
  const reviewsHolds = new Set(["offscreen"]);
  let reviewsUserPaused = reduceMotionQuery.matches;
  let reviewsTimer = 0;

  function scheduleReviews() {
    clearTimeout(reviewsTimer);
    if (reviewsUserPaused || reviewsHolds.size || document.hidden) return;
    reviewsTimer = setTimeout(() => {
      scrollReviewsBy(1);
      scheduleReviews();
    }, REVIEWS_INTERVAL);
  }

  function holdReviews(reason, on) {
    if (on) reviewsHolds.add(reason);
    else reviewsHolds.delete(reason);
    scheduleReviews();
  }

  function updateReviewsAuto() {
    reviewsAuto.classList.toggle("is-paused", reviewsUserPaused);
    reviewsAuto.setAttribute("aria-label", t(reviewsUserPaused ? "reviewsPlay" : "reviewsPause"));
  }

  const reviewsRoot = reviewsTrack.closest(".container");
  reviewsRoot.addEventListener("pointerenter", (e) => {
    if (e.pointerType === "mouse") holdReviews("hover", true);
  });
  reviewsRoot.addEventListener("pointerleave", () => holdReviews("hover", false));
  reviewsRoot.addEventListener("focusin", (e) => {
    if (e.target.matches(":focus-visible")) holdReviews("focus", true);
  });
  reviewsRoot.addEventListener("focusout", (e) => {
    if (!reviewsRoot.contains(e.relatedTarget)) holdReviews("focus", false);
  });
  reviewsTrack.addEventListener("touchstart", () => holdReviews("touch", true), { passive: true });
  reviewsTrack.addEventListener("touchend", () => holdReviews("touch", false));
  reviewsTrack.addEventListener("touchcancel", () => holdReviews("touch", false));

  if ("IntersectionObserver" in window) {
    new IntersectionObserver((entries) => holdReviews("offscreen", !entries[0].isIntersecting)).observe(reviewsTrack);
  } else {
    holdReviews("offscreen", false);
  }
  document.addEventListener("visibilitychange", scheduleReviews);
  reduceMotionQuery.addEventListener("change", () => {
    reviewsUserPaused = reduceMotionQuery.matches;
    updateReviewsAuto();
    scheduleReviews();
  });

  reviewsAuto.addEventListener("click", () => {
    reviewsUserPaused = !reviewsUserPaused;
    updateReviewsAuto();
    scheduleReviews();
  });
  reviewsPrev.addEventListener("click", () => {
    scrollReviewsBy(-1);
    scheduleReviews();
  });
  reviewsNext.addEventListener("click", () => {
    scrollReviewsBy(1);
    scheduleReviews();
  });

  let reviewsResize = 0;
  window.addEventListener("resize", () => {
    clearTimeout(reviewsResize);
    reviewsResize = setTimeout(() => {
      reviewsTrack.scrollLeft = reviewsIndex * reviewStep();
    }, 150);
  });

  // Home page parts of a language switch; the shared parts run in applyCommon
  applyPage = () => {
    document.title = t("title");
    document.querySelector('meta[name="description"]').setAttribute("content", t("description"));
    if (tickerToggle) tickerToggle.setAttribute("aria-label", t(tickerEl.classList.contains("is-paused") ? "tickerResume" : "tickerPause"));

    renderOffices();
    officeCopyLabel.textContent = t(officeCopyTimer ? "officeCopied" : "officeCopy");

    renderTicker();
    renderRatesList();
    renderAll();
    renderReviews();
    updateReviewsAuto();
    resetFaqChat();
  };

  applyCommon();
  applyPage();
})();
