// 1.Create the Controller Function

//Declare a new function that calls the built in getValues function the numbers
function getValue(){

    //make sure the alert is invisible
    //document.getElementById("alert").classList.add("invisible");

    //get user strong for the page
    /* Within the scope-block of the function Create variables that are defined as values contained within the elements possesing the id of the scanned the document*/
    let userString = document.getElementById("userString").value;
        
    /*Call the displayValues function using the parameter of numbers, which was passed through from the previous function*/
    let returnObj = palindromeCheck(userString);

    /*Within the else portion  of the statement enter the Sweet Alert*/
    displayMessage(returnObj);        
}



// 2. Create the Business Logic

//Check if string is palindrome

function palindromeCheck(userString){

    userString = userString.toLowerCase();

    //remove spaces and special characters
    /*Create a Regular Expression or regex, /, Matches all alpha-numeric values, /[\W], remove underscores, /[\W_], and make it global (go through the entire string), /[\W_]g*/
    let regex = /[^a-z0-9]/gi;

    let returnObj = {};

    userString = userString.replace(regex, "");

    //reverse the string
    /*Create a variable of "smallString" which*/
    let revString = [];

    for (let index = userString.length -1; index >= 0; index--) {
        
        revString += userString[index];
        
    }

    if (revString == userString){

        returnObj.msg = "Congratulations! You've entered a Palindrome, NOW GIVE THAT CAT A TACO!!!"

    } 
    else{
        returnObj.msg = "Aww man, that's not a Palindrome...NO TACO'S FOR YOU MR. KITTY!!!"
    }

    return returnObj;
}

//Create the View Function

/*Declare a function which calls the built in displayNumbers function and possesses the parameter of numbersArray.*/
function displayMessage(returnObj){

    /*Create a variable of results which will be deined as the value contained within the element possesing the Id of "results"*/
    document.getElementById("results").innerHTML = returnObj.msg;
    document.getElementById("msg"),innerHTML = `Your phrase reversed is: ${returnObj}`;
}

//ExtraCredit Use Tables