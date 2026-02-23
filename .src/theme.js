const toggleBtn = document.getElementById("theme-toggle");
const icon = toggleBtn.querySelector("i");

if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
    icon.classList.replace("fa-moon", "fa-sun");
}

toggleBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");

    const isDark = document.documentElement.classList.contains("dark");

    icon.classList.replace(isDark ? "fa-moon" : "fa-sun", isDark ? "fa-sun" : "fa-moon");
    localStorage.setItem("theme", isDark ? "dark" : "light");
});