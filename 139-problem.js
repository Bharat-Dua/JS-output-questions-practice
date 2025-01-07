// stop the setinterval function
let flag = 0;

const id = setInterval(function () {
  console.log("InsideInterval");
  console.log(flag++);
  if (flag > 3) {
    clearInterval(id);
  }
}, 1000);

//* output :-
/* InsideInterval
0
InsideInterval
1
InsideInterval
2
InsideInterval
3 
*/
