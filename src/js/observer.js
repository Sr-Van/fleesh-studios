const observerdSection = document.querySelectorAll('.observed')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        }
        else {
            entry.target.classList.remove('scroll-animation')
        }
        
    }, {
        thresholds: 0.75
    }
    )
})

const observerGallery = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            menuBtn.style.display = "block"
            return
        }
        menuBtn.style.display = "none"
    })
})

observerGallery.observe(gallery)


observerdSection.forEach(sect => {
    observer.observe(sect)
})


