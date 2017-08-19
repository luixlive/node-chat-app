const expect = require('expect');
const {Users} = require('./Users');

describe('Users', () => {
  let users;

  beforeEach(() => {
    users = new Users();
    users.users =[{
      id: '1',
      name: 'Mike',
      room: 'Node',
    }, {
      id: '2',
      name: 'Jen',
      room: 'React',
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node',
    }];
  });

  it('should add new user', () => {
    const users = new Users();
    const user = {
      id: '123',
      name: 'Luis',
      room: 'Office',
    };
    const resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should return names for the node course', () => {
    const userList = users.getUserList('Node');

    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('should return names for the react course', () => {
    const userList = users.getUserList('React');

    expect(userList).toEqual(['Jen']);
  });

  it('should remove a user', () => {
    const userId = '2';
    const user = users.removeUser(userId);

    expect(users.users.length).toBe(2);
    expect(user.id).toBe(userId);
  });

  it('should not remove user', () => {
    const user = users.removeUser('4');

    expect(users.users.length).toBe(3);
    expect(user).toNotExist();
  });

  it('should find user', () => {
    const userId = '1';
    const user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    const user = users.getUser('4');

    expect(user).toNotExist();
  });
});
