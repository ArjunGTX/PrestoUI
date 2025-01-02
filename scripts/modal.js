const openModalBtn = document.querySelector(".btn-open-modal");
const closeModalBtnList = document.querySelectorAll(".btn-close-modal");
const modal = document.querySelector(".modal");

openModalBtn.addEventListener("click", () => {
    modal.classList.remove("close-modal");
    modal.classList.add("open-modal");
});
closeModalBtnList.forEach((btn) => {
    btn.addEventListener("click", () => {
        modal.classList.remove("open-modal");
        modal.classList.add("close-modal");
    });
});
