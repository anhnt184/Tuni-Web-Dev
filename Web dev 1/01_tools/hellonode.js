const _ = require("lodash");
    //const ver = _.VERSION;
function hithere(array) {
    stringcombine = "";
        string1 = _.head(array);
        string2 = _.last(array);
       return stringcombine.concat(string2,string1);
  }
  module.exports = hithere;
  