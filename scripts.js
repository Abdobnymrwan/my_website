const translations = {
    en: {
        title: "Abdobnymrwan",
        subtitle: "Web Coding Channel",
        appsTitle: "Applications",
        facebookText: "Developed By",
        apps: {
            codeEditor: "Code Editor",
            xo: "XO Game",
            alarm: "Alarm",
            quran: "Quran",
            weather: "Weather",
        }
    },
    ar: {
        title: "عبدالبن عمران",
        subtitle: "قناة برمجيات الويب",
        appsTitle: "التطبيقات",
        facebookText: "تم التطوير بواسطة",
        apps: {
            codeEditor: "محرر الأكواد",
            xo: "لعبة XO",
            alarm: "المنبه",
            quran: "القرآن الكريم",
            weather: "الطقس",
        }
    }
};

function changeLanguage(lang) {
    document.getElementById("title").textContent = translations[lang].title;
    document.getElementById("subtitle").textContent = translations[lang].subtitle;
    document.getElementById("appsTitle").textContent = translations[lang].appsTitle;
    document.getElementById("facebookText").textContent = translations[lang].facebookText;

    // تحديث قائمة التطبيقات
    const appLinks = document.querySelectorAll("#appsList a");
    appLinks.forEach(link => {
        const key = link.getAttribute("data-key");
        link.textContent = translations[lang].apps[key];
    });

    // ضبط اتجاه الصفحة
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    // حفظ اللغة المختارة في التخزين المحلي
    localStorage.setItem("language", lang);
}

// تحميل اللغة المحفوظة عند فتح الصفحة
document.addEventListener("DOMContentLoaded", function () {
    const savedLang = localStorage.getItem("language") || "en"; // الإنجليزية هي الافتراضية
    changeLanguage(savedLang);
});
