/* Different variables for paswword.
Used camelCase for variables, as per best practice. 
Split the strings of password inputs, and created variables that could then be randomly selected. Like in the gandalf ting 
*/
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var lowerCase = "abcdefghijklmnopqrstuvwxyz"; 

var numbers = "0123456789";

var symbols = "!@#$%^&*()+=~`.,<>/?\|_-[]{};:"; 



//created objected for the confirm popups because this is easier/less code I think. Used boolean data type. Set length select to 8 (minimum)
var popupSelect = {
   yesUppercase: true,
   yesLowercase: true,
   yesSymbols: true,
   yesNumbers: true,
   lengthSelect: 8, 
}; 

//function for recording the user's response to p'word q's. And then generating the password given the differet inputs prescribed. But making sure, min length is 8 and max is 118. 


function userInputsGen () {
  var lengthSelect = prompt("How long do you want your password? min. of 8 characters and max of 118.") 
  var yesUppercase = confirm("Do you want capital letters in your password? Yes or no.");
  var yesLowercase = confirm("Do you want lower case letters in your password? Yes or no."); 
  var yesSymbols = confirm ("Do you want to have symbols in your password? Such as '$' or '%'.");
  var yesNumbers = confirm("Do you want numbers?");

  //now create an if else statement for the length.
  //what the if statement below is specifying is that two conditions need to be met for the function of the 'if' to proceed. If the conditions aren't met, then the else statement will happen. basically in a formal sense it's:  A⊦A^B or B⊦B^A   
  if (lengthSelect >= 8 && lengthSelect <= 118) { 
    //Below going to return whatever CORRECT value has been put into lengthSelect, by parsing input.
    lengthSelect = parseInt(lengthSelect);
    

    makepwd(lengthSelect, yesUppercase, yesLowercase, yesSymbols, yesNumbers);
  }
  else{
    alert("Put in correct length. Between 8-118.")
  };

};


//once all the above stuff is done and the length is all g then run the actual pwd creator, with the inputs prescribed by user. 
function makepwd (lgthGood, yesCaps,  yesSymbols, yesNumbers){
  //actual password variable is empty as it will be defined randomly below. 
  var pword = "";
  for (i = 0; i < lgthGood; i++); {
    var rCap = Math.floor(Math.random()* upperCase.length);
    var rLower = Math.floor(Math.random()* lowerCase.length);
    var rSymb = Math.floor(Math.random()* symbols.length);
    var rNum = Math.floor(Math.random()* numbers.length); 

    if (yesCaps){
      pword = pword + upperCase[rCap];
      yesCaps = false; 

    

    }else if (yesSymbols) {
        pword = pword + symbols[rSymb];
        yesSymbols = false;

    }else if (yesNumbers){
        pword = pword + numbers[rNum];
        yesNumbers = false; 


    }else { 
        pword = pword + lowerCase[rLower] ;
    };

  };
      document.getElementById("password").value= pword;
};
    


  




//this is the event listener for when the generate button is clicked. 
generateBtn.addEventListener("click", userInputsGen);










