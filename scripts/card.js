const cardDismiss = document.querySelector(".card-dismiss");
const iconDismiss = document.querySelector(".icon-dismiss");
const btnOpen = document.querySelector(".open-card");

iconDismiss.addEventListener(
    "click",
    () => {
        cardDismiss.style.display = "none";
        btnOpen.style.display = "block";
    }
);
btnOpen.addEventListener('click',() => {
    cardDismiss.style.display = 'block';
    btnOpen.style.display = 'none';
})