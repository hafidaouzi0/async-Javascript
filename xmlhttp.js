const todos=(callback)=>{


    const request=new XMLHttpRequest();

    request.addEventListener('readystatechange',()=>{
       if(request.readyState===4&& request.status===200){
        const data=JSON.parse(request.responseText);
      callback(undefined,data);
       }
       else if(request.readyState===4)
       {
        callback("could not fetch data",undefined);
       }
    })
    
    //request.open('GET','todos.json');
    request.open('GET',"https://jsonplaceholder.typicode.com/todos/1"
    );
    request.send();


};

console.log(1);
console.log(2);

todos((err,data)=>{

    console.log("function fired");
if(err){
    console.log(err);
}
else{
    console.log(data);
}
});
console.log(3);
console.log(4);
