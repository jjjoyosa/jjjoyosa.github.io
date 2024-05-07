const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  stdnum: { type: String, required: true },
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  age: { type: Number, required: true }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
