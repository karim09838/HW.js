let names='Вася;Петя;Вова;Олег';

let arr1=[];
arr1=names.split(";");

console.log(arr1);


//------------

function hello2(name) {
    if (name) {
        console.log("Привет, "+(name))
    }

    else{
        console.log("Привет, гость")
    }
}

hello2("Василий")

hello2()

//-------------

function addOneForAll(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i]++
    }
    return numbers;
}


let val=addOneForAll(1,2,3,4);

console.log(val);


//------------
let counter=0
while (true) {
    counter++
    if (Math.random() > 0.9) {
        break;
    }
}

alert(counter)

// -----------

let size=8
let row=''

for (let i = 1; i <=size ; i++) {

   for(let j=1;j<=size;j++){
       if(j%2==1 && i%2==1){
           row+='b '
       }

       if(j%2==0 && i%2==1){
            row+='w '
       }




       if(j%2==1 && i%2==0){
           row+='w '
       }

       if(j%2==0 && i%2==0){
            row+='b '
       }
       
   }
    row+='\n'
}
console.log(row)

//-------------

let arr6=[]

for( let i = 0; i<7;i++){
    arr6[i]=Math.pow(i,3);
}

console.log(arr6)

