// we can't merge them

const Superhero = { name: "SilverSurfer" };
const Collector = { planet: "Xandar" };
Collector.__proto__ = Superhero;
console.log(Collector.name); // "SilverSurfer"
//should log SilverSurfer

//* to link two objects we can use __proto__
