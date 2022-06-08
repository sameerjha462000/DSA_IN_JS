/*
    Way no 2
*/


function stack(){
    // initialize data members
    this.data = [];
    // just mention functions you want to use
    this.push;
    // below 2 will also work
    // this.enqueue = this.push;
    // this.dequeue = this.pop;
    this.pop;
    this.isEmpty;
    this.peek;
    this.length;
    this.print;
}
stack.prototype.push = function (data){
    this.data.push(data);
}

stack.prototype.pop = function(){
    let removed = this.data.pop();
    return removed;
}
stack.prototype.isEmpty = function(){
    console.log(this.data.length === 0);
}
stack.prototype.peek = function(){
    console.log(this.data[this.data.length-1]);
    
}
stack.prototype.length = function(){
    return this.data.length;
}

stack.prototype.print = function(){
    console.log(this.data)
}

function queue(){
    this.data = [];

    // methods
    this.enqueue;
    this.dequeue;
    // we can also do below
    this.push = this.enqueue;
    this.pop = this.dequeue;
    this.length;
    this.peek;
    this.isEmpty;
    this.print;
}

queue.prototype.enqueue = function(data){
    this.data.push(data);
}

queue.prototype.dequeue = function(){
    let removed = this.data.shift();
    return removed;
}

queue.prototype.length = function(){
    return this.data.length;
}

queue.prototype.peek = function(){
    console.log(this.data[0]);
}

queue.prototype.isEmpty = function(){
    console.log(this.data.length === 0)
}

queue.prototype.print = function(){
    console.log(this.data);
}



/*
    let s = new stack();

    for(let i=0;i<10;i++){
        s.push(i+1);
    }

    s.print();

    for(let i=0;i<5;i++){
        s.pop();
    }

    s.print();

    console.log(s.length())
    s.isEmpty();
    s.peek();
*/
/*
    let q = new queue();
    q.push(1);
    q.push(2);
    q.push(3);
    q.push(4);
    q.push(5);
    for(let i = 6 ;i < 11;i++){
        q.enqueue(i);
    }
    q.print();

    for(let i = 0;i<5;i++){
        q.pop();
    }

    q.print();

    console.log(q.length());
    q.isEmpty();
    q.peek();
*/
