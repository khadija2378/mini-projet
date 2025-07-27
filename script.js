const input=document.getElementById("ajouter")
const btn=document.getElementById("button")
const ul=document.querySelector("ul")
btn.addEventListener("click",function(){
     const li=document.createElement("li")
     const butt=document.createElement("img")
     
     if(input.value!=""){ 
     li.textContent=input.value
     butt.src="./delete.png"
     butt.width=10;
     butt.height=10;   
     li.appendChild(butt)   
     ul.appendChild(li)
     
    }
    input.value=""
 li.addEventListener("click",function(){   
    li.classList.toggle("done")

    ç
   }) 
   butt.addEventListener("click",function(){   
    li.remove();
   }) 
})