fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data);
    })
});




const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const errorMessage = document.querySelector('#error');
const weatherMessage = document.querySelector('#weather');

weatherForm.addEventListener('submit', (event) => {
    errorMessage.textContent = "Loading..."
    event.preventDefault()
    const location = search.value;
    fetch('http://localhost:3000/weather?address='+location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            errorMessage.textContent = data.error;
        } else {
            weatherMessage.innerHTML = data.location + "<br>" + data.forecast;
            console.log(data.location);
            console.log(data.forecast);
        }
    });
});
    
})