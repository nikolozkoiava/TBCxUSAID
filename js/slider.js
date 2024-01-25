function initializeSlider(sliderSelector) {
    let slider = document.querySelector('.list');
    let items = document.querySelectorAll('.list .item');
    let next = document.getElementById( 'next');
    let prev = document.getElementById('prev');
    let dots = document.querySelectorAll('.dots li');
  
    let lengthItems = items.length - 1;
    let active = 0;
  
    next.onclick = function () {
      active = active + 1 <= lengthItems ? active + 1 : 0;
      reloadSlider();
    }
  
    prev.onclick = function () {
      active = active - 1 >= 0 ? active - 1 : lengthItems;
      reloadSlider();
    }
  
    let refreshInterval = setInterval(() => { next.click() }, 5000);
  
    function reloadSlider() {
      slider.style.left = -items[active].offsetLeft + 'px';
  
      let lastActiveDot = document.querySelector(sliderSelector + ' .dots li.active');
      lastActiveDot.classList.remove('active');
      dots[active].classList.add('active');
  
      clearInterval(refreshInterval);
      refreshInterval = setInterval(() => { next.click() }, 5000);
    }
  
    dots.forEach((dot, key) => {
      dot.addEventListener('click', () => {
        active = key;
        reloadSlider();
      });
    });
  
    window.onresize = function (event) {
      reloadSlider();
    };
  }
  
  initializeSlider('.slider');
  