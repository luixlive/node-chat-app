/**
 *
 */
class Users {
  /**
   *
   */
  constructor() {
    this.users = [];
  }
  /**
   *
   * @param {*} id
   * @param {*} name
   * @param {*} room
   */
  addUser(id, name, room) {
    const user = {id, name, room};
    this.users.push(user);
    return user;
  }
  /**
   *
   * @param {*} id
   */
  removeUser(id) {
    const user = this.getUser(id);
    this.users = this.users.filter((user) => user.id !== id);
    return user;
  }
  /**
   *
   * @param {*} id
   */
  getUser(id) {
    return this.users.find((user) => user.id === id);
  }
  /**
   *
   * @param {*} room
   */
  getUserList(room) {
    const users = this.users.filter((user) => user.room === room);
    const namesArray = users.map((user) => user.name);

    return namesArray;
  }
}

module.exports = {Users};
