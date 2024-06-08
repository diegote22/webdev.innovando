const menu = document.querySelector('#menu-icon')
const navList = document.querySelector('.navlist')

menu.onclick = () => {
menu. classList. toggle('bx-x')
navList.classList.toggle('open')
}

const sr = ScrollReveal({
    distance: '65px',
    duration: 2000,
    delay: 450,
    reset: true
})
    
    sr.reveal('.hero-text', {delay: 200, origin: 'top'})
    sr.reveal('.hero-img', {delay: 450, origin: 'top'})
    sr.reveal('.icons', {delay: 500, origin: 'left'})
    sr.reveal('.scroll-down', {delay: 450, origin: 'right'})
    sr.reveal('.hero-img-2 img', {delay: 450, origin: 'left'})
    sr.reveal('.hero-text-2', {delay: 450, origin: 'right'})
    sr.reveal('.ag-courses_box', {delay: 200, origin: 'top'})
    