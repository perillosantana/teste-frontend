import Slider from './slider.js';

// Call Slider
Slider();

// Call Slider Window Resize
window.onresize = (() => {
    Slider(); 
});

// Click Remove Item
document.querySelectorAll('.neon-slider-history-btn-remove').forEach(function (btnRemove) {
    btnRemove.addEventListener("click", function () {
        let $li = this.parentNode.parentNode.parentNode.parentNode.parentNode;
        let $ul = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
        let wrapper = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
        
        $li.classList.add('removed');
        
        if ($ul.querySelectorAll('li:not(.removed)').length === 0) {
            wrapper.classList.add('empty');
        }
    });
});