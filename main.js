/* Index HTML */
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

/* Single Product HTML */
// Grab html elements for reference
let mainImg = document.getElementById('mainImg')
let smallimg = document.getElementsByClassName('small-img')

// When clicked show small image in main image section
for(let i = 0; i < smallimg.length; i++){
    smallimg[i].onclick = function() {
        mainImg.src = this.src
    }
}