function generateEmail(user) {
  return `${user.firstName}.${user.lastName}@example.com`.toLowerCase();
}

const newUser = {
  firstName: "Jane",
  lastName: "Doe",
};

const email = generateEmail(newUser);
console.log(email);
