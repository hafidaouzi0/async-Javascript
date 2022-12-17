console.log(2);
console.log(3);
console.log(4);
setTimeout(()=>{
    console.log("event fired");
}
,2000);

console.log(5);
console.log(6);


const getTodos=(ressource)=>{

return new Promise((resolve,reject)=>{

    const request=new XMLHttpRequest();
    request.addEventListener('readystatechange',()=>{
        if(request.readyState===4 && request.status===200)
        {const data=JSON.parse(request.responseText)
            resolve(data);
        }
        else if (request.readyState===4){
reject("the data is rejected cuz there is an error")
        }
    }    
    )
    request.open('GET',ressource);
request.send();



}
)

} 

/*
getTodos('todos.json').then((data)=>{

}).catch((err)=>{
    console.log(err);
})
*/

//that s how we chain 2 promises or more 
getTodos('todos.json').then(data=>{
    console.log("promise 1:",data);
    return getTodos('sectodos.json');
}).then(data=>{
    console.log('promise 2:',data);
}).catch(err=>{
    console.log('here is the error we are catching ',err);
})