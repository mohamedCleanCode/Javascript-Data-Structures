// node has two pieces are date and pointer
function Node(element) {
  this.element = element;
  this.next = null;
}

// linkedList
function LinkedList() {
  let length = 0;
  let head = null;

  // size method
  this.size = () => {
    return length;
  };
  // head method
  this.head = () => {
    return head;
  };
  // add method
  this.add = (element) => {
    let node = new Node(element); // new node
    if (head == null) {
      // if linked list is empty
      head = node; // head = first node
    } else {
      let currentNode = head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    length++;
  };
}

let arr = new LinkedList();
console.log(arr.size());
console.log(arr.head());
arr.add("ele-1");
console.log(arr.size());
console.log(arr.head());
arr.add("ele-2");
console.log(arr.size());
console.log(arr.head());
arr.add("ele-3");
console.log(arr.size());
console.log(arr.head());
