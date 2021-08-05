$(function(){
  


  $('.example-slider__slider, .preview-silder__slider').slick({
    infinite: true,
    arrows: true,
    dots: true,
    centerMode: true,
    // autoplay: 3000,
    prevArrow: '<img class="slider-arr slider-arr-left" src="images/slider-arr-left.svg" alt="">',
    nextArrow: '<img class="slider-arr slider-arr-right" src="images/slider-arr-right.svg" alt=""></img>',

    responsive: [
      {
        breakpoint: 780,
        settings: {
          arrows: false,
          centerMode: false,
        }
      },
    ]
  });

  $('.menu-btn').on('click', function() {
    $('.menu-btn').toggleClass('menu-btn--active');
    $('.mob-menu').toggleClass('mob-menu--active');
    $('body').toggleClass('lock');
    $('html').toggleClass('lock');
  })

  const form = document.getElementById('form');

  form.addEventListener('submit', formSend);


  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);
  }



  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      formRemoveError(input);

      if (input.classList.contains('_email')) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else if ( input.getAttribute("type") === "checkbox" && input.checked === false ) {
        formAddError(input);
        error++;
      } else {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
      
    }
  }

  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }


  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }

  new WOW().init();

});