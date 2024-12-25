import Country from "./Country";

const Countries = ({ countries, handleShow}) => {

        if (countries.length > 10) {
            return <div>Too many matches, specify another filter</div>
        }

        if (countries.length === 1) {
            const country = countries[0];
            return <Country country={country} />
        }

        return (
            <ul>
                {countries.map(country => <li key={country.name.common}>{country.name.official}: ({country.name.common}) <button onClick={()=>{handleShow(country)}}>show</button></li>)}
            </ul>
        )
    }

export default Countries;