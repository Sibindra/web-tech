//click the button
document.getElementById('click').click();

//changing style via js
document.getElementById('click').style.border="2px solid blue"

// DOM manupulation
let e1=document.getElementById('click');
console.log(e1);

let e2=document.getElementsByClassName("container");
console.log(e2);

e2[0].style.backgroundColor="violet";

// add a class to an element
e2[0].classList.add("bg");
e2[0].classList.add("white-text");

// creating an element and adding it through js
let createdElement=document.createElement("p");
createdElement.innerText="This is a created element";
e2[0].appendChild(createdElement);

//creatng and replacing element through js
let a=document.createElement("p");
a.innerHTML="<b>This is the replaced element</br>"
e2[0].replaceChild(a,createdElement);

// to remove an element -->> remove(element_name)


// selecting using query
x=document.querySelector('.container');
console.log(x);