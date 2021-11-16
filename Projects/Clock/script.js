// variables
let a;
let date;
let time;

const options={weekday: 'long',year: 'numeric',month: 'long',day: 'numeric'}

setInterval(function(){
a=new Date();
// time
time=a.getHours()+' : '+a.getMinutes()+' : '+a.getSeconds();
// date
date=a.toLocaleDateString(undefined, options);
// displaying the date and time
document.getElementById('time').innerHTML=time;
document.getElementById('date').innerHTML=date;
},1000)