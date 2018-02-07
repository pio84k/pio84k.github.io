function suma() {

    var a = document.getElementById('a').value;

    var b = document.getElementById('b').value;



    if (a == "" || b == "") {
        document.getElementById('wynik').innerHTML = "Podaj obie liczby";
    } else {
        a = parseFloat(a);
        b = parseFloat(b);

        var wynik = a + b;

        document.getElementById('wynik').innerHTML = "Wynik działania wynosi  " + wynik;
    }
}

function roznica() {

    var a = document.getElementById('a').value;

    var b = document.getElementById('b').value;



    if (a == "" || b == "") {
        document.getElementById('wynik').innerHTML = "Podaj obie liczby";
    } else {
        a = parseFloat(a);
        b = parseFloat(b);

        var wynik = a - b;

        document.getElementById('wynik').innerHTML = "Wynik działania wynosi  " + wynik;
    }
}

function iloczyn() {

    var a = document.getElementById('a').value;

    var b = document.getElementById('b').value;



    if (a == "" || b == "") {
        document.getElementById('wynik').innerHTML = "Podaj obie liczby";
    } else {
        a = parseFloat(a);
        b = parseFloat(b);

        var wynik = a * b;

        document.getElementById('wynik').innerHTML = "Wynik działania wynosi  " + wynik;
    }
}

function iloraz() {

    var a = document.getElementById('a').value;

    var b = document.getElementById('b').value;



    if (a == "" || b == "") {
        document.getElementById('wynik').innerHTML = "Podaj obie liczby";
    } else if (b == 0) {
        document.getElementById('wynik').innerHTML = "Nie dzielimy przez zero";
    } else {
        a = parseFloat(a);
        b = parseFloat(b);

        var wynik = a / b;

        document.getElementById('wynik').innerHTML = "Wynik działania wynosi  " + wynik;
    }
}
