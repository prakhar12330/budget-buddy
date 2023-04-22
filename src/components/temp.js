const display = document.querySelector('#display');


const cards = document.querySelectorAll('.card');


cards.forEach(card => {
    card.addEventListener('click', () => {
       
        const target = card.getAttribute('data-target');

        
        display.textContent = `You clicked on card ${target}.`;
    });
});