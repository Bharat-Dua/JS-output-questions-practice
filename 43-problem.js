function addItem(item, list) {
  return list.push(item);
}

const result = addItem("😂", ["😍"]);
console.log(result); // 2 -> bcoz here we are not returning list instead we are returning result of push method
