var superHero = "SilverSufer";
let realHero = "Noren red";

console.log(window.superHero); // 'SilverSufer'
console.log(window.realHero); // 'undefined'

// when we create an variable using var keyword in top level it gets added into window object. on the other hand let,const variables do not gets added into window object.

//* Bcoz in js

/*               Global Environment record                 
                      /\
    Object Env. Record  Delcarative Env. Record
        var               classed,let ,const       
gets merged into window  doesn't gets merged into window
*/
