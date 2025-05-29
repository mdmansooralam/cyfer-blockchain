const header = document.querySelector('header')
window.addEventListener('scroll', ()=>{
if(window.scrollY >= 80){
    header.classList.add('js-toggle')
}else{
    header.classList.remove('js-toggle')
}
})