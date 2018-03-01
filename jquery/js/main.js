/*podpinanie zdarzenia załadowania strony 'ready' do obiektu (document), uzywając $ dajemy znac skryptowi ze kozystamy z biblioteki jquery*/


$(document).ready(function () {
    changeColorShowHide();
    changeLinkColor();
    getText();
    setText();
    getHtml();
    setHtml();
    addContentInTag();
    addContentInTagPrepend();
    addElementAfterFirst();
    addElementBeforeFirst();
    deleteLastLink();
    deleteContentFromFirstParagrapf();
    changeFontSizeAdnColor();
    getValueFromInput();
    setValueFromInput();
    changeLinkColorInBox();
    boxClick();
    fewEvents();
    zniknijPokaz();


})
/*obsluga zdarzenia scroll dla okna*/
$(window).scroll(function () {

});

//funkcja zmienia kolor tla,
//ukrywa i pokazuje element za pomocą metod .show() i .hide() 

function changeColorShowHide() {
    $('#first').css('background-color', 'red').hide(3000).show('slow');

}

function changeLinkColor() {
    $('.list-item:first-of-type a').css('text-decoration', 'none');
}
//pobiera wartosci tekstowe danego selektora
function getText() {
    console.log($('#first h1').text());
}
//ustawia wartosc tekstowa danego selektora
function setText() {
    $('#first h1').text('<span>Lorem ipsum dolor sit amet.</span>');
}
//pobieranie zawartosci html danego selektora
function getHtml() {
    console.log($('#first ').html());
}
//ustawia wartosc html danego selektora
function setHtml() {
    $('#first').html('<span>Lorem ipsum dolor et.</span>');
}

//append dodawanie tresci na koncu wybranego selektora
function addContentInTag() {
    $('.green').append('<span>Hello world!</span>');
}
//prepend dokladna tresc na poczatku wybranego selektora
function addContentInTagPrepend() {
    $('#first span').prepend('<span>Element prepend</span>');
}
//after dokladna tresc za (jako nastepnik) podanym selektorem

function addElementAfterFirst() {
    $('#first').after('<div id="fourth"><h2>Za pomoca metody after</h2></div>');
}
//before dokladna tresc przed (jako poprzednik) podanym selektorem
function addElementBeforeFirst() {
    $('#first').before('<div id="third"><h2>Za pomoca metody before</h2></div>');
}
//usuwa calkowicie znacznik
function deleteLastLink() {
    $('.list-item:last-child a').remove();
}

function deleteContentFromFirstParagrapf() {
    $('.green:first-of-type').empty();
}
//metoda css() z jedna wlasciwoscia do zmiany
//.css('wlasciwosc', 'wartosc');

//metoda css() z kilkoma wlasciwosciami
//.css({
//wlasciwosc1: 'wartosc',
//wlasciwosc2: 'wartosc'
//})

function changeFontSizeAdnColor() {
    $('#main-nav .list-item a').css({
        fontSize: '24px',
        color: 'violet'
    })
}
//val() metoda dziala tylko na elementy formularza
function getValueFromInput() {
    console.log($('#formularz form input:first-child').val());
}

function setValueFromInput() {
    $('#formularz form input').val('4765');
}

function changeLinkColorInBox() {
    var parent = $('.box');

    // parent.each(function (element, index)
    //

    parent.each(function () {
        $(this).find('a').css('color', '#fff')
    })
}

function boxClick() {
    var parent = $('.box');
    parent.each(function () {
        $(this).click(function () {
            $(this).css('backgroundColor', 'red');
        })
    })
}

function fewEvents() {
    var parent = $('.list-item');
    parent.each(function () {
        $(this).on({
            'mouseenter': function () {
                $(this).find('a').css('color', '#000');
            },
            'mouseout': function () {
                $(this).find('a').css('color', 'violet');
            }
        })

    })
}

function zniknijPokaz() {
    //        $('#each').fadeOut(5000).fadeIn(5000);

    $('#each').slideUp(5000).slideDown(5000);
}
