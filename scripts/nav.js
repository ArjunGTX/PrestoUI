const closeIcon = document.querySelector(".menu-close");
const openIcon = document.querySelector(".menu-open");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-link");

openIcon.addEventListener("click", () => nav.classList.add("nav-open"));
closeIcon.addEventListener("click", () => nav.classList.remove("nav-open"));
//code to close nav bar when clicked outside
document.addEventListener(
    "click",
    () => {
        if (nav.classList.contains("nav-open")) {
            nav.classList.remove("nav-open");
        }
    },
    true
);
//code to maintain active link
navLinks.forEach((navLink) =>
    navLink.addEventListener("click", (e) => {
        console.log(e.target);
        let activeLink = document.querySelector(".nav-link-active");
        activeLink && activeLink.classList.remove("nav-link-active");
        e.target.classList.add("nav-link-active");
    })
);
