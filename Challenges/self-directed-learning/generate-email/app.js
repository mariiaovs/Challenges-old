function generateEmail(user) {
  return `${user.firstName.trim()}.${user.lastName.trim()}@example.com`.toLowerCase();
}

const newUser = {
  firstName: "Jane",
  lastName: "Doe",
};

const email = generateEmail(newUser);
console.log(email);

const form = document.querySelector('[data-js="form"]');
const span = document.querySelector('[data-js="generated-email"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  span.textContent = generateEmail(data);
  e.target.reset();
  e.target.firstName.focus();
});
