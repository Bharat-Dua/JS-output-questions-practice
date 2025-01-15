class Language {
  static library = "Vue";
  library = "React";
  log() {
    console.log(this.library); // 'React'
  }
  static log() {
    console.log(this.library); // 'Vue'
  }
}

const obj = new Language();
obj.log(); // 'react'
Language.log(); // 'js'

//* Note:- Static variable/function gets directly attached to classes

//* And the instance variable/function gets attached to the newly created object