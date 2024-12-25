import { useState, useEffect} from 'react'
import countriesService from './services/serviceCountries';
import Countries from './components/Countries';

function App() {
  const [countries, setCountries] = useState([]);
  const [showCountries, setShowCountries] = useState([]);
  const {getAll} = countriesService;

  useEffect(() => {
    getAll()
    .then(data => {
      // console.log(data);
      setCountries(data);
    })
    .catch(error => {
      console.log(error);
    })
  }, [])

  const handleFind = (e) => {
    const name = e.target.value;
    const find = countries.filter(country => country.name.common.toLowerCase().includes(name.toLowerCase()) || country.name.official.toLowerCase().includes(name.toLowerCase()));
    // console.log(find);
    setShowCountries(find);
  }

  const handleShow = (country) => {
    setShowCountries([country]);
  }



  return (
    <>
      <input type="text" onChange={handleFind}/>
      <Countries countries={showCountries} handleShow={handleShow}/>
    </>
  )
}

export default App
