const caesar = function(string, shift) {

    let message = '';
      for(let i=0; i<string.length;i++){
      let code = (string.charCodeAt(i));
      if(code >= 97 && code <=122){
          let newcode = (((code+shift-97)%26 +26) %26 ) +97;
          message += String.fromCharCode(newcode);
      }
      else if(code >= 65 && code <=90){
          let newcode = ( ( (code+shift-65)%26 +26) %26 ) +65;
          message += String.fromCharCode(newcode);
      }
      else{
          message += string[i];
      }
      
    }
  
    return message
  }  
  
module.exports = caesar