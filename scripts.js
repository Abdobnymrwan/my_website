particlesJS("background", {
    particles: {
        number: {
            value: 10,
            density: { enable: true, value_area: 300 }
        },
        color: { value: "#ffffff" },
        shape: { type: "triangle" },
        opacity: {
            value: 0.7, random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 4, random: true,
            anim: { enable: true, speed: 3, size_min: 0.3, sync: false }
        },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 1.5, direction: "none", out_mode: "bounce" }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true }
    },
    retina_detect: true
});

function changeLanguage(lang) {
    const titles = {
        "en": "Applications",
        "ar": "التطبيقات"
    };
    
    const apps = {
        "en": [
            "Code Editor", "XO", "Alarm", "Text to Speech", "Translator",
            "Multi Step", "QR Code", "Snake", "Clock", "Quran",
            "Weather", "Pong Game"
        ],
        "ar": [
            "محرر الأكواد", "إكس أو", "منبه", "تحويل النص إلى صوت", "مترجم",
            "خطوات متعددة", "كود QR", "لعبة الثعبان", "ساعة", "القرآن",
            "الطقس", "لعبة بونغ"
        ]
    };

    document.getElementById("apps-title").textContent = titles[lang];
    
    const appsList = document.getElementById("apps-list").children;
    for (let i = 0; i < appsList.length; i++) {
        appsList[i].querySelector("a").textContent = `${apps[lang][i]} | ${apps["en"][i]}`;
    }
}
