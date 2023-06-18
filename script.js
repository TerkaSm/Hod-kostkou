/*
Při kliknutí na tlačítko vygeneruj náhodné číslo od 1 do 6.
Změň obrázek na stránce podle toho, jaké číslo padne.
Podle toho, kolik na kostce padlo, do textu pod tlačítkem napiš:
- Hodil jsi X, házej znovu.
- Šestka! Vyhrál jsi.
*/


const priKliknuti = () => {
    const tlacitko = document.querySelector('.tlacitko');
    tlacitko.addEventListener('click', priKliknuti);
    const hod = Math.floor(Math.random() * 6) + 1;
    console.log(hod);

    const kostka = document.querySelector('#kostka')
    const zprava = document.querySelector('#zprava')

    if (hod === 1) {
        kostka.src = 'images/1.png';
        zprava.textContent = 'Hodil jsi 1, házej znovu.';
    } else if (hod === 2) {
        kostka.src = 'images/2.png'; 
        zprava.textContent = 'Hodil jsi 2, házej znovu.';
    } else if (hod === 3) {
        kostka.src = 'images/3.png';
        zprava.textContent = 'Hodil jsi 3, házej znovu.';
    } else if (hod === 4) {
        kostka.src = 'images/4.png';
        zprava.textContent = 'Hodil jsi 4, házej znovu.';
    } else if (hod === 5) {
        kostka.src = 'images/5.png';
        zprava.textContent = 'Hodil jsi 5, házej znovu.';
    } else {
        kostka.src = 'images/6.png';
        zprava.textContent = 'Šestka! Vyhrál jsi.';
    }
}

priKliknuti()