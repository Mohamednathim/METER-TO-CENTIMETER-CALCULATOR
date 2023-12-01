const h1 = document.getElementById('h1')
h1.innerHTML = "🧮 Meter to Centimeter"

const button = document.getElementById('button')

button.addEventListener('click',() => {
const m = document.getElementById('input').value
const cm = m*100;
const result = document.getElementById('result')
result.innerHTML = `${cm} cm`
})