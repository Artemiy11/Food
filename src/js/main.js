import timer from './modules/timer';
import cards from './modules/cards';
import modal from './modules/modal';
import forms from './modules/forms';
import slider from './modules/slider';
import calc from './modules/calc';
import tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', function () {
    tabs();
    timer();
    cards();
    modal();    
    forms();
    slider();
    calc();
});