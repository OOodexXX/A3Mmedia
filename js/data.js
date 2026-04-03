/* ============================================================
   A3M-PRINT - DATA.JS (النسخة النهائية المضمونة)
   ============================================================ */

const PRODUCTS = [
    { 
        id: 1, 
        name: "حقيبة ظهر سوداء - موديل 1", 
        price: 5500, 
        category: "back pack", 
        image: "/Shop Images/back pack/black back pack model1.png", 
        qualityAlert: false 
    },
    { 
        id: 2, 
        name: "حقيبة ظهر سوداء - موديل 2", 
        price: 5500, 
        category: "back pack", 
        image: "/Shop Images/back pack/black back pack model2.png", 
        qualityAlert: false 
    },
    { 
        id: 3, 
        name: "قبعة سوداء كلاسيك", 
        price: 1800, 
        category: "cap", 
        image: "/Shop Images/cap/black cap.png",
        qualityAlert: false 
    },
    { 
        id: 4, 
        name: "قبعة بيضاء", 
        price: 1800, 
        category: "cap", 
        image: "/Shop Images/cap/white cap.png",
        qualityAlert: false 
    },
    { 
        id: 5, 
        name: "هودي شتوي بيج", 
        price: 4500, 
        category: "hoodie", 
        image: "/Shop Images/hoodie/beige hoodie.png",
        qualityAlert: true 
    },
    { 
        id: 6, 
        name: "هودي شتوي أسود", 
        price: 4500, 
        category: "hoodie", 
        image: "/Shop Images/hoodie/black hoodie.png",
        qualityAlert: false 
    },
    { 
        id: 7, 
        name: "ميدالية مفاتيح مخصصة", 
        price: 800, 
        category: "keychain", 
        image: "/Shop Images/keychain/custom key.png",
        qualityAlert: false 
    },
    { 
        id: 8, 
        name: "كوب سيراميك أبيض", 
        price: 1200, 
        category: "mug", 
        image: "/Shop Images/mug/white mug.png",
        qualityAlert: false 
    },
    { 
        id: 9, 
        name: "دفتر ملاحظات A3M", 
        price: 1500, 
        category: "note boock", 
        image: "/Shop Images/note boock/note book.png",
        qualityAlert: false 
    },
    { 
        id: 10, 
        name: "حقيبة تغليف هدايا", 
        price: 500, 
        category: "Packaging bag", 
        image: "/Shop Images/Packaging bag/packaging bag.png",
        qualityAlert: false 
    },
    { 
        id: 11, 
        name: "تيشرت قطني أسود", 
        price: 2500, 
        category: "t shirt", 
        image: "/Shop Images/t shirt/black tshirt.png",
        qualityAlert: true
    },
    { 
        id: 12, 
        name: "تيشرت قطني أبيض", 
        price: 2500, 
        category: "t shirt", 
        image: "/Shop Images/t shirt/white tshirt.png",
        qualityAlert: false
    }
];

const TEMPLATES = [
    {
        id: "tpl_1",
        preview: "/Shop Images/social media/tpl_preview.png",
        fn: function() { console.log("تطبيق قالب التصميم الأول..."); }
    }
];

const T = { ar: { dir: 'rtl' }, en: { dir: 'ltr' } };

window.PRODUCTS = PRODUCTS;
window.TEMPLATES = TEMPLATES;
window.T = T;