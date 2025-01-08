// Split the string with comma and semicolon

const list = "applie,banana;orange";

const devices = list.split(/[,;]/); // we can pass regex to split the string from multiple delimiters

console.log(devices); // [ 'applie', 'banana', 'orange' ]
