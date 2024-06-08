// module contains a function countStudents that accepts
// an argument of path and reads the file at the path
// if the file is not found, it throws an error

const fs = require('fs').promises;

module.exports =  async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    
    handleData(data);
    function handleData(data) {
      const rows = data.split('\n');
      let rowsObj = rows.map(row => row.split(','));
      rowsObj = rowsObj.slice(1, -1);
      const courses = {};
      rowsObj.forEach((row) => {
        if (row[row.length - 1] in courses) {
          courses[row[row.length - 1]].push(row[0]);
        } else {
          courses[row[row.length - 1]] = [row[0]];
        };
      });
      console.log(`Number of students: ${rowsObj.length}`);
      for (const key in courses) {
        const number = courses[key].length;
        console.log(`Number of students in ${key}: ${number}. List: ${courses[key].join(', ')}`);
      }
    };
  } catch (error) {
    throw new Error('Cannot load the database');
  };
};
