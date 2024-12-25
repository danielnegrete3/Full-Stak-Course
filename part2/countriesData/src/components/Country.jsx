import { useEffect, useState } from "react";
import Currencies from "./Currencies";
import Flag from "./Flag";
import Languages from "./Languages";
import NativeNames from "./NativeNames";
import serviceWeather from "../services/serviceWeather";
import Weather from "./Weather";


const Country = ({ country }) => {
    const [weather, setWeather] = useState(null);
    const { getWeather } = serviceWeather;

    useEffect(() =>
    {
        getWeather(country.latlng[0], country.latlng[1])
        .then(data => setWeather(data))
        .catch(error => console.log(error));
    },[]);

    return(
        <div>
            <h1>{country.name.official} : ({country.name.common})</h1>
            <NativeNames nativeNames={Object.entries(country.name.nativeName)} />
            <Currencies currencies={Object.entries(country.currencies)} />

            <p>Capital: {country.capital}</p>
            <p>Region : {country.region}</p>

            <Languages languages={Object.entries(country.languages)} />

            <Flag img={country.flags.png?? country.flag.svg} alt={country.flags.alt}/>
            <Weather weather={weather} />
            
        </div>
    )
}

export default Country;