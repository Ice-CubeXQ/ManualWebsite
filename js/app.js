(() => {
  "use strict";
  let e = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        e.Android() || e.BlackBerry() || e.iOS() || e.Opera() || e.Windows()
      );
    },
  };
  let t = !0,
    n = (e = 500) => {
      let n = document.querySelector("body");
      if (t) {
        let a = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < a.length; e++) {
            a[e].style.paddingRight = "0px";
          }
          (n.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, e),
          (t = !1),
          setTimeout(function () {
            t = !0;
          }, e);
      }
    },
    a = (e = 500) => {
      let n = document.querySelector("body");
      if (t) {
        let a = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < a.length; e++) {
          a[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (n.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (t = !1),
          setTimeout(function () {
            t = !0;
          }, e);
      }
    };
  function i(e) {
    setTimeout(() => {
      window.FLS && console.log(e);
    }, 0);
  }
  let o = (e, t = !1, a = 500, o = 0) => {
    const r = document.querySelector(e);
    if (r) {
      let s = "",
        c = 0;
      t &&
        ((s = "header.header"), (c = document.querySelector(s).offsetHeight));
      let l = {
        speedAsDuration: !0,
        speed: a,
        header: s,
        offset: o,
        easing: "easeOutQuad",
      };
      if (
        (document.documentElement.classList.contains("menu-open") &&
          (n(), document.documentElement.classList.remove("menu-open")),
        "undefined" != typeof SmoothScroll)
      )
        new SmoothScroll().animateScroll(r, "", l);
      else {
        let e = r.getBoundingClientRect().top + scrollY;
        window.scrollTo({ top: c ? e - c : e, behavior: "smooth" });
      }
      i(`[gotoBlock]: Юхуу...едем к ${e}`);
    } else i(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
  };
  let r = !1;
  setTimeout(() => {
    if (r) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0);
  let s = "ru";
  const c = document.querySelectorAll("[data-lang-btn]"),
    l = window.location.pathname;
  let d = {};
  const u = {
      menu__link01: { ru: "Главная", eng: "Home" },
      menu__link02: { ru: "Контакты", eng: "Contact us" },
      "main-section__title": {
        ru: "Скриптовые языки программирования",
        eng: "Scripting languages",
      },
      "main-section__item01": { ru: "о нас", eng: "about us" },
      "main-section__item02": { ru: "новости", eng: "news" },
      "main-section__item03": { ru: "отчеты", eng: "reports" },
      "main-section__item04": { ru: "статьи", eng: "articles" },
      "main-section__button": { ru: "Узнать больше", eng: "Learn more" },
      "item-technology__link04": {
        ru: "БАЗА: HTML, CSS",
        eng: "BASE: HTML, CSS",
      },
      future__title: {
        ru: "технологии будущего",
        eng: "Technology Of The Future",
      },
      "item-future__title01": {
        ru: "Машинное обучение",
        eng: "Machine learning",
      },
      "item-future__title02": {
        ru: "Периферийные вычисления",
        eng: "Edge Computing",
      },
      "item-future__title03": {
        ru: "Искусственный интеллект",
        eng: "Artificial Intelligence",
      },
      "item-future__text01": {
        ru: "представляет собой раздел искусственного интеллекта, который обучает компьютерные системы извлекать закономерности из данных и делать прогнозы или принимать решения без явного программирования. Эта технология позволяет компьютерам учиться на опыте и совершенствовать свои навыки с течением времени. В основе машинного обучения лежат алгоритмы, способные обрабатывать большие объемы информации, что позволяет выявлять сложные зависимости в данных и решать разнообразные задачи, такие как распознавание образов, предсказание трендов и автоматизация принятия решений.",
        eng: "It is a branch of artificial intelligence that trains computer systems based on data patterns and makes predictions or decisions without explicit programming. This technology allows computers to gain experience and improve their skills over time. Machine learning-based elimination algorithms capable of processing large amounts of information that can identify complexities in the data and solve additional problems such as pattern recognition, trend prediction and decision automation.",
      },
      "item-future__text02": {
        ru: "Это концепция обработки данных ближе к месту их создания, а не в централизованных облачных центрах обработки данных. Вместо того чтобы отправлять все данные на удаленные серверы для обработки, вычисления выполняются ближе к источнику данных или даже непосредственно на устройстве, которое собирает информацию. Эта технология стала важной в контексте Интернета вещей (IoT), где множество устройств генерируют огромные объемы данных, и передача всех этих данных на центральный сервер может быть неэффективной и затратной.",
        eng: "This is the concept of processing data closer to where it is created, rather than in centralized cloud data centers. Instead of sending all the data to remote servers for processing, calculations are performed closer to the source of the data or even directly on the device that collects the information. This technology has become important in the context of the Internet of Things (IoT), where many devices generate huge amounts of data, and transferring all this data to a central server can be inefficient and costly.",
      },
      "item-future__text03": {
        ru: "(AI) — это область компьютерных наук, которая занимается созданием программ и систем, способных выполнять задачи, обычно требующие интеллектуальных способностей человека. Основная идея искусственного интеллекта заключается в том, чтобы разработать компьютерные системы, которые могут имитировать различные аспекты человеческого мышления, такие как обучение, распознавание образов, планирование, решение проблем, восприятие и языковая коммуникация.",
        eng: "(AI) is a branch of computer science that deals with the creation of programs and systems capable of performing tasks that typically require human intelligence. The basic idea of ​​artificial intelligence is to develop computer systems that can imitate various aspects of human thinking, such as learning, pattern recognition, planning, problem solving, perception and language communication.",
      },
      "item-learn__title01": { ru: "Шаг 1", eng: "Step 1" },
      "item-learn__title02": { ru: "Шаг 2", eng: "Step 2" },
      "item-learn__title03": { ru: "Шаг 3", eng: "Step 3" },
      "item-learn__title04": { ru: "Шаг 4", eng: "Step 4" },
      "item-learn__sub-title01": {
        ru: "Изучение HTML и CSS",
        eng: "Learning HTML and CSS",
      },
      "item-learn__sub-title02": {
        ru: "Изучение JavaScript",
        eng: "Learning JavaScript",
      },
      "item-learn__sub-title03": { ru: "Изучение PHP", eng: "Learning PHP" },
      "item-learn__sub-title04": {
        ru: "Изучение Python",
        eng: "Learning Puthon",
      },
      "item-learn__link01": { ru: "узнать больше", eng: "learn more" },
      "item-learn__link02": { ru: "узнать больше", eng: "learn more" },
      "item-learn__link03": { ru: "узнать больше", eng: "learn more" },
      "item-learn__link04": { ru: "узнать больше", eng: "learn more" },
      essential__title: {
        ru: "основные языки сценариев",
        eng: "main scripting languages",
      },
      "item-essential__text-python01": {
        ru: "Высокоуровневый, интерпретируемый, объектно-ориентированный язык программирования с чистым и понятным синтаксисом. Он поддерживает модульность и расширяемость, что делает его удобным для разработки разнообразных приложений.",
        eng: "A high-level, interpreted, object-oriented programming language with a clean and understandable syntax. It supports modularity and extensibility, making it convenient for developing a variety of applications.",
      },
      "item-essential__text-python02": {
        ru: " <span>Применение:</span> Python используется в веб-разработке, анализе данных, искусственном интеллекте, машинном обучении, автоматизации задач, научных исследованиях и многих других областях.",
        eng: " <span>Application:</span> Python is used in web development, data analytics, artificial intelligence, machine learning, task automation, scientific research, and many other fields.",
      },
      "item-essential__text-js01": {
        ru: "Язык программирования, который широко применяется в веб-разработке для создания интерактивных веб-страниц. Он поддерживается всеми современными браузерами и может выполняться на стороне клиента, что позволяет создавать динамические пользовательские интерфейсы.",
        eng: "A programming language widely used in web development to create interactive web pages. It is supported by all modern browsers and can be executed on the client side, allowing you to create dynamic user interfaces.",
      },
      "item-essential__text-js02": {
        ru: " <span>Применение:</span> JavaScript используется в веб-разработке для создания интерактивных элементов, в том числе в библиотеках и фреймворках, таких как React, Angular и Vue. Также он может использоваться на стороне сервера с использованием платформы Node.js.",
        eng: " <span>Application:</span> JavaScript is used in web development to create interactive elements, including in libraries and frameworks such as React, Angular and Vue. It can also be used on the server side using the Node.js framework.",
      },
      "item-essential__text-php01": {
        ru: "Cкриптовый язык программирования, часто используемый для разработки веб-приложений. Он интегрируется легко с HTML и широко применяется для создания динамических веб-сайтов.",
        eng: "A scripting programming language often used to develop web applications. It integrates easily with HTML and is widely used to create dynamic websites.",
      },
      "item-essential__text-php02": {
        ru: " <span>Применение: </span> PHP используется в веб-разработке для создания серверной части веб-приложений. Он может взаимодействовать с базами данных, обрабатывать формы, управлять сессиями и выполнять другие задачи, связанные с веб-разработкой.",
        eng: " <span>Application:</span> PHP is used in web development to create the backend of web applications. It can interact with databases, process forms, manage sessions, and perform other tasks related to web development.",
      },
      ai__title: {
        ru: "Создание ботов на Python",
        eng: "Creating bots in Python",
      },
      ai__text: {
        ru: "Создание ботов на Python может включать в себя различные задачи, в зависимости от того, что именно вы хотите достичь. Вот общий план по созданию ботов на Python:",
        eng: "Creating bots in Python can involve a variety of tasks, depending on what exactly you want to achieve. Here's a general plan for creating bots in Python:",
      },
      ai__button: { ru: "узнать больше", eng: "learn more" },
    },
    m = {
      menu__link01: { ru: "Главная", eng: "Home" },
      menu__link02: { ru: "Контакты", eng: "Contact us" },
      "contact-main__title": { ru: "контакты", eng: "contact us" },
      "item-phons__title": { ru: "номера телефонов", eng: "phones" },
      "item-phons-sapn01": {
        ru: "Телефон (приемная ректора): ",
        eng: "Telephone (reception office of the rector): ",
      },
      "item-phons-sapn02": {
        ru: "Факс (приемная ректора): ",
        eng: "Fax (reception of the rector): ",
      },
      "item-website__title": { ru: "сайт универа", eng: "university website" },
      "contacts__addres-title": { ru: "адрес", eng: "address" },
      contacts__addres: {
        ru: "проспект Мира, 43 , 212000, Республика Беларусь",
        eng: "Mira Avenue, 43, 212000, Republic of Belarus",
      },
    };
  c.forEach((e) => {
    e.dataset.langBtn === s && e.classList.add("_active");
  }),
    (function () {
      switch (l) {
        case "/home.html":
        default:
          d = u;
          break;
        case "/contact-us.html":
          d = m;
      }
    })(),
    window.addEventListener("click", function (e) {
      c.length &&
        c.forEach((t) => {
          e.target === t &&
            (c.forEach((e) => {
              e.classList.remove("_active");
            }),
            e.target.classList.add("_active"),
            (s = e.target.dataset.langBtn),
            (function () {
              for (const e in d) {
                const t = document.querySelector(`[data-lang=${e}]`);
                t && (t.innerHTML = d[e][s]);
              }
            })());
        });
    }),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    e.any() && document.documentElement.classList.add("touch"),
    (function () {
      let e = document.querySelector(".icon-menu");
      e &&
        e.addEventListener("click", function (e) {
          t &&
            (((e = 500) => {
              document.documentElement.classList.contains("lock") ? n(e) : a(e);
            })(),
            document.documentElement.classList.toggle("menu-open"));
        });
    })(),
    (function () {
      if (document.querySelectorAll("[data-fullscreen]").length && e.any()) {
        function t() {
          let e = 0.01 * window.innerHeight;
          document.documentElement.style.setProperty("--vh", `${e}px`);
        }
        window.addEventListener("resize", t), t();
      }
    })(),
    (function () {
      function e(e) {
        if ("click" === e.type) {
          const t = e.target;
          if (t.closest("[data-goto]")) {
            const n = t.closest("[data-goto]"),
              a = n.dataset.goto ? n.dataset.goto : "",
              i = !!n.hasAttribute("data-goto-header"),
              r = n.dataset.gotoSpeed ? n.dataset.gotoSpeed : "500";
            o(a, i, r), e.preventDefault();
          }
        } else if ("watcherCallback" === e.type && e.detail) {
          const t = e.detail.entry,
            n = t.target;
          if ("navigator" === n.dataset.watch) {
            const e = n.id,
              a =
                (document.querySelector("[data-goto]._navigator-active"),
                document.querySelector(`[data-goto="${e}"]`));
            t.isIntersecting
              ? a && a.classList.add("_navigator-active")
              : a && a.classList.remove("_navigator-active");
          }
        }
      }
      document.addEventListener("click", e),
        document.addEventListener("watcherCallback", e);
    })(),
    (function () {
      r = !0;
      const e = document.querySelector("header.header"),
        t = e.hasAttribute("data-scroll-show"),
        n = e.dataset.scrollShow ? e.dataset.scrollShow : 500,
        a = e.dataset.scroll ? e.dataset.scroll : 1;
      let i,
        o = 0;
      document.addEventListener("windowScroll", function (r) {
        const s = window.scrollY;
        clearTimeout(i),
          s >= a
            ? (!e.classList.contains("_header-scroll") &&
                e.classList.add("_header-scroll"),
              t &&
                (s > o
                  ? e.classList.contains("_header-show") &&
                    e.classList.remove("_header-show")
                  : !e.classList.contains("_header-show") &&
                    e.classList.add("_header-show"),
                (i = setTimeout(() => {
                  !e.classList.contains("_header-show") &&
                    e.classList.add("_header-show");
                }, n))))
            : (e.classList.contains("_header-scroll") &&
                e.classList.remove("_header-scroll"),
              t &&
                e.classList.contains("_header-show") &&
                e.classList.remove("_header-show")),
          (o = s <= 0 ? 0 : s);
      });
    })();
})();
