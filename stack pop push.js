class Stack {
    constructor(){
        this.data = [];
        this.top = 0;
    }
    push(element) {
      this.data[this.top] = element;
      this.top = this.top + 1;
    }
   length() {
      return this.top;
   }
   peek() {
      return this.data[this.top-1];
   }
   isEmpty() {
     return this.top === 0;
   }
   pop() {
    if( this.isEmpty() === false ) {
       this.top = this.top -1;
       return this.data.pop(); // removes the last element
     }
   }
   print() {
      var top = this.top - 1; // because top points to index where new    element to be inserted
      while(top >= 0) { // print upto 0th index
          console.log(this.data[top]);
           top--;
       }
    }
  
}
let s=new Stack();
console.log("Before Inserting elements TOP = ",s.top);
s.push(10);// 0th
s.push(20);//1st
s.push(30);//2 nd 
console.log("After Inserting elements TOP = ",s.top);
console.log("Lenghth of Stack = ",s.length());
console.log("Elements of Stack are :")
s.print();
s.pop();
console.log("After Pop element , Top  = ",s.top)
console.log("Elements of Stack are after pop:")
s.print();
