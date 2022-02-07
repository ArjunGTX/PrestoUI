const snackbarLead = document.querySelector(".snackbar-lead");
const snackbarCenter = document.querySelector(".snackbar-center");
const snackbarLeadBtn = document.querySelector(".btn-lead-open");
const snackbarCenterBtn = document.querySelector(".btn-center-open");
const actionLeadBtn = document.querySelector(".btn-lead-close");
const actionCenterBtn = document.querySelector(".btn-center-close");

const toggleSnackbarClass = (snackbar, addClass, removeClass) => {
    snackbar.classList.add(addClass);
    snackbar.classList.remove(removeClass);
};

snackbarLeadBtn.addEventListener("click", () =>
    toggleSnackbarClass(
        snackbarLead,
        "show-snackbar-lead",
        "hide-snackbar-lead"
    )
);

actionLeadBtn.addEventListener("click", () =>
    toggleSnackbarClass(
        snackbarLead,
        "hide-snackbar-lead",
        "show-snackbar-lead"
    )
);

snackbarCenterBtn.addEventListener("click", () =>
    toggleSnackbarClass(
        snackbarCenter,
        "show-snackbar-center",
        "hide-snackbar-center"
    )
);

actionCenterBtn.addEventListener("click", () =>
    toggleSnackbarClass(
        snackbarCenter,
        "hide-snackbar-center",
        "show-snackbar-center"
    )
);
