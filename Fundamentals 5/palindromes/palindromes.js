const palindromes = function(string) {
    let newString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
        
    }
    console.log (newString)
    if (string.toLowerCase() == newString.toLowerCase()){
        return true;
    } else {
        return false;
    }
}

module.exports = palindromes
