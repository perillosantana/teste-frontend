import anime from 'animejs'
import slider from './slider.js';

anime({
    targets: 'ul',
    translateX: 250
});

let val = slider();
console.log(val);