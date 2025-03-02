document.getElementById("new-page").addEventListener('click', function(){
    window.location.href = "./main.html";
})



document.getElementById("Clear-history").addEventListener('click', function(){
    document.getElementById("history").innerHTML = "";  
})



document.getElementById("cenge-bg").addEventListener('click', function(){
    document.getElementById("body").style.backgroundColor = "red";
})