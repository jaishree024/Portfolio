console.log("hey")
burger=document.querySelector('.hamburger');
navbar=document.querySelector('.nav')
var x=1;
burger.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(x);
    x++;
    // navbar.classlist.toggle('v-resp');
    navbar.classList.toggle('v-resp')
    navbar.classlist.toggle('h-nav-resp');
})
console.log("end")