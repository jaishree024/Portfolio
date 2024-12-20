console.log("hey")
let burger=document.querySelector('.hamburger');
let nav=document.querySelector('.nav');
let circle=document.querySelector('.circle');
let line_one=document.querySelector('.line_one');
let line_two=document.querySelector('.line_two');
let line_three=document.querySelector('.line_three');
var x=1;
burger.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(x);
    x++;
    // navbar.classlist.toggle('v-resp');
    nav.classList.toggle('v-resp');
    nav.classList.toggle('h-nav-resp');
    circle.classList.toggle('v-respc');
    line_one.classList.toggle('line_one');
    line_two.classList.toggle('line_two');
    line_three.classList.toggle('line_three');
})
console.log("end")