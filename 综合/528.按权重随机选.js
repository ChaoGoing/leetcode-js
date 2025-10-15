/**
 * 给你一个 下标从 0 开始 的正整数数组 w ，其中 w[i] 代表第 i 个下标的权重。

    请你实现一个函数 pickIndex ，它可以 随机地 从范围 [0, w.length - 1] 内（含 0 和 w.length - 1）选出并返回一个下标。选取下标 i 的 概率 为 w[i] / sum(w) 。

    例如，对于 w = [1, 3]，挑选下标 0 的概率为 1 / (1 + 3) = 0.25 （即，25%），而选取下标 1 的概率为 3 / (1 + 3) = 0.75（即，75%）。
 * 
*/

// 前缀和 + 搜索左侧边界的二分搜索
/**
 * @param {number[]} w
 */
var Solution = function (w) {
    this.w = w;
    this.prefixW = w.reduce(function (prev, curr) {
        return [...prev, curr + (prev[prev.length-1]||0)]
    }, [])
    this.max = this.prefixW[this.prefixW.length-1]
};

function getRandomIdx(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1))
}

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
    const randomNum = getRandomIdx(1, this.max)
    let left = 0, right = this.w.length
    while (left < right) {
        let mid = left + (right - left) / 2
        if(this.prefixW[mid] < randomNum) {
            left = mid + 1
        }else {
            right = mid
        }
    }
    return left
};

const s = new Solution([1,2,3,4]);
const map = {}
for (let i = 0; i < 1000; i++) {
    const idx = s.pickIndex()
    if(map[idx]) {
        map[idx]++
    }else {
        map[idx] = 1
    }
} 
console.log(map)
