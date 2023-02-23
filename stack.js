function Stack() {
  // length
  this.count = 0;
  // empty object
  this.storage = {};
  // push method
  this.push = (value) => {
    this.storage[this.count] = value;
    this.count++;
  };
  // pop method
  this.pop = () => {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };
  // peek method
  this.peek = () => {
    return this.storage[this.count - 1];
  };
  // size method
  this.size = () => {
    return this.count;
  };
}
const obj1 = new Stack();
console.log(obj1);
obj1.push(10);
obj1.push(11);
obj1.push(12);
obj1.pop();
console.log(obj1);
console.log(obj1.peek());
console.log(obj1.size());
