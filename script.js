const mode = document.getElementById("mode");
const heading = document.getElementById("heading");
const desc = document.getElementById("desc");
const cardTitle = document.getElementById("cardTitle");
const cardText = document.getElementById("cardText");

mode.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        // ☀️ Light Mode content
        heading.textContent = "Light Mode";
        desc.textContent = "Light mode works best during the day.";
        cardTitle.textContent = "Why Light Mode?";
        cardText.textContent =
            "Light mode improves readability in bright environments.";
        mode.textContent = "🌞";
        document.title = "Light Mode";
    } else {
        // 🌙 Dark Mode content
        heading.textContent = "Dark Mode";
        desc.textContent = "Dark mode is easy on your eyes at night.";
        cardTitle.textContent = "Why Dark Mode?";
        cardText.textContent =
            "Dark mode reduces eye strain and saves battery.";
        mode.textContent = "🌜";
        document.title = "Dark Mode";
    }
});
git