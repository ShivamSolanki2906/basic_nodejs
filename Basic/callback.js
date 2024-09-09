function callbackone(){
    console.log('Hello...!');   
}

function callbacktwo(a,b,callbackone){
   let result =   a + b;
   console.log(result); 
   callbackone() 
}

callbacktwo(9,7,callbackone)