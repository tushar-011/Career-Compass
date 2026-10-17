// ================== MODALS ==================
function openModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // Prevent scroll
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
    document.body.style.overflow = "auto";
}

// ================== FAQ ==================
function toggleFaq(element) {
    const answer = element.querySelector(".faq-answer");
    const span = element.querySelector("span");
    
    if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        answer.style.paddingBottom = "0px";
        span.innerText = "+";
    } else {
        answer.style.maxHeight = answer.scrollHeight + 20 + "px";
        answer.style.paddingBottom = "20px";
        span.innerText = "-";
    }
}

// ================== POPUP ==================
function showPopup(message){
    const popup = document.getElementById("errorPopup");
    const msg = document.getElementById("popupMessage");
    if (msg) msg.innerText = message;
    if (popup) popup.style.display = "flex";
}

function closePopup(){
    const popup = document.getElementById("errorPopup");
    if (popup) popup.style.display = "none";
}

// ================== THEME ==================
function toggleTheme() {
    const btn = document.querySelector(".theme-toggle");
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        btn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        btn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
}

window.onload = function() {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        const btn = document.querySelector(".theme-toggle");
        if (btn) btn.textContent = "☀️";
    }
};

// ================== SCROLL ==================
window.onscroll = function() {
    const btn = document.getElementById("scrollTopBtn");
    if (btn) {
        btn.style.display = document.documentElement.scrollTop > 400 ? "block" : "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// ================== 3D TILT ==================
const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 12; // Smoother tilt
        const rotateY = (centerX - x) / 12;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    });
});

// ================== CURSOR GLOW ==================
const glow = document.querySelector(".cursor-glow");
if (glow) {
    document.addEventListener("mousemove", (e) => {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
    });
}

// ================== FORM LOGIC ==================
document.addEventListener("DOMContentLoaded", function(){
    const registerForm = document.getElementById("registerForm");
    if(registerForm){
        registerForm.addEventListener("submit", function(e){
            e.preventDefault();
            let formData = new FormData(this);
            const role = formData.get("role");
            
            fetch("https://hook.eu1.make.com/mibw4agv2d74df24zftymd4hfutwe951", {
                method: "POST",
                body: formData
            })
            .then(() => {
                localStorage.setItem("userName", formData.get("name") || "User");
                localStorage.setItem("userRole", role);
                showPopup("Registration successful!");
                setTimeout(() => {
                    window.location.href = (role === "admin") ? "Admin.html" : "Student.html";
                }, 1500);
            })
            .catch(() => showPopup("Something went wrong!"));
        });
    }

    const loginForm = document.getElementById("loginForm");
    if(loginForm){
        loginForm.addEventListener("submit", function(e){
            e.preventDefault();
            let formData = new FormData(this);
            const role = formData.get("role");

            fetch("https://hook.eu1.make.com/mibw4agv2d74df24zftymd4hfutwe951", {
                method: "POST",
                body: formData
            })
            .then(() => {
                localStorage.setItem("userRole", role);
                showPopup("Login successful!");
                setTimeout(() => {
                    window.location.href = (role === "admin") ? "Admin.html" : "Student.html";
                }, 1500);
            })
            .catch(() => showPopup("Login failed!"));
        });
    }
});