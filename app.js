
const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => { 
        let now = new Date().getTime();
        console.log(now - prev, delay);
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}
document.querySelector("#center").addEventListener("mousemove",
    throttleFunction((dets) => {
       //your less repetion code is here
      var div= document.createElement("div");
      div.classList.add("imagediv");
      div.style.left=dets.clientX+'px';
      div.style.top=dets.clientY+'px';
      var img =document.createElement("img");
      img.setAttribute("src","image.jpg");
     div.appendChild(img);
      document.body.appendChild(div);
      gsap.to(img,{
        y:"0",
        ease:Power1,
        duration:.6
      });
      gsap.to(img,{
        y:"100%",
        delay:.6,
        ease:Power2,
       
      });

      setTimeout(
        function(){
div.remove();
        },2000
      )
    }, 400));



// document.querySelector("#center")
// .addEventListener("mousemove",function(dets){
// // console.log(dets.clientX,dets.clientY);
// console.log("card creation");
// })