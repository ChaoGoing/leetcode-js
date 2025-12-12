class NumMatrix {
    constructor(matrix) {
        if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
            this.m = 0; this.n = 0;
            return;
        }
        this.m = matrix.length;
        this.n = matrix[0].length;
        // bit 是 (m+1) x (n+1)，使用 1-based 索引
        this.bit = Array.from({ length: this.m + 1 }, () => Array(this.n + 1).fill(0));
        // 保存原始值以便计算 delta
        this.nums = Array.from({ length: this.m }, () => Array(this.n).fill(0));

        // 初始化：逐个调用 update 构造 BIT
        for (let i = 0; i < this.m; i++) {
            for (let j = 0; j < this.n; j++) {
                this.update(i, j, matrix[i][j]);
            }
        }
    }

    // 内部：将 (0,0) 到 (row,col) 的前缀和通过 BIT 读取
    _prefixSum(row, col) {
        if (row < 0 || col < 0) return 0;
        let sum = 0;
        for (let i = row + 1; i > 0; i -= i & -i) {
            for (let j = col + 1; j > 0; j -= j & -j) {
                sum += this.bit[i][j];
            }
        }
        return sum;
    }

    update(row, col, val) {
        if (this.m === 0 || this.n === 0) return;
        const delta = val - this.nums[row][col];
        this.nums[row][col] = val;
        for (let i = row + 1; i <= this.m; i += i & -i) {
            for (let j = col + 1; j <= this.n; j += j & -j) {
                this.bit[i][j] += delta;
            }
        }
    }

    sumRegion(row1, col1, row2, col2) {
        if (this.m === 0 || this.n === 0) return 0;
        // Inclusion-Exclusion 使用前缀和
        return this._prefixSum(row2, col2)
             - this._prefixSum(row1 - 1, col2)
             - this._prefixSum(row2, col1 - 1)
             + this._prefixSum(row1 - 1, col1 - 1);
    }
}
