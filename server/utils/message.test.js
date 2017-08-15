const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    const from = 'some_user';
    const text = 'some_message';

    const res = generateMessage(from, text);

    expect(res).toInclude({from, text});
    expect(res.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate the correct location message object', () => {
    const from = 'some_user';
    const latitude = '100';
    const longitude = '200';
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;

    const res = generateLocationMessage(from, latitude, longitude);

    expect(res).toInclude({from, url});
    expect(res.createdAt).toBeA('number');
  });
});
