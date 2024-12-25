import serviceWeather from "../services/serviceWeather";

const Weather = ({ weather }) => {
    const {getIcon} = serviceWeather;

    if (!weather) {
        return <div>Not weather information yet</div>;
    }

    return (
        <div>
        <h3>Weather in {weather.name}</h3>
        <p>Temperature: {weather.main.temp} Celsius</p>
        <img src={getIcon(weather.weather[0].icon)} alt="weather icon" />
        <p>
            Wind: {weather.wind.speed} m/h
        </p>
        </div>
    );
}

export default Weather;