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