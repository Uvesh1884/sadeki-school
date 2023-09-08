// change Navbar
addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle
    ('navbar_scroll',scrollY>0)
})
// show and hide Answere
const faqs = document.querySelectorAll('.faq');
faqs.forEach(Element => {
    Element.addEventListener('click',()=>{
        Element.classList.toggle('open');

        const icon = Element.querySelector('.faq-icon i');
        if(icon.className === 'fa-solid fa-plus'){
            icon.className = "fa-solid fa-minus";
        }
        else{
            icon.className = "fa-solid fa-plus";
        }
    })
    
});

//------------- menubar----------

const menu = document.querySelector('.nav_menu');
const openBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

openBtn.addEventListener('click',()=>{
    menu.style.display = "block";
    openBtn.style.display = "none";
    closeBtn.style.display = "inline-block"
});

closeBtn.addEventListener('click',()=>{
    menu.style.display = "none";
    openBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
});