function whatListAmIOn(actions){
  let naughty = 0
  let nice = 0
  actions.forEach(function(str) {
    if(str.substring(0,1).match(/[bfk]/i)) {
      naughty++
    }
    else if(str.substring(0,1).match(/[gsn]/i)) {
      nice++
    }
  })
  return naughty >= nice ? 'naughty' : 'nice'
}