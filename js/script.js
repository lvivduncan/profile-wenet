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

// change-tv.html
{
    const buttons = document.querySelectorAll('#rate-tv-buttons a');

    // колонки
    const data = document.querySelectorAll('#rate-tv-data ul li:nth-child(3)');
    const length = data.length; // ніде не юзається?

    // блоки з даними
    const type = document.querySelector('#rate-tv-type');
    const quotes = document.querySelector('#rate-tv-quotes');
    const approve = document.querySelector('#rate-tv-approve');

    // кнопка відміни (1 кнопка!)
    const back = document.querySelector('#rate-tv-approve button');

    // змінити тариф
    const serviceTvChange = document.getElementById('service-tv-change');

    // блок з інформацією про поточний тариф
    const serviceTvContent = document.getElementById('service-tv-content');
    serviceTvContent && (serviceTvContent.style.display = 'none');

    // блок з порівнянням тарифів
    const serviceTvContentChange = document.getElementById('service-tv-content-change');
    // по дефолту активне має бути!
    // serviceTvContentChange && (serviceTvContentChange.style.display = 'none');

    // блок з підключенням додаткового жевайса
    const serviceTvDevice = document.getElementById('service-tv-device');
    serviceTvDevice && (serviceTvDevice.style.display = 'none');

    // блок зі списком девайсяв
    const serviceTvPlaylist = document.getElementById('service-tv-playlist');
    serviceTvPlaylist && (serviceTvPlaylist.style.display = 'none');

    // ховаємо 3 блоки
    type && (type.style.display = quotes.style.display = approve.style.display = 'none');

    buttons.forEach((button, i) => {

        button.addEventListener('click', (e) => {
            e.preventDefault();

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
                serviceTvContent.style.display = 
                    serviceTvDevice.style.display = 
                        serviceTvPlaylist.style.display = '';
                serviceTvContentChange.style.display = 'none';

            }

        });

    });

    serviceTvChange && serviceTvChange.addEventListener('click', e => {
        e.preventDefault();
        serviceTvContent.style.display = serviceTvDevice.style.display = serviceTvPlaylist.style.display = 'none';
        serviceTvContentChange.style.display = '';
    });

    // клік на червоні кнопці (відміна) закриває порівнняня
    back && back.addEventListener('click', e => {
        e.preventDefault();
        serviceTvContent.style.display = serviceTvDevice.style.display = serviceTvPlaylist.style.display = '';
        serviceTvContentChange.style.display = 'none';
    });
}
/* 
// service-sms.html
{
    const approveServiceSms = document.getElementById('approve-service-sms');
    approveServiceSms && (approveServiceSms.style.display = 'none');

    const changeTime = document.getElementsByName('change-time');
    const intv = document.getElementsByName('intv')[0];

    changeTime && changeTime.forEach(item => item.addEventListener('change', () => approveServiceSms.style.display = ''));
    intv && intv.addEventListener('change', () => approveServiceSms.style.display = '');

    approveServiceSms && approveServiceSms.children[1].firstChild.addEventListener('click', () => approveServiceSms.style.display = 'none');
}
 */
// pay.html
{
    // кнопки
    const selectPay = document.querySelectorAll('#select-pay label');
    // пояснення до кнопок
    const selectQuotes = document.querySelectorAll('#select-quotes div');

    // ховаємо дані
    selectQuotes.forEach(item => item.style.display = 'none');

    selectPay.forEach((item, i) => item.addEventListener('click', () => {
        selectQuotes.forEach(item => item.style.display = 'none');
        selectQuotes[i].style.display = '';
    }))
}

// all-services.html
{
    const allServices = document.querySelector('#all-services');
    // усі кнопки увімкнення-вимкнення
    const turns = allServices && allServices.querySelectorAll('.turn');
    // усі підписи "підключено/не підключено"
    const checks = allServices && allServices.querySelectorAll('.service-check');
    // усі блоки з описом неактивної послуги
    const description = allServices && allServices.querySelectorAll('.description');
    // усі блоки з детальними описами послуги
    const serviceDataEdit = allServices && allServices.querySelectorAll('.service-data-edit');
    // усі блоки, які можуть ставати неактивними
    const editable = allServices && allServices.querySelectorAll('.service-data-edit ul');
    // усі кнопки "редагувати (змінити)"
    const edits = allServices && allServices.querySelectorAll('.service-change a');

    // масив, в який кладемо статус послуги
    const status = [];
    edits && edits.forEach(item => status.push(false));

    // усі форми підтвердження
    const approves = allServices && allServices.querySelectorAll('.approve');
    // ховаємо усі форми підтвердження
    approves && approves.forEach(approve => approve.classList.add('off'));

    // кнокпи відміни
    const closeButtons = allServices && allServices.querySelectorAll('button.red');
    // кнопки підтвердження
    const approveButtons = allServices && allServices.querySelectorAll('button.green');

    // клік на кнопці "підключити/відключити"
    turns && turns.forEach((turn, i) => turn.addEventListener('click', e => {
        e.preventDefault();

        approves[i].classList.toggle('off');
        // міняємо клас у блока з описом 
        description[i].classList.toggle('off');
        // ховаємо/показуємо розлогі дані
        serviceDataEdit[i].classList.toggle('off');
    }));

    // закриваємо форму
    closeButtons && closeButtons.forEach((button, i) => button.addEventListener('click', e => {
        e.preventDefault();
       
        approves[i].classList.toggle('off');
        // міняємо клас у блока з описом 
        description[i].classList.toggle('off');
        // ховаємо/показуємо розлогі дані
        serviceDataEdit[i].classList.toggle('off');
    }));

    // підтвердження 
    approveButtons && approveButtons.forEach((button, i) => button.addEventListener('click', e => {
        e.preventDefault();

        approves[i].classList.add('off');

        if (status[i] === false) {
            if (edits[i].classList.contains('off') !== false) {
                checks[i].classList.remove('off');
                turns[i].classList.remove('off');  
            } else{
                checks[i].classList.add('off');
                turns[i].classList.add('off');  
            }
        } 

        // кнопка редагування
        edits[i].classList.toggle('off');
        
        // робимо блоки  активними/неактивними для змін
        editable[i].classList.toggle('non-edit');
        
        // TODO: потрібно додати перевірку на правильність ведення пароля

    }));

    // клік на кнопці "редагувати"
    edits && edits.forEach((edit,i) => edit.addEventListener('click', e => {
        e.preventDefault();

        // робимо блоки активними/неактивними для змін
        editable[i].classList.toggle('non-edit');

        // кнопки підтвердження
        approves[i].classList.toggle('off');

        // ховаємо кнопку "редагувати"
        edits[i].classList.toggle('off');

        status[i] != status[i];
    }));
}