var container=document.getElementById("container");


window.addEventListener('keydown', (event)=> {
        let a=event.key;
        console.log(a);
        document.getElementById("container").innerText += a ;
        //console.log(event);
        //console.log(event.type);
        //console.log(event.key);
        //console.log(event.code);
        //container.append(a);
        //container.innerHTML=event.key.value;
    }
);