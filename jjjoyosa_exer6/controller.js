const Student = require('./model');


const saveStudent = async (req, res) => {
  try {
    const { stdnum, fname, lname, age } = req.body;
    const student = new Student({ stdnum, fname, lname, age });
    await student.save();
    res.json({ inserted: true });
  } catch (err) {
    console.error(err);
    res.json({ inserted: false });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { fname } = req.body;
    await Student.updateOne({ fname: 'Mary Jane' }, { lname: 'Parker' });
    res.json({ updated: true });
  } catch (err) {
    console.error(err);
    res.json({ updated: false });
  }
};

const removeUser = async (req, res) => {
  try {
    const { stdnum } = req.body;
    await Student.deleteOne({ stdnum });
    res.json({ deleted: true });
  } catch (err) {
    console.error(err);
    res.json({ deleted: false });
  }
};

const removeAllUsers = async (req, res) => {
  try {
    await Student.deleteMany({});
    res.json({ deleted: true });
  } catch (err) {
    console.error(err);
    res.json({ deleted: false });
  }
};

const getUser = async (req, res) => {
  try {
    const { stdnum } = req.query;
    const user = await Student.find({ stdnum });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.json([]);
  }
};

const getAllMembers = async (req, res) => {
  try {
    const members = await Student.find({});
    res.json(members);
  } catch (err) {
    console.error(err);
    res.json([]);
  }
};

module.exports = { 
  saveStudent, 
  updateStudent, 
  removeUser, 
  removeAllUsers, 
  getUser, 
  getAllMembers 
};
