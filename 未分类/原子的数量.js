/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function(formula) {
  const stacks = [{}]

  let index = 0
  while(index < formula.length) {
    let symbol = formula[index]

    if(symbol === '('){
      stacks.push({})
      index++
    }else if(symbol === ')') {
      symbol = formula[++index]
      let count = 0
      while(Number.isInteger(Number(symbol))) {
        count = count * 10 + Number(symbol)
        index++
        symbol=formula[index]
      } 
      console.log(count)
      const _map = stacks.pop()
      console.log("_map", _map)
      for(let key in _map) {
        _map[key] *= count
      }
      const secord_map = stacks[stacks.length-1]
      for(let key in _map) {
        if(!secord_map[key]) {
          secord_map[key] = _map[key]
        }else {
          secord_map[key] += _map[key]
        }
      }
    }else if(Number.isInteger(Number(symbol))){
      console.log("err num", symbol)
    }else { // is letter
      console.log(symbol)
      const _map = stacks[stacks.length-1]
      let count = 0
      ++index
      symbol = formula[index]
      while(Number.isInteger(Number(symbol))) {
        count = count * 10 + Number(symbol)
        index++
        symbol = formula[index]
      } 
      
      if(!_map[symbol]) {
        _map[symbol] = count || 1
      }else {
        _map[symbol] += count || 1
      }
    }

  }
  console.log(stacks)
};

countOfAtoms("Mg(OH)2")