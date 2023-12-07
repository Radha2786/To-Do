let listoftasks = [];   



const addtask = ()=>{
    let input = document.querySelector('input').value
    console.log(input);
    let element = document.createElement('li')
    // element.setAttribute('id',listoftasks.length);
   
    element.innerHTML=`   <div class="task-text" id="${listoftasks.length}">${input}</div>
    <div class="actions">
        
        <button type="button" onclick="deletetask(${listoftasks.length})" >Done</button>
    


    </div>`;
    const ele2=document.getElementsByClassName('to-do-bhai')[0];
    ele2.appendChild(element);
    listoftasks.push(element);
    document.querySelector('input').value='';

}



// const deletetask =(id)=>{
//     console.log(listoftasks);
//     listoftasks.splice(id,1);
//     console.log(listoftasks)
// }

const deletetask =(id)=>{
let element = document.getElementById(id);
element.classList.toggle('strike');
}


