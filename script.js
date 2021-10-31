let linkModal = document.getElementById("link-modal");

linkModal.addEventListener("click", () => {
  let modalWindow = document.getElementById("modal-window");
  modalWindow.classList.remove("hidden");
});

let modalClose = document.getElementById("modal-close");

modalClose.addEventListener("click", () => {
  let modalWindow = document.getElementById("modal-window");
  modalWindow.classList.add("hidden");
});

let button = document.getElementById("button");

button.addEventListener("click", ()=> {
  console.log("Button clicked");
})

