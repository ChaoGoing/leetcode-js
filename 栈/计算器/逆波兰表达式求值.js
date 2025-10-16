/**
根据逆波兰表示法，求表达式的值。有效的运算符包括 +, -, *, / 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。
*/
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN1 = function (tokens) {
    const stack = []
    for (let i = 0; i < tokens.length; i++) {
        switch (tokens[i]) {
            case "+":
                
            case "-":
                
            case "/":
                
            case "*":
                
            default:
                stack.push(tokens[i])
        }
        console.log(stack)
    }
    return stack.pop()
};

function _handle(symbol, left, right){
    if(!left || !right) return 
    // return Math.round(eval(left + symbol + right)) 
    return eval(left + symbol + right)
}

var evalRPN = function (tokens) {
    const stack = [], symbols = ["+", "-", "*", "/"]
    let left, right
    for (let i = 0; i < tokens.length; i++) {
        if(_isToken(tokens[i])){
            right = stack.pop()
            left = stack.pop() 
            stack.push(_handle(tokens[i], left, right))
        }else{
            stack.push(tokens[i])
        }
        console.log(stack)
    }
    return stack.pop()

    function _isToken(t){
        return ["+", "-", "*", "/"].includes(t)
    }
}




console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))