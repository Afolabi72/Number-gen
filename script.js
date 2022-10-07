 const count = document.querySelector(".count")
 const generate = document.querySelector(".Generate")



 
 generate.addEventListener("click", generateNumber);


 window.addEventListener("load", generateNumber);


 function generateNumber() {

    
    const randomNum = Math.floor(Math.random() * 100 + 1);
     
    count.innerHTML = randomNum;
    

 };




