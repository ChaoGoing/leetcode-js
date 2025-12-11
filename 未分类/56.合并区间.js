/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// 对于每一个区间，判断是否和结果数组的最后一个区间有重叠
// 
var merge = function(intervals) {
    const merged = [];
    intervals.sort((a, b) => a[0] - b[0]);

    for (const interval of intervals) {
        if (merged.length === 0 || merged[merged.length - 1][1] < interval[0]) {
            merged.push(interval);
        } else {
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1]);
        }
    }

    return merged;
};

const r = merge([[1,3],[2,6],[8,10],[15,18]]); 
console.log('r: ', r);