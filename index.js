

function getWeather(){
    let city = document.getElementById('input').value;
    const apiKey = '99e0cb84b6ebaae4c78794328d87c9ce';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    fetch(apiUrl).
    then(res=> res.json())
    .then(data => {
        
        const info = document.getElementById('info');
        
        const description = data.weather[0].description;
        const temperature = data.main.temp;
        const feelLike = data.main.feels_like;
        const humidity = data.main.humidity;
        const wind = data.wind.speed;
        
        info.innerHTML = `
        <h1>Forecast Of  ${city}</h1>
        <p>Description: ${description}</p>
        <p>Temperature: ${temperature} &#8451 </p>
        <p>Feels Like: ${feelLike} &#8451</p>
        <p>Humidity: ${humidity} %</p>
        <p>Wind Speed: ${wind} m/s </p>

        `;

    })
    .catch(error=>{
        console.error(' Sorry',error);
        document.getElementById('info').textContent = 'City Not Found';
    })
}