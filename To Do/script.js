let add=document.getElementById("add");
let todo=document.getElementById("todo");
let input=document.getElementById("input");

add.addEventListener("click", addToDo);
todo.addEventListener("click", removeToDo);

function addToDo(){
    if(input.value!=""){
        var newItem=document.createElement("div");
        newItem.classList.add("item");
        newItem.innerHTML=`<div class="inline">
                            <p>${input.value}</p>
                            <button class="remove">x</button>
                           </div>`
        todo.append(newItem);
        input.value="";
    }
}

function removeToDo(e){
    if (e.target.classList.contains("remove")){
        e.target.parentElement.parentElement.remove();
    }
}