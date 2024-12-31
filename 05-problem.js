const code = {
  type: "web",
};

const reactJS = {
  name: "js",
  web: true,
};

// select the not valid option to declare object

// A. reactJS[code.type] is valid
// B. reactJS[code["type"]] is valid
// C. code.type.web is not valid  <- is not valid way to access property
// D. All of them are valid
