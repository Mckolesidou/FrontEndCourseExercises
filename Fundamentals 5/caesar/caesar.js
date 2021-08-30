const caesar = function(str,num) {
    if (num<0){
      return caesar(str,num+26)
    }  
    newStr="";
    for (let i =0; i<str.length; i++){
     
      let char = str[i];
      let code = str.charCodeAt(i);
      if (code>=65 && code<=90){
        char = String.fromCharCode(((code - 65 + num) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + num) % 26) + 97);
        }
      newStr += char;
    }
    return newStr;
  }

module.exports = caesar
