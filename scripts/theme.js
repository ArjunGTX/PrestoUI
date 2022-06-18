const toggleBtn = document.querySelector(".thumb");
const themeInput = document.querySelector("#theme");

const setTheme = (theme) => {
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.classList.add("right");
    localStorage.setItem("theme", "dark");
    return;
  }
  document.body.classList.remove("dark-mode");
  toggleBtn.classList.remove("right");
  localStorage.setItem("theme", "light");
};

const initTheme = () => {
  const prefersDark = window.matchMedia("prefers-color-scheme: dark");
  const theme = localStorage.getItem("theme");
  if (theme) {
    if (theme === "dark") themeInput.checked = true;
    setTheme(theme);
    return;
  }
  if (prefersDark) {
    themeInput.checked = true;
    setTheme("dark");
    return;
  }
  setTheme("light");
};
initTheme();

const handleThemeChange = (e) => {
  if (e.target.checked) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
};

themeInput.addEventListener("change", handleThemeChange);
