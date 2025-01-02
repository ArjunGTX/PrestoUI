const closeIcon = document.querySelector(".menu-close");
const openIcon = document.querySelector(".menu-open");
const nav = document.querySelector("nav");
const sectionList = document.querySelectorAll(".section-head");

//toggling Navbar
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

//code to maintain active state of navLinks
const observationHandler = (entries) => {
    entries.forEach((entry) => {
        //selecting navLink whose href section is visible on viewport
        const link =
            entry.isIntersecting === true &&
            document.querySelector(`[href="#${entry.target.id}"]`);
        // selecting previously active navLink
        const activeLink = document.querySelector(".nav-link-active");
        //setting active state to navLink based on whether its corresponding section is visible on the screen
        if (entry.isIntersecting === true) {
            activeLink && activeLink.classList.remove("nav-link-active");
            link.classList.add("nav-link-active");
        } else link && link.classList.remove("nav-link-active");
    });
};
const observer = new IntersectionObserver(observationHandler);
sectionList.forEach((section) => observer.observe(section));
