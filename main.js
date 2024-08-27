// Grab html elements for reference
const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')

// Condition to open hamburger menu
if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}
// Condition to close hamburger menu
if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}