const stars = document.querySelectorAll(".star");

const setRating = (stars, index) => {
    for (let i of stars) {
        i.src = "../assets/icons/star-regular.svg";
    }
    for (let i = 0; i <= index; i++) {
        stars[i].src = "../assets/icons/star-solid.svg";
    }
};

stars.forEach((star, index) => {
    star.addEventListener("click", () => {
        setRating(stars, index);
    });
});
