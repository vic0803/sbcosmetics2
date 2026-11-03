/* ============================================================
   Sophie Bilynska Cosmetics — Product data (single source of truth)
   Consumed by catalog.html (grid) and product.html (PDP).
   Add a new product here and it appears everywhere automatically.
   ============================================================ */

const SBC_PRODUCTS = [
  {
    id: "intimate-foam",
    category: "body",
    badge: null,
    rating: 4.8,
    reviews: 42,
    image: "assets/products/intimate-foam.jpg",
    gallery: ["assets/products/intimate-foam.jpg"],
    name: {
      ua: "Делікатна пінка для зовнішньої інтимної гігієни",
      en: "Gentle foam for external intimate hygiene"
    },
    price: 600,
    variants: {
      labelKey: "pdp.size",
      options: [
        { ua: "150 мл", en: "150 ml" },
        { ua: "250 мл", en: "250 ml" }
      ]
    },
    inci: "Aqua, Coco-Glucoside, Lactic Acid, Glycerin, Aloe Barbadensis Leaf Juice, Panthenol",
    benefits: {
      ua: ["М'яке очищення без порушення pH", "Молочна кислота та алое", "Без сульфатів і мила"],
      en: ["Gentle cleansing without disrupting pH", "Lactic acid and aloe", "Sulfate- and soap-free"]
    },
    usage: {
      ua: "Нанесіть невелику кількість пінки, обережно розподіліть і змийте теплою водою.",
      en: "Apply a small amount of foam, spread gently and rinse with warm water."
    }
  },
  {
    id: "eye-cream",
    category: "face",
    badge: "best",
    rating: 4.9,
    reviews: 118,
    image: "assets/products/eye-cream.jpg",
    gallery: ["assets/products/eye-cream.jpg"],
    actives: {
      ua: ["Гіалуронова кислота", "Кофеїн", "Вітамін E"],
      en: ["Hyaluronic acid", "Caffeine", "Vitamin E"]
    },
    name: {
      ua: "Зволожувальний крем для шкіри навколо очей та обличчя",
      en: "Hydrating cream for the eye area and face"
    },
    price: 1200,
    variants: {
      labelKey: "pdp.size",
      options: [
        { ua: "15 мл", en: "15 ml" },
        { ua: "30 мл", en: "30 ml" }
      ]
    },
    inci: "Aqua, Caprylic/Capric Triglyceride, Glycerin, Butyrospermum Parkii Butter, Caffeine, Tocopherol",
    benefits: {
      ua: ["Зменшує набряки та темні кола", "Делікатна формула для ніжної зони", "Кофеїн і вітамін Е"],
      en: ["Reduces puffiness and dark circles", "Gentle formula for the delicate area", "Caffeine and vitamin E"]
    },
    usage: {
      ua: "Вранці та ввечері наносьте легкими постукуваннями по зоні навколо очей.",
      en: "Morning and evening, tap gently around the eye area."
    }
  },
  {
    id: "scrub-soap",
    category: "body",
    badge: null,
    rating: 4.7,
    reviews: 64,
    image: "assets/products/scrub-soap.jpg",
    gallery: ["assets/products/scrub-soap.jpg"],
    name: {
      ua: "Мило-скраб з гвоздикою",
      en: "Clove exfoliating soap"
    },
    price: 270,
    variants: {
      labelKey: "pdp.size",
      options: [
        { ua: "80 г", en: "80 g" },
        { ua: "120 г", en: "120 g" }
      ]
    },
    inci: "Sodium Palmate, Sodium Cocoate, Aqua, Glycerin, Eugenia Caryophyllus (Clove) Powder, Parfum",
    benefits: {
      ua: ["М'яке відлущування", "Зігрівальний аромат гвоздики", "Ручна робота, малі партії"],
      en: ["Gentle exfoliation", "Warming clove aroma", "Handmade, small batch"]
    },
    usage: {
      ua: "Спіньте у вологих руках, помасажуйте шкіру та змийте теплою водою.",
      en: "Lather in wet hands, massage the skin and rinse with warm water."
    }
  },
  {
    id: "face-foam",
    category: "face",
    badge: null,
    rating: 4.8,
    reviews: 73,
    image: "assets/products/face-foam.jpg",
    gallery: ["assets/products/face-foam.jpg"],
    name: {
      ua: "Делікатна пінка для щоденного очищення обличчя",
      en: "Gentle daily facial cleansing foam"
    },
    price: 890,
    variants: {
      labelKey: "pdp.size",
      options: [
        { ua: "150 мл", en: "150 ml" }
      ]
    },
    inci: "Aqua, Coco-Glucoside, Glycerin, Panthenol, Chamomilla Recutita Flower Extract",
    benefits: {
      ua: ["Очищує без стягнутості", "Ромашка та пантенол", "Підходить для чутливої шкіри"],
      en: ["Cleanses without tightness", "Chamomile and panthenol", "Suitable for sensitive skin"]
    },
    usage: {
      ua: "Нанесіть на вологу шкіру, спіньте, помасажуйте та змийте.",
      en: "Apply to damp skin, lather, massage and rinse."
    }
  },
  {
    id: "serum-gel",
    category: "face",
    badge: "best",
    rating: 4.95,
    reviews: 131,
    image: "assets/products/serum-gel.jpg",
    gallery: ["assets/products/serum-gel.jpg", "assets/posters/serum-studio.jpg", "assets/posters/serum-ingredients.jpg"],
    line: { ua: "Дотик шовку", en: "Silk Touch" },
    actives: {
      ua: ["Гіалуронова кислота", "Алое вера (CO₂)", "Вітамін E", "D-пантенол", "Бетаїн"],
      en: ["Hyaluronic acid", "Aloe vera (CO₂)", "Vitamin E", "D-panthenol", "Betaine"]
    },
    name: {
      ua: "Дотик шовку — зволожувальна гель-сироватка для обличчя та зони навколо очей",
      en: "Silk Touch — hydrating gel serum for face and eye area"
    },
    price: 1200,
    variants: {
      labelKey: "pdp.size",
      options: [
        { ua: "30 мл", en: "30 ml" },
        { ua: "50 мл", en: "50 ml" }
      ]
    },
    inci: "Aqua, Sodium Hyaluronate, Aloe Barbadensis Leaf Extract, Glycerin, Betaine, Panthenol, Tocopherol (Vitamin E), Allantoin",
    benefits: {
      ua: ["Інтенсивне зволоження та сяйво", "Гіалуронова кислота та ніацинамід", "Легка нелипка текстура"],
      en: ["Intense hydration and radiance", "Hyaluronic acid and niacinamide", "Light non-sticky texture"]
    },
    usage: {
      ua: "Наносьте на очищену шкіру обличчя, шиї та декольте вранці та ввечері.",
      en: "Apply to cleansed skin of face, neck and décolleté morning and evening."
    }
  },
  {
    id: "wash-gel",
    category: "face",
    badge: null,
    rating: 4.7,
    reviews: 51,
    image: "assets/products/wash-gel.jpg",
    gallery: ["assets/products/wash-gel.jpg"],
    name: {
      ua: "Крем-гель для вмивання обличчя",
      en: "Cream-gel facial wash"
    },
    price: 450,
    variants: {
      labelKey: "pdp.size",
      options: [
        { ua: "200 мл", en: "200 ml" }
      ]
    },
    inci: "Aqua, Coco-Glucoside, Glycerin, Aloe Barbadensis Leaf Juice, Panthenol",
    benefits: {
      ua: ["М'яке щоденне очищення", "Зволожувальна кремова текстура", "Без сульфатів"],
      en: ["Gentle daily cleansing", "Hydrating creamy texture", "Sulfate-free"]
    },
    usage: {
      ua: "Нанесіть на вологу шкіру, помасажуйте та ретельно змийте.",
      en: "Apply to damp skin, massage and rinse thoroughly."
    }
  },
  {
    id: "day-cream",
    category: "face",
    badge: null,
    rating: 4.85,
    reviews: 89,
    image: "assets/products/day-cream.jpg",
    gallery: ["assets/products/day-cream.jpg", "assets/posters/cream-exploded.jpg", "assets/posters/cream-wheel.jpg"],
    line: { ua: "Базовий догляд", en: "Essential Care" },
    actives: {
      ua: ["Алое вера", "Олія мигдалю", "Зелений чай", "Протеїни пшениці", "Лаванда"],
      en: ["Aloe vera", "Almond oil", "Green tea", "Wheat protein", "Lavender"]
    },
    name: {
      ua: "Базовий догляд — крем для обличчя, шиї та декольте",
      en: "Essential Care — cream for face, neck and décolleté"
    },
    price: 950,
    variants: {
      labelKey: "pdp.size",
      options: [
        { ua: "50 мл", en: "50 ml" }
      ]
    },
    inci: "Aqua, Betaine, Aloe Barbadensis Leaf Extract, Prunus Amygdalus Dulcis Oil, Vitis Vinifera Seed Oil, Camellia Sinensis Leaf Extract, Hydrolyzed Wheat Protein, Panthenol, Lavandula Angustifolia Oil",
    benefits: {
      ua: ["Денне зволоження та захист", "Олія ши та вітамін Е", "Швидко вбирається"],
      en: ["Daytime hydration and protection", "Shea butter and vitamin E", "Absorbs quickly"]
    },
    usage: {
      ua: "Наносьте вранці на очищену шкіру обличчя, шиї та декольте.",
      en: "Apply in the morning to cleansed skin of face, neck and décolleté."
    }
  },
  {
    id: "toner-aloe",
    category: "face",
    badge: "new",
    rating: 4.8,
    reviews: 27,
    image: "assets/products/toner-aloe.jpg",
    gallery: ["assets/products/toner-aloe.jpg", "assets/posters/toner-ingredients.jpg"],
    line: { ua: "Фреш Алое", en: "Fresh Aloe" },
    actives: {
      ua: ["Гідролат алое вера", "Янтарна кислота 0,2%", "Олія виноградних кісточок", "Протеїни пшениці", "Бетаїн"],
      en: ["Aloe vera hydrosol", "Succinic acid 0.2%", "Grapeseed oil", "Wheat protein", "Betaine"]
    },
    name: {
      ua: "Фреш Алое — тонік для обличчя",
      en: "Fresh Aloe — facial toner"
    },
    price: 750,
    variants: {
      labelKey: "pdp.size",
      options: [
        { ua: "200 мл", en: "200 ml" }
      ]
    },
    inci: "Aqua (Aloe Barbadensis Hydrosol), Betaine, Succinic Acid, Vitis Vinifera Seed Oil, Hydrolyzed Wheat Protein, Lippia Citriodora Oil, Panthenol",
    benefits: {
      ua: ["Освіжає та тонізує", "Сік алое та алантоїн", "Готує шкіру до догляду"],
      en: ["Refreshes and tones", "Aloe juice and allantoin", "Preps skin for care"]
    },
    usage: {
      ua: "Нанесіть на ватний диск або долоні та розподіліть по обличчю після вмивання.",
      en: "Apply with a cotton pad or palms over the face after cleansing."
    }
  },
  {
    id: "shampoo",
    category: "hair",
    badge: null,
    rating: 4.75,
    reviews: 58,
    image: "assets/products/shampoo.jpg",
    gallery: ["assets/products/shampoo.jpg"],
    name: {
      ua: "Шампунь для об'єму волосся, зміцнення та стимулювання росту",
      en: "Shampoo for volume, strength and hair growth"
    },
    price: 800,
    variants: {
      labelKey: "pdp.size",
      options: [
        { ua: "250 мл", en: "250 ml" }
      ]
    },
    inci: "Aqua, Coco-Glucoside, Glycerin, Biotin, Panthenol, Rosmarinus Officinalis Leaf Extract",
    benefits: {
      ua: ["Об'єм і зміцнення", "Біотин та екстракт розмарину", "Без агресивних сульфатів"],
      en: ["Volume and strength", "Biotin and rosemary extract", "No harsh sulfates"]
    },
    usage: {
      ua: "Нанесіть на вологе волосся, спіньте, помасажуйте шкіру голови та змийте.",
      en: "Apply to wet hair, lather, massage the scalp and rinse."
    }
  },
  {
    id: "gel-mask",
    category: "face",
    badge: null,
    rating: 4.8,
    reviews: 36,
    image: "assets/products/gel-mask.jpg",
    gallery: ["assets/products/gel-mask.jpg", "assets/posters/patches-poster.jpg"],
    line: { ua: "Рідкі патчі", en: "Liquid Patches" },
    actives: {
      ua: ["Кофеїн", "Бетаїн і гіалуронова кислота", "Алантоїн і D-пантенол", "Алое вера і зелений чай", "Вітамін E"],
      en: ["Caffeine", "Betaine & hyaluronic acid", "Allantoin & D-panthenol", "Aloe vera & green tea", "Vitamin E"]
    },
    name: {
      ua: "Рідкі патчі — гель-маска для обличчя та зони навколо очей",
      en: "Liquid Patches — gel mask for face and eye area"
    },
    price: 485,
    variants: {
      labelKey: "pdp.size",
      options: [
        { ua: "100 мл", en: "100 ml" }
      ]
    },
    inci: "Aqua, Caffeine, Betaine, Sodium Hyaluronate, Allantoin, Panthenol, Aloe Barbadensis Leaf Extract, Camellia Sinensis Leaf Extract, Tocopherol",
    benefits: {
      ua: ["Миттєве зволоження та свіжість", "Ефект патчів для зони під очима", "Гіалуронова кислота"],
      en: ["Instant hydration and freshness", "Patch effect for the under-eye area", "Hyaluronic acid"]
    },
    usage: {
      ua: "Нанесіть тонким шаром на 10–15 хвилин, залишки вбийте подушечками пальців.",
      en: "Apply a thin layer for 10–15 minutes, tap in any residue with fingertips."
    }
  },
  {
    id: "night-cream",
    category: "face",
    badge: "new",
    rating: 4.9,
    reviews: 31,
    image: "assets/products/night-cream.jpg",
    gallery: ["assets/products/night-cream.jpg"],
    name: {
      ua: "Нічний крем для обличчя",
      en: "Night face cream"
    },
    price: 990,
    variants: {
      labelKey: "pdp.size",
      options: [
        { ua: "50 мл", en: "50 ml" }
      ]
    },
    inci: "Aqua, Caprylic/Capric Triglyceride, Glycerin, Butyrospermum Parkii Butter, Retinyl Palmitate, Tocopherol",
    benefits: {
      ua: ["Нічне відновлення шкіри", "Олія ши та вітаміни A, E", "Живильна насичена текстура"],
      en: ["Overnight skin repair", "Shea butter and vitamins A, E", "Rich nourishing texture"]
    },
    usage: {
      ua: "Наносьте ввечері на очищену шкіру обличчя за 30 хвилин до сну.",
      en: "Apply in the evening to cleansed facial skin 30 minutes before sleep."
    }
  }
];

/* Helpers used by catalog + PDP */
function getProductById(id) {
  return SBC_PRODUCTS.find((p) => p.id === id) || null;
}

function getRelatedProducts(product, limit = 4) {
  if (!product) return SBC_PRODUCTS.slice(0, limit);
  const sameCat = SBC_PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category);
  const others = SBC_PRODUCTS.filter((p) => p.id !== product.id && p.category !== product.category);
  return [...sameCat, ...others].slice(0, limit);
}

/* Format a price the way the markup already does: "1 200 ₴" */
function formatPrice(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0") + "\u00A0₴";
}
