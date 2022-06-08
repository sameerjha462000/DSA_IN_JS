/* 
    Way no 3
    // in this method helper functions can be shared.
*/


function stack(){
    this.data = [];
    this.code = 'stack';
    this.push = push;
    this.pop = pop;
    this.print = print;
    this.isEmpty = isEmpty;
    this.peek = peek;
    this.length = length;
}

function queue(){
    this.data = [];
    this.code = 'queue';
    this.push = push;
    this.pop = pop;
    this.print = print;
    this.isEmpty = isEmpty;
    this.peek = peek;
    this.length = length;
    this.enqueue = this.push;
    this.dequeue = this.pop;
}

function push(data){
    this.data.push(data);
}

function pop(){
    if(this.code === 'stack')
        this.data.pop();
    else
        this.data.shift();
}

function print(){
    console.log(this.data);
}

function isEmpty(){
    console.log(this.data.length===0)
}

function peek(){
    let show;
    if(this.code === 'stack'){
        show = this.data[this.data.length-1];
    }
    if(this.code === 'queue'){
        show = this.data[0];
    }
    console.log(show);
}

function length(){
    return this.data.length;
}

/*
    let q = new queue();
    for(let i = 0;i<10;i++){
        q.push(i+1);
    }

    q.print();
    q.peek();

    for(let i = 0;i<5;i++){
        q.pop();
    }

    q.print();
    q.peek();
*/
