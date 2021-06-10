const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(x) {
    cats.push(x);
}

cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');

function destructivelyPrependCat(x) {

    cats.unshift(x);
}

cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');

function destructivelyRemoveLastCat() {

    cats.pop();
}

cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');

function destructivelyRemoveFirstCat() {

    cats.shift();
}

cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');



function appendCat(x) {

    const cats2 = [...cats, x];

    return cats2;
}

function prependCat(x) {
    const cats2 = [x, ...cats];

    return cats2;
}

cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');



function removeLastCat() {
    return cats.slice(0, 2);
}

function removeFirstCat() {
    return cats.slice(1);
}

