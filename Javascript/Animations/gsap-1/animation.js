gsap.from('div',{opacity:1, duration:1, y:20});

document.getElementById('button').onclick=()=>{
    gsap.from('#button',{duration:1, scale:2, ease:"bounce"});
}

// gsap.from('className/idName',{duration: });