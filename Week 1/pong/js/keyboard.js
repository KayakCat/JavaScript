//array of keys
var keys = {};

//keydown code
document.addEventListener(`keydown`, (e)=>{
    keys[e.key]=true;
    
})


//keyup code
document.addEventListener(`keyup`, (e)=>{
    keys[e.key]=false;
})
