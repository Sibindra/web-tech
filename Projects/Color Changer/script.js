// Random hexadecimal code
let randomHexa=()=>{
    let num=(Math.random() * 0xfffff *1000000).toString(16);
    return '#'+ num.slice(0,6);
};

document.getElementById('button').onclick=()=>{
    document.getElementById('color').innerHTML=randomHexa();

    document.getElementById('section').style="background-color:"+ randomHexa();
}