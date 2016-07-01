var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/demo-db');


// 1. Using the student model you made in the previous section, write a Node program to create a student in the DB.
// var Student = mongoose.model('Student', {
//   name: String,
//   link: {
//     website: String,
//     github: String
//   },
//   gender: String,
//   points: Number,
//   projects: [String]
//   }
// );
//
// var matt = new Student({
//   name: 'Matt',
//   links: {
//     website: 'https://github.com/mbrimmer83/matthewbrimmerwebsite',
//     github: 'https://github.com/mbrimmer83'
//   },
//   gender: 'male',
//   points: 15,
//   projects: [
//     'Sportakus',
//     'Draw Together',
//     'Tic Tac Toe',
//     'Movie App',
//     'Black Jack'
//   ]
// });
//
// matt.save(function(err) {
//   if (err) {
//     console.error(err.message);
//     console.error(err.errors);
//     return;
//   }
//   console.log('ID after save:', matt._id);
//   console.log('Saved matt!', matt);
//   process.exit();
// });


// 2. Write a program to find all students in the collection.
// var Student = require('./student');
// Student.find(function(err, students) {
//   if (err) {
//     console.error(err.message);
//     return;
//   }
//   console.log('Found:', students);
//   process.exit();
// });

// 3. Write a program to find the student you created by name.
var Student = require('./student');
Student.findOne({ name: 'Matt'}, function(err, matt) {
  if(err) {
    console.error(err.message);
    return;
  }
  console.log('Found Matt:', matt);
});
