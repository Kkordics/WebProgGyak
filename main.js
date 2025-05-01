function purchase(){
    
    const inputs = document.getElementById("inputs").querySelectorAll(".form-control");
    let valid = false;
    
    inputs.forEach(input => {
    
        
        if(valueValidation(input)){
            valid = true;
        }
        
   });

   
   if(valid == false){
    alert("Rendelés leadva!");
    window.open("/index.html", "_self");
   }
}
function valueValidation(input){
    
    
    if(input.type == "number"){
        
        if(input.value !== ""){
            input.style.border = "none";
            return false;
        }else{
            input.style.borderColor = "Red";
            input.style.borderWidth = "2px";
            return true;
        }
    
    }else if (input.type == "email")
    {   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(input.value !=="" && regex.test(input.value)){
            input.style.border = "none";
            return false;
        }else{
            input.style.borderColor = "Red";
            input.style.borderWidth = "2px";
            return true;
        }
    }else{
        if(input.value !=="" && input.value.length >10){
            input.style.border = "none";
            return false;
        }else{
            input.style.borderColor = "Red";
            input.style.borderWidth = "2px";
            return true;
        }
    }
}


document.addEventListener("DOMContentLoaded", function () {
    
    if (window.location.pathname.includes("blog.html")) {
        
        document.getElementById("loading").style.display = "none";
        document.getElementById("kartyak").style.display = "block";
    }
});

function changeValue(fire, value){
    
    if(parseInt(fire.parentNode.querySelector("input").value) <10 && value==1){
        fire.parentNode.querySelector("input").value = parseInt(fire.parentNode.querySelector("input").value )+ value;
    }
    if(parseInt(fire.parentNode.querySelector("input").value) >1 && value==-1){
        fire.parentNode.querySelector("input").value = parseInt(fire.parentNode.querySelector("input").value )+ value;
    }
}