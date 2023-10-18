const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')

const overlayNav = document.querySelector('.overlay-nav')

const gallery = document.querySelector('.gallery')

const styleGallery = getComputedStyle(gallery)

const copyEmail = document.querySelector('[data-js="email"]')

console.log(copyEmail);



menuBtn.addEventListener("click", () => {
    setTimeout(() => {
        menu.classList.toggle('menu-opened')
    }, 300);
    overlayNav.classList.toggle("overlay-open")
    
})


overlayNav.addEventListener('click', (e) => {
    overlayTarget = e.target.getAttribute('data-js')
    overlayNav.classList.toggle("overlay-open")
    menu.classList.remove('menu-opened')
})

gallery.addEventListener("click", e => {
    const overlayImg = document.querySelector('.overlay-img')
    const imgModal = document.querySelector('.img-modal')


    const src = e.target.getAttribute('src')
    if (src && styleGallery.maxHeight == "none") {
        overlayImg.style.display = "grid"
        imgModal.setAttribute("src", src)
        return
    } 

    overlayImg.style.display = "none"
})

copyEmail.addEventListener('click', e => {
    navigator.clipboard.writeText(e.target.textContent)
})