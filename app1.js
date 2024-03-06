function getUserFromEmail(email) {
  if (!email.includes("@")) return null; // if the email does not contain a @, return null
  let name = email.split("@")[0]; // if it does, split the email at @ and take the first entry in consideration
  if (!name.includes(".")) return null; // if such part does not have a ., return null
  name = name.split("."); // if it does, you know what you have to do!
  name = name.map((element) => element[0].toUpperCase() + element.slice(1));
  return { firstName: name[0], lastName: name[1] };
}

// logs null
console.log(getUserFromEmail("not an email address"));

// logs null
console.log(getUserFromEmail("nodots@example.com"));

// logs { firstName: 'Jane', lastName: 'Doe' }
console.log(getUserFromEmail("jane.doe@example.com"));

const form = document.querySelector('[data-js="form"]');
const span = document.querySelector('[data-js="guessed-name"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.elements.email.value;

  span.textContent = `${getUserFromEmail(email).firstName} ${
    getUserFromEmail(email).lastName
  }`;
  e.target.reset();
  e.target.email.focus();
});
