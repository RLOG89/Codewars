//https://www.codewars.com/kata/can-santa-save-christmas/train/javascript

function determineTime(durations) {
  let seconds = 0
  durations.forEach(function(duration) {
    const n = duration.split(':')
    seconds += n[0] * 3600 + n[1] * 60 +n[2] *1
  })
  return (seconds > 86400) ? false : true
}