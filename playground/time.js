// January 1st 1970 00:00:00 am

const moment = require('moment');

const date = moment();
date.add(1, 'year').subtract(9, 'months');
console.log(date.format('MMMM Do, YYYY'));

console.log(date.format('hh:mm a'));
