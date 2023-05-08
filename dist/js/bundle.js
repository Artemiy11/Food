/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");
    /* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cards */ "./src/js/modules/cards.js");
    /* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
    /* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
    /* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
    /* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");
    /* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
    
    
    
    
    
    
    
    
    window.addEventListener('DOMContentLoaded', function () {
        Object(_modules_timer__WEBPACK_IMPORTED_MODULE_0__["default"])('.timer', '2020-06-23');
        Object(_modules_cards__WEBPACK_IMPORTED_MODULE_1__["default"])();
        Object(_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])('.modal', '.connect', '.modal__close');    
        Object(_modules_forms__WEBPACK_IMPORTED_MODULE_3__["default"])('form');
        Object(_modules_slider__WEBPACK_IMPORTED_MODULE_4__["default"])('.offer__slider', '.offer__slide', '.offer__slider-prev', '.offer__slider-next', '#total', '#current', '.offer__slider-wrapper', '.offer__slider-inner');
        Object(_modules_calc__WEBPACK_IMPORTED_MODULE_5__["default"])();
        Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_6__["default"])('.tabcontent', '.tabheader__item', '.tabheader__items', 'tabheader__item_active', 'block');
    });
    
    /***/ }),
    
    /***/ "./src/js/modules/calc.js":
    /*!********************************!*\
      !*** ./src/js/modules/calc.js ***!
      \********************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
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
    
    /* harmony default export */ __webpack_exports__["default"] = (calc);
    
    /***/ }),
    
    /***/ "./src/js/modules/cards.js":
    /*!*********************************!*\
      !*** ./src/js/modules/cards.js ***!
      \*********************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    function cards() {
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
    };
    
    /* harmony default export */ __webpack_exports__["default"] = (cards);
    
    /***/ }),
    
    /***/ "./src/js/modules/forms.js":
    /*!*********************************!*\
      !*** ./src/js/modules/forms.js ***!
      \*********************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    function forms(form) {
        const forms = document.querySelectorAll(form);
    
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
    };
    
    /* harmony default export */ __webpack_exports__["default"] = (forms);
    
    /***/ }),
    
    /***/ "./src/js/modules/modal.js":
    /*!*********************************!*\
      !*** ./src/js/modules/modal.js ***!
      \*********************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    function modal(modalWindow, trigger, close) {
        const modal = document.querySelector(modalWindow),
              modalTrigger = document.querySelectorAll(trigger),
              modalCloseBtn = document.querySelector(close);
    
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
    
        function calcScroll() {
            
        }
    }
    
    /* harmony default export */ __webpack_exports__["default"] = (modal);
    
    /***/ }),
    
    /***/ "./src/js/modules/slider.js":
    /*!**********************************!*\
      !*** ./src/js/modules/slider.js ***!
      \**********************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    function slider(sliderSelector, slideSelector, prevSelector, nextSelector, totalSelector, currentSelector, slidesWrapperSelector, slidesFieldSelector) {
        const slider = document.querySelector(sliderSelector),
            img = document.querySelectorAll(slideSelector),
            prev = document.querySelector(prevSelector),
            next = document.querySelector(nextSelector),
            total = document.querySelector(totalSelector),
            current = document.querySelector(currentSelector),
            slidesWrapper = document.querySelector(slidesWrapperSelector),
            slidesField = document.querySelector(slidesFieldSelector),
            width = window.getComputedStyle(slidesField).width;
        let index = 1,
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
    
    };
    
    /* harmony default export */ __webpack_exports__["default"] = (slider);
    
    /***/ }),
    
    /***/ "./src/js/modules/tabs.js":
    /*!********************************!*\
      !*** ./src/js/modules/tabs.js ***!
      \********************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    function tabs(tabContentSelector, tabsSelector, tabParentSelector, activeClass, display) {
        const tabContent = document.querySelectorAll(tabContentSelector),
              tabs = document.querySelectorAll(tabsSelector),
              tabParent = document.querySelector(tabParentSelector);
    
        function hideTabContent() {
            tabContent.forEach(tab => tab.style.display = 'none');
            tabs.forEach(tab => tab.classList.remove(activeClass))
        }
    
        function showTabContent(i) {
            tabContent[i].style.display = display;
            tabs[i].classList.add(activeClass);
        }
    
        hideTabContent();
        showTabContent(0);
    
        tabParent.addEventListener('click', (e) => {
            e.preventDefault();
    
            tabs.forEach((item, i) => {
                if (e.target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        });
    
    };
    
    /* harmony default export */ __webpack_exports__["default"] = (tabs);
    
    /***/ }),
    
    /***/ "./src/js/modules/timer.js":
    /*!*********************************!*\
      !*** ./src/js/modules/timer.js ***!
      \*********************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    function timer(timer, deadline) {
    
        function getTimeRemaining(endtime) {
            const t = Date.parse(endtime) - Date.parse(new Date()),
                  days = Math.floor(t / (1000 * 60 * 60 * 24)),
                  hours = Math.floor(t / (1000 * 60 * 60) % 24),
                  minutes = Math.floor(t / (1000 * 60) % 60),
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
                seconds = timer.querySelector('#seconds'),
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
    
        setClock(timer, deadline);
    
    };
    
    /* harmony default export */ __webpack_exports__["default"] = (timer);
    
    /***/ })
    
    /******/ });
    //# sourceMappingURL=bundle.js.map