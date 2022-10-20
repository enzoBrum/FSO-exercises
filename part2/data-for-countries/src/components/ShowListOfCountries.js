import { useState } from "react"
import ShowCountry from "./ShowCountry"


const ShowListOfCountries = ({countriesReceived}) => {
    const [ countries, setCountries] = useState(countriesReceived)    
    
    const clickHandler = (country, index) => {
        const newCountries = [...countries]
        const newCountry = {
            ...country,
            shown: !country.shown 
        }
        newCountries[index] = newCountry
        console.log(newCountry.shown)
        return(
            () =>
                setCountries( newCountries )
        )
    }
    const countryRender = (country, index) => {
        if (!country.shown)
            return (
                <div key={country.cca3}>
                    <span>
                        {country.name.common}
                    </span>
                    <button 
                        style={{marginLeft: '5px'}}
                        onClick={clickHandler(country, index)}
                        >
                        show
                    </button>
                </div>
            )
        else
            return (
                <div key={country.cca3}>
                    <span>
                        {country.name.common}
                    </span>
                    <button 
                        style={{marginLeft: '5px'}}
                        onClick={clickHandler(country, index)}
                        >
                        hide
                    </button>
                    <ShowCountry country={country}/>
                </div>
            )
    }
    
    return (
        <>
            {countries.map( (country, index) =>
                countryRender(country, index)

                )}
        </>
    )
}
export default ShowListOfCountries