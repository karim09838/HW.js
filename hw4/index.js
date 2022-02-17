//-------task1
let User = {
    firstName: "Karim",
    sayHello(hello) {
      console.log(hello+", "+this.firstName);
    }
  };
  let hello = "Hello";
  
  
  

  let qwe = User.sayHello;
  qwe.call(User,hello);

//------task2

const valObjectA = { 
    a: 1,
    b: 2,
    c: { 		a: 1,  	b: 2 },
    d: {  			a: 10,  		b: { a: 20, b: 20}   }
       
   };
   
   let sum = 0
   
    function func(parm) {     
        for (const key in parm) {
        
            if(typeof parm[key] == 'object'){
               func(parm[key])
            }
            if(parm[key] > 0 ){
                sum += parm[key] 
             }
        } 
    }
   func(valObjectA)
    console.log(sum)


//-----------task3


    const valObject0 = {        
        values: [1, '2', 4, 8, '8',  3, 10, null, false],
      };
      
     function testBind  (){
      return this.filter((x) => ((typeof x === "number") && (x > 2) && (x < 10) && (x % 2 == 0)));
     
      }
        
    
    
     console.log(testBind.call(valObject0.values))
    