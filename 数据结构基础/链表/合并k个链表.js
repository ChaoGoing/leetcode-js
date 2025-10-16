// import l from '../../js数据结构/单向链表'

function Node(element) {
    this.element = element;
    this.next = null;
}

function LinkedList() {
    this.head = new Node("head");
}

LinkedList.prototype = {
    add: function (item) {
        let node = new Node(item);
        let currentNode = this.head;
        while (currentNode.next != null) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
        return this
    },
    find: function (item) {
        let currentNode = this.head;
        while (currentNode.element != item) {
            currentNode = currentNode.next;
        }
        return currentNode;
    },
    insert: function (element, item) {
        let newNode = new Node(element);
        let current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    },
    display: function () {
        let currentNode = this.head;
        while (!(currentNode == null)) {
            console.log(currentNode);
            currentNode = currentNode.next
        }
    },
    findPrevious: function (item) {
        let currentNode = this.head;
        while (!(currentNode.next == null) && currentNode.next.element != item) {
            currentNode = currentNode.next;
        }
        return currentNode;
    },
    //链表反转方法一：改变每个结点next指向
    reverse: function () {
        let temp = null;
        let currentNode = this.head.next;
        this.head.next = null;
        while (currentNode != undefined) {
            pr = currentNode.next;
            // console.log("pr:"+JSON.stringify(pr));
            currentNode.next = temp;
            temp = currentNode;
            // console.log("temp:"+JSON.stringify(temp));
            currentNode = pr;
        }
        this.head.next = temp;
    },
    //链表反转方法二：新建一个链表，将原来链表的结点按顺序插入到新链表的第一个节点上
    reversion: function () {
        let nList = new LinkedList();
        let currentNode = this.head;
        let nextNode;
        while (currentNode.next != undefined) {
            nextNode = currentNode.next;
            nList.insert(nextNode.element, this.head.element);
            currentNode = currentNode.next;
        }
        return nList;
    },
    remove: function (element) {

        let preNode = this.findPrevious(element);
        if (preNode.next) {
            preNode.next = preNode.next.next;
        }
    },

}

let list1 = new LinkedList()
list1.add(1).add(2).add(3)
let list2 = new LinkedList()
list2.add(4).add(5).add(6)
let list3 = new LinkedList()
list3.add(7).add(8).add(9)

const lists = [list1, list2, list3]

function mergeList(lists, low, high) {
    // const len = lists.length
    // let interval = 1
    // while(interval < len){
    //     for(let i = 0; i < len - interval; interval*2){

    //     }
    // }
    if (low == high) return lists[low]
    let mid = parseInt((low + high) / 2)
    let left = mergeList(lists, low, mid),
        right = mergeList(lists, mid + 1, high)
    return merge(left, right)
}

function merge(l1, l2) {
    const l = new LinkedList()
    let node1 = l1.head.next
    node2 = l2.head.next
    node = l.head
    while (node1 && node2) {
        if (node1.element <= node2.element) {
            node.next = new Node(node1.element)  //错误写法：node = node1,这样写循环后也改变了node1的next指向
            node1 = node1.next
        } else {
            node.next = new Node(node2.element)
            node2 = node2.next
        }
        node = node.next
    }
    if (node1) {
        node.next = node1    //此处简化处理，直接拿list1的源节点接上
    }
    if (node2) {
        node.next = node2
    }
    return l
}

// merge(list1, list2).display()
mergeList(lists, 0, lists.length - 1).display()

