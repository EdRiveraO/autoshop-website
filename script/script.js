let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
  /*  searchBtn.classList.remove('fa-times');
   searchForm.classList.remove('active'); */
}
