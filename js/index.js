
const containers = document.querySelectorAll('.container')
const header = document.querySelector('.header')
const preloader = document.querySelector('.preloader-container')

function loading() {
    header.style.display = 'none'
    containers.forEach(container => {
        container.style.display = 'none'
    });

    setTimeout(() => {
        header.style.display = 'block'
        containers.forEach(container => {
            container.style.display = 'flex'
        });
        preloader.style.display = 'none'
    }, 2800)
}

loading();
