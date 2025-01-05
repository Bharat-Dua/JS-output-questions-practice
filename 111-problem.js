console.log(false == []); // true
console.log(false == ![]); // true

// bcoz The ! (logical NOT) operator converts its operand to a boolean and negates it.
// Arrays are always truthy in JavaScript, even empty arrays ([] is truthy).
// So:

// ![] → false
