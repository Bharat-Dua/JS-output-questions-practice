// i want if i add 0 to 10 i should get 10 or if 20 i should get 30

// but if i run this code i will get
const res = 10 + isNaN(2) ? 0 : 20; // 0
/* break this code 
const res= 10 + false ?0 :20
const res = 10+0?0:20
const res = 10 ?0 :20 // 10 is true
*/

//* Note:- + > ? has more precedency

const result = 10 + (isNaN(2) ? 0 : 20);
// bcoz () > +

console.log(result); // 30
