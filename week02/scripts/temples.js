const menuBtn = document.querySelector('#menu');
const navigation = document.querySelector('nav');
const year = document.querySelector("#current-year");
const lastModified = document.querySelector('#last-modified');
const today = new Date();

menuBtn.addEventListener('click', () => {
    navigation.classList.toggle('open');
    menuBtn.classList.toggle('open');
});

year.innerHTML = today.getFullYear()
lastModified.innerHTML = `Last modification: ${document.lastModified}`