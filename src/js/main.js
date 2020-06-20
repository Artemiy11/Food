import timer from './modules/timer';
import cards from './modules/cards';
import modal from './modules/modal';
import forms from './modules/forms';
import slider from './modules/slider';
import calc from './modules/calc';

window.addEventListener('DOMContentLoaded', function () {
    timer();
    cards();
    modal();    
    forms();
    slider();
    calc();
});