let input = document.querySelector('.holder__input');
let btn   = document.querySelector('.holder__btn');
let list  = document.querySelector('.list');

btn.addEventListener('click', addListItem);

function addListItem() {
    let listItem = document.createElement('div');
    listItem.className = 'list__item';
    let task = document.createElement('p');
    task.className = 'list__task'

    task.textContent = input.value;
    
    listItem.append(task);
    list.prepend(listItem);
    input.value = ''
}