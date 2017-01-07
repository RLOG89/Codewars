//https://www.codewars.com/kata/how-many-presents/train/javascript

function countPresents(prod, presents){
  let totalPresTime = []
  let totalProd = 0
  let delivered = []
  
  presents.forEach(function(present) {
    let seconds = 0
    const n = present.split(':') 
    seconds += n[0] * 3600 + n[1] * 60 +n[2] *1
    totalPresTime.push(seconds)
  })
  totalPresTime.sort((a, b) => a - b)

  for(indProd in prod) {
    totalProd += prod[indProd] * 86400
  }

  for(var i = 0; i < totalPresTime.length; i++) {
    if (totalProd >= totalPresTime[i]) {
      totalProd -= totalPresTime[i]
      delivered.push(totalPresTime[i])
    }
  }
  return delivered.length 
}