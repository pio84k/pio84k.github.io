/*Funkcja jestCyfra() wywołana w funkcji haslo() sprawdza czy w zmiennej x znajduje się jakaś cyfra przy użyciu tabeli unicode*/

function jestCyfra(x) {
    var c = x.length;
    for (i = 0; i < c; i++) {
        if (x.charCodeAt(i) >= 48 && x.charCodeAt(i) <= 57) {
            return true;
        }

    }
    return false;
}

function haslo() {
    var haslo = document.getElementById("password").value;

    var a = haslo.length;
    //Sprawdza czy jest cokolwiek wprowadzone
    if (haslo == "") {
        document.getElementById("wynik").innerHTML = '<span style="color:red">NIE WPROWADZIŁEŚ HASŁA</span>'
        //Sprawdza czy liczba znaków to conajmniej 7 a wnich conajmniej 1 liczba
    } else if (a >= 7 && jestCyfra(haslo)) {
        document.getElementById("wynik").innerHTML = '<span style="color:green">HASŁO JEST SILNE</span>'
        //Sprawdza czy liczba znaków jest między 4 i 7 a wnich conajmniej jedna cyfra
    } else if (a > 4 && a < 7 && jestCyfra(haslo)) {
        document.getElementById("wynik").innerHTML = '<span style="color:yellow"> HASŁO ŚREDNIE</span>'
        //zadziała jeśli znaków jest 4 lub mniej oraz czy jest conajmniej 1 cyfra.
    } else {
        document.getElementById("wynik").innerHTML = '<span style="color:red"> HASŁO SŁABE</span>'
    }
}
