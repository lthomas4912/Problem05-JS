

function SwapCase(str){
    var output = "";
    for(var i = 0; i<str.length; i++){
        if(str[i] == str[i].toLowerCase()){
            output += str[i].toUpperCase();
        }else if (str[i == str[i].toUpperCase()]){
            output += str[i].toLowerCase();
        } else{
            output += str[i];
        }
    }
  
    return output;
}