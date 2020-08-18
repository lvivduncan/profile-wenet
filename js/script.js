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

// сторінка зміни тарифу ТБ
{
    const buttons = document.querySelectorAll('#rate-tv-buttons p');

    // колонки
    const data = document.querySelectorAll('#rate-tv-data ul li:nth-child(3)');
    const length = data.length;

    // блоки з даними
    const type = document.querySelector('#rate-tv-type');
    const quotes = document.querySelector('#rate-tv-quotes');
    const approve = document.querySelector('#rate-tv-approve');

    // ховаємо 3 блоки
    type && (type.style.display = quotes.style.display = approve.style.display = 'none');

    buttons.forEach((button, i) => {


        button.addEventListener('click', () => {
            if (i !== 0) {

                buttons.forEach((item, k) => {
                    if (k !== 0) {
                        item.className = '';
                    }
                });

                button.className = 'active';

                data.forEach(item => {
                    [...item.children].forEach(child => child.style.display = 'none');
                    item.children[i - 1].style.display = 'block';
                });

                type.style.display = quotes.style.display = approve.style.display = '';


            } else {
                buttons.forEach((item, k) => {
                    if (k !== 0) {
                        item.className = '';
                    }
                });

                data.forEach(item => [...item.children].forEach(child => child.style.display = 'none'));

                type.style.display = quotes.style.display = approve.style.display = 'none';
            }

        });


    });
}

// service-sms.html
{
    const approveServiceSms = document.getElementById('approve-service-sms');
    approveServiceSms.style.display = 'none';
    const changeTime = document.getElementsByName('change-time');
    const intv = document.getElementsByName('intv')[0];

    console.log(changeTime)

    changeTime.forEach(item => item.addEventListener('change', () => approveServiceSms.style.display = ''));
    // changeTime.addEventListener('change', () => approveServiceSms.style.dispay = '');
    intv.addEventListener('change', () => approveServiceSms.style.display = '');

    approveServiceSms.children[1].firstChild.addEventListener('click', () => approveServiceSms.style.display = 'none');
}