setTimeout(() => {
  console.log("JS is love");
}, Infinity); // 'JS is love' immediately

//* let's find out why
/* bcoz the limit of maximum delay in settimeout we can pass is 4294967296 ms = Math.pow(2,32) is a result +ve and -ve number */

console.log(Math.pow(2, 32) / 2 - 1); // we divide it by 2 bcoz we are only interested in positive number and subtract 1 bcoz count starts from 0.
