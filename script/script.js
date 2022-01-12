let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');
let contenPr = document.querySelector('.principal');
let Slides = document.querySelectorAll('.slide');
let slideshowc = document.querySelector('.principal #slideshow');
let carTitle = document.querySelector('.titulo');


contenPr.onmouseover=()=>{ 
   /* Slides[0].style.opacity= "1";
   Slides[1].style.opacity= "1"; */
} 
contenPr.onmouseout=()=>{ 
/*    Slides[0].style.opacity= "0";
   Slides[1].style.opacity= "0";
}  */
}



menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
  /*  searchBtn.classList.remove('fa-times');
   searchForm.classList.remove('active'); */
}

addEventListener('DOMContentLoaded', ()=>{
   const imagenes =['./img/car.png','./img/car1.png',
   './img/car2.png','./img/car4.png']

   const titulos =['TOYOTA </br> ILUX 2018','SUZUKI  </br>SWIFT 2019',
   'HONDA  </br> CIVIC 2018','RENAULT  </br> KWID 2016']


   let i =1

   const img1 = document.getElementById('img1')
   const img2 = document.getElementById('img2')
   const divindicadores = document.querySelector('#indicadores')

   for (let index= 0; index < imagenes.length; index++){
      const div=document.createElement('div')
      div.classList.add('circles')
      div.id= index
      divindicadores.appendChild(div)
      
      div.addEventListener('click', ()=> {
      i=div.id;

      img2.src = imagenes[i]
      carTitle.innerHTML=titulos[i];
      const circulo_actual= Array.from(circulos).find(el => el.id ==i)
      Array.from(circulos).forEach(cir => cir.classList.remove('resaltado'))
      circulo_actual.classList.add('resaltado')

      img2.classList.add('active')
      i++
      if(i==imagenes.length){
         i=0
      }
         img1.src = img2.src
         img2.classList.remove('active')
         rgb= getAverageRGB(img2);
         slideshowc.style.backgroundColor='rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ','+ .9+')'  

      })


   }
   img1.src =imagenes[0]
   rgb= getAverageRGB(img1);
   slideshowc.style.backgroundColor='rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ','+ .9+')'
   const circulos= document.querySelectorAll('.circles')
   circulos[0].classList.add('resaltado')
   

   const slideshow = ()=>{
      console.log(carTitle.innerHTML);
      carTitle.innerHTML=titulos[i];


      img2.src = imagenes[i];
      const circulo_actual= Array.from(circulos).find(el => el.id ==i)
      Array.from(circulos).forEach(cir => cir.classList.remove('resaltado'))
      circulo_actual.classList.add('resaltado')

      img2.classList.add('active')
      i++
      if(i==imagenes.length){
         i=0
      }
      
      setTimeout(() =>{
         img1.src = img2.src
         img2.classList.remove('active')

         rgb= getAverageRGB(img1);
         slideshowc.style.backgroundColor='rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ','+ .9+')';

         rgb= getAverageRGB(img2);
         slideshowc.style.backgroundColor='rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ','+ .9+')';

      }, 100)
   }
   setInterval(slideshow,5000)

   
 
   
}


)


function getAverageRGB(imgEl) {

   var blockSize = 5, // only visit every 5 pixels
       defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
       canvas = document.createElement('canvas'),
       context = canvas.getContext && canvas.getContext('2d'),
       data, width, height,
       i = -4,
       length,
       rgb = {r:0,g:0,b:0},
       count = 0;

   if (!context) {
       return defaultRGB;
   }

   height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
   width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

   context.drawImage(imgEl, 0, 0);

   try {
       data = context.getImageData(0, 0, width, height);
   } catch(e) {
       /* security error, img on diff domain */
       return defaultRGB;
   }

   length = data.data.length;

   while ( (i += blockSize * 4) < length ) {
       ++count;
       rgb.r += data.data[i];
       rgb.g += data.data[i+1];
       rgb.b += data.data[i+2];
   }

   // ~~ used to floor values
   rgb.r = ~~(rgb.r/count);
   rgb.g = ~~(rgb.g/count);
   rgb.b = ~~(rgb.b/count);

   return rgb;

}