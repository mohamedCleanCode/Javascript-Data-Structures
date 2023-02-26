function Queue() {
  let collection = [];
  this.print = () => {
    console.log(collection);
  };
  // enqueue method
  this.enqueue = (ele) => {
    collection.push(ele);
  };
  // dequeue method
  this.dequeue = () => {
    return collection.shift();
  };
  // front method
  this.front = () => {
    return collection[0];
  };
  // isEmpty method
  this.isEmpty = () => {
    return collection.length === 0;
  };
  // size method
  this.size = () => {
    return collection.length;
  };
}

let queue = new Queue();
console.log(queue);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.front());
console.log(queue.size());
queue.print();
console.log(queue.isEmpty());
