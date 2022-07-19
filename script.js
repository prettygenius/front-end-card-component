const button = document.getElementById('button')

button.addEventListener('click', myButton) 

function myButton() {
    document.querySelector('.container').style.display = 'none'
    document.querySelector('h2').textContent = 'Thank You Valued Customer.......See You Again Soon!'
}


