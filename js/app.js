var n = 1;


function slider(){
    
    var slide = document.getElementById("header");
   var caminho1 ="url('images/web/bg1.jpg')";
   var caminho2 ="url('images/web/bg2.jpg')";
   var caminho3 ="url('images/web/bg3.jpg')";
   var caminho4 ="url('images/web/bg4.jpg')";
    
   if (n==1) {
       
       slide.style.backgroundImage = caminho2;
       document.getElementById("tit").innerHTML = "Teu sorriso é a nossa inspiração";
       n= 2;
   } else if (n ==2) {
       slide.style.backgroundImage = caminho3;
       document.getElementById("tit").innerHTML = "Nos oferemos tratamentos de qualidade";
       n = 3;
   } else if (n == 3) {
       slide.style.backgroundImage = caminho4;
       document.getElementById("tit").innerHTML = "Nos oferemos tratamentos de qualidade";
       n = 4;
   } else if (n ==4) {
       slide.style.backgroundImage = caminho1;
       document.getElementById("tit").innerHTML = "Nos oferemos tratamentos de qualidade";
       n = 1;
   } 
   
    
}