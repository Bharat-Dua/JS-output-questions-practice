const value = NaN;

switch (value) {
  case NaN:
    console.log("this is NaN");
    break;

  default:
    console.log("match failed"); // 'match failed' bcoz NaN is not equal to NaN
    break;
}
