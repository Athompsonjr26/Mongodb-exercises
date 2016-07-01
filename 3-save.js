var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/2016-may-cohort');
var Student = require('./student');

var matt = new Student({
  name: 'Matt',
  links: {
    website: 'https://github.com/mbrimmer83/matthewbrimmerwebsite',
    github: 'https://github.com/mbrimmer83'
  },
  gender: 'male',
  points: 15,
  projects: [
    'Sportakus',
    'Draw Together',
    'Tic Tac Toe',
    'Movie App',
    'Black Jack'
  ]
});

console.log('ID before save:', matt._id);
matt.save(function(err) {
  if (err) {
    console.error(err.message);
    console.error(err.errors);
    return;
  }
  console.log('ID after save:', matt._id);
  console.log('Saved matt!', matt);
  process.exit();
})
