const toggle=document.querySelector('.nav__toggle');
const links=document.querySelector('.nav__links');

toggle.addEventListener('click',()=>{
    const isOpen = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.setAttribute('aria-label', isOpen ? 'close menu' : 'open menu');
});
