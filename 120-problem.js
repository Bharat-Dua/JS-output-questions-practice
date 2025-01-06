
    const obj = {};

    Object.defineProperty(obj, "lang", { value: "js", enumerable: true });

    console.log(obj); // {}
    console.log(obj.lang); // "js"
