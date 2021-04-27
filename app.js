let list = document.querySelector('ul');
let addBtn = document.querySelector('.add');
let input = document.querySelector('input');
let allToDo = [];

//if user had localStorage  i will add to all storage in list
if(localStorage.getItem('allToDo')){
    for(let duty of JSON.parse(localStorage.getItem('allToDo'))){
        allToDo.push(duty);
    }
    for(let i = 0;i <allToDo.length;i++){
        let toDo = document.createElement('li');
        toDo.classList.add('duty');
        toDo.innerHTML=`${allToDo[i]} <i class="fas fa-trash"></i>`;
        list.appendChild(toDo);
    }
}
// when user click the add button i will create a new li element and add this element in to list and localStorage
function add(){
    if(input.value.length > 0){
        let toDo = document.createElement('li');
        toDo.classList.add('duty')
        toDo.innerHTML=`${input.value} <i class="fas fa-trash"></i>`;
        list.appendChild(toDo);
        allToDo.push(input.value);
        localStorage.setItem('allToDo',JSON.stringify(allToDo));
        input.value = "";
        console.log(localStorage)
    }
}
addBtn.addEventListener('click',add);//adding function

function remove(e){
    let deleteBtn = e.target;
    if(deleteBtn.classList[0] == 'fas'){//if event has fas class
        allToDo.splice(allToDo.indexOf(e.target.closest('li').innerText),1);//i will delete the index from allToDo array
        localStorage.setItem('allToDo',JSON.stringify(allToDo));// i will set the localStorage 
        deleteBtn.closest('li').remove();
    } 
}
list.addEventListener('click',remove);//deleting function

function done(e){//if you done your job you can turning the color green  
    if(e.target.classList[0] == 'duty'){
        e.target.style.backgroundColor != 'green' ? e.target.style.backgroundColor = 'green' : e.target.style.backgroundColor = 'orange' ;
    }
}
list.addEventListener('click',done);



