let linkModal = document.querySelector("#link-modal");

linkModal.addEventListener("click", () => {
  let modalWindow = document.querySelector("#modal-window");
  modalWindow.classList.remove("hidden");
});

let modalClose = document.querySelector("#modal-close");

modalClose.addEventListener("click", () => {
  let modalWindow = document.querySelector("#modal-window");
  modalWindow.classList.add("hidden");
});

let button = document.querySelector("#button");

button.addEventListener("click", ()=> {
  console.log("Button clicked");
})

