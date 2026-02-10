let box = document.querySelectorAll(".box")
let boxImg = document.querySelectorAll(".box img")

box.forEach(function(val) {

   val.addEventListener("mousemove", function (dat) {
  const rect = val.getBoundingClientRect();

  val.childNodes[3].style.left = dat.clientX - rect.left + "px";
  val.childNodes[3].style.top  = dat.clientY - rect.top + "px";
});

   val.addEventListener('mouseenter' , function(){
        val.childNodes[3].style.opacity = "1" 
   })
   val.addEventListener('mouseleave' , function(){
        val.childNodes[3].style.opacity = "0" 
   })
})