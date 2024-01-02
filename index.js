function isPalindrome(word) {
  // Write your algorithm here
  //CREATES AN ARRAY FROM STRING
  const wordArray = word.split("")
  //REVERSE THE ARRAY
  const reverseWordArray = wordArray.reverse()

  //CREATE A STRING FROM REVERSED ARRAY

  const reverseWord = reverseWordArray.join("")

  //RETURNS THE REVERSED STRING

  if (word === reverseWord) {
    return true
  }
  else {
    return false
  }

}

/* 
  Add your pseudocode here

  function isPalindrome(word){
    const half = half length of word parameter
    const counter = COUNTER TO SEE IF ALL CHARACTERS MATCH OR NOT
    for(iterate through half the word from begin and end start)
    {
      if(word.charAt(POSITIVE INDEX) DOES NOT EQUAL word.charAt(NEGATIVE INDEX))
      {
        counter++ ADD TO COUNTER IF CHARACTERS AT OPOSITE INDEXES DO NOT MATCH
      }
    }
    
    if(COUNTER EQUALS 0)
      RETURN TRUE

    else()
      RETURN FALSE
  }
*/

/*
  Add written explanation of your solution here
  THIS FUNCTION HAS TWO VARIABLES INITIALIZED, ONE THAT EQUALS HALF THE LENGTH OF WORD PARAMETER AND ANOTHER FOR KEEPING A COUNTER
  THERE IS A FOR LOOP THAT ITERATES HALF THE LENGTH OF WORD PARAMETER AND CHECKS CHARACTERS AT OPOSITE ENDS OF WORD
  IF ALL OPOSITE CHARACTERS MATCH THEN THE FUNCTION SHOULD RETURN TRUE, IF NOT FALSE. IN THE END I DECIDED TO SWITCH TO THE FIRST SOLUTION
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
