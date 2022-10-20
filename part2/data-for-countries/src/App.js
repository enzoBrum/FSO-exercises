import { useState, useEffect } from "react";
import axios from 'axios'
import Input from './components/Input'
import ShowController from "./components/ShowController";




function startsWith(value, string) {
  value = value.toLowerCase().trim()
  string = string.toLowerCase()
  
  if (!value) return true

  for (let i = 0; i < string.length; i++) {
    if ( value[i] !== string[i] )
      return false;

    if ( i+1 === value.length )
      return true;
  }
}



const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ search, setSearch ] = useState('')
  const [loadingCountries, setLoading] = useState(true)
  const [ countriesShown, setCountriesShown ] = useState([])
  
  useEffect(() => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then( (response) => {
      let received = response.data
      console.log(received)
      received = received.map( (country) => ({ ...country, shown: false }))

      setCountries(received)
      setCountriesShown(received)
      setLoading(false)
    })
  
  }, [])
  

  

  
  useEffect(() =>
    setCountriesShown(  countries.filter(
                                            (country) =>
                                            startsWith(search, country.name.common)        
                                          )), [search])
    
    return (
      <>
        <Input
           text="find countries"
           value={search}
           setValue={setSearch}
        />
        <ShowController
          countries={countriesShown}
          loadingCountries= {loadingCountries}
        />
      </>
    )

}


export default App