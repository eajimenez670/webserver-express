const hbs = require('hbs');

// Helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    arrayPalabras = texto.split(' ');
    arrayPalabras.forEach((palabra, ind) => {
        arrayPalabras[ind] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return arrayPalabras.join(' ');
});