function calc() {
    const result = document.querySelector('.calculating__result span');

    let sex, height, weight, ratio, age;

    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', sex);
    };

    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = 1.375;
        localStorage.setItem('ratio', ratio);
    };

    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(`${selector} div`);

        elements.forEach(elem => {
            elem.classList.remove(activeClass);
            if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                elem.classList.add(activeClass);
            };

            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                elem.classList.add(activeClass);
            };
        });
    };

    initLocalSettings('#gender', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big', 'calculating__choose-item_active');

    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '____'; 
            return;
        }
        if (sex === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }

    calcTotal();

    function getStaticInf(parentSelector, activeClass) {
        const elements = document.querySelectorAll(`${parentSelector} div`);
        
        localStorage.setItem('ratio', ratio);
        localStorage.setItem('sex', sex);

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', ratio);
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', sex);
                }
    
                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });
    
                e.target.classList.add(activeClass);
    
                calcTotal();
                
            });
        });
    };

    getStaticInf('#gender', 'calculating__choose-item_active');
    getStaticInf('.calculating__choose_big', 'calculating__choose-item_active');

    function getDenamicInf(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {

            if (input.value.search(/\D/) > -1) {
                input.style.border = '1px solid red';
                input.value = input.value.replace(/\D/gi, '');
            } else {
                input.style.border = '';
            }

            switch (input.getAttribute('id')) {
                case 'height':
                    height = input.value;
                    localStorage.setItem('height', height);
                    break;
                case 'weight': 
                    weight = input.value;
                    localStorage.setItem('weight', weight);
                    break;
                case 'age':
                    age = input.value;
                    localStorage.setItem('age', age);
                    break;
            };

            calcTotal();
        });
    };

    getDenamicInf('#weight');
    getDenamicInf('#height');
    getDenamicInf('#age');
};

export default calc;