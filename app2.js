function nav(){

    var x = document.getElementById("menu");

    if(x.style.display === "block"){
        x.style.display = "none";
    }else{
        x.style.display = "block";
        x.style.height = "230px";
        x.style.backgroundColor = "#f43837";
        x.style.fontWeight = "bold";
        
    }

   
    
   
}


function smoothin(){
    document.getElementById("i1").style.color = "white";
    document.getElementById("i2").style.color = "white";

}

function smoothout(){
    document.getElementById("i1").style.color = "#f43837";
    document.getElementById("i2").style.color = "#f43837";

}
