const fs = require('fs');

// Asynchronous
fs.readFile('./hello.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('Sync:', data.toString());
});

// Synchronous
const file = fs.readFileSync('./hello.txt');
console.log('Async:', file.toString());

// APPEND
// fs.appendFile('./hello.txt', " Neboonia lu' Salam", err => {
//   if (err) {
//     throw err;
//   }
// });

// // WRITE
// fs.writeFile('./bye.txt', 'Arrivederci Cici', err => {
//   if (err) throw err;
// });

// // DELETE
// fs.unlink('./bye.txt', err => {
//   if (err) throw err;
// });
