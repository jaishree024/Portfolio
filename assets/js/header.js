
let burger=document.querySelector('.hamburger');
let nav=document.querySelector('.nav');
let circle=document.querySelector('.circle');

var x=1;
burger.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(x);
    x++;
    nav.classList.toggle('v-resp');
    nav.classList.toggle('h-nav-resp');
    circle.classList.toggle('v-respc');
    
})
