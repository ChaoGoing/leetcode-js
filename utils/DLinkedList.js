function Node(element) {
  this.element = element;
  this.previous = null;
  this.next = null;
  this.getEle = function() {
    return this.element
  }
  this.getPre = function() {
    return this.previous
  }
  this.getNext = function() {
    return this.next
  }
}

function doubleLinkedList() {
  this.head = new Node("head");
  this.size = 0
}
doubleLinkedList.prototype = {
  insert(element) {
    let curr = this.head
    while(curr && curr.next) {
      curr = curr.next
    }
    let _node = new Node(element)
    curr.next = _node
    _node.previous = curr
    this.size++
  },
  add(index, element) {
    const newNode = new Node(element)
    const pre = this.get(index-1)
    if(!pre) {
      return false
    }
    const next = pre.next
    newNode.previous = pre
    newNode.next = next
    pre.next = newNode
    next && (next.pre = newNode)
    this.size++
  },
  find:function (item) {
      let currNode = this.head;
      while(currNode.element != item && currNode.next){
        currNode = currNode.next
      }
      return currNode
  },
  remove:function (item) {
      let removeNode = this.find(item);
      if(!item) {
        return false
      }
      this.size -= 1
      removeNode.previous.next = removeNode.next;
      removeNode.next.previous = removeNode.previous;
  },
  display:function () {
      let currNode = this.head;
      while( !(currNode.next == null)){
          console.log(currNode.next.element);
          currNode = currNode.next;
      }
  },
  reverse:function () {
      let currNode = this.findLast();
      while( currNode.previous != null){
          currNode = currNode.previous;
      }
  },
  findLast:function () {
      let currNode = this.head;
      while( !(currNode.next == null)){
          currNode = currNode.next;
      }
      return currNode
  },
  get(i) {
    let currNode = this.head.next
    let index = 0
    while(currNode) {
      if(i === index) {
        return currNode
      }
      if(!currNode.next) {
        break
      }
      index++
      currNode = currNode.next
    }
    return null
  },
  getLast() {
    return this.get(this.size-1)
  },
  getSize() {
    return this.size
  }
};

// let newLList = new doubleLinkedList();
// newLList.insert("陈子超","head");
// newLList.insert("周杰伦","陈子超");
// newLList.insert("李荣华","周杰伦");
// newLList.reverse();
// newLList.display();

module.exports = doubleLinkedList