const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

var id = '596517775ef4ff9d09c94073';

// var id = '59664603f1db4c3d0cc6624d1';
//
// if(!ObjectID.isValid(id)) {
//   console.log('ID not Valid');
// }

// Todo.find({
//   _id : id
// }).then((todos) => {
//   console.log('Todos', todos);
// })
//
// Todo.findOne({
//   _id : id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id Not Found');
//   }
//   console.log('Todo By ID', todo);
// }).catch((e) => console.log(e));

User.findById(id).then((user) => {
  if(!user) {
    return console.log('User Not Found');
  }
  console.log('User By ID', user);
}).catch((e) => console.log(e));
