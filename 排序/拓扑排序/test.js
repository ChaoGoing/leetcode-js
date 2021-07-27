// class可以继承构造函数 
function Test1() {
  this.type = '1'
}

class Test2 extends Test1 {
  constructor() {
    super()
  }
  show() {
    console.log(this.type)
  }
}

const t = new Test2()
t.show()