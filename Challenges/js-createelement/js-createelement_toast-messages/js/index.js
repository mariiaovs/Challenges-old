console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  const newMessage = document.createElement("li");
  newMessage.textContent = "I'm a toast message.";
  newMessage.classList.add("toast-container__message");
  toastContainer.append(newMessage);
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML = "";
});
