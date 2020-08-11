//https://github.com/lvivduncan/levus-fadescroll

function fadeScroll(element, width, height) {
    const fadescroll = document.querySelector(element);
    const slides = fadescroll.querySelectorAll('div');

    const left = fadescroll.querySelector('#left');
    const right = fadescroll.querySelector('#right');

    let num = 0;
    const length = slides.length - 1;

    left.addEventListener('click', () => {
        slides.forEach(item => item.style.opacity = 0);
        slides[num].style.opacity = 1;
        num <= 0 ? num = length : num--;
    });

    right.addEventListener('click', () => {
        slides.forEach(item => item.style.opacity = 0);
        slides[num].style.opacity = 1;
        num < length ? num++ : num = 0;
    });

    // on load
    window.addEventListener('DOMContentLoaded', () => {
        fadescroll.style.height = `${fadescroll.clientWidth * width / height}px`;
    });

    // resize scroll
    window.addEventListener('resize', () => {
        fadescroll.style.height = `${fadescroll.clientWidth * width / height}px`;
    });

    // arrow left and right
    document.addEventListener('keydown', e => {
        if (e.key === "ArrowLeft" || e.code === "ArrowLeft") {
            slides.forEach(item => item.style.opacity = 0);
            slides[num].style.opacity = 1;
            num <= 0 ? num = length : num--;
        }
        if (e.key === "ArrowRight" || e.code === "ArrowRight") {
            slides.forEach(item => item.style.opacity = 0);
            slides[num].style.opacity = 1;
            num < length ? num++ : num = 0;
        }
    });

    // hide arrows
    slides.length === 1 && (left.style.display = right.style.display = 'none');
}

// init
fadeScroll('#levus-fadescroll', 600, 800);

// https://github.com/lvivduncan/levus-aside-menu
{
    const menu = document.querySelector('.levus-aside-menu');
    // li's
    const lis = menu.querySelectorAll('li');
    // add '.parent'
    lis.forEach(li => li.children.length > 1 && (li.className = 'parent'));

    // add 'span'
    document.querySelectorAll('.parent > a').forEach(parent => parent.insertAdjacentHTML('afterEnd', '<span></span>'));

    const spans = document.querySelectorAll('.parent span');

    spans.forEach(span => {
        span.addEventListener('click', function() {
            // check
            const is_open = this.classList.contains('open');
            // toggle other 
            spans.forEach(span => span.classList.remove('open'));
            // change class
            is_open ? this.classList.remove('open') : this.classList.add('open');
        });
    });

}