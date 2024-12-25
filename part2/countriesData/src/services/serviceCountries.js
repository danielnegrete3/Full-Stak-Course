import axios from 'axios'

const countries = "https://studies.cs.helsinki.fi/restcountries/api"

const getAll = () => {
    const request = axios.get(`${countries}/all`)
    return request.then(response => response.data)
}

const getCountrie = (name) => {
    const request = axios.get(`${countries}/name/${name}`)
    return request.then(response => response.data)
}

const countriesService = { getAll, getCountrie };

export default countriesService;