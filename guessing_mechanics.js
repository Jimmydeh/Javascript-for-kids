const names = ["paard",
               "koe",
               "zebra",
               "gorilla"
                ];


function randomiser(){

  for (i = 0; i < names.length; i++){
return Math.floor(Math.random(i) * 4);
  }
}

var secret_word = names[randomiser()];
secret_word;


var secret_word_array = [];
var tostring = secret_word.toString();


while (secret_word_array.length < tostring.length){
  secret_word_array.push("_");

}

prompt(`Here's your ${secret_word_array} word, guess a letter. :)`)


