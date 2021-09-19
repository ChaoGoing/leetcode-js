



function getMinCountLoop(values, total, k) {
  let minCount = Number.MAX_SAFE_INTEGER
  let valueCount = values.length


  for(let i = k; i < valueCount; i++) {
    
     
    let restCount = getMinCountLoop()



  }
  
  return minCount
} 



function getMinCoinCountOfVlalue(values, total) {
  const minCount = getMinCountLoop(values, total, 0)
  return minCount === Number.MAX_SAFE_INTEGER ? -1 : minCount
}

getMinCoinCountOfVlalue([5,3], 11)