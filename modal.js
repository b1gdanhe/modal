function showModal() {
  const modal = document.querySelector(".modal-container");
  if (modal.style.display == "none" || modal.style.display == "") {
    modal.style.display = "flex";
  } else {
    modal.style.display = "none";
  }
}
const openBtn = document.querySelector(".btn-open");
const closeBtn = document.querySelector(".close-modal");

// openBtn.addEventListener("click", () => {
//   showModal();
// });
// closeBtn.addEventListener("click", () => {
//   showModal();
// });
