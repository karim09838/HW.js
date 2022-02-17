console.log(typeof 9);
console.log(typeof NaN); 
console.log(typeof 'String');
console.log(typeof true); 
console.log(typeof {name: 'Sally'});
console.log(typeof null);
console.log(typeof bqwa);


let name="Bob";

let number=1;

if ((typeof name)=="string") {
    console.log("Привет, "+name);
}
else {
    console.log("Ошибка, не тот тип данных");
}

if ((typeof number)=="string") {
    console.log("Привет, "+number);
}
else {
    console.log("Ошибка, не тот тип данных");
}


(typeof name)=="string"?console.log("Привет, "+name): console.log("Ошибка, не тот тип данных");

(typeof number)=="string"?console.log("Привет, "+number): console.log("Ошибка, не тот тип данных");


// ---------

let fDayOff;

let n=3;

if (n==6 || n==7) {
    fDayOff=true;
}
else{
    fDayOff=false;
}

console.log("Выходной:"+fDayOff);

//------------------

let obg = {
    user: "Oleg",
    cifra: 0
};

let qwe = "Anton";
let qwz = 13;

if (qwz % 2 == 0) {
    obg.user=qwe;
}

let flag=true;
for(let i=2;i<qwz;i++){

    if(qwz%i==0){
        flag=false;
    }
}

if(qwz==2||qwz==3){
    flag=true;
}

if (flag) {
    obg.cifra=qwz;
}

console.log(obg);

for(let i=1;i<=10;i++){
    console.log(i);
}