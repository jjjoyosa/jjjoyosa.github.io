const needle = require('needle');
async function testSaveStudent() {

    const students = [
    { stdnum: '8051495845', fname: 'Mary', lname: 'Jane', age: 25 },
    { stdnum: '8051495846', fname: 'John', lname: 'Doe', age: 30 },
    { stdnum: '8051495847', fname: 'Alice', lname: 'Smith', age: 28 },
    { stdnum: '8051495848', fname: 'Bob', lname: 'Johnson', age: 26 },
    { stdnum: '8051495849', fname: 'Emily', lname: 'Davis', age: 27 }
  ];

  try {
    for (const student of students) {
      const response = await needle('post', 'http://localhost:3000/save-student', student, { json: true });

      if (response.statusCode === 200 && response.body.inserted) {
        console.log(`Student saved.`);
      } else {
        console.error(`Failed to save.`);
      }
    }
  } catch (error) {
    console.error(error);
  }
}

testSaveStudent();
