console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessage = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (!tosCheckbox.checked) {
    return;
  }
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  successMessage.removeAttribute("hidden");
  alert("Form submitted");
  event.target.reset();
  event.target.firstName.focus();
});

tosCheckbox.addEventListener("input", () => {
  if (tosCheckbox.checked) {
    hideTosError();
  } else showTosError();
});
