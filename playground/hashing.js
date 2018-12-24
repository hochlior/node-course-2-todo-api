const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

var hashPassword = '$2a$10$32vn6RjBjtvWyLZYLGRqTej4/AtP8McBNHOfBQQonGtqCFlOKqQya';

bcrypt.compare(password, hashPassword, (err, res) => {
  console.log(res);
});

// var data = {
//   id: 10
// };

// var token = jwt.sign(data, '123abc');
//
// var decode = jwt.verify(token, '123abc');
//
// console.log('decode', decode);

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// var data = {
//   id: 4
// };
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
//
// var resultHash = SHA256(JSON.stringify(data) + 'somesecret').toString();
//
// if(resultHash == token.hash){
//   console.log('good');
// } else{
//   console.log('bad');
// }
