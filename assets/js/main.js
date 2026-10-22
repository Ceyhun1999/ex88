(function () {
  "use strict";

  const BOT_USERNAME = "REPLACE_WITH_BOT_USERNAME";
  const BOT_URL = "https://t.me/" + BOT_USERNAME;

  /* Languages */
  const I18N = {
    ru: {
      title: "88 — обмен рублей на баты и донги",
      description: "Посчитайте обмен рублей, евро, долларов, тайских батов и вьетнамских донгов и продолжите в Telegram с менеджером.",
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
      submit: "Продолжить в Telegram",
      calcHint: "Откроется чат с менеджером, сумма и\u00a0валюты подставятся сами",
      pairTo: "в",
      per: "за",
      RUB: "Российский рубль",
      EUR: "Евро",
      USD: "Доллар США",
      THB: "Тайский бат",
      VND: "Вьетнамский донг",
      acceptTitle: "Мы принимаем рубли и\u00a0другие виды валют",
      bankT: "Т-Банк",
      bankSber: "Сбербанк",
      bankRaif: "Райффайзен",
      bankAlfa: "Альфа-Банк",
      usd: "Доллары США",
      reviewsTitle: "Отзывы клиентов",
      reviewsPrev: "Предыдущие отзывы",
      reviewsNext: "Следующие отзывы",
      reviewsDot: "Перейти к отзыву",
    },
    en: {
      title: "88 — exchange rubles for baht and dong",
      description: "Calculate an exchange of rubles, euros, dollars, Thai baht and Vietnamese dong, then continue in Telegram with a manager.",
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
      menuOpen: "Open menu",
      menuClose: "Close menu",
      tickerPause: "Pause the ticker",
      tickerResume: "Resume the ticker",
      heroTitle: "Swap rubles for\u00a0baht and\u00a0dong, skip the\u00a0bank",
      heroLead: "Calculate the amount here, and\u00a0a\u00a0manager in Telegram will confirm the rate and explain how to receive your money.",
      ratesTitle: "Today\u2019s rates",
      ratesNote: "Click a rate to use it in the\u00a0calculation",
      calcTitle: "Exchange calculator",
      youSend: "You send",
      youReceive: "You receive",
      currencyFromLabel: "Currency you send",
      currencyToLabel: "Currency you receive",
      swapLabel: "Swap currencies",
      submit: "Continue in Telegram",
      calcHint: "A chat with a manager will open, with the amount and currencies filled in",
      pairTo: "to",
      per: "per",
      RUB: "Russian ruble",
      EUR: "Euro",
      USD: "US dollar",
      THB: "Thai baht",
      VND: "Vietnamese dong",
      acceptTitle: "We accept rubles and\u00a0other currencies",
      bankT: "T-Bank",
      bankSber: "Sberbank",
      bankRaif: "Raiffeisen",
      bankAlfa: "Alfa-Bank",
      usd: "US dollars",
      reviewsTitle: "Client reviews",
      reviewsPrev: "Previous reviews",
      reviewsNext: "Next reviews",
      reviewsDot: "Go to review",
    },
  };

  // DEMO CONTENT: placeholder reviews for the layout. Replace with real client
  // reviews (with their permission) before the site goes live.
  const REVIEWS = [
    {
      deal: { from: "RUB", to: "THB", amount: 120000 },
      name: { ru: "Анна К.", en: "Anna K." },
      city: { ru: "Пхукет", en: "Phuket" },
      text: {
        ru: "Меняла рубли на баты перед арендой виллы. Курс согласовали в чате за пару минут, наличные забрала в тот же день.",
        en: "I exchanged rubles for baht before renting a villa. We agreed on the rate in the chat within minutes and I picked up the cash the same day.",
      },
    },
    {
      deal: { from: "RUB", to: "VND", amount: 40000 },
      name: { ru: "Дмитрий", en: "Dmitry" },
      city: { ru: "Нячанг", en: "Nha Trang" },
      text: {
        ru: "Нужно было срочно получить донги. Написал в Telegram вечером, утром деньги уже были у меня. Менеджер на связи всё время.",
        en: "I needed dong urgently. I messaged on Telegram in the evening and had the money by morning. The manager was in touch the whole time.",
      },
    },
    {
      deal: { from: "USD", to: "THB", amount: 1500 },
      name: { ru: "Мария и Олег", en: "Maria and Oleg" },
      city: { ru: "Паттайя", en: "Pattaya" },
      text: {
        ru: "Удобно, что калькулятор на сайте сразу показывает сумму. В чате подсказали, где проще забрать деньги рядом с отелем.",
        en: "Handy that the calculator shows the amount right away. In the chat they told us the easiest place to collect the money near our hotel.",
      },
    },
    {
      deal: { from: "USD", to: "THB", amount: 12000 },
      name: { ru: "Сергей", en: "Sergey" },
      city: { ru: "Бангкок", en: "Bangkok" },
      text: {
        ru: "Менял доллары на баты, сумма была крупная. Всё прошло спокойно, каждый шаг объяснили заранее.",
        en: "I exchanged a large amount of dollars for baht. Everything went smoothly and every step was explained in advance.",
      },
    },
    {
      deal: { from: "RUB", to: "THB", amount: 60000 },
      name: { ru: "Екатерина", en: "Ekaterina" },
      city: { ru: "Самуи", en: "Koh Samui" },
      text: {
        ru: "Обращаюсь уже третий раз. Пишу сумму в Telegram, подтверждаю курс и получаю баты. Без очередей и походов в банк.",
        en: "This is my third time. I send the amount on Telegram, confirm the rate and get my baht. No queues and no trips to the bank.",
      },
    },
    {
      deal: { from: "RUB", to: "VND", amount: 80000 },
      name: { ru: "Алексей", en: "Alexey" },
      city: { ru: "Дананг", en: "Da Nang" },
      text: {
        ru: "Первый раз менял деньги во Вьетнаме, переживал. Менеджер объяснил всё по шагам, получил донги на месте.",
        en: "It was my first exchange in Vietnam and I was nervous. The manager walked me through every step and I got my dong on the spot.",
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

  const siteHeader = document.getElementById("site-header");
  function updateHeaderShadow() {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 4);
  }
  window.addEventListener("scroll", updateHeaderShadow, { passive: true });
  updateHeaderShadow();

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
      }).observe(svg.closest(".hero__panel") || svg);
    }
    document.addEventListener("visibilitychange", update);
    reduceMotion.addEventListener("change", () => {
      if (reduceMotion.matches) drawAll(0);
      update();
    });
    update();
  }

  const guilloche = document.getElementById("guilloche");
  if (guilloche) setupGuilloche(guilloche);

  /* Calculator */
  const CURRENCIES = {
    RUB: { flag: "🇷🇺", perUsd: 80, decimals: 0, defaultAmount: 50000 },
    EUR: { flag: "🇪🇺", perUsd: 0.92, decimals: 2, defaultAmount: 500 },
    USD: { flag: "🇺🇸", perUsd: 1, decimals: 2, defaultAmount: 500 },
    THB: { flag: "🇹🇭", perUsd: 32, decimals: 2, defaultAmount: 20000 },
    VND: { flag: "🇻🇳", perUsd: 25400, decimals: 0, defaultAmount: 10000000 },
  };

  const RATE_PAIRS = [
    ["RUB", "THB"],
    ["RUB", "VND"],
    ["USD", "THB"],
    ["EUR", "THB"],
    ["USD", "VND"],
  ];

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
  const ratesList = document.getElementById("rates-list");
  const tickerTrack = document.getElementById("ticker-track");
  const countrySwitch = document.querySelector('[data-switch="country"]');
  const countryButtons = countrySwitch.querySelectorAll(".country-switch__btn");
  const langSwitch = document.querySelector('[data-switch="language"]');
  const langButtons = langSwitch.querySelectorAll(".country-switch__btn");
  const tickerEl = document.querySelector(".ticker");
  const tickerToggle = document.getElementById("ticker-toggle");
  const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  const ROLL_MS = 800;
  let lastResult = 0;
  let rollNext = false;
  let rollFrame = 0;

  const state = { from: "RUB", to: "THB", amountFrom: 50000 };

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

  function convert(amount, from, to) {
    return (amount / CURRENCIES[from].perUsd) * CURRENCIES[to].perUsd;
  }

  function flashResult() {
    resultRow.classList.remove("is-updated");
    void resultRow.offsetWidth;
    resultRow.classList.add("is-updated");
  }

  function renderCurrencyButton(btn, code) {
    btn.querySelector(".currency-select__flag").textContent = CURRENCIES[code].flag;
    btn.querySelector(".currency-select__code").textContent = code;
  }

  function renderCurrencyList(listEl, selected, onSelect) {
    listEl.innerHTML = "";
    Object.keys(CURRENCIES).forEach((code) => {
      const c = CURRENCIES[code];
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("role", "option");
      btn.setAttribute("aria-selected", String(code === selected));
      btn.innerHTML =
        '<span class="currency-list__flag">' + c.flag + "</span>" +
        '<span class="currency-list__code">' + code + "</span>" +
        '<span class="currency-list__name">' + t(code) + "</span>";
      btn.addEventListener("click", () => onSelect(code));
      li.appendChild(btn);
      listEl.appendChild(li);
    });
  }

  function renderRatesList() {
    ratesList.innerHTML = "";
    RATE_PAIRS.forEach(([from, to]) => {
      const rate = convert(1, from, to);
      const li = document.createElement("li");
      li.className = "rates__item";
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "rates__btn";
      btn.dataset.from = from;
      btn.dataset.to = to;
      btn.innerHTML =
        '<span class="rates__pair"><span class="rates__flags" aria-hidden="true">' +
        CURRENCIES[from].flag + CURRENCIES[to].flag + "</span>" + from + " " + t("pairTo") + " " + to + "</span>" +
        '<span class="rates__value">' + formatRate(rate) +
        "<small>" + to + " " + t("per") + " 1 " + from + "</small></span>";
      btn.addEventListener("click", () => {
        setPair(from, to);
        amountFromInput.focus({ preventScroll: true });
      });
      li.appendChild(btn);
      ratesList.appendChild(li);
    });
  }

  function renderTicker() {
    const pairs = [
      ["RUB", "THB"], ["RUB", "VND"], ["USD", "THB"], ["EUR", "THB"],
      ["USD", "VND"], ["EUR", "VND"], ["USD", "RUB"], ["EUR", "RUB"],
    ];
    const html = pairs.map(([from, to]) => {
      const rate = convert(1, from, to);
      return '<span class="ticker__item">' +
        '<span aria-hidden="true">' + CURRENCIES[from].flag + CURRENCIES[to].flag + "</span>" +
        '<span class="ticker__pair">' + from + "/" + to + "</span>" +
        '<span class="ticker__value">' + formatRate(rate) + "</span></span>";
    }).join("").repeat(2);
    tickerTrack.innerHTML = html + '<span class="ticker__copy" aria-hidden="true">' + html + "</span>";
  }

  function syncRatesList() {
    countryButtons.forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.to === state.to));
    });
    const countryIndex = Array.from(countryButtons).findIndex((btn) => btn.dataset.to === state.to);
    countrySwitch.dataset.active = countryIndex === -1 ? "none" : String(countryIndex);
    ratesList.querySelectorAll(".rates__btn").forEach((btn) => {
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
    const decimals = CURRENCIES[state.to].decimals;
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

  function recalc() {
    setResult(convert(state.amountFrom, state.from, state.to));

    const rate = convert(1, state.from, state.to);
    rateLine.textContent = rate < 0.01
      ? "1 " + state.to + " = " + formatRate(1 / rate) + " " + state.from
      : "1 " + state.from + " = " + formatRate(rate) + " " + state.to;

    const params = new URLSearchParams({
      start: state.from + "_" + state.to + "_" + Math.round(state.amountFrom),
    });
    submitBtn.href = BOT_URL + "?" + params.toString();
    syncRatesList();
  }

  function renderAll() {
    renderCurrencyButton(currencyFromBtn, state.from);
    renderCurrencyButton(currencyToBtn, state.to);
    renderCurrencyList(currencyFromList, state.from, selectFrom);
    renderCurrencyList(currencyToList, state.to, selectTo);
    if (document.activeElement !== amountFromInput) {
      amountFromInput.value = formatNumber(state.amountFrom, CURRENCIES[state.from].decimals);
    }
    recalc();
  }

  function setPair(from, to, amount) {
    if (amount === undefined && from !== state.from) {
      amount = CURRENCIES[from].defaultAmount;
    }
    if (amount !== undefined) state.amountFrom = amount;
    state.from = from;
    state.to = to;
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
    amountFromInput.value = formatNumber(state.amountFrom, CURRENCIES[state.from].decimals);
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
    const factor = Math.pow(10, CURRENCIES[state.to].decimals);
    const received = Math.round(convert(state.amountFrom, state.from, state.to) * factor) / factor;
    setPair(state.to, state.from, received);
  });

  tickerToggle.addEventListener("click", () => {
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
      setPair(state.from === to ? "RUB" : state.from, to);
      setNavOpen(false);
    });
  });

  /* Reviews slider: native horizontal scroll with snap, so touch swipe works as is */
  const reviewsTrack = document.getElementById("reviews-track");
  const reviewsPrev = document.getElementById("reviews-prev");
  const reviewsNext = document.getElementById("reviews-next");
  const reviewsDots = document.getElementById("reviews-dots");
  const DEAL_ARROW = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h15m-5-5 5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function initials(name) {
    return name.split(/\s+/).filter((w) => /^\p{Lu}/u.test(w)).slice(0, 2).map((w) => w[0]).join("");
  }

  function renderReviews() {
    reviewsTrack.innerHTML = REVIEWS.map((r) => {
      const name = r.name[lang];
      const d = r.deal;
      const received = Math.round(convert(d.amount, d.from, d.to));
      return '<li class="review">' +
        '<div class="review__bubble">' +
        '<div class="review__head">' +
        '<p class="review__from"><span class="review__name">' + name + "</span>" +
        '<span class="review__city">' + r.city[lang] + "</span></p>" +
        '<span class="review__avatar" aria-hidden="true">' + initials(name) + "</span>" +
        "</div>" +
        '<blockquote class="review__text">' + r.text[lang] + "</blockquote>" +
        '<p class="review__deal" translate="no">' +
        '<span class="review__sum">' + formatNumber(d.amount, 0) + " <small>" + d.from + "</small></span>" +
        DEAL_ARROW + '<span class="visually-hidden">' + t("pairTo") + "</span>" +
        '<span class="review__sum">' + formatNumber(received, 0) + " <small>" + d.to + "</small></span>" +
        "</p></div></li>";
    }).join("");
    buildReviewDots();
  }

  function reviewStep() {
    const cards = reviewsTrack.children;
    if (cards.length < 2) return reviewsTrack.clientWidth;
    return cards[1].offsetLeft - cards[0].offsetLeft;
  }

  function reviewPages() {
    const visible = Math.max(1, Math.round(reviewsTrack.clientWidth / reviewStep()));
    return Math.max(1, REVIEWS.length - visible + 1);
  }

  function buildReviewDots() {
    const pages = reviewPages();
    reviewsDots.innerHTML = "";
    for (let i = 0; i < pages; i++) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "reviews__dot";
      dot.setAttribute("aria-label", t("reviewsDot") + " " + (i + 1));
      dot.addEventListener("click", () => scrollReviewsTo(i));
      reviewsDots.appendChild(dot);
    }
    reviewsDots.hidden = pages < 2;
    syncReviews();
  }

  function scrollReviewsTo(index) {
    reviewsTrack.scrollTo({
      left: index * reviewStep(),
      behavior: reduceMotionQuery.matches ? "auto" : "smooth",
    });
  }

  function syncReviews() {
    const max = reviewsTrack.scrollWidth - reviewsTrack.clientWidth;
    const index = Math.round(reviewsTrack.scrollLeft / reviewStep());
    // aria-disabled instead of disabled keeps a focused arrow focusable at the ends
    reviewsPrev.setAttribute("aria-disabled", String(reviewsTrack.scrollLeft <= 2));
    reviewsNext.setAttribute("aria-disabled", String(reviewsTrack.scrollLeft >= max - 2));
    Array.from(reviewsDots.children).forEach((dot, i) => {
      dot.setAttribute("aria-current", String(i === index));
    });
  }

  let reviewsTick = 0;
  reviewsTrack.addEventListener("scroll", () => {
    cancelAnimationFrame(reviewsTick);
    reviewsTick = requestAnimationFrame(syncReviews);
  }, { passive: true });

  reviewsPrev.addEventListener("click", () => {
    if (reviewsPrev.getAttribute("aria-disabled") === "true") return;
    scrollReviewsTo(Math.max(0, Math.round(reviewsTrack.scrollLeft / reviewStep()) - 1));
  });
  reviewsNext.addEventListener("click", () => {
    if (reviewsNext.getAttribute("aria-disabled") === "true") return;
    scrollReviewsTo(Math.min(reviewPages() - 1, Math.round(reviewsTrack.scrollLeft / reviewStep()) + 1));
  });

  let reviewsResize = 0;
  window.addEventListener("resize", () => {
    clearTimeout(reviewsResize);
    reviewsResize = setTimeout(() => {
      if (reviewsDots.children.length !== reviewPages()) buildReviewDots();
      else syncReviews();
    }, 150);
  });

  function applyLanguage() {
    document.documentElement.lang = lang;
    document.title = t("title");
    document.querySelector('meta[name="description"]').setAttribute("content", t("description"));

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      el.setAttribute("aria-label", t(el.dataset.i18nAria));
    });

    burger.setAttribute("aria-label", t(burger.getAttribute("aria-expanded") === "true" ? "menuClose" : "menuOpen"));
    tickerToggle.setAttribute("aria-label", t(tickerEl.classList.contains("is-paused") ? "tickerResume" : "tickerPause"));

    langButtons.forEach((btn) => btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang)));
    langSwitch.dataset.active = String(Array.from(langButtons).findIndex((btn) => btn.dataset.lang === lang));

    renderTicker();
    renderRatesList();
    renderAll();
    renderReviews();
  }

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.dataset.lang === lang) return;
      lang = btn.dataset.lang;
      try {
        localStorage.setItem("ex88-lang", lang);
      } catch (e) {}
      applyLanguage();
    });
  });

  applyLanguage();
})();
