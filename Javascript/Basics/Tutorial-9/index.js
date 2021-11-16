// defining the fuction clicked used on index.html
function clicked(){
    console.log("The button has been clicked.");
}

// onload 
window.onload=function(){
    console.log("Loaded");
}

// noting events as clicks
addEventListener("click",function(){
    console.log("The container has been clicked.");
})

// noting events as hover
addEventListener("mouseover",function(){
    console.log("Mouse over container.");
})

addEventListener("mouseout",function(){
    console.log("Mouse out of conatiner.");
})

// changing content on hover
addEventListener("click",function(){
    document.querySelectorAll(".container2")[0].innerHTML="<b>Changed</b>"
})