/* ============================================================
   Sophie Bilynska Cosmetics — Prototype JS
   i18n (UA/EN), mobile menu, accordion, scroll reveal
   ============================================================ */

/* Mark that JS is active, so reveal animations only hide content when
   we can actually un-hide it. Runs immediately to avoid a flash. */
document.documentElement.classList.add("js");

/* ---------- Translations ---------- */
const I18N = {
  ua: {
    "nav.catalog": "Каталог",
    "nav.bundles": "Набори",
    "nav.about": "Бренд",
    "nav.delivery": "Доставка",
    "nav.contacts": "Контакти",
    "menu.cart": "Кошик",

    "hero.eyebrow": "Преміальна косметика ручної роботи",
    "hero.title": "Sophie Bilynska",
    "hero.text": "Косметика ручної роботи з натуральних інгредієнтів. Мило, бальзами та догляд у преміальній еко-упаковці.",
    "hero.cta": "Переглянути каталог",
    "hero.hint": "Прокрутіть вниз",

    "home.shopNow": "Переглянути",
    "home.ed1Kicker": "Догляд за обличчям",
    "home.ed1Title": "Гель-сироватка для сяйва шкіри",
    "home.ed1Text": "Для обличчя, шиї та декольте — зволоження та пружність малими партіями.",
    "home.ed2Kicker": "Контур очей",
    "home.ed2Title": "Крем для шкіри навколо очей",
    "home.ed2Text": "Делікатне зволоження для ніжної зони навколо очей та обличчя.",

    "home.catsKicker": "Колекція",
    "home.catsTitle": "Категорії",
    "home.catsSub": "Обрані засоби для обличчя, тіла та волосся.",
    "cat.face": "Обличчя",
    "cat.body": "Тіло",
    "cat.hair": "Волосся",
    "cat.soap": "Мило",
    "cat.lips": "Губи",
    "cat.sets": "Набори",

    "home.bestKicker": "Обране",
    "home.bestTitle": "Бестселери",
    "home.bestSub": "Те, що найчастіше обирають наші клієнти.",

    "story.tag": "Ручна робота · Малі партії",
    "story.eyebrow": "Історія бренду",
    "story.title": "Народжено з любові до деталей",
    "story.p1": "Усе почалося на домашній кухні — з перших брусків мила, зварених вручну для рідних. Сьогодні це преміальна косметика малими партіями, у якій збережено ту саму турботу.",
    "story.p2": "Кожен рецепт — це баланс натуральних інгредієнтів, прозорого складу та естетики, яку хочеться тримати в руках.",
    "story.sign": "— Sophie Bilynska",
    "story.stat1": "років ручної роботи",
    "story.stat2": "натуральний склад",
    "story.stat3": "авторських рецептів",

    "home.aboutKicker": "Наша філософія",
    "home.aboutTitle": "Філософія бренду",
    "home.aboutText": "Ми створюємо косметику малими партіями з натуральних інгредієнтів. Прозорий склад, сертифікація та увага до кожної деталі.",
    "home.aboutCta": "Про бренд",

    "hero.sub": "Ботанічний догляд для чутливої шкіри — холодне пресування, чисті екстракти, прозорий склад.",
    "home.ed2Cta": "Детальніше",

    "trust.t1": "100% натуральний склад",
    "trust.s1": "Прозорий INCI на кожен засіб",
    "trust.t2": "Малі свіжі партії",
    "trust.s2": "Ручна робота, без консервантів-агресорів",
    "trust.t3": "Для чутливої шкіри",
    "trust.s3": "Гіпоалергенно, cruelty-free",
    "trust.t4": "Доставка 1–2 дні",
    "trust.s4": "Нова Пошта по всій Україні",

    "best.kicker": "Обране",
    "best.title": "Фаворити наших клієнтів",
    "best.sub": "Формули, які найчастіше повертаються у ваші косметички знову і знову.",
    "best.cta": "Весь каталог",

    "ingr.kicker": "Прозорий склад",
    "ingr.title": "Що всередині — і навіщо",
    "ingr.sub": "Ми вказуємо повний INCI і пояснюємо кожен ключовий актив. Жодних «секретних формул».",
    "ingr.i1": "Гіалуронова кислота",
    "ingr.i1d": "інтенсивно зволожує та утримує вологу",
    "ingr.i2": "Алое вера (CO₂-екстракт)",
    "ingr.i2d": "заспокоює, відновлює та знімає подразнення",
    "ingr.i3": "Вітамін E",
    "ingr.i3d": "антиоксидант, захищає від передчасного старіння",
    "ingr.i4": "D-пантенол",
    "ingr.i4d": "прискорює відновлення, зміцнює захисний бар'єр",
    "ingr.cta": "Переглянути сироватку",

    "hero.ctaQuiz": "Підібрати ритуал",

    "quiz.kicker": "Персональний підбір",
    "quiz.title": "60-Секундний Консьєрж Краси",
    "quiz.sub": "Дайте відповідь на 3 простих запитання, і ми складемо індивідуальну програму догляду для вашої шкіри.",
    "quiz.q1": "Який у вас тип шкіри?",
    "quiz.q1o1": "Суха та стягнута",
    "quiz.q1o1sub": "Потребує живлення та зволоження",
    "quiz.q1o2": "Комбінована",
    "quiz.q1o2sub": "Блиск у Т-зоні, сухість на щоках",
    "quiz.q1o3": "Чутлива",
    "quiz.q1o3sub": "Легко реагує почервонінням",
    "quiz.q2": "Яка ваша головна мета догляду?",
    "quiz.q2o1": "Сяйво та тонус",
    "quiz.q2o1sub": "Свіжий вигляд і рівний тон",
    "quiz.q2o2": "Відновлення бар'єру",
    "quiz.q2o2sub": "Заспокоєння та захист шкіри",
    "quiz.q2o3": "Чисте очищення",
    "quiz.q2o3sub": "М'яке вмивання без стягнутості",
    "quiz.q3": "Яку текстуру ви полюбляєте?",
    "quiz.q3o1": "Легку та флюїдну",
    "quiz.q3o1sub": "Гелі та сироватки",
    "quiz.q3o2": "Насичену та живильну",
    "quiz.q3o2sub": "Креми та бальзами",
    "quiz.resEyebrow": "✓ Рекомендовано експертом",
    "quiz.resTitle": "Ваш персональний ритуал готовий",
    "quiz.resSub": "На основі ваших відповідей ми підібрали комплекс догляду. Перегляньте рекомендовані засоби в каталозі.",
    "quiz.resCta": "Переглянути каталог",
    "quiz.restart": "Пройти ще раз",
    "quiz.ritualRadiance": "Ранковий ритуал сяйва",
    "quiz.ritualRepair": "Вечірній ритуал відновлення",
    "quiz.ritualClean": "Ритуал чистого очищення",

    "rev.kicker": "Відгуки про нас",
    "rev.title": "Що кажуть про Sophie Bilynska",
    "rev.sub": "Справжні враження жінок, які довірили нам здоров'я своєї шкіри.",
    "rev.verified": "✓ Перевірений покупець",
    "rev.r1": "«Гель-сироватка для обличчя стала моїм порятунком! Шкіра після неї буквально світиться зсередини, жодної липкості, макіяж лягає ідеально. Замовляю вже третій флакон.»",
    "rev.r2": "«Мило “Флора” — це справжній витвір мистецтва! Навіть шкода було починати ним користуватися. А пінка настільки ніжна, що вперше в житті після вмивання немає стягнутості.»",
    "rev.r3": "«Крем навколо очей прибрав мої постійні ранкові набряки за тиждень. Дуже вдячна за такий чистий склад без хімозних ароматів. Ви робите диво!»",

    "faq.kicker": "Відповіді на запитання",
    "faq.title": "Часті запитання",
    "faq.sub": "Усе про склад, безпеку, терміни зберігання та доставку.",
    "faq.q1": "Чи підходить ваша косметика для дітей та вагітних?",
    "faq.a1": "Так, абсолютно! Усі наші формули створюються з фокусом на гіпоалергенність. Ми не використовуємо штучних віддушок, парабенів, агресивних сульфатів та синтетичних барвників. Більшість засобів безпечні навіть для немовлят.",
    "faq.q2": "Скільки зберігається натуральна косметика ручної роботи?",
    "faq.a2": "Завдяки використанню натуральних рослинних антиоксидантів (вітамін Е, екстракт розмарину) та безпечних еко-консервантів засоби зберігаються від 9 до 24 місяців у закритому вигляді та 3–6 місяців після відкриття.",
    "faq.q3": "Як швидко відправляється замовлення?",
    "faq.a3": "Оскільки косметика виготовляється свіжими малими партіями, відправка Новою Поштою здійснюється протягом 1–2 робочих днів після підтвердження замовлення.",
    "faq.q4": "Чи тестується косметика на тваринах?",
    "faq.a4": "Ніколи! Ми категорично проти тестування на тваринах (Cruelty-Free). Усі формули перевіряються дерматологічно в лабораторних умовах та на фокус-групах добровольців.",

    "catalog.soonEyebrow": "Незабаром",
    "catalog.soonTitle": "Нові формули в дорозі",
    "catalog.soonText": "Ми готуємо нові засоби та рецептури. Щось цікаве зовсім скоро з'явиться у продажу — залишайтеся з нами.",
    "catalog.title": "Каталог",
    "catalog.sub": "20–40 ретельно підібраних засобів.",
    "filter.all": "Усі",
    "filter.face": "Обличчя",
    "filter.body": "Тіло",
    "filter.hair": "Волосся",
    "sort.popular": "За популярністю",
    "sort.priceAsc": "Ціна: за зростанням",
    "sort.priceDesc": "Ціна: за спаданням",
    "catalog.count": "товарів",

    "pdp.add": "Додати в кошик",
    "pdp.preorder": "Передзамовлення",
    "pdp.size": "Об'єм",
    "pdp.scent": "Аромат",
    "pdp.benefits": "Переваги",
    "pdp.inci": "Склад (INCI)",
    "pdp.usage": "Застосування",
    "pdp.shelf": "Термін придатності",
    "pdp.related": "Схожі товари",
    "pdp.notFound": "Товар не знайдено.",
    "pdp.backToCatalog": "До каталогу",
    "contacts.fillIn": "Будь ласка, заповніть усі поля коректно.",
    "contacts.mailHint": "Відкриваємо вашу пошту з готовим листом.",
    "pdp.reviews": "відгуків",

    "badge.new": "Новинка",
    "badge.best": "Хіт",
    "common.addedToCart": "Додано в кошик",
    "common.freeShip": "Безкоштовна доставка від 2000 ₴",

    "foot.shop": "Магазин",
    "foot.help": "Допомога",
    "foot.company": "Компанія",
    "foot.faq": "Часті питання",
    "foot.terms": "Умови",
    "foot.privacy": "Конфіденційність",
    "foot.rights": "Усі права захищено.",

    "b.heroEyebrow": "Ботанічний догляд · Ручна робота",
    "b.heroSub": "Чисті рослинні активи. Прозорий склад. Малі свіжі партії.",
    "b.heroNote": "Ваша шкіра не потребує більше засобів. Вона потребує чистіших формул.",
    "b.scroll": "Прокрутіть нижче",
    "b.p1k1": "Проблема",
    "b.p1k2": "Агресивні формули",
    "b.p1k3": "Порушений бар'єр",
    "b.p1lead": "Справа не у вашій шкірі. Справа у складі.",
    "b.p1a": "Більшість засобів перевантажені силіконами, сульфатами та синтетичними ароматизаторами. Вони дають миттєвий ефект, але з часом виснажують захисний бар'єр шкіри.",
    "b.p1b": "Роками індустрія радила додавати ще один крем, ще одну сироватку. Ми пропонуємо протилежне — прибрати зайве й залишити тільки те, що працює.",
    "b.p2k": "Філософія",
    "b.statement1": "Менше,",
    "b.statement2": "та чистіше.",
    "b.p2a": "Кожна формула — це холодне пресування, чисті екстракти та повний INCI на етикетці. Жодних «секретних компонентів».",
    "b.p2b": "Ми працюємо малими партіями, щоб активи залишались свіжими, а склад — чесним. Гіпоалергенно та cruelty-free.",
    "b.p3k1": "Активи",
    "b.p3k2": "Прозорий склад",
    "b.p3lead": "Те, що всередині — і навіщо.",
    "b.p3a": "Гіалуронова кислота та алое вера (CO₂) — глибоке зволоження й заспокоєння. Вітамін E та D-пантенол відновлюють і зміцнюють бар'єр.",
    "b.p3b": "Олії мигдалю й виноградних кісточок, зелений чай та гідролізат протеїнів пшениці живлять шкіру без обтяження.",
    "b.p4k1": "Колекція",
    "b.p4k2": "Бестселери",
    "b.p4lead": "Ритуал починається тут.",
    "b.ctaEyebrow": "Ботанічний догляд · Ручна робота",
    "b.ctaLine1": "Твій ритуал",
    "b.ctaLine2": "починається тут.",
    "b.ctaShop": "Переглянути каталог",
    "b.view": "Детальніше",
    "b.handmade": "Косметика ручної роботи",
    "b.heroTitle1": "Рослинна сила",
    "b.heroTitle2": "догляду",
    "b.revTitle": "Що про нас кажуть.",
    "b.city1": "Київ",
    "b.city2": "Львів",
    "b.city3": "Одеса",

    "brand.kicker": "Еко-косметика ручної роботи",
    "brand.heroTitle": "Турбота, що підходить усім",
    "brand.heroText": "Гіпоалергенний догляд із натуральних інгредієнтів — створений для чутливої шкіри, для дорослих і дітей, для всієї родини.",
    "brand.missionKicker": "Наша місія",
    "brand.missionTitle": "Чистий догляд без компромісів",
    "brand.mission1": "Sophie Bilynska народилася з простої ідеї: догляд за шкірою має бути безпечним для кожного. Ми варимо косметику малими партіями вручну, обираючи лише те, що можемо прочитати й вимовити у складі.",
    "brand.mission2": "Без агресивних сульфатів, парабенів, штучних барвників та синтетичних віддушок. Тільки рослинні олії, екстракти та активи, що дбають про шкіру, а не навантажують її.",
    "brand.v1Title": "Натуральний склад",
    "brand.v1Text": "Рослинні олії, масла та екстракти. Прозорий склад, який не доведеться розшифровувати.",
    "brand.v2Title": "Гіпоалергенність",
    "brand.v2Text": "Формули без поширених подразників — для чутливої та реактивної шкіри, що потребує делікатності.",
    "brand.v3Title": "Еко-підхід",
    "brand.v3Text": "Бамбук і скло замість пластику. Малі партії без відходів і зайвого транспортування.",
    "brand.familyKicker": "Для всієї родини",
    "brand.familyTitle": "Один догляд — для кожного вдома",
    "brand.familyText1": "Шкіра дитини, підлітка й дорослого різна, але всім потрібна м'якість і безпека. Наші засоби розроблені так, щоб їх могли ділити між собою всі покоління родини.",
    "brand.familyText2": "Ми тестуємо формули на переносимість і свідомо прибираємо все, що може викликати реакцію.",
    "brand.kidsKicker": "Найменшим — найделікатніше",
    "brand.kidsTitle": "Ніжність, якій можна довіряти",
    "brand.kidsText1": "Для дитячої та надчутливої шкіри ми обираємо мінімалістичні формули: короткий склад, нейтральний pH і жодних зайвих добавок.",
    "brand.kidsText2": "Наша мета проста — допомогти кожному доглядати шкіру спокійно, без страху перед етикеткою.",
    "brand.blogKicker": "Журнал",
    "brand.blogTitle": "Блог про чистий догляд",
    "brand.blogSub": "Прості поради про натуральну косметику, чутливу шкіру та догляд для всієї родини.",
    "brand.postTag": "Про бренд",
    "brand.postTitle": "Як народилася Sophie Bilynska",
    "brand.postP1": "Усе почалося з пошуку догляду, якому можна довіряти. Жодна баночка на полиці не давала впевненості у складі — тож перші засоби ми зварили власноруч, для своєї родини.",
    "brand.postP2": "Так проста кухонна практика переросла у бренд. Ми лишили в основі головний принцип: якщо засіб безпечний для найчутливішої шкіри в домі, він підійде кожному. Короткий склад, прозорі інгредієнти, жодних агресивних добавок.",
    "brand.postP3": "Сьогодні Sophie Bilynska — це еко-косметика ручної роботи малими партіями, що дбає про всю родину: дорослих, підлітків і найменших. Наша місія проста — зробити чистий догляд доступним для всіх.",
    "brand.ctaTitle": "Догляд, що дбає про кожного",
    "brand.ctaText": "Відкрийте косметику, створену для чутливої шкіри та всієї родини.",

    "contacts.kicker": "Ми на зв'язку",
    "contacts.title": "Контакти",
    "contacts.sub": "Напишіть нам — відповідаємо щодня. Нижче — умови доставки та оплати.",
    "contacts.reachTitle": "Як з нами зв'язатися",
    "contacts.phone": "Телефон",
    "contacts.email": "Пошта",
    "contacts.insta": "Instagram",
    "contacts.hours": "Графік",
    "contacts.hoursVal": "Пн–Нд, 9:00–20:00",
    "contacts.formTitle": "Написати нам",
    "contacts.fName": "Ваше ім'я",
    "contacts.fEmail": "Email",
    "contacts.fMsg": "Повідомлення",
    "contacts.fSend": "Надіслати",
    "delivery.kicker": "Доставка та оплата",
    "delivery.title": "Доставка",
    "delivery.sub": "Надсилаємо по всій Україні. Безкоштовна доставка від 2000 ₴.",
    "delivery.d1Title": "Нова Пошта",
    "delivery.d1Text": "Відділення або поштомат по всій Україні. Відправка протягом 1–2 робочих днів.",
    "delivery.d2Title": "Кур'єр до дверей",
    "delivery.d2Text": "Адресна доставка кур'єром Нової Пошти у більшості міст.",
    "delivery.d3Title": "Оплата",
    "delivery.d3Text": "Онлайн-оплата карткою або накладений платіж при отриманні.",
    "delivery.note": "Безкоштовна доставка діє на замовлення від 2000 ₴. Обмін і повернення — протягом 14 днів."
  },
  en: {
    "nav.catalog": "Catalog",
    "nav.bundles": "Bundles",
    "nav.about": "Brand",
    "nav.delivery": "Delivery",
    "nav.contacts": "Contacts",
    "menu.cart": "Cart",

    "hero.eyebrow": "Premium handcrafted cosmetics",
    "hero.title": "Sophie Bilynska",
    "hero.text": "Handcrafted cosmetics from natural ingredients. Soaps, balms and care in premium eco packaging.",
    "hero.cta": "Explore the catalog",
    "hero.hint": "Scroll down",

    "home.shopNow": "Shop now",
    "home.ed1Kicker": "Face care",
    "home.ed1Title": "Gel serum for radiant skin",
    "home.ed1Text": "For face, neck and décolleté — hydration and firmness, in small batches.",
    "home.ed2Kicker": "Eye contour",
    "home.ed2Title": "Cream for the eye area",
    "home.ed2Text": "Gentle hydration for the delicate skin around the eyes and face.",

    "home.catsKicker": "The collection",
    "home.catsTitle": "Categories",
    "home.catsSub": "Curated products for face, body and hair.",
    "cat.face": "Face",
    "cat.body": "Body",
    "cat.hair": "Hair",
    "cat.soap": "Soap",
    "cat.lips": "Lips",
    "cat.sets": "Sets",

    "home.bestKicker": "Selected",
    "home.bestTitle": "Bestsellers",
    "home.bestSub": "What our customers choose most.",

    "story.tag": "Hand made · Small batch",
    "story.eyebrow": "Brand story",
    "story.title": "Born from a love of detail",
    "story.p1": "It all started in a home kitchen — with the first bars of soap made by hand for family. Today it is premium small-batch cosmetics that keep that same care.",
    "story.p2": "Every recipe is a balance of natural ingredients, a transparent formula and an aesthetic you want to hold in your hands.",
    "story.sign": "— Sophie Bilynska",
    "story.stat1": "years handcrafting",
    "story.stat2": "natural formula",
    "story.stat3": "original recipes",

    "home.aboutKicker": "Our philosophy",
    "home.aboutTitle": "Brand philosophy",
    "home.aboutText": "We craft cosmetics in small batches from natural ingredients. Transparent formulas, certification and attention to every detail.",
    "home.aboutCta": "About the brand",

    "hero.sub": "Botanical care for sensitive skin — cold-pressed, clean extracts, a transparent formula.",
    "home.ed2Cta": "Learn more",

    "trust.t1": "100% natural formula",
    "trust.s1": "Full INCI on every product",
    "trust.t2": "Small fresh batches",
    "trust.s2": "Handmade, no harsh preservatives",
    "trust.t3": "For sensitive skin",
    "trust.s3": "Hypoallergenic, cruelty-free",
    "trust.t4": "Delivery in 1–2 days",
    "trust.s4": "Nova Poshta across Ukraine",

    "best.kicker": "Selected",
    "best.title": "Our customers' favorites",
    "best.sub": "The formulas that return to your shelf again and again.",
    "best.cta": "Full catalog",

    "ingr.kicker": "Transparent formula",
    "ingr.title": "What's inside — and why",
    "ingr.sub": "We list the full INCI and explain every key active. No secret formulas.",
    "ingr.i1": "Hyaluronic acid",
    "ingr.i1d": "intensely hydrates and retains moisture",
    "ingr.i2": "Aloe vera (CO₂ extract)",
    "ingr.i2d": "soothes, repairs and calms irritation",
    "ingr.i3": "Vitamin E",
    "ingr.i3d": "antioxidant, protects from premature aging",
    "ingr.i4": "D-panthenol",
    "ingr.i4d": "speeds recovery, strengthens the barrier",
    "ingr.cta": "View the serum",

    "hero.ctaQuiz": "Find my ritual",

    "quiz.kicker": "Personal match",
    "quiz.title": "The 60-Second Beauty Concierge",
    "quiz.sub": "Answer 3 simple questions and we'll build a personal care routine for your skin.",
    "quiz.q1": "What is your skin type?",
    "quiz.q1o1": "Dry & tight",
    "quiz.q1o1sub": "Needs nourishment and hydration",
    "quiz.q1o2": "Combination",
    "quiz.q1o2sub": "Shine in the T-zone, dry cheeks",
    "quiz.q1o3": "Sensitive",
    "quiz.q1o3sub": "Reacts easily with redness",
    "quiz.q2": "What is your main skincare goal?",
    "quiz.q2o1": "Radiance & tone",
    "quiz.q2o1sub": "A fresh look and even tone",
    "quiz.q2o2": "Barrier repair",
    "quiz.q2o2sub": "Soothing and protecting the skin",
    "quiz.q2o3": "Clean cleansing",
    "quiz.q2o3sub": "Gentle wash without tightness",
    "quiz.q3": "Which texture do you prefer?",
    "quiz.q3o1": "Light & fluid",
    "quiz.q3o1sub": "Gels and serums",
    "quiz.q3o2": "Rich & nourishing",
    "quiz.q3o2sub": "Creams and balms",
    "quiz.resEyebrow": "✓ Expert recommended",
    "quiz.resTitle": "Your personal ritual is ready",
    "quiz.resSub": "Based on your answers we've selected a care routine. Explore the recommended products in the catalog.",
    "quiz.resCta": "Explore the catalog",
    "quiz.restart": "Take it again",
    "quiz.ritualRadiance": "Morning radiance ritual",
    "quiz.ritualRepair": "Evening repair ritual",
    "quiz.ritualClean": "Clean cleansing ritual",

    "rev.kicker": "Reviews about us",
    "rev.title": "What people say about Sophie Bilynska",
    "rev.sub": "Genuine impressions from women who trusted us with their skin's health.",
    "rev.verified": "✓ Verified buyer",
    "rev.r1": "“The face gel serum became my saviour! My skin literally glows from within, no stickiness, makeup sits perfectly. I'm already ordering my third bottle.”",
    "rev.r2": "“The ‘Flora’ soap is a true work of art! I almost felt sorry to start using it. And the foam is so gentle that, for the first time ever, there's no tightness after washing.”",
    "rev.r3": "“The eye cream removed my constant morning puffiness within a week. So grateful for such a clean formula with no chemical scents. You work wonders!”",

    "faq.kicker": "Answers to your questions",
    "faq.title": "Frequently asked questions",
    "faq.sub": "Everything about ingredients, safety, shelf life and delivery.",
    "faq.q1": "Is your cosmetics suitable for children and pregnant women?",
    "faq.a1": "Yes, absolutely! All our formulas are created with a focus on being hypoallergenic. We don't use artificial fragrances, parabens, harsh sulfates or synthetic dyes. Most products are safe even for infants.",
    "faq.q2": "How long does handcrafted natural cosmetics last?",
    "faq.a2": "Thanks to natural plant antioxidants (vitamin E, rosemary extract) and safe eco preservatives, products last from 9 to 24 months unopened and 3–6 months after opening.",
    "faq.q3": "How fast is an order dispatched?",
    "faq.a3": "Since the cosmetics are made in fresh small batches, dispatch via Nova Poshta happens within 1–2 business days after the order is confirmed.",
    "faq.q4": "Is the cosmetics tested on animals?",
    "faq.a4": "Never! We are categorically against animal testing (Cruelty-Free). All formulas are tested dermatologically in laboratory conditions and with volunteer focus groups.",

    "catalog.soonEyebrow": "Coming soon",
    "catalog.soonTitle": "New formulas on the way",
    "catalog.soonText": "We're crafting new products and recipes. Something interesting goes on sale very soon — stay with us.",
    "catalog.title": "Catalog",
    "catalog.sub": "20–40 carefully selected products.",
    "filter.all": "All",
    "filter.face": "Face",
    "filter.body": "Body",
    "filter.hair": "Hair",
    "sort.popular": "By popularity",
    "sort.priceAsc": "Price: low to high",
    "sort.priceDesc": "Price: high to low",
    "catalog.count": "products",

    "pdp.add": "Add to cart",
    "pdp.preorder": "Preorder",
    "pdp.size": "Size",
    "pdp.scent": "Fragrance",
    "pdp.benefits": "Benefits",
    "pdp.inci": "Ingredients (INCI)",
    "pdp.usage": "How to use",
    "pdp.shelf": "Shelf life",
    "pdp.related": "Related products",
    "pdp.notFound": "Product not found.",
    "pdp.backToCatalog": "Back to catalogue",
    "contacts.fillIn": "Please fill in all fields correctly.",
    "contacts.mailHint": "Opening your mail app with the message ready.",
    "pdp.reviews": "reviews",

    "badge.new": "New",
    "badge.best": "Bestseller",
    "common.addedToCart": "Added to cart",
    "common.freeShip": "Free shipping from ₴2,000",

    "foot.shop": "Shop",
    "foot.help": "Help",
    "foot.company": "Company",
    "foot.faq": "FAQ",
    "foot.terms": "Terms",
    "foot.privacy": "Privacy",
    "foot.rights": "All rights reserved.",

    "b.heroEyebrow": "Botanical Care · Handmade",
    "b.heroSub": "Clean plant actives. Transparent INCI. Small fresh batches.",
    "b.heroNote": "Your skin doesn't need more products. It needs cleaner formulas.",
    "b.scroll": "Scroll to view more",
    "b.p1k1": "The Problem",
    "b.p1k2": "Harsh Formulas",
    "b.p1k3": "Barrier Damage",
    "b.p1lead": "It's not your skin. It's the formula.",
    "b.p1a": "Most products are overloaded with silicones, sulfates and synthetic fragrance. They give an instant effect but wear down the skin barrier over time.",
    "b.p1b": "For years the industry told you to add one more cream, one more serum. We suggest the opposite — remove the excess and keep only what works.",
    "b.p2k": "Philosophy",
    "b.statement1": "Less,",
    "b.statement2": "but purer.",
    "b.p2a": "Every formula is cold-pressed, with clean extracts and a full INCI on the label. No 'secret ingredients'.",
    "b.p2b": "We work in small batches so the actives stay fresh and the composition stays honest. Hypoallergenic and cruelty-free.",
    "b.p3k1": "Actives",
    "b.p3k2": "Transparent Composition",
    "b.p3lead": "What's inside — and why.",
    "b.p3a": "Hyaluronic acid and aloe vera (CO₂) for deep hydration and calm. Vitamin E and D-panthenol repair and strengthen the barrier.",
    "b.p3b": "Almond and grapeseed oils, green tea and hydrolyzed wheat protein nourish the skin without weighing it down.",
    "b.p4k1": "Collection",
    "b.p4k2": "Bestsellers",
    "b.p4lead": "Your ritual starts here.",
    "b.ctaEyebrow": "Botanical Care · Handmade",
    "b.ctaLine1": "Your routine",
    "b.ctaLine2": "starts here.",
    "b.ctaShop": "Shop the catalogue",
    "b.view": "View",
    "b.handmade": "Handmade Cosmetics",
    "b.heroTitle1": "Clean Botanical",
    "b.heroTitle2": "Skincare",
    "b.revTitle": "What they say.",
    "b.city1": "Kyiv",
    "b.city2": "Lviv",
    "b.city3": "Odesa",

    "brand.kicker": "Handcrafted eco cosmetics",
    "brand.heroTitle": "Care that suits everyone",
    "brand.heroText": "Hypoallergenic care from natural ingredients — made for sensitive skin, for adults and children, for the whole family.",
    "brand.missionKicker": "Our mission",
    "brand.missionTitle": "Clean care without compromise",
    "brand.mission1": "Sophie Bilynska was born from a simple idea: skincare should be safe for everyone. We craft cosmetics by hand in small batches, choosing only what we can read and pronounce on the label.",
    "brand.mission2": "No harsh sulfates, parabens, artificial dyes or synthetic fragrances. Only plant oils, extracts and actives that care for the skin instead of burdening it.",
    "brand.v1Title": "Natural formula",
    "brand.v1Text": "Plant oils, butters and extracts. A transparent formula you won't need to decode.",
    "brand.v2Title": "Hypoallergenic",
    "brand.v2Text": "Formulas free of common irritants — for sensitive and reactive skin that needs gentleness.",
    "brand.v3Title": "Eco approach",
    "brand.v3Text": "Bamboo and glass instead of plastic. Small batches with no waste or excess shipping.",
    "brand.familyKicker": "For the whole family",
    "brand.familyTitle": "One routine — for everyone at home",
    "brand.familyText1": "A child's, a teen's and an adult's skin differ, yet all need softness and safety. Our products are designed to be shared across generations of the family.",
    "brand.familyText2": "We test our formulas for tolerance and deliberately remove anything that could trigger a reaction.",
    "brand.kidsKicker": "The gentlest for the smallest",
    "brand.kidsTitle": "Gentleness you can trust",
    "brand.kidsText1": "For children's and highly sensitive skin we choose minimalist formulas: a short ingredient list, neutral pH and no unnecessary additives.",
    "brand.kidsText2": "Our goal is simple — to help everyone care for their skin calmly, without fear of the label.",
    "brand.blogKicker": "Journal",
    "brand.blogTitle": "A blog about clean care",
    "brand.blogSub": "Simple advice on natural cosmetics, sensitive skin and care for the whole family.",
    "brand.postTag": "About the brand",
    "brand.postTitle": "How Sophie Bilynska began",
    "brand.postP1": "It all started with the search for care you could trust. No jar on the shelf gave confidence in its formula — so we cooked the first products by hand, for our own family.",
    "brand.postP2": "That simple kitchen practice grew into a brand. We kept one core principle: if a product is safe for the most sensitive skin at home, it suits everyone. A short formula, transparent ingredients, no harsh additives.",
    "brand.postP3": "Today Sophie Bilynska is handcrafted eco cosmetics made in small batches, caring for the whole family: adults, teens and the youngest. Our mission is simple — to make clean care available to all.",
    "brand.ctaTitle": "Care that looks after everyone",
    "brand.ctaText": "Discover cosmetics made for sensitive skin and the whole family.",

    "contacts.kicker": "We're in touch",
    "contacts.title": "Contacts",
    "contacts.sub": "Write to us — we reply every day. Shipping and payment terms below.",
    "contacts.reachTitle": "How to reach us",
    "contacts.phone": "Phone",
    "contacts.email": "Email",
    "contacts.insta": "Instagram",
    "contacts.hours": "Hours",
    "contacts.hoursVal": "Mon–Sun, 9:00–20:00",
    "contacts.formTitle": "Write to us",
    "contacts.fName": "Your name",
    "contacts.fEmail": "Email",
    "contacts.fMsg": "Message",
    "contacts.fSend": "Send",
    "delivery.kicker": "Shipping & payment",
    "delivery.title": "Delivery",
    "delivery.sub": "We ship across Ukraine. Free shipping from ₴2,000.",
    "delivery.d1Title": "Nova Poshta",
    "delivery.d1Text": "Branch or parcel locker across Ukraine. Dispatched within 1–2 business days.",
    "delivery.d2Title": "Courier to your door",
    "delivery.d2Text": "Address delivery by Nova Poshta courier in most cities.",
    "delivery.d3Title": "Payment",
    "delivery.d3Text": "Pay online by card or cash on delivery.",
    "delivery.note": "Free shipping applies to orders from ₴2,000. Exchange and returns within 14 days."
  }
};

/* ---------- Language ---------- */
/* Storage access can throw (blocked site data, private mode). Reads fall back to
   a default and writes are ignored, so a storage error never stops the page. */
function storeGet(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : value;
  } catch (err) {
    return fallback;
  }
}

function storeSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (err) {
    /* ignore: the page keeps working without persistence */
  }
}

function getLang() {
  return storeGet("sbc_lang", "ua");
}

function setLang(lang) {
  storeSet("sbc_lang", lang);
  applyLang(lang);
  // Data-driven catalog + PDP bake text at render time, so re-render on switch.
  if (typeof renderCatalog === "function" && document.getElementById("catalog-grid")) {
    renderCatalog();
    initCatalogControls();
  }
  if (typeof renderHomeBestsellers === "function" && document.getElementById("home-bestsellers-grid")) {
    renderHomeBestsellers();
  }
  if (typeof renderPDP === "function" && document.getElementById("pdp-root")) {
    renderPDP();
  }
}

function applyLang(lang) {
  const dict = I18N[lang] || I18N.ua;
  // BCP 47 code for Ukrainian is "uk", not "ua".
  document.documentElement.lang = lang === "ua" ? "uk" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });

  document.querySelectorAll(".lang button").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });
}

/* ---------- Cart (mock) ---------- */
function getCart() {
  return parseInt(storeGet("sbc_cart", "0"), 10) || 0;
}

function updateCartBadge() {
  const el = document.querySelector(".cart-count");
  if (el) el.textContent = getCart();
}

function addToCart() {
  storeSet("sbc_cart", getCart() + 1);
  updateCartBadge();
  toast(I18N[getLang()]["common.addedToCart"]);
}

/* ---------- Toast ---------- */
function toast(msg) {
  let t = document.querySelector(".toast");
  if (!t) {
    t = document.createElement("div");
    t.className = "toast";
    document.body.appendChild(t);
    Object.assign(t.style, {
      position: "fixed",
      bottom: "88px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "#c9a227",
      color: "#0a0a0a",
      padding: "12px 22px",
      borderRadius: "4px",
      fontSize: "0.85rem",
      letterSpacing: "0.05em",
      zIndex: "200",
      opacity: "0",
      transition: "opacity 0.3s",
      pointerEvents: "none"
    });
  }
  t.textContent = msg;
  requestAnimationFrame(() => (t.style.opacity = "1"));
  clearTimeout(t._timer);
  t._timer = setTimeout(() => (t.style.opacity = "0"), 1800);
}

/* ---------- Mobile menu ---------- */
function initMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".mobile-menu");
  if (!burger || !menu) return;

  // Dim overlay behind the drawer (created once)
  let overlay = document.querySelector(".menu-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "menu-overlay";
    document.body.appendChild(overlay);
  }

  // One place changes the state, so visuals, ARIA and focus stay in sync.
  const setOpen = (open) => {
    menu.classList.toggle("open", open);
    burger.classList.toggle("active", open);
    overlay.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
    // A closed drawer must not be focusable or read by screen readers.
    menu.inert = !open;
    // Lock scroll while the drawer is open
    document.body.style.overflow = open ? "hidden" : "";
  };

  const close = () => setOpen(false);
  const toggle = () => setOpen(!menu.classList.contains("open"));
  setOpen(false);

  burger.addEventListener("click", toggle);
  overlay.addEventListener("click", close);
  const closeBtn = menu.querySelector(".menu-close");
  if (closeBtn) closeBtn.addEventListener("click", close);
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
  // Esc closes the menu
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("open")) close();
  });
}

/* Bind `handler` to every element matching `selector` under `root`, but only
   once per element. Re-rendered markup gets new nodes (and gets bound), while
   nodes that already have a listener are skipped. This stops handlers from
   stacking up when a page re-renders or init runs twice. */
function bindOnce(selector, eventName, handler, root = document) {
  root.querySelectorAll(selector).forEach((el) => {
    if (el.dataset.boundTo === eventName) return;
    el.dataset.boundTo = eventName;
    el.addEventListener(eventName, (e) => handler(el, e));
  });
}

/* ---------- Accordion ---------- */
function initAccordion() {
  bindOnce(".acc-head", "click", (head) => {
    head.closest(".acc-item").classList.toggle("open");
  });
}

/* ---------- Quantity ---------- */
function initQty() {
  bindOnce(".qty .qminus", "click", (btn) => {
    const input = btn.closest(".qty").querySelector("input");
    input.value = Math.max(1, parseInt(input.value, 10) - 1 || 1);
  });
  bindOnce(".qty .qplus", "click", (btn) => {
    const input = btn.closest(".qty").querySelector("input");
    input.value = (parseInt(input.value, 10) || 1) + 1;
  });
}

/* ---------- Variant / thumb toggles ---------- */
function initToggles() {
  bindOnce(".variant", "click", (v) => {
    const group = v.closest(".variant-opts");
    if (group) group.querySelectorAll(".variant").forEach((x) => x.classList.remove("active"));
    v.classList.add("active");
  });

  // Gallery thumbnail swap with a short cross-fade (main image is in the same gallery).
  bindOnce(".pdp-thumb", "click", (thumb) => {
    const gallery = thumb.closest(".pdp-gallery");
    const main = gallery ? gallery.querySelector(".pdp-main") : null;
    gallery.querySelectorAll(".pdp-thumb").forEach((t) => t.classList.remove("active"));
    thumb.classList.add("active");
    const img = thumb.getAttribute("data-img");
    if (main && img) {
      main.classList.add("swapping");
      setTimeout(() => {
        main.style.backgroundImage = `url('${img}')`;
        main.classList.remove("swapping");
      }, 200);
    }
  });
}

/* ---------- Scroll progress + header condense ---------- */
function initScrollFx() {
  const header = document.querySelector(".header");

  // Golden progress thread
  let bar = document.querySelector(".scroll-progress");
  if (!bar) {
    bar = document.createElement("div");
    bar.className = "scroll-progress";
    document.body.appendChild(bar);
  }

  let ticking = false;

  const onScroll = () => {
    const y = window.scrollY || window.pageYOffset;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docH > 0 ? y / docH : 0;

    bar.style.transform = `scaleX(${progress})`;
    if (header) header.classList.toggle("scrolled", y > 24);

    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(onScroll);
        ticking = true;
      }
    },
    { passive: true }
  );
  onScroll();
}

/* ---------- Add-to-cart buttons ---------- */
function initCartButtons() {
  bindOnce("[data-add]", "click", (btn, e) => {
    e.preventDefault();
    addToCart();
  });
}

/* ---------- Scroll reveal ---------- */
/* Catalog cards reveal one after another (1st, 2nd, 3rd, ... across the whole
   grid). The delay grows with each card's position in the DOM, so it respects
   sort/filter order. Call after render and after any re-order. */
function setCatalogRevealDelays() {
  const grid = document.getElementById("catalog-grid");
  if (!grid) return;
  const step = 70;       // ms between consecutive cards (snappier)
  const cap = 560;       // never wait longer than this, so lower cards aren't slow
  const cards = Array.from(grid.querySelectorAll(".card-wrap"));
  const visible = cards.filter((c) => c.style.display !== "none");
  visible.forEach((card, i) => {
    card.style.transitionDelay = `${Math.min(i * step, cap)}ms`;
  });
}

/* One shared IntersectionObserver for the page. Calling initReveal again (after a
   render or a language switch) only watches elements that are not revealed yet. */
let revealObserver = null;

function initReveal(root = document) {
  const items = Array.from(root.querySelectorAll(".reveal:not(.in)"));
  if (!items.length) return;

  const reveal = (el) => el.classList.add("in");

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach(reveal);
    return;
  }

  const io = revealObserver || (revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          reveal(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    // Reveal early: start before the element reaches the viewport (big positive
    // bottom margin) so cards fade in ahead of the scroll — no empty gap.
    { threshold: 0, rootMargin: "0px 0px 25% 0px" }
  ));

  items.forEach((el) => io.observe(el));

  // Safety net: anything still hidden after 2.5s (e.g. observer never fired,
  // element already in view on load, or layout quirks) is revealed anyway,
  // so content is never permanently invisible.
  setTimeout(() => {
    items.forEach((el) => {
      if (!el.classList.contains("in")) reveal(el);
    });
  }, 2500);
}

/* ---------- Contact form ----------
   There is no backend yet. A valid submit opens the visitor's mail app with the
   message filled in. The page never claims a message was sent. */
function initContactForm() {
  bindOnce(".contacts-form", "submit", (form, e) => {
    e.preventDefault();
    const dict = I18N[getLang()] || I18N.ua;
    const status = form.querySelector(".form-status");
    const nameEl = form.querySelector('[name="name"]');
    const emailEl = form.querySelector('[name="email"]');
    const msgEl = form.querySelector('[name="message"]');
    const name = nameEl.value.trim();
    const email = emailEl.value.trim();
    const message = msgEl.value.trim();

    if (!name || !message || !emailEl.checkValidity()) {
      if (status) status.textContent = dict["contacts.fillIn"];
      return;
    }

    const subject = encodeURIComponent(`Sophie Bilynska — ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    if (status) status.textContent = dict["contacts.mailHint"];
    window.location.href = `mailto:hello@sbcosmetics.com?subject=${subject}&body=${body}`;
  });
}

/* ---------- FAQ accordion ---------- */
function initFaq() {
  document.querySelectorAll(".faq-head").forEach((head) => {
    head.addEventListener("click", () => {
      head.closest(".faq-item").classList.toggle("open");
    });
  });
}

/* ---------- HTML escaping (XSS-safe interpolation) ---------- */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/* ---------- Category label (reuses existing cat.* i18n keys) ---------- */
function categoryLabel(category, dict) {
  return dict["cat." + category] || category;
}

/* ---------- Product card markup (shared by catalog + bestsellers) ---------- */
function productCard(p, i, lang, dict) {
  const name = p.name[lang] || p.name.ua;
  const cat = categoryLabel(p.category, dict);
  const badge = p.badge
    ? `<span class="card-badge">${escapeHtml(p.badge === "best" ? dict["badge.best"] : dict["badge.new"])}</span>`
    : "";
  // Active-ingredient chips (ingredient transparency up front — a conversion driver).
  const actives = (p.actives && (p.actives[lang] || p.actives.ua)) || [];
  const chips = actives.length
    ? `<span class="card-actives">${actives.slice(0, 3).map((a) => `<span class="active-chip">${escapeHtml(a)}</span>`).join("")}</span>`
    : "";
  const rating = `<span class="card-rating"><span class="stars" aria-hidden="true">★</span>${p.rating} <span class="card-rating-count">(${p.reviews})</span></span>`;
  return `
    <div class="card-wrap reveal" data-category="${escapeHtml(p.category)}" data-price="${p.price}" data-rating="${p.rating}">
      ${badge}
      <a href="product.html?id=${encodeURIComponent(p.id)}" class="card">
        <div class="card-media-wrap"><div class="card-media" style="background-image:url('${escapeHtml(p.image)}')"></div></div>
        <div class="card-body">
          <span class="card-cat">${escapeHtml(cat)}</span>
          <span class="card-name">${escapeHtml(name)}</span>
          ${chips}
          <span class="card-meta">${rating}<span class="card-price">${formatPrice(p.price)}</span></span>
        </div>
      </a>
    </div>`;
}

/* ---------- Dynamic catalog grid (catalog.html) ---------- */
function renderCatalog() {
  const grid = document.getElementById("catalog-grid");
  if (!grid || typeof SBC_PRODUCTS === "undefined") return;
  const lang = getLang();
  const dict = I18N[lang] || I18N.ua;
  const cards = SBC_PRODUCTS.map((p, i) => productCard(p, i, lang, dict)).join("");
  // 12th tile: a "coming soon" placeholder so the 3-column grid stays full.
  const soon = `
    <div class="card-wrap reveal card-soon" data-soon="1" data-rating="-1">
      <div class="card card-soon-inner">
        <div class="card-soon-top">
          <span class="card-soon-eyebrow">${escapeHtml(dict["catalog.soonEyebrow"])}</span>
          <span class="card-soon-title">${escapeHtml(dict["catalog.soonTitle"])}</span>
        </div>
        <div class="card-soon-bottom">
          <p class="card-soon-text">${escapeHtml(dict["catalog.soonText"])}</p>
        </div>
      </div>
    </div>`;
  grid.innerHTML = cards + soon;
  setCatalogRevealDelays();
  initReveal();
}

/* ---------- Home bestsellers grid (index.html) ---------- */
function renderHomeBestsellers() {
  const grid = document.getElementById("home-bestsellers-grid");
  if (!grid || typeof SBC_PRODUCTS === "undefined") return;
  const lang = getLang();
  const dict = I18N[lang] || I18N.ua;

  // On the editorial (Barrier+) homepage, render the minimal index cards.
  if (document.body.classList.contains("barrier")) {
    const picks = SBC_PRODUCTS
      .filter((p) => p.badge === "best" || p.rating >= 4.9)
      .slice(0, 6);
    const list = picks.length ? picks : SBC_PRODUCTS.slice(0, 6);
    grid.innerHTML = list.map((p, i) => {
      const name = (p.name[lang] || p.name.ua);
      const idx = String(i + 1).padStart(2, "0");
      const cat = categoryLabel(p.category, dict);
      return `
        <a class="b-prod" href="product.html?id=${encodeURIComponent(p.id)}">
          <span class="b-prod-idx">${idx} / ${escapeHtml(cat).toUpperCase()}</span>
          <span class="b-prod-media" style="background-image:url('${escapeHtml(p.image)}')"></span>
          <span class="b-prod-name">${escapeHtml(name)}</span>
          <span class="b-prod-foot">
            <span>${escapeHtml(formatPrice(p.price))}</span>
            <span>${escapeHtml(dict["b.view"] || "Детальніше")} →</span>
          </span>
        </a>`;
    }).join("");
    initReveal();
    return;
  }

  const picks = SBC_PRODUCTS
    .filter((p) => p.badge === "best" || p.rating >= 4.9)
    .slice(0, 4);
  const list = picks.length ? picks : SBC_PRODUCTS.slice(0, 4);
  grid.innerHTML = list.map((p, i) => productCard(p, i, lang, dict)).join("");
  initReveal();
}

/* ---------- Catalog filter + sort (data-driven) ---------- */
function initCatalogControls() {
  const grid = document.getElementById("catalog-grid");
  if (!grid) return;

  const apply = () => {
    // Active chip's i18n key (cat.* keys on the chips) -> category value on cards.
    const activeChip = document.querySelector(".filters .chip.active");
    const key = activeChip ? activeChip.getAttribute("data-i18n") : "filter.all";
    const catMap = { "cat.face": "face", "cat.body": "body", "cat.hair": "hair" };
    const wantCat = catMap[key] || null;

    const cards = Array.from(grid.querySelectorAll(".card-wrap"));
    cards.forEach((card) => {
      const show = !wantCat || card.getAttribute("data-category") === wantCat;
      card.style.display = show ? "" : "none";
    });

    // Visible cards ordered by rating, highest first (the default "popular" order).
    // The coming-soon tile has rating -1, so it always ends up last.
    const visible = cards.filter((c) => c.style.display !== "none");
    visible.sort((a, b) => parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating));
    visible.forEach((c) => grid.appendChild(c));
    // Re-stagger in the new visual order.
    setCatalogRevealDelays();
  };

  // Keep the latest apply() reachable for the chip handler, and bind chips once.
  // A language switch re-renders the cards, but the chips are static and keep
  // their single listener.
  grid.sbcApply = apply;
  bindOnce(".filters .chip", "click", (chip) => {
    document.querySelectorAll(".filters .chip").forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    grid.sbcApply();
  });
  apply();
}

/* ---------- Product detail page (product.html?id=xxx) ---------- */
function renderPDP() {
  const root = document.getElementById("pdp-root");
  if (!root || typeof SBC_PRODUCTS === "undefined") return;

  const lang = getLang();
  const dict = I18N[lang] || I18N.ua;
  const id = new URLSearchParams(location.search).get("id");
  // No id: show the first product. Unknown id: say so, instead of silently showing another product.
  const product = id ? getProductById(id) : SBC_PRODUCTS[0];
  if (!product) {
    root.innerHTML = `<div class="pdp-empty">
      <p>${escapeHtml(dict["pdp.notFound"])}</p>
      <a class="btn" href="catalog.html">${escapeHtml(dict["pdp.backToCatalog"])}</a>
    </div>`;
    return;
  }

  const name = product.name[lang] || product.name.ua;
  const cat = categoryLabel(product.category, dict);
  const gallery = product.gallery && product.gallery.length ? product.gallery : [product.image];
  const benefits = (product.benefits[lang] || product.benefits.ua || []);
  const usage = product.usage[lang] || product.usage.ua;
  const variantLabel = dict[product.variants.labelKey] || dict["pdp.size"];
  const variantOpts = product.variants.options
    .map((o, i) => `<button type="button" class="variant${i === 0 ? " active" : ""}">${escapeHtml(o[lang] || o.ua)}</button>`)
    .join("");
  const actives = (product.actives && (product.actives[lang] || product.actives.ua)) || [];
  const activeChips = actives.length
    ? `<div class="pdp-actives">${actives.map((a) => `<span class="active-chip">${escapeHtml(a)}</span>`).join("")}</div>`
    : "";

  // Keep the tab title in sync.
  document.title = `${name} — Sophie Bilynska Cosmetics`;

  root.innerHTML = `
    <div class="breadcrumb">
      <a href="index.html">Sophie Bilynska</a> / <a href="catalog.html" data-i18n="nav.catalog">${escapeHtml(dict["nav.catalog"])}</a> / <span class="gold">${escapeHtml(name)}</span>
    </div>

    <div class="pdp">
      <div class="pdp-gallery reveal">
        <div class="pdp-main" style="background-image:url('${escapeHtml(gallery[0])}')"></div>
        <div class="pdp-thumbs">
          ${gallery.map((g, i) => `<button type="button" class="pdp-thumb${i === 0 ? " active" : ""}" data-img="${escapeHtml(g)}" style="background-image:url('${escapeHtml(g)}')"></button>`).join("")}
        </div>
      </div>

      <div class="pdp-info reveal" data-delay="1">
        <p class="eyebrow">${escapeHtml(cat)}</p>
        <h1 class="pdp-title">${escapeHtml(name)}</h1>
        <div>
          <span class="rating">★★★★★</span>
          <span style="color:var(--text-muted);font-size:0.85rem">${product.rating} · ${product.reviews} <span>${escapeHtml(dict["pdp.reviews"])}</span></span>
        </div>
        ${activeChips}
        <div class="pdp-price">${formatPrice(product.price)}</div>

        <div class="variant-group">
          <div class="variant-label">${escapeHtml(variantLabel)}</div>
          <div class="variant-opts">${variantOpts}</div>
        </div>

        <div class="pdp-actions">
          <div class="qty">
            <button type="button" class="qminus" aria-label="minus">−</button>
            <input type="text" value="1" inputmode="numeric" aria-label="quantity" />
            <button type="button" class="qplus" aria-label="plus">+</button>
          </div>
          <button type="button" class="btn btn-fill btn-block" data-add>${escapeHtml(dict["pdp.add"])}</button>
        </div>

        <div class="accordion">
          <div class="acc-item open">
            <button type="button" class="acc-head"><span>${escapeHtml(dict["pdp.benefits"])}</span><span>+</span></button>
            <div class="acc-body">
              <ul style="list-style:disc;padding-left:18px;display:flex;flex-direction:column;gap:6px">
                ${benefits.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
              </ul>
            </div>
          </div>
          <div class="acc-item">
            <button type="button" class="acc-head"><span>${escapeHtml(dict["pdp.inci"])}</span><span>+</span></button>
            <div class="acc-body"><p>${escapeHtml(product.inci)}</p></div>
          </div>
          <div class="acc-item">
            <button type="button" class="acc-head"><span>${escapeHtml(dict["pdp.usage"])}</span><span>+</span></button>
            <div class="acc-body"><p>${escapeHtml(usage)}</p></div>
          </div>
        </div>
      </div>
    </div>

    <section class="section" style="padding-top:24px">
      <h2 class="section-title" style="text-align:left;font-size:1.8rem">${escapeHtml(dict["pdp.related"])}</h2>
      <div class="grid" style="margin-top:24px">
        ${getRelatedProducts(product).map((r, i) => {
          const rn = r.name[lang] || r.name.ua;
          return `<div class="card-wrap reveal"${i % 4 ? ` data-delay="${i % 4}"` : ""}><a href="product.html?id=${encodeURIComponent(r.id)}" class="card"><div class="card-media-wrap"><div class="card-media" style="background-image:url('${escapeHtml(r.image)}')"></div></div><div class="card-body"><span class="card-cat">${escapeHtml(categoryLabel(r.category, dict))}</span><span class="card-name">${escapeHtml(rn)}</span><span class="card-price">${formatPrice(r.price)}</span></div></a></div>`;
        }).join("")}
      </div>
    </section>`;

  // Sync the sticky mobile buy bar price if present.
  const sbPrice = document.querySelector(".sticky-buy .sb-price");
  if (sbPrice) sbPrice.textContent = formatPrice(product.price);

  // Re-wire the controls that live inside the freshly rendered markup.
  initAccordion();
  initQty();
  initToggles();
  initCartButtons();
  initReveal();
}

/* ---------- Init ---------- */
/* Run one init step. A failure in one step is logged and does not stop the
   others, so content (e.g. scroll-revealed cards) is never left hidden. */
function safe(name, fn) {
  try {
    fn();
  } catch (err) {
    console.error(`[sbc] ${name} failed:`, err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  safe("lang", () => applyLang(getLang()));
  safe("cart", updateCartBadge);

  // Data-driven pages render first, then shared behaviours bind.
  safe("catalog", renderCatalog);
  safe("catalogControls", initCatalogControls);
  safe("bestsellers", renderHomeBestsellers);
  safe("pdp", renderPDP);

  safe("langSwitch", () =>
    bindOnce(".lang button", "click", (b) => setLang(b.dataset.lang))
  );

  safe("menu", initMenu);
  safe("accordion", initAccordion);
  safe("faq", initFaq);
  safe("contactForm", initContactForm);
  safe("qty", initQty);
  safe("toggles", initToggles);
  safe("cartButtons", initCartButtons);
  safe("reveal", () => initReveal());
  safe("scrollFx", initScrollFx);
});
