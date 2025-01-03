const dataMap = new WeakMap();
let person = { name: "JS" };

dataMap.set(person, "TVA");
console.log(dataMap.get(person)); // "TVA"
person = null;
console.log(dataMap.get(person)); // undefined

/* 
### **What is a WeakMap?**
A **`WeakMap`** is a special kind of Map in JavaScript where:
1. **Keys must be objects** (not strings, numbers, or other primitive values).
2. **Values can be anything** (objects, primitives, etc.).
3. The keys are "weakly referenced," meaning they do not prevent the object from being garbage-collected if it is no longer referenced elsewhere in the program.

---

### **Key Features of WeakMap**
1. **Only objects as keys:**
   - You cannot use strings, numbers, or other primitives as keys.
   
     let wm = new WeakMap();
     let obj = { name: "John" };

     wm.set(obj, "value"); // Works
     console.log(wm.get(obj)); // Output: value
     ```

2. **Weak references:**
   - If no other references to a key object exist, it can be garbage-collected.
  
     let wm = new WeakMap();
     let obj = { name: "John" };

     wm.set(obj, "value");
     console.log(wm.get(obj)); // Output: value

     obj = null; // The key is no longer referenced
     Now, the WeakMap automatically removes the entry.
     ```

3. **No iteration:**
   - WeakMaps do not have methods like `.keys()`, `.values()`, or `.entries()`.
   - This is because their keys can disappear at any time due to garbage collection.
   - You cannot iterate through a WeakMap.

4. **Useful for private data storage:**
   - WeakMap is often used to associate private data with objects.

---

### **How to Use WeakMap?**

#### **1. Basic Syntax**

let wm = new WeakMap();

let key = {};
wm.set(key, "some value"); // Set a key-value pair

console.log(wm.get(key)); // Output: some value

wm.delete(key); // Remove the key-value pair
console.log(wm.get(key)); // Output: undefined


#### **2. Key-Value Operations**
- **`.set(key, value)`**: Adds a key-value pair.
- **`.get(key)`**: Retrieves the value for a key.
- **`.delete(key)`**: Removes a key-value pair.
- **`.has(key)`**: Checks if a key exists.

let wm = new WeakMap();
let obj = { id: 1 };

wm.set(obj, "private data");
console.log(wm.has(obj)); // true
console.log(wm.get(obj)); // private data

wm.delete(obj);
console.log(wm.has(obj)); // false

### **Why Use WeakMap?**

#### **1. Private Data Storage**
You can use a WeakMap to associate private data with objects that shouldn't be accessible from outside.

const privateData = new WeakMap();

class User {
  constructor(name) {
    privateData.set(this, { name }); // Store private data
  }

  getName() {
    return privateData.get(this).name; // Access private data
  }
}

const user = new User("Alice");
console.log(user.getName()); // Output: Alice
No way to access `privateData` directly from outside!


#### **2. Memory Efficiency**
Since keys in WeakMap are weakly referenced, they do not prevent the associated object from being garbage-collected. This helps avoid memory leaks.


let wm = new WeakMap();
let element = document.createElement("div");

// Atta ch metadata to an element without leaking memory
wm.set(element, { clickCount: 0 });

// If `element` is removed from the DOM and has no other references:
element = null; // The WeakMap entry is automatically removed
```

---

### **WeakMap vs Map**

| Feature| WeakMap   | Map |

| **Key type**         | Only objects  | Any type (objects, primitives) |
| **Garbage collection** | Keys are weakly referenced    | Keys are strongly referenced   |
| **Iteration**        | Not possible  | Possible using `.keys()`, etc. |
| **Use case**    | Temporary/private data storage | General key-value mapping      |


### **Important Notes**
1. **WeakMap is not iterable.**
   - You cannot loop through it because keys are weak and might disappear.

2. **When to use WeakMap?**
   - Use it when you need to associate data with objects, and you don't want those objects to stay in memory longer than necessary (e.g., caching, private data storage).

---

### **Summary**
- A `WeakMap` stores key-value pairs where:
  - Keys must be objects.
  - Values can be anything.
  - Keys are weakly referenced (garbage-collected if no other references exist).
- Great for memory-efficient, private, and temporary data storage.

*/
