/**
 * 位集 Bitset 是一种能以紧凑形式存储位的数据结构。

    请你实现 Bitset 类。

    Bitset(int size) 用 size 个位初始化 Bitset ，所有位都是 0 。
    void fix(int idx) 将下标为 idx 的位上的值更新为 1 。如果值已经是 1 ，则不会发生任何改变。
    void unfix(int idx) 将下标为 idx 的位上的值更新为 0 。如果值已经是 0 ，则不会发生任何改变。
    void flip() 翻转 Bitset 中每一位上的值。换句话说，所有值为 0 的位将会变成 1 ，反之亦然。
    boolean all() 检查 Bitset 中 每一位 的值是否都是 1 。如果满足此条件，返回 true ；否则，返回 false 。
    boolean one() 检查 Bitset 中 是否 至少一位 的值是 1 。如果满足此条件，返回 true ；否则，返回 false 。
    int count() 返回 Bitset 中值为 1 的位的 总数 。
    String toString() 返回 Bitset 的当前组成情况。注意，在结果字符串中，第 i 个下标处的字符应该与 Bitset 中的第 i 位一致。

*/

/**
 * 反转是一个O(n)的操作，通过sign记录是否需要反转，其他操作执行时基于是否反转进行变换
 */


/**
 * @param {number} size
 */
// var Bitset = function (size) {};
class Bitset {
    constructor(size) {
        this.list = (new Array(size)).fill(0)
        this.sign = false
    }
}

/**
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.fix = function (idx) {
    this.list[idx] = this.sign ? 0 : 1
    return this
};

/**
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.unfix = function (idx) {
    this.list[idx] = this.sign ? 1 : 0
    return this
};

/**
 * @return {void}
 */
Bitset.prototype.flip = function () {
    this.sign = !this.sign
    return this
};

/**
 * @return {boolean}
 */
Bitset.prototype.all = function () {
    for(const s of this.list) {
        if((this.sign && s === 1) || (!this.sign && s === 0)) {
            console.log("all => ", false)
            return this
        }
    }
    console.log("all => ", true)
    return this
};

/**
 * @return {boolean}
 */
Bitset.prototype.one = function () {
    for(const s of this.list) {
        if((this.sign && s === 0) || (!this.sign && s === 1)) {
            console.log("one => ", true)
            return this
        }
        console.log("one => ", false)
        return this
    }
};

/**
 * @return {number}
 */
Bitset.prototype.count = function () {
    let count = 0
    for(const s of this.list) {
        if((this.sign && s=== 0) || (!this.sign && s === 1)) {
            count += 1
        }
    }
    console.log("count =>", count)
    return this
};

/**
 * @return {string}
 */
Bitset.prototype.toString = function () {
    let str = ''
    for(const s of this.list) {
        str += this.sign ? (s === 0 ? 1 : 0 ) : s
    }
    console.log("tostring =>", str)
    return this
};

/**
 * Your Bitset object will be instantiated and called as such:
 * var obj = new Bitset(size)
 * obj.fix(idx)
 * obj.unfix(idx)
 * obj.flip()
 * var param_4 = obj.all()
 * var param_5 = obj.one()
 * var param_6 = obj.count()
 * var param_7 = obj.toString()
 */

const bs = new Bitset(5); // bitset = "00000".
bs.fix(3);     // 将 idx = 3 处的值更新为 1 ，此时 bitset = "00010" 。
bs.fix(1).toString();     // 将 idx = 1 处的值更新为 1 ，此时 bitset = "01010" 。
bs.flip().toString();     // 翻转每一位上的值，此时 bitset = "10101" 。
bs.all();      // 返回 False ，bitset 中的值不全为 1 。
bs.unfix(0).toString();   // 将 idx = 0 处的值更新为 0 ，此时 bitset = "00101" 。
bs.flip().toString();     // 翻转每一位上的值，此时 bitset = "11010" 。
bs.one();      // 返回 True ，至少存在一位的值为 1 。
bs.unfix(0);   // 将 idx = 0 处的值更新为 0 ，此时 bitset = "01010" 。
bs.count();    // 返回 2 ，当前有 2 位的值为 1 。
bs.toString(); // 返回 "01010" ，即 bitset 的当前组成情况。
 