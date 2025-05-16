const title = document.querySelector('h1')
const section =  document.querySelector('section')
let titleTxt = 'Media Queries in Action'

title.style.color = 'yellow';

title.textContent = titleTxt === '' ? 'Query done' : titleTxt;

title.style.textAlign = 'right';

// To change an attribute of an element.
// This line of code adds and attribute class to the element and gives it a value.
title.setAttribute('class', 'active');

// An alternative way to change an attribute of an element—specifically the 
// class attribute—is by directly manipulating the element's classList.

// articleElement.classList.add('active');

// This method is often preferred when working with class manipulation because classList 
// provides additional methods like add, remove, toggle, and contains, making it more 
// convenient and expressive for managing classes on an element.

// To create an element.
// This line of code creates a new <p> element and stores it in the variable named paragraph.

const paragraph = document.createElement('p');

// To append an element with additional content or elements.
// These lines of code add content to the end of the section element.
section.appendChild(paragraph);
section.append(paragraph, 'Hello World Addition from JS');

// To remove an element from the document.
// These lines of code remove the paragraph from the article and then, the article itself.
// article.removeChild(paragraph);
// article.remove();