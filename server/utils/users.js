/**
 * List of users in the app
 */
class Users {
  /**
   * Constructor to declare the array of users
   */
  constructor() {
    this.users = [];
  }
  /**
   * Add a user to the chat
   * @param {*} id
   * @param {*} name
   * @param {*} room
   * @return {user} The user added
   */
  addUser(id, name, room) {
    const user = {id, name, room};
    this.users.push(user);
    return user;
  }
  /**
   * Remove a user from the chat
   * @param {*} id
   * @return {user} The user removed
   */
  removeUser(id) {
    const user = this.getUser(id);
    this.users = this.users.filter((user) => user.id !== id);
    return user;
  }
  /**
   * Find a user in the chat
   * @param {*} id
   * @return {user} The user found
   */
  getUser(id) {
    return this.users.find((user) => user.id === id);
  }
  /**
   * Get a list with the names of the users
   * @param {*} room
   * @return {array} Array with the users names
   */
  getUserList(room) {
    const users = this.users.filter((user) => user.room === room);
    const namesArray = users.map((user) => user.name);

    return namesArray;
  }
}

module.exports = {Users};
