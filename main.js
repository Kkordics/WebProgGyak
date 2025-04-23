function purchase(){
   const name = document.getElementById("rendeles_name");
   const email = document.getElementById("rendeles_email");
   const city = document.getElementById("rendeles_city");
   const zip = document.getElementById("rendeles_zip");
   const address = document.getElementById("rendeles_address");
   
    const inputs = document.querySelectorAll(".form-control");
    let valid = false;
   inputs.forEach(input => {
    if(input.value == ""){
        
        
        if(valueValidation(input)){
            valid = true;
        }
       }
   });


   if(valid == false){
    alert("Rendelés leadva!");
    document.open("index.html");
   }
}
function valueValidation(input){
    if(input.value !=""){
        input.style.border = "none";
        return false;
    }else{
        input.style.borderColor = "Red";
        input.style.borderWidth = "2px";
        return true;
    }
}