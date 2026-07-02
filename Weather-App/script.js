async function getWeather() {

    let city = document.getElementById("city").value;

    let apiKey = "7880ed42385a07281a1bb05ea8c3e6e7";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    try {

        let response = await fetch(url);
        let data = await response.json();

        if (data.cod != 200) {

            document.getElementById("weather").innerHTML =
                "<h3>City not found.</h3>";

            return;
        }

        document.getElementById("weather").innerHTML = `
            <h2>${data.name}</h2>
            <p><strong>Temperature:</strong> ${data.main.temp}°F</p>
            <p><strong>Feels Like:</strong> ${data.main.feels_like}°F</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
            <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        `;

    } catch (error) {

        document.getElementById("weather").innerHTML =
            "<h3>Something went wrong.</h3>";

        console.log(error);

    }

}