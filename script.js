// Palindroma 

// function isPalindroma(p) {
//     let newParola = '';
//     let palindroma = false;
//     for (i = p.length-1; i >= 0; i--) {
//         newParola += p[i];
//     }
//     if (newParola == p) {
//         palindroma = true;
//     }
//     return palindroma;
// }

// let p =prompt ("Inserisci parola");

// if (isPalindroma(p)) {
//     console.log(p + ' è palindroma');
// }
// else {
//     console.log(p + ' non è palindroma');
// }

// Pari e Dispari 

function generaNumero(n) {
    return Math.floor(Math.random() * (n - 1) + 1);
}

function isPari(n) {
    if (n % 2 == 0) {
        return true;
    }
    return false
}

let tipo = prompt("Scegliere pari o dispari");
if (tipo == 'pari' || tipo == 'dispari') {
    let nP = parseInt(prompt('inserisci un numero da 1 a 5'));
    let nC = parseInt(generaNumero(5));


    let somma = nC + nP;
    if (tipo == 'pari') {
        if (isPari(somma)) {    
            console.log('la somma ' + somma + ' è pari, vince il giocatore');
        }
        else {
            console.log('la somma ' + somma + ' è dispari, vince il computer');
        }

    }
    else {
        if (isPari(somma)) {    
            console.log('la somma ' + somma + ' è pari, vince il computer');
        }
        else {
            console.log('la somma ' + somma + ' è dispari, vince il giocatore');
        }
    }
}
else {
    console.log('la parola inserita non è valida')
}


