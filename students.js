// 1. Construct a Mongoose model for the student structure that we used yesterday. Example document:
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/demo-db');



var Student = mongoose.model('Student', {
  name: String,
  link: {
    website: String,
    github: String
  },
  gender: String,
  points: Number,
  projects: [String]
  }
);

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

matt.save(function(err) {
  if (err) {
    console.error(err.message);
    console.error(err.errors);
    return;
  }
  console.log('ID after save:', matt._id);
  console.log('Saved matt!', matt);
  process.exit();
});
