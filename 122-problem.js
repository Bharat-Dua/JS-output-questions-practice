// input a.b.c.d.e
//* output :
// {
// a:{
//     b:{
//         c:{
//             d:e
//         }
//     }
// }

// }

const str = "a.b.c.d.e";
let arr = str.split(".").reduceRight((acc, next) => {
  return { [next]: acc };
});
console.log(arr);
// output :
/*
{
  a: {
    b: {
      c: {
        d: "e"
      }
    }
  }
}
 */
