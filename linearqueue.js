class LinearQueue {
    constructor() {
      this.queue = [];
      this.front = -1;
      this.rear = -1;
    }
  
    enqueue(element) {
      if (this.front === -1) {
        this.front++;
      }
      this.rear++;
      this.queue[this.rear] = element;
    }
  
    dequeue() {
      if (this.front === -1 || this.front > this.rear) {
        console.log("Queue is empty");
        return null;
      }
      const dequeuedElement = this.queue[this.front];
      this.front++;
      return dequeuedElement;
    }
  
    display() {
      if (this.front === -1 || this.front > this.rear) {
        console.log("Queue is empty");
        return;
      }
      let queueString = "";
      for (let i = this.front; i <= this.rear; i++) {
        queueString += `${this.queue[i]} `;
      }
      console.log(queueString.trim());
    }
  }
  
  const queue = new LinearQueue();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  queue.enqueue(40);
  queue.display(); // output: 10 20 30 40
  queue.dequeue();
  queue.display(); // output: 20 30 40
  queue.dequeue();
  queue.dequeue();
  queue.dequeue();
  queue.display(); // output: Queue is empty
  