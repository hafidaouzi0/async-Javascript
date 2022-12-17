//in this file i'm learning the fetch API

//in the fetch we passing an argument which is the ressource that we wanna fetch data from
//we have two fuctions , one for  resolve if it successfully returns data
//and one for reject when there is an error
//fetch returns a promise
fetch("todos.json").then((response)=>{
    console.log('resolved:',response);
   //the following method gets us data and parses it and it returns a promise
   //we know that a promise could be a a resolve or a reject 
  return  response.json();
}).then((data)=>{
    console.log(data);
}).catch(error=>{
    console.log('rejected',error);
});