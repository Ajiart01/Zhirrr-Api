const needle = require('needle');
const fetch = require('node-fetch');

const Nulis = (text) => new Promise((resolve, reject) => {
    const url = 'http://salism3.pythonanywhere.com/write?text=';

    if (typeof text === 'undefined') {
        reject('Masukkan teksnya, kak.');
    }

    if (text.includes('#')) {
        text = text.replace(/\#/g, '');
    }

    needle(url + text, (err, resp, body) => {
        if (!err && body && body.images) {
            resolve(body.images);
        } else {
            reject('Terjadi kesalahan.');
        }
    });
});

const inputText = process.argv.slice(2).join(' ');

Nulis(inputText)
    .then(data => console.log('.'))
    .catch(err => console.log(err));

module.exports = Nulis;
