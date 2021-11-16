// normal functions
function n_sum(a,b){
    return a+b;
}

// arrow functions
a_sum=(a,b)=>{
    return a+b;
}

username=()=>{
    document.querySelectorAll(".container1")[0].innerHTML="<b>Container 4</b>"

    document.querySelectorAll(".container2")[0].innerHTML="<b>Container 5</b>"
}

// set timeout -->>execute username function in 2000 ms
setTimeout(username,2000)

Hello_world=()=>{
    console.log("Hello world");
}

// set interval for repititive action
setInterval(Hello_world,2000);

// Local storage for storing data
localStorage // displays the local storage
localStorage.setItem("Hello","World");
localStorage.getItem("Hello")

// JSON
obj={
    name:"Mount-Everest",
    height:8848
}

js=JSON.stringify(obj);
console.log(js);

console.log(typeof obj);
console.log(typeof js);