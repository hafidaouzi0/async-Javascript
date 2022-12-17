//here this file to learn async and await 
//when we create a function it's obviously an ordinary function
//to make it asynchronous we should add async in front of the prantheses
//and now this is known as an asynchronous function
//whenever we call an asynchronous function that always returns a promise
const getTodos= async () => {
    //fetch returns a promise
    //so await stops javascript from assigning the value tothe response variable until the 
    //promise has resolved

  const response=await fetch('todos.json');
  const data=await response.json();
  if(response.status!==200){
    throw new Error('cannot fetch the data');
  }
  //console.log(response);
  //console.log(data);
return data;
}

//getTodos() returns a promise so we still gotta make then one more time

getTodos()
    .then(data=>{ console.log('resolved',data);})
    .catch(error=> { console.log('rejected:',error);});










//console.log(getTodos());

//const test=getTodos();//this returns a promise
//console.log(test);