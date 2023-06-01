class Stack{
    constructor(){
        this.items=[];
    }

    push(item){
        //this.items[this.items.length]=item;
        return this.items.push(item); 
    }

    pop(){
        return this.items.pop();
    }

    peek(){
        return this.items[this.items.length - 1];
    }

    size(){
        return this.items.length;
    }

    print(){
        console.log(this.items)
    }

}

