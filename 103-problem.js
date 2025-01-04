//* optimize code
const data = new Array(100);

for (let i = 0; i < data.length; i++) {}

//* after

const data1 = new Array(100);
let length = data.length;
for (let i = 0; i < length; i++) {}
