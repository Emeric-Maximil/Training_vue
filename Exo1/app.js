let leInput = document.getElementById('todo');
let leButton = document.querySelector('button');
let laList = document.querySelector('ul');

leButton.addEventListener("click", ajouterTask);

function ajouterTask(){
    let newLi = document.createElement('li');
    newLi.textContent = leInput.value;
    laList.appendChild(newLi);
}
