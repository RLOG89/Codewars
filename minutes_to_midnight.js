//https://www.codewars.com/kata/minutes-to-midnight/train/javascript

function minutesToMidnight(d){
  let midnight = new Date().setHours(24, 0, 0, 0)
  var mins = Math.round((midnight-d)/1000/60)
  return (mins !== 1) ? mins + ' minutes' : mins + ' minute'
}