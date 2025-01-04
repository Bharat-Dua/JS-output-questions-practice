let x = {
  value: 1,
  toString: function () {
    return this.value++;
  },
};

if (x == 1 && x == 2 && x == 3) {
  console.log("hello"); // 'hello'
}

//* valueOf

let x = {
  value: 1,
  toString: function () {
    return this.value++;
  },
};

if (x == 1 && x == 2 && x == 3) {
  console.log("hello");
}

/* for my knowledge 
 1. When using ==, JavaScript performs type coercion. For objects, it first calls valueOf, and if that doesn't return a primitive, it falls back to toString.

The **`valueOf`** and **`toString`** methods are both used to convert objects to primitives in JavaScript. However, they behave differently based on the type of the object or value.

Here’s a breakdown of the **differences** and how they work in various scenarios:

---

### **1. For Numbers and Strings**

#### **`valueOf`**
- **For Numbers**: Returns the primitive numeric value of a number object.
- **For Strings**: Returns the string itself when called on a string object.

#### **`toString`**
- **For Numbers**: Returns the number as a string.
- **For Strings**: Returns the string representation of the value (i.e., the same string).

#### Example:

```javascript
// Number case
let num = new Number(42);
console.log(num.valueOf()); // 42 (primitive number)
console.log(num.toString()); // "42" (string)

// String case
let str = new String("Hello");
console.log(str.valueOf()); // "Hello" (primitive string)
console.log(str.toString()); // "Hello" (string)
```

---

### **2. For General Objects**

#### **`valueOf`**
- For objects, the default `valueOf` method (if not overridden) simply returns the object itself, not a primitive.
- If you override `valueOf`, you can control how the object behaves when it’s coerced into a primitive.

#### **`toString`**
- For objects, the default `toString` method returns a string like `[object Object]`.
- If you override `toString`, you can define custom behavior for how the object is represented as a string.

#### Example:

```javascript
let obj = {};

// Default behavior
console.log(obj.valueOf()); // {} (the object itself)
console.log(obj.toString()); // "[object Object]"

// Custom behavior
let customObj = {
  valueOf() {
    return 42; // A custom primitive value
  },
  toString() {
    return "Custom Object";
  }
};

console.log(customObj.valueOf()); // 42
console.log(customObj.toString()); // "Custom Object"
```

---

### **3. How They Work in Type Coercion**

When JavaScript needs to convert an object into a primitive (for example, during string concatenation or numeric operations), it follows this process:

#### **3.1 Numeric Context**
- **Numeric operations** like addition or comparisons (`+`, `<`, `>`) will first try `valueOf`, and if `valueOf` doesn't return a primitive, it falls back to `toString`.

```javascript
let obj = {
  valueOf() {
    return 5;
  },
  toString() {
    return "5";
  }
};

console.log(obj + 2); // 7 (valueOf is used)
console.log(obj < 10); // true (valueOf is used)
```

#### **3.2 String Context**
- **String operations** like concatenation (`+`) will first try `toString`, and if `toString` doesn’t return a primitive, it falls back to `valueOf`.

```javascript
let obj = {
  toString() {
    return "Hello";
  },
  valueOf() {
    return 42;
  }
};

console.log("Message: " + obj); // "Message: Hello" (toString is used)
```

#### **3.3 If Neither Returns a Primitive**
- If neither `toString` nor `valueOf` returns a primitive, JavaScript throws a `TypeError`.

```javascript
let obj = {
  toString() {
    return this;
  },
  valueOf() {
    return this;
  }
};

console.log(obj + 2); // TypeError: Cannot convert object to primitive value
```

---

### **4. Primitive Types and Defaults**

- **Primitive types like strings and numbers already have default implementations:**
  - **`valueOf`** returns the primitive value directly.
  - **`toString`** converts the primitive value to a string.

```javascript
console.log((42).valueOf()); // 42
console.log((42).toString()); // "42"
console.log("Hello".valueOf()); // "Hello"
console.log("Hello".toString()); // "Hello"
```

- **For arrays**:
  - `valueOf` returns the array object itself.
  - `toString` converts the array to a string by joining its elements with commas.

```javascript
let arr = [1, 2, 3];
console.log(arr.valueOf()); // [1, 2, 3]
console.log(arr.toString()); // "1,2,3"
```

---

### **5. Overriding Behavior**
You can override either `valueOf` or `toString` (or both) in custom objects for specific behavior.

```javascript
let obj = {
  valueOf() {
    return 10; // Use this for numeric contexts
  },
  toString() {
    return "Custom"; // Use this for string contexts
  }
};

console.log(obj + 5); // 15 (valueOf is used)
console.log("Message: " + obj); // "Message: Custom" (toString is used)
```

---

### **6. When to Use Which?**

- **Use `valueOf`** when your object is expected to behave like a number or for numeric contexts.
- **Use `toString`** when your object is expected to behave like a string or for string contexts.

---

### **Key Differences**

| Aspect                 | `valueOf`                                  | `toString`                                   |
|------------------------|--------------------------------------------|---------------------------------------------|
| **Purpose**            | Returns a primitive value (preferably numeric). | Returns a string representation of the object. |
| **Default Behavior**   | Returns the object itself for non-primitives. | Returns `[object Object]` for non-primitives. |
| **Precedence**         | Used first in numeric contexts.            | Used first in string contexts.              |
| **Overriding**         | Useful for numeric-like objects.           | Useful for string-like objects.             |

--- 

### **Conclusion**
- Both `valueOf` and `toString` allow you to control how objects behave in specific operations.
- The primary difference lies in when they are called:
  - `valueOf` is used for numeric coercion.
  - `toString` is used for string coercion.
- JavaScript automatically falls back to one if the other doesn’t return a primitive.

 
*/
