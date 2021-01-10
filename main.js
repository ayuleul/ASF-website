


var scrollButton=document.getElementById("scroll-button");
var contactButton=document.getElementById("con-us");
window.onscroll=function(){
   if(document.documentElement.scrollTop>500){
       scrollButton.style.display = "block";
   }
   else{
    scrollButton.style.display = "none";
   }
}

scrollButton.addEventListener('click',function(){
    document.documentElement.scrollTop = 0;
})

contactButton.addEventListener('click', function(){
    var hash=this.hash;
    window.location.hash=hash;
})

let magnifayImage=document.querySelectorAll('.cont');
magnifayImage.forEach(arrow => {
    arrow.addEventListener('mouseover',function(){
        let child=arrow.childNodes;
        child[1].style.opacity="0.5";
        child[3].innerHTML=("info about the image")
        child[3].style.display="block";
        child[3].classList.add('textView');
    })
    arrow.addEventListener('mouseout',function(){
        let child=arrow.childNodes;
        child[1].style.opacity="1";
        child[3].innerHTML=("")
        child[3].style.display="block";
        child[3].classList.remove('textView');
    })
})

let smLogo=document.querySelector(".home-logo");
window.addEventListener('resize', function () { 
    "use strict";
    window.location.reload(); 
});
console.log(window.innerWidth);
if(window.innerWidth<=720){
    smLogo.style.display="block";
}

function myfunction(){
    var x = document.getElementById("my_top_nav");
  if (x.className === "top_nav") {
    x.className += " responsive";
  } else {
    x.className = "top_nav";
  }
}

document.getElementById('login').addEventListener('click',()=>{
    document.querySelector('.model').style.display='flex';
})
document.querySelector('.close').addEventListener('click',()=>{
    document.querySelector('.model').style.display='none';
})
document.getElementById('signup').addEventListener('click',()=>{
    document.querySelector('.s-model').style.display='flex';
})
document.querySelector('.s-close').addEventListener('click',()=>{
    document.querySelector('.s-model').style.display='none';
})