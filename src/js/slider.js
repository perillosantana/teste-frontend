export default () => {
    let $slider = document.getElementsByClassName('neon-slider');
    let $ul = document.getElementsByClassName('neon-slider-items')[0]
    let sizeUl = 0;
    window.sizeLi = (document.body.offsetWidth / $ul.children.length);
    
    // Slides
    let LIClick = function () {
        let $this = this;
        let translate3d = 0;
        let sizeLi = window.sizeLi;

        if (document.body.offsetWidth > 768) {
            if ($this.dataset.indexNumber == 1) {
                translate3d = sizeLi / 2;
            } else if ($this.dataset.indexNumber == 2) {
                translate3d = (sizeLi - (sizeLi / 2)) * -1;
            } else {
                translate3d = ((sizeLi * ($this.dataset.indexNumber - 1)) - (sizeLi / 2)) * -1;
            }
        } else {
            if ($this.dataset.indexNumber == 1) {
                translate3d = 0;
            } else {
                translate3d = ((sizeLi * ($this.dataset.indexNumber - 1)) * -1);
            }
        }
        
        $ul.style.transform = `translate3d(${translate3d}px, 0px, 0px)`;
        
        for (var i = 0; i < $ul.children.length; i++) {
            $ul.children[i].classList.remove('active')
        }
        
        $this.classList.add('active');
        
        $dots.children[$this.dataset.indexNumber - 1].click();
    };
    
    let countItem = 0;
    for (const liElement of $ul.children) {
        countItem++;
        liElement.dataset.indexNumber = countItem;
        
        // Set spacing <LI>(margin, padding, border)
        let style = liElement.currentStyle || window.getComputedStyle(liElement),
        margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight),
        padding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight),
        border = parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
        let spacing = (margin - padding + border);
        
        // Set width <LI>
        if (document.body.offsetWidth > 768) {
            sizeLi = ($slider[0].offsetWidth /  2);
        } else {
            sizeLi = $slider[0].offsetWidth - 30;
        }
        
        liElement.style.width = `${sizeLi}px`;
        
        // Set width <Ul>
        if (sizeUl === 0) {
            sizeUl = sizeLi + (spacing / 2 * 3);
        }
        sizeUl = sizeUl + sizeLi;
        
        if (!$slider[0].classList.contains('active')) {
            if (document.body.offsetWidth > 768) {
                $ul.style.transform = `translate3d(${sizeLi / 2}px, 0px, 0px)`;
            } else {
                $ul.style.transform = `translate3d(0px, 0px, 0px)`;
            }
            
            liElement.addEventListener("click", LIClick, false);
        }
    }
    
    // Dots
    let $dots = document.getElementsByClassName('neon-slider-dots')[0];
    let DotsClick = function () {
        let $this = this;
        
        $ul.children[$this.dataset.indexNumber - 1].click();
        
        for (var i = 0; i < $dots.children.length; i++) {
            $dots.children[i].classList.remove('active')
        }
        
        $this.classList.add('active');
    }
    
    let countDots = 0;
    for (const dotElement of $dots.children) {
        countDots++;
        dotElement.dataset.indexNumber = countDots;
        
        if (!$slider[0].classList.contains('active')) {
            dotElement.addEventListener("click", DotsClick, false);
        }
    }
    
    if ($ul.getElementsByClassName('active').length) {
        $ul.getElementsByClassName('active')[0].click();
    } else {
        $ul.children[0].classList.add('active');
        $dots.children[0].classList.add('active');
    }
    
    $ul.style.width = `${sizeUl}px`;
    
    $slider[0].classList.add('active');
}