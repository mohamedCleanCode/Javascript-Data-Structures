class Node {
  constructor(date, next = null) {
    this.date = date;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.length = 0;
  }
  // add method
  add(element) {
    let node = new Node(element);
    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.length++;
  }
}

let arr = new LinkedList();
console.log(arr.length);
console.log(arr.head);
arr.add("ele-1");
console.log(arr.length);
console.log(arr.head);
arr.add("ele-2");
console.log(arr.length);
console.log(arr.head);
arr.add("ele-3");
console.log(arr.length);
console.log(arr.head);
arr.add("ele-4");
console.log(arr.length);
console.log(arr.head);
arr.add("ele-5");
console.log(arr.length);
console.log(arr.head);
