const expect = require('expect');
const {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    const from = 'some_user';
    const text = 'some_message';

    const res = generateMessage(from, text);

    expect(res).toInclude({from, text});
    expect(res.createdAt).toBeA('number');
  });
});
