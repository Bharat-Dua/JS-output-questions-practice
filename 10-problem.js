function showModal() {
  console.log(showModal.timeout);
}

showModal(); // undefined bcoz at this time there is no timeout prop
showModal.timeout = 200;
showModal.timeout = 100;
showModal(); // 100 bcoz if we try to assign the multiple value to same key then last one will be assigned
