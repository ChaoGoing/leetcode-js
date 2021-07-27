// 插入排序
let a = [56, 55, 25, 98, 87, 44, 11, 1, 34, 47, 89, 50];
function insertSort() {
  for (let out = 1; out < a.length; out++) {
    let tmp = a[out];
    let inner = out;
    while (a[inner - 1] > tmp) {
        a[inner] = a[inner - 1];
        --inner;
    }
    a[inner] = tmp;
    console.log(a);
  }
};

// 选择排序
function selectSort(a) {
  let arr = a;
  let tmp, min;
  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
          min = j;
      }
    }
    if (i !== min) {
      tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
    }
  }
  return arr;
}
// let arr = [56, 55, 25, 98, 87, 44, 11, 1, 34, 47, 89, 50];
// let narr = selectSort(arr);
// console.log(narr);

// 希尔排序 - 标准版
function shellSort(arr) {

  let gap = 1
  while(gap < arr.length/3) {
    gap = 3 * gap + 1
  }
  console.log('init gap', gap)
  
  while(gap > 0) {
    console.log("gap", gap)
    for(let i = gap; i < arr.length; i++) {
      let tmp = a[i];
      let inner = i - gap;
      while(inner>=0 && arr[inner] > tmp) {
        arr[inner + gap] = arr[inner]
        inner -= gap
      }
      arr[inner+gap] = tmp
    }
    gap = parseInt(gap / 3)
  }

}

// 希尔排序 - 简易理解版
function shellSort_2(arr) {

  let gap = 1
  while(gap < arr.length/3) {
    gap = 3 * gap + 1
  }
  
  while(gap > 0) {
    let len = parseInt(arr.length/gap)
    for(let i=0; i < gap; i++) {
      for(let out = i + gap; out <= arr.length - gap + i; out+=gap) { // 这里的两层循环实际等同于（gap, len）的范围
        let tmp = a[out];
        let inner = out;
        while(arr[inner - gap] !== (void 0) && arr[inner - gap] > tmp) {
          arr[inner] = arr[inner - gap]
          inner -= gap
        }
        arr[inner] = tmp
      }
    }
    gap = parseInt(gap/3)
  }

}

let arr = [56, 55, 25, 98, 87, 44, 11, 1, 34, 47, 89, 50];
shellSort(arr);
console.log(arr);