const slides = document.querySelectorAll('.slide')
const reslides = document.querySelectorAll('.slide.active')

    for (const slide of slides) {
        slide.addEventListener('click', () => { clearActiveClasses()
        slide.classList.add('active')})
        
        }


function clearActiveClasses() {
    slides.forEach((slide) => { slide.classList.remove('active')})
}
function ActiveClasses() {
    slides.forEach((slide) => { slide.classList.remove('active')})
}


for (const _slideactive of reslides) {
    slides.addEventListener('click', () => { ActiveClasses()
        .slide.classList.remove('active')})
    }
    

