// https://www.codewars.com/kata/5837fd7d44ff282acd000157

function countDays(d){
  var msDay = 1000 * 60 * 60 * 24;
  var today = new Date().setHours(0,0,0,0)
  var dSet = d.setHours(0,0,0,0)
    if(d < today) { 
      return "The day is in the past!"
  } else if (dSet === today) {
      return "Today is the day!"
  } else 
    var nd = Math.round((d - today)/ msDay, 0)
     return nd + " days"
}