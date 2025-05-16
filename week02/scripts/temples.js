const menuBtn = document.querySelector('#menu');
const navigation = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    navigation.classList.toggle('open');
    menuBtn.classList.toggle('open');
});