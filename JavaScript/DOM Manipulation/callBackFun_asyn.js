function greet(callBack){
    setTimeout(() =>{
        console.log('Hello');
        callBack();

    },1000);
}

function message(){
    console.log('Welcome to the session!');
}

greet(message);