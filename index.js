//1. Palyginti du skaičius a ir b.Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
//2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10.(5 taškai)
//3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10.(5 taškai)
//4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
//5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5.(7 taškai)
//6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
//7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
//8. Parašyti funkciją - lygineSuma.Funkcijos parametrai - du kintamieji.Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
//Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą.Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
//9. Parašyti funkciją pirminisSkaicius.Funkcija turi vieną kintamąjį.Turi būti patikrinimas, kad kintamasis yra skaičius.Funkcija turi grąžinti ar pateiktas skaičius yra pirminis(pirminis
//skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.)(10 taškų)
//10. Parašyti funkciją telefonoNumeris.Funkcija turi priimti vieną kintamąjį - masyvą.Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu -
//    "(XXX) XXX-XXXX". (10 taškų)

//random skaiciu funkcija
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// 1.
function palyginimas(a, b){
    if(a > b){
        console.log('Didesnis skaičius:', a)
    } else if (a < b){
        console.log('Didesnis skaičius:', b)
    } else if (a = b){
        console.log(a,'skaičius lygus skaičiui', b)
    }
}
palyginimas(5, 3)
// 2.
function isvedimas(){
    for(i = 1; i < 11; i++){
        console.log(i)
    }
}
isvedimas();
// 3.
function isvedimas2() {
    for (i = 0; i < 11; i++ ,i++) {
        console.log(i)
    }
}
isvedimas2();
// 4.
function isvedimas3() {
    console.log('5 random nuo 1 iki 10')
    for (i = 1; i < 11; i++, i++) {
        let skaicius = rand(1,10)
        console.log(skaicius)
    }
}
isvedimas3();
// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5.
function paskutinis5() {
    
}
paskutinis5();
// 6. 
function masyvasRandom(){
    const masyvas = [];
    masyvas.length = rand(20, 30);
    for(i = 0; i < masyvas.length; i++){
        masyvas[i] = rand(10, 30); 
    }
    console.log(masyvas)
    function largest(arr) {
        let max = arr[0];
        for (i = 0; i < arr.length; i++) {
            if (arr[i] > max)
                max = arr[i];
        }
        return max, console.log(max)
    }
    largest(masyvas);
}
masyvasRandom();
// 7.
function randomRaides(){
    const raides = [];
    raides.length = 100;
    const pasirinkimas = ['A', 'B', 'C', 'D'];
    for (i = 0; i < raides.length; i++) {
        raides[i] = pasirinkimas[rand(0,3)]
    }
    console.log(raides);
    let countA = 0;
    let countB = 0;
    let countC = 0;
    let countD = 0;
    raides.forEach(element => {
        if (element === 'A') {
            countA += 1;
        } else if (element === 'B') {
            countB += 1;
        } else if (element === 'C') {
            countC += 1;
        } else if (element === 'D') {
            countD += 1;
        }
    });
    console.log('A raidziu:', countA, 'B raidziu:', countB, 'C raidziu:', countC, 'D raidziu:', countD,)
}
randomRaides();
// 8.
let a = 5;
let b = 6;
function lygineSuma(a, b) {
    if (typeof a === 'number' && typeof b === 'number'){
        let suma = a + b;
        if (suma % 1) {
            const atsakymas = 'Suma nelygine'
            return atsakymas;
        } else{
            return suma;
        }
        
    } else if (typeof a === 'array' && typeof b === 'array'){
        let suma = a.length + b.length;
        if (suma % 1) {
            const atsakymas = 'Suma nelygine'
            return atsakymas;
        } else {
            return suma;
        }
    } 
}
lygineSuma();
// 9.

function pirminisSkaicius(a) {
    let yraPirminis = true;
    if (typeof a === 'number' && a > 1){
        for (let i = 2; i < a; i++) {
            if (a % i == 0) {
                yraPirminis = false;
                break;
            }
        }

        if (yraPirminis) {
            console.log(`${a} - sis skaicius yra pirminis`);
        } else {
            console.log(`${a} - sis skaicius nepirminis`);
        }
    }
}
pirminisSkaicius(20);

// 10.

function telefonoNumeris(a){
    let numeris = '';
    if(typeof a === 'array' && a.length === 10 && typeof a[i] === 'number' && a > -1 && a < 10){
        let numeris ='';
        for(i = 0; i < a.length; i++){
            numeris += a[i]
        }
        console.log(numeris)
        return numeris;
    }
    console.log(numeris)
}