const main = document.querySelector('main');
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

const listItem = document.createElement('li');
const title = document.createElement('h3')
const caution = document.createElement('p')
const deleteBtn = document.createElement('button');
deleteBtn.textContent = '❌';
caution.textContent = 'Put in a value for the title';
caution.style.color = 'red';

button.addEventListener('click', function() {
    let titleTxt = input.value;
    if (titleTxt != '') {
        title.textContent = titleTxt === '' ? 'Title' : titleTxt;
        list.append(listItem);
        listItem.append(title);
        listItem.append(deleteBtn);
        input.value = "";
        input.focus();
    } else {
        main.append(caution);        
    }
});

deleteBtn.addEventListener('click', function() {
    list.removeChild(listItem);
    input.focus();
});