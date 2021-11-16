let counter=0;

document.getElementById('increase').onclick=()=>{
	counter++;
	document.getElementById('count').innerHTML=counter;
}

document.getElementById('decrease').onclick=()=>{
	counter--;
	document.getElementById('count').innerHTML=counter;
}

document.getElementById('reset').onclick=()=>{
	counter=0;
	document.getElementById('count').innerHTML=counter;
}