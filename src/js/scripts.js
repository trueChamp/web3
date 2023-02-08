//    MAP

ymaps.ready(init);

function init() {

    var myMap = new ymaps.Map("map", {

        center: [55.767271, 37.631918],

        zoom: 15,

        controls: []
    });





    var myPlacemark = new ymaps.Placemark([55.76953456898229, 37.63998549999998], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/maker.svg',
        iconImageSize: [15, 15],
        iconImageOffset: [-9, 0]
    });

    myMap.geoObjects.add(myPlacemark);

    var myMap2 = new ymaps.Map("map-2", {
        center: [55.767271, 37.631918],
        zoom: 15
    });
    myMap2.behaviors.disable('scrollZoom', 'drag');

    var myPlacemark2 = new ymaps.Placemark([55.76953456898229, 37.63998549999998], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/maker.svg',
        iconImageSize: [15, 15],
        iconImageOffset: [-9, 0]
    });

    myMap2.geoObjects.add(myPlacemark2);

}

// SEARCH

window.addEventListener('DOMContentLoaded', function() {

    var btn = document.querySelector('.header__search-svg');
    var blockHidden = document.querySelector('.header__open-search');
    var first = document.querySelector('.header__search-svg');
    var clean1 = document.querySelector('.hi5');
    var clean2 = document.querySelector('.hi6');


    function showBlock() {

        blockHidden.classList.add('oa');
        first.classList.add('tran')
        clean1.classList.add('clean')
        clean2.classList.add('clean')

    }
    btn.addEventListener('click', showBlock);



})

window.addEventListener('DOMContentLoaded', function() {

    var btn = document.querySelector('.header__search-svg2');
    var blockHidden = document.querySelector('.header__open-search320');



    function showBlock() {

        blockHidden.classList.add('open__search');
        close.classList.remove('open__search');

    }
    btn.addEventListener('click', showBlock);



})

window.addEventListener('DOMContentLoaded', function() {

    var btnc = document.querySelector('.contacts__back-close');
    var blockHidden = document.querySelector('.header__open-search320');



    function showBlock() {

        blockHidden.classList.remove('open__search');

    }
    btnc.addEventListener('click', showBlock);



})

window.addEventListener('DOMContentLoaded', function() {

    var btn = document.querySelector('.burger');
    var blockHidden = document.querySelector('.burger__menu');
    var body = document.querySelector('#body');



    function showBlock() {

        blockHidden.classList.add('bo');
        body.classList.add('body');

    }
    btn.addEventListener('click', showBlock);



})



window.addEventListener('DOMContentLoaded', function() {

    var btn = document.querySelector('.burger__back-close');
    var blockHidden = document.querySelector('.burger__menu');
    var body = document.querySelector('#body');



    function showBlock() {

        blockHidden.classList.remove('bo');
        body.classList.remove('body');

    }
    btn.addEventListener('click', showBlock);



})

new JustValidate('form', {
    rules: {
        name: {
            required: true,
            minLength: 2,


            strength: {
                custom: '^[А-Я][а-я]{2,16}$'
            }

        },
        email: {
            required: true,
            email: true
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        },
    },



    messages: {
        name: {
            required: 'Как вас зовут?',
            minLength: 'Введите 3 и более символов',
            strength: 'Недопустимый формат'
        },
        email: {
            required: 'Укажите ваш email',
            strength: 'Недопустимый формат'
        },

    },




});

new JustValidate('.form', {
    rules: {
        name: {
            required: true,
            minLength: 2,


            strength: {
                custom: '^[А-Я][а-я]{2,16}$'
            }

        },
        email: {
            required: true,
            email: true
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        },
    },



    messages: {
        name: {
            required: 'Как вас зовут?',
            minLength: 'Введите 3 и более символов',
            strength: 'Недопустимый формат'
        },
        email: {
            required: 'Укажите ваш email',
            strength: 'Недопустимый формат'
        },

    },




});

function validate() {
    var val = document.getElementById('textarea').value;

    if (/^\s*$/g.test(val) || val.indexOf('\n') != -1) {
        alert('Wrong content!');
    }
}