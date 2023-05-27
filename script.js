let search=document.getElementById('navsearch');
let time=document.getElementById('time');
search.onclick = ()=>{
    search.style.background="white";
    search.style.border="none";
}

setInterval(()=>{
    let today =new Date()
    let hour=today.getHours()
    let Minutes=today.getMinutes()
    let Seconds=today.getSeconds()
    time.innerHTML=`<p>Deal starts in :${hour +":"+ Minutes +":"+ Seconds}</p>`
},1000)


