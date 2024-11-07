// function myfirst() {
//   myDisplayer('Good bye');
// }

// function mySecond(callback) {
//   myDisplayer('Hello');
//   callback();
// }

// function myDisplayer(message) {
//   console.log(message);
// }
// mySecond(myfirst);

function setTime() {
  const header = document.getElementById('header');
  header.textContent = new Date().toString();
}

setInterval(setTime, 2000);
console.log('Progam Finish');
