let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');
let contenPr = document.querySelector('.principal');
let Slides = document.querySelectorAll('.slide');

contenPr.onmouseover=()=>{ 
   Slides[0].style.opacity= "1";
   Slides[1].style.opacity= "1";
} 
contenPr.onmouseout=()=>{ 
   Slides[0].style.opacity= "0";
   Slides[1].style.opacity= "0";
} 




menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
  /*  searchBtn.classList.remove('fa-times');
   searchForm.classList.remove('active'); */
}
