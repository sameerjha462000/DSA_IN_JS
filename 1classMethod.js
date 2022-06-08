/*
    way no 1
*/

class stack{
    constructor(){
        this.data = [];
    }
    push(data){
        this.data.push(data);
    }
    pop(){
        let removed = this.data.pop();
        return removed;
    }
    peek(){
        if(this.data.length !== 0 )
            console.log(this.data[0]);
        else{
            console.log(null);
        }
        
    }
    isEmpty(){
        console.log(this.data.length === 0)
        return this.data.length === 0;
    }
    length(){
        return this.data.length;
    }

    print(){
        console.log(this.data);
    }

}


class queue{
    constructor(){
        this.data = [];
        // if you want to define something like push, pop etc then do this.push = this.enqueue
        // and this.pop = this.dequeue
    }
    enqueue(data){
        this.data.push(data);
    }
    print(){
        console.log(this.data);
    }
    isEmpty(){
        console.log(this.data.length === 0)
        return this.data.length === 0;
    }
    length(){
        return this.data.length;
    }
    dequeue(){
        let removed = this.data.shift();
        return removed;
    }
    
}
/*
    let s =  new stack();
    for(let i=0;i<10;i++){
        s.push(i+1);
    }
    s.print();

    for(let i=0;i<5;i++){
        s.pop();
    }
    s.print();

    s.peek();
    s.isEmpty();
    console.log(s.length());
*/
/*
    let q = new queue();
    for(let i = 0;i<10;i++){
        q.enqueue(i+1);
    }
    // q.push() will not work because it was not written in class queue
    // similarily q.pop() will also not work because .....
    q.print();
    console.log(q.length());
    for(let i = 0;i<5;i++){
        q.dequeue();
    }
    q.print();
    console.log(q.length());
    q.isEmpty();
*/



