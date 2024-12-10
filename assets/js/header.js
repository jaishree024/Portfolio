burger=document.querySelector('.hamburger');
navbar=document.querySelector('.nav')
burger.addEventListener('click',()=>{
    navbar.classlist.toggle('v-resp');
})