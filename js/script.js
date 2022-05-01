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
    input.value = '';

    listItem.addEventListener('mouseover', function() {
        let delBtn = document.createElement('button');
        delBtn.textContent = 'del';
        listItem.append(delBtn)
        console.log('worked')
    
        delBtn.addEventListener('click', function() {
            listItem.remove()
        })
    });

    listItem.removeEventListener('mouseout', function() {
        delBtn.remove();
    })

}

