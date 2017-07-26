var myHand = [3, 3, 7, 8, 9];
var wildCards=[];
var firstRound = true;

// looks through hand and finds all wild cards.
// assigns them a default substitution card of 2
function buildWildCards() {

  // Find indices of wild cards
  for(var i = 0 ; i < myHand.length; i++) {
    if(myHand[i] == 3) {
      console.log("Found wild card at index: " + i);
      wildCards.push({index: i, substituteCard: 2});
    }
  }

}

// checks to see if all substitution possibilities have
// been tried for a wild card.
function haveNotTriedAllCards() {

  if(firstRound == true) {
    firstRound = false;
    return true;
  }

  for(var i = 0; i < wildCards.length; i++) {
    if(wildCards[i].substituteCard != 2) {
      return true;
    }
  }

  // only get here if all wildCards are 2 again
  return false;
}

// Simple function to determine a straight from 5 cards
function isStraight(testArr) {
  var prev = testArr[0];
  for(i = 1; i < testArr.length; i++) {
    var curr = testArr[i];
    if(prev + 1 != curr){
      return false;
    }
    prev = curr;
  }
  return true;
}


// MAIN:

buildWildCards();


while(haveNotTriedAllCards()) {

  var testArr = myHand.slice(); // create copy of array

  // substitute  the wild cards in our testArr
  for(var i = 0; i < wildCards.length; i++) {
     testArr[wildCards[i].index] = wildCards[i].substituteCard;
  }

  // sort the array
  testArr.sort();

  console.log("Test Array: " + testArr);

  if(isStraight(testArr)) {
    console.log("Found Straight: " + testArr);
  }

  // changing wild card substitutions
  // this will eventually wrap back around so that all
  // wild cards are 2's again.  then haveNotTriedAllCards will hit

  for(var i = 0; i < wildCards.length; i++) {
    if(wildCards[i].substituteCard == 14) {
      wildCards[i].substituteCard = 2; // reset card to 2, continue onto next index
    } else {
      // increment
      wildCards[i].substituteCard++;
      break; // break out of for loop
    }
  }


}
