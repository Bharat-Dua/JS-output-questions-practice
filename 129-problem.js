var God = {
  slogan: "waheguru",
};

var God2 = Object.create(God);

delete God2.slogan;

console.log(God2.slogan); // 'waheguru'

//* Note :- Object.create does two things : 1. Create a new object 2. Set the prototype of the new object to the object passed as the first argument. So, God2 is a new object and its prototype is God. So, God2 is a child of God. So, God2 inherits all the properties of God. So, God2.s logan is 'waheguru'.*/

//* means Object.create doesn't set the direct property of new object instead it sets into its prototype. and as know delete keyword can only delete direct object prop not prototype prop. So, God2.slogan is still 'waheguru'.
