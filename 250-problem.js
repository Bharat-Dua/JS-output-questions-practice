function show() {
  this.lang = "React";
  this.showLang = () => {
    console.log(this.lang); // 'React'
  };
}

const data = new show();
const fn = data.showLang;
fn();
