function oblicz(dzialanie) {

    var a = document.getElementById('a').value;

    var b = document.getElementById('b').value;

    if (a == "" || b == "") {
        document.getElementById('wynik').innerHTML = "Podaj obie liczby";
    } else {
        a = parseFloat(a);
        b = parseFloat(b);

        switch (dzialanie) {
            case 1:
                document.getElementById('wynik').innerHTML = "Wynik działania wynosi  " + (a + b);
                break;
            case 2:
                document.getElementById('wynik').innerHTML = "Wynik działania wynosi  " + (a - b);
                break;
            case 3:
                document.getElementById('wynik').innerHTML = "Wynik działania wynosi  " + (a * b);
                break;
            case 4:
                if (b == 0) {
                    document.getElementById('wynik').innerHTML = "Nie dzielimy przez zero ! "
                } else {
                    document.getElementById('wynik').innerHTML = "Wynik działania wynosi  " + (a / b);
                    break;
                }

        }

    }

}
