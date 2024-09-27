const promise =new Promise((resolve,reject)=>{
    const randomNum=Math.floor(Math.random()*10);


     setTimeout(()=>{
      if(randomNum<4){
        resolve("You did it Write.");
      }else{
        reject("You missed this, Just Unlucky!");
      }
     },2000);
})


promise.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error)
})