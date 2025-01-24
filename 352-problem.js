let a = 10;
{
  let a = 20;
  {
    console.log(a); // Reference Error :- Cannot access 'a' before initialization
    let a = 30;
    console.log(a);
  }
}
console.log(a);
