// users.js
let users = [];

let nextId = 1;

module.exports = {
  getUsers: () => users,
  addUser: (username, password, role) => {
    const newUser = {
      id: nextId,
      username,
      password,
      role
    };
    users.push(newUser);
    nextId++;
  }
};
