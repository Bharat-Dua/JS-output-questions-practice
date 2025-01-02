const one = false || {} || null;
const two = null || false || "";
const three = [] || 0 || true;

console.log(one, two, three); // [ {}, '', [] ] -> bcoz OR operator just look for first truthy value if all are false it just returns last one.
