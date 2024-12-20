let letters = document.querySelectorAll('h2 span');
letters.forEach(e => {
    e.style.color = `rgb(${Math.floor(255 * Math.random())}, 
    ${Math.floor(255 * Math.random())}, 
    ${Math.floor(255 * Math.random())})`;
});
setTimeout(() => {
    $('section').fireworks();
}, 10000)