//---------task1

for (let i = 0; i < 10; i++) {
    let tr=document.createElement("tr");
    table.append(tr);
    for (let j = 0; j < 10; j++) {
        let td=document.createElement("td");
        if (i==0) {
           td.innerText=j
           tr.append(td)
        }
        else if (j==0) {
            td.innerText=i
           tr.append(td)
        }
        else{
            td.innerText= i*j
            tr.append(td)
        }
    }
    
}

//----------task2

const arr = [1, 1, 2, 2, 3];

function getUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i], i+1)==true) {
            arr.splice(i ,1)
            i--
        }
        
    }
    return arr
}
let arr2=getUnique(arr);
console.log(arr2)


//------------task3
let counter = (arg) => {
    return this.sum = (this.sum || 0) + arg;
}
counter(123)
counter(123)
counter(123)
console.log(counter(31));


//------------task4
class Calculator{
    a;
    b;
    c;
    read(){
        this.a=prompt("Number 1");
        this.setAction();
        this.b=prompt("Number 2");
    }

    setAction(){
        this.c=prompt("Symbol (+ - * / )")
    }

    doAction(){
        if (this.c=="+") {
            return this.sum();
        }
        else if (this.c=="-") {
            return this.min();
        }
        else if (this.c=="*") {
            return this.mul();
        }
        else if (this.c=="/") {
            return this.div();
        }
       else{
           return "Привет Кирилл"
       }

    }

    min(){
        return this.a-this.b
    }

    sum(){
        return Number(this.a)+Number(this.b)
        
    }

    mul(){
        return this.a*this.b
    }

    div(){
        return this.a/this.b
    }
}

let qwe=new Calculator()
qwe.read()
console.log(qwe.doAction())