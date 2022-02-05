const cardDismiss = document.querySelector(".card-dismiss");
const iconDismiss = document.querySelector(".icon-dismiss");

iconDismiss.addEventListener(
    "click",
    () => (cardDismiss.style.display = "none")
);
