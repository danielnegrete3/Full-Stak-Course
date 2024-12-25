import axios from "axios"
const api_key = import.meta.env.VITE_SOME_KEY
const url = "https://api.openweathermap.org/data/2.5/weather?"

const getWeather = (lat, lon) => {
    const request = axios.get(`${url}lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`);
    return request.then(response => response.data);
}

const getIcon = (icon) => {
    return `https://openweathermap.org/img/wn/${icon}@4x.png`;
}

const serviceWeather = { getWeather, getIcon }

export default serviceWeather;