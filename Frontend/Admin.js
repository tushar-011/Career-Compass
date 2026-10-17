/* ---------------- SIDEBAR ---------------- */
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    if (sidebar) sidebar.classList.toggle("active");
    if (overlay) overlay.classList.toggle("active");
}

/* ---------------- THEME ---------------- */
function toggleTheme() {
    const body = document.body;
    const btn = document.querySelector(".theme-toggle");

    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
        btn.textContent = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        btn.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    }
}

/* ---------------- NOTIFICATIONS ---------------- */
function toggleNotifications() {
    const popup = document.getElementById("notificationPopup");
    if (popup) {
        popup.classList.toggle("active");
    }
}

/* ---------------- LOGOUT ---------------- */
function logout() {
    localStorage.clear();
    alert("Admin session terminated successfully.");
    window.location.href = "MainWeb.html";
}

/* ---------------- INITIAL LOAD ---------------- */
window.onload = function () {
    const saved = localStorage.getItem("theme");
    const btn = document.querySelector(".theme-toggle");

    if (saved === "light") {
        document.body.classList.add("light-mode");
        if (btn) btn.textContent = "☀️";
    }
};