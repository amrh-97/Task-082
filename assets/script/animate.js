let section = document.querySelectorAll('section')

window.onscroll = () => {
    section.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 500;
        let height = sec.offsetHeight

        if (top >= offset && top < offset + height) {
            sec.classList.add('show_animate')
        }
        // else {
        //     sec.classList.remove('show_animate')
        // }
    })
}