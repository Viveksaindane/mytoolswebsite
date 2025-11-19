function toggleTheme() {
    document.body.classList.toggle("dark");

    // Save preference
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Load saved theme
window.onload = () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }
};
