window.addEventListener('DOMContentLoaded', function () {
    // Timer 
    const deadline = '2020-05-18';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date());
        days = Math.floor(t / (1000 * 60 * 60 * 24));
        hours = Math.floor(t / (1000 * 60 * 60) % 24);
        minutes = Math.floor(t / (1000 * 60) % 60);
        seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`
        } else {
            return num
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds');
        timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    //Menu cards

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.transfer = 27;
            this.parent = document.querySelector(parentSelector);
            this.classes = classes;
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');

            if (this.classes.length === 0) {
                element.classList.add('menu__item');
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
            `;

            this.parent.append(element);
        }
    }

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        229,
        '.menu .container',
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        550,
        '.menu .container',
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        430,
        '.menu .container',
    ).render();

    //Modal

    const modal = document.querySelector('.modal'),
        modalTrigger = document.querySelectorAll('.connect'),
        modalCloseBtn = document.querySelector('.modal__close');

    modalTrigger.forEach(item => {
        item.addEventListener('click', () => {
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflowY = 'hidden';
        });
    })

    modalCloseBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        modal.classList.add('hide');
        document.body.style.overflowY = '';
    });

    // Forms

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо, скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так'
    }

    forms.forEach(item => postData(item));

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.append(statusMessage);

            const formData = new FormData(form);

            const obj = {};
            formData.forEach((value, key) => {
                obj[key] = value
            });

            fetch('server.php', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(obj)
            })
            .then(data => data.text())
            .then(data => {
                console.log(data);
                statusMessage.textContent = message.success;
                setTimeout(() => statusMessage.remove(), 4000);
            })
            .catch( () => statusMessage.textContent = message.failure)
            .finally(() => form.reset());
        });
    }

    // slider

    const slider = document.querySelector('.offer__slider'),
          img = document.querySelectorAll('.offer__slide'),
          prev = document.querySelector('.offer__slider-prev'),
          next = document.querySelector('.offer__slider-next'),
          total = document.querySelector('#total'),
          current = document.querySelector('#current'),
          slidesWrapper = document.querySelector('.offer__slider-wrapper'),
          slidesField = document.querySelector('.offer__slider-inner'),
          width = window.getComputedStyle(slidesField).width;
    let   index = 1,
          offset = 0;

    slidesField.style.width = 100 * img.length + '%'; //делаем карусель такой длины, чтобы уместились все слайды
    slidesField.style.display = 'flex';               //устанавливаем flex, чтобы картинки стояли горизонтально
    slidesField.style.transition = '0.5s all';        

    slidesWrapper.style.overflow = 'hidden';          //скрываем неактивные слайды

    img.forEach(slide => {                            //устанавливаем ширину картинок как видимый блок
        slide.style.width = width;
    });

    const indicators = document.createElement('ol'),
          dots = [];

    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;

    slider.style.position = 'relative';
    slider.appendChild(indicators);

    for (let i = 0; i < img.length; i++) {
        const dot = document.createElement('li');
        dot.classList.add('dot');
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;

        dot.getAttribute('data-slide-to', i + 1);
        indicators.appendChild(dot);
        dots.push(dot);

        if (i == 0) {
            dot.style.opacity = 1;
        };

    };

    indicators.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('dot')) {
            dots.forEach((dot, i) => {  
                if (e.target == dot) {
                    index = i + 1;

                    offset = +width.replace(/\D/g, '') * (index - 1);
                    slidesField.style.transform = `translateX(-${offset}px)`; 

                    dots.forEach(dot => dot.style.opacity = '.5');
                    dot.style.opacity = 1;

                    checkNum();
                };
            });
        };
    });

    next.addEventListener('click', () => {
        if (offset == +width.replace(/\D/g, '') * (img.length - 1)) {   //если слайд прокрутился до максимума, то его положение - 0
            offset = 0;
        } else {
            offset += +width.replace(/\D/g, '')                         //прибавляем к положению одно деление слайда
        }
        slidesField.style.transform = `translateX(-${offset}px)`;       //добавляем возможность изменять положение слайдов

        if (index == img.length) {                                      //логика нумерации
            index = 1;
        } else {
            index++;
        };

        dots.forEach(dot => dot.style.opacity = '.5');
        dots[index - 1].style.opacity = 1;

        checkNum();
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.replace(/\D/g, '') * (img.length - 1);
        } else {
            offset -= +width.replace(/\D/g, '')
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (index == 1) {
            index = img.length;
        } else {
            index--;
        };

        dots.forEach(dot => dot.style.opacity = '.5');
        dots[index - 1].style.opacity = 1;

        checkNum();
    });

    function checkNum() {
        if (img.length < 10) {
            current.textContent = `0${index}`;
            total.textContent = `0${img.length}`;
        } else {
            current.textContent = index;
            total.textContent = img.length;
        };
    }

    checkNum();

    // function showContent() {
    //     if (index < 0) {
    //         index = img.length;
    //     } else if (index > img.length) {
    //         index = 1;
    //     };

    //     current.textContent = `0${index}`;
    //     total.textContent = `0${img.length}`;

    //     img.forEach(item => item.style.display = 'none');
    //     img[index - 1].style.display = 'block';
    // };

    // next.addEventListener('click', () => {
    //     slideImg(1);
    // });

    // prev.addEventListener('click', () => {
    //     slideImg(-1);
    // });

    // function slideImg(n) {
    //     showContent(index += n);
    // };

    // showContent();

    
});