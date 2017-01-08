//https://www.codewars.com/kata/help-the-bookseller/train/javascript

function stockList(listOfArt, listOfCat){
  const dictionary = {}
  let str = listOfArt.toString()
  let answer = ""
  let a = ""
  let number = ""
  let letter = str.match(/\b([A-Z])/g);
  
  if(str !== "") {
    number = str.match(/\d+/g).map(Number);
  }  else {
    number = ""
  }
  
  if(number !== "") {
    listOfCat.forEach(function(value, index) {
      if(!([value] in dictionary)) {
        dictionary[value] = 0
      }
    })
  }

  if(letter !== null) {
    letter.forEach(function(l, index) {
      if(l in dictionary) {
        dictionary[l] += number[index]
      }
    })
  }
  
  for (const key of Object.keys(dictionary)) {
   answer += ( "(" + key + " : " + dictionary[key] + ") - " );
 }
 a = answer.slice(0, -3)
 return a
}