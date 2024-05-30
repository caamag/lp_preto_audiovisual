
const containers = document.querySelectorAll('.container')
const header = document.querySelector('.header')
const footer = document.querySelector('.footer')
const preloader = document.querySelector('.preloader-container')

function loading() {
    header.style.display = 'none'
    footer.style.display = 'none'
    containers.forEach(container => {
        container.style.display = 'none'
    });

    setTimeout(() => {
        header.style.display = 'block'
        footer.style.display = 'block'
        containers.forEach(container => {
            container.style.display = 'flex'
        });
        preloader.style.display = 'none'
    }, 0)
}

loading();
