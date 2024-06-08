// creating a server using the express module of nodejs
const express = require('express');
const fs = require('fs').promises;

const port = 1245;
const app = express();
const filePath = process.argv[2];

app.get('/', (req, res) => {
  res.header('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.header('Content-Type', 'text/plain');
  countStudents(filePath)
    .then((string) => {
      res.end(string.slice(0, -1));
    })
    .catch((error) => {
      res.end(error.message);
    });
});

app.listen(port, () => {
  console.log('server is running');
});

module.exports = app;

async function countStudents(path) {
  try {
    let string = `This is the list of our students\n`;
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
      string += `Number of students: ${rowsObj.length}\n`;
      for (const key in courses) {
        const number = courses[key].length;
        string += `Number of students in ${key}: ${number}. List: ${courses[key].join(', ')}\n`;
      }
    };
    return string;
  } catch (error) {
    throw new Error('Cannot load the database');
  };
};
