// my group warmup week_02_day_04

let  value ={
    1:{
        array:['a','e','i','o','u','l','n','r','s','t']
    },
    2:{
        array:['d','g']
    },
    3:{
        array:['b','c','m','p']
    },
    4:{
        array:['f','h','v','w','y']
    },
    5:{
        array:['k']
    },
    8:{
        array:['j','x']
    },
    10:{
        array:['q','z']
    }
}

function calculate (str){
    let transform = str.toUpperCase(); 
    transform.split(" "); 
    for (var i = 0; i < transform.length; i++) {
        value[transform[i]];
        console.log(transform.charAt(i));
    }
}

