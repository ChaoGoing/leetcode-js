
/**
 * 给定一个字符串和一个字符串字典，找到字典里面最长的字符串，
 * 该字符串可以通过删除给定字符串的某些字符来得到。
 * 如果答案不止一个，返回长度最长且字典顺序最小的字符串。
 * 如果答案不存在，则返回空字符串。
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */



 /**
  * 复杂度： O(N^2)
  * 第一次不通过： 输出结果没有按字典顺序最小给出
  */
const checkExist = (word, target) => {
  let t = 0, w = 0, tlen = target.length, wlen = word.length;
  while(t < tlen && w < wlen) {
      if(word[w] === target[t]){
          w++    
      }
      t++;
  }
  return w === wlen
}

var findLongestWord = function(s, dictionary) {
  const len = dictionary.length;
  const _dictionary = dictionary.sort((a,b) => {
    return b.length - a.length
  }).sort((a,b) => { // 先根据长度，再根据字母大小排序
    if(a.length !== b.length) {
      return 1
    }
    return b < a ? 1 : -1
  })
  // console.log(_dictionary)
  for(let i = 0; i < len; i++) {
      if(checkExist(_dictionary[i], s)) {
          return _dictionary[i]
      }
  }
  return ''
};


console.log('abe' > 'abc')

const res = findLongestWord("abce", ["abe","abc"]);

/**
 * 通过二进制数生成给定字符串可能出现的所有字串
 * 
 */

const findLongestWord2 = () => {
  
}


 /**
  * 动态规划
  */
