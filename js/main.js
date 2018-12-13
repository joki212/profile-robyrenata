var overlay = document.getElementById('overlay');
var closeMenu = document.getElementById('close-menu');
var animContent = document.getElementById('anim-content');
var animFadeIn = document.getElementById('anim-fade-in');

document.getElementById('open-menu').addEventListener('click', function(){
    overlay.classList.add('show-menu');
});

document.getElementById('close-menu').addEventListener('click', function(){
    overlay.classList.remove('show-menu');
});

// animation content (contact)
window.addEventListener('load', function(){
    animContent.classList.add('animation-entry');
});

// animation content (home)
window.addEventListener('load', function(){
    animFadeIn.classList.add('animation-fade-in');
});