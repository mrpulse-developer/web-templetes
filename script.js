// Sidebar JS
const links = document.querySelectorAll(".sidebar nav a");
const sections = document.querySelectorAll(".page-section");
const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".sidebar .toggle-btn");

// Sidebar toggle
if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");

        // icon change
        if (sidebar.classList.contains("collapsed")) {
            toggleBtn.classList.remove("fa-xmark");
            toggleBtn.classList.add("fa-angles-right"); // expand
        } else {
            toggleBtn.classList.remove("fa-angles-right");
            toggleBtn.classList.add("fa-xmark"); // collapse
        }
    });
}

// Sidebar links navigation
links.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        links.forEach((l) => l.classList.remove("active"));
        sections.forEach((s) => s.classList.remove("active"));
        link.classList.add("active");
        const targetId = link.getAttribute("data-target");
        document.getElementById(targetId).classList.add("active");
    });
});

// Explore Button JS
const exploreBtn = document.querySelector(".explore-btn");
if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
        document.querySelector("#templatesSection").classList.remove("hidden");
        document.querySelector("#home").scrollIntoView({ behavior: "smooth" });
    });
}

// Preview Panel JS
const previewPanel = document.getElementById("previewPanel");
const previewFrame = document.getElementById("previewFrame");

// Open Preview
function openPreview(url) {
    previewPanel.classList.add("active");
    previewFrame.src = url;
}

// Close Preview
function closePreview() {
    previewPanel.classList.remove("active");
    previewFrame.src = "";
}

// Menu toggle JS
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".navbar-links");
if (toggle) {
    toggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}
