//-------------- task 2
class CustomString{
   reverse(myString){
        return myString.split("").reverse().join("");
   }

   ucFirst(myString){
    return myString.charAt(0).toUpperCase() + myString.slice(1);
   }
   ucWords(myString){
    return myString.replace(/^(.)|\s(.)/g, function ( $1 ) { return $1.toUpperCase ( ); } );
   }
}
const myString = new CustomString();
console.log(myString.reverse('qwerty'))
console.log(myString.ucFirst('qwerty'))
console.log(myString.ucWords('qwerty , qwerty , qwerty'))




//--------task 1
const studentArr = [{
    name: 'Сергей',
    surname: 'Войлов',
    ratingPoint: 1000,
    schoolPoint: 1000,
    course: 2,
},
{
    name: 'Татьяна',
    surname: 'Коваленко',
    ratingPoint: 880,
    schoolPoint: 700,
    course: 1,
},
{
    name: 'Анна',
    surname: 'Кугир',
    ratingPoint: 1430,
    schoolPoint: 1200,
    course: 3,
},
{
    name: 'Станислав',
    surname: 'Щелоков',
    ratingPoint: 1130,
    schoolPoint: 1060,
    course: 2,
},
{
    name: 'Денис',
    surname: 'Хрущ',
    ratingPoint: 1000,
    schoolPoint: 990,
    course: 4,
},
{
    name: 'Татьяна',
    surname: 'Капустник',
    ratingPoint: 650,
    schoolPoint: 500,
    course: 3,
},
{
    name: 'Максим',
    surname: 'Меженский',
    ratingPoint: 990,
    schoolPoint: 1100,
    course: 1,
},
{
    name: 'Денис',
    surname: 'Марченко',
    ratingPoint: 570,
    schoolPoint: 1300,
    course: 4,
},
{
    name: 'Антон',
    surname: 'Завадский',
    ratingPoint: 1090,
    schoolPoint: 1010,
    course: 3
},
{
    name: 'Игорь',
    surname: 'Куштым',
    ratingPoint: 870,
    schoolPoint: 790,
    course: 1,
},
{
    name: 'Инна',
    surname: 'Скакунова',
    ratingPoint: 1560,
    schoolPoint: 200,
    course: 2,
},
];

let arr=[];
class Student{
    constructor(enrolle = {}, id, isSelfPayment=true){
            this.id=id;
            Object.assign(this, enrolle);
            this.isSelfPayment=isSelfPayment;
            // rating(arr,tmp2)
          }

    listOfStudents(arr){
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i])
            
        }
    }
    
}

let tmp=new Student();

for (let i = 0; i < studentArr.length; i++) {
    arr[i]=new Student(studentArr[i],i+1)
    
}

tmp.listOfStudents(arr)
var tmp2=[];
for (let i = 0; i < arr.length; i++) {
    tmp2[i]=arr[i].ratingPoint
}





function rating(arr,tmp2) {
    for (let i = 0; i < 5; i++) {
       
        for (let j = 0; j < arr.length; j++) {
            if (Math.max(...tmp2)==arr[j].ratingPoint) {
                arr[j].isSelfPayment= false 
                if(Math.max(...tmp2)==tmp2[j])tmp2[j]=null
                break;
            }
            
        }
        
    }
}

rating(arr,tmp2)