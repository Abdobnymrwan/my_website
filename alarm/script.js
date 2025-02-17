// تحديث الساعة مع نظام 12 ساعة
function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";
    
    hours = hours % 12 || 12; // تحويل إلى 12 ساعة
    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");

    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
    checkAlarm();
}

setInterval(updateClock, 1000);
updateClock();

// تشغيل المؤقت
let timerInterval;
function startTimer() {
    let seconds = parseInt(document.getElementById("timer-input").value);
    if (isNaN(seconds) || seconds <= 0) return;

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        let minutes = Math.floor(seconds / 60);
        let sec = seconds % 60;
        document.getElementById("timer-display").textContent = `${minutes.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
        if (seconds === 0) {
            clearInterval(timerInterval);
            alert("انتهى الوقت!");
        }
        seconds--;
    }, 1000);
}

// ضبط المنبه
let alarmTime = null;
function setAlarm() {
    alarmTime = document.getElementById("alarm-time").value;
    if (alarmTime) {
        document.getElementById("alarm-status").textContent = `تم ضبط المنبه على ${alarmTime}`;
    }
}

// التحقق من وقت المنبه
function checkAlarm() {
    let now = new Date();
    let currentTime = now.getHours().toString().padStart(2, "0") + ":" + now.getMinutes().toString().padStart(2, "0");

    if (alarmTime === currentTime) {
        document.getElementById("alarm-sound").play();
        document.getElementById("alarm-status").textContent = "🔔 يرن المنبه!";
        alarmTime = null;
    }
}
