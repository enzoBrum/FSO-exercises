import ShowListOfCountries from "./ShowListOfCountries"
import ShowCountry from "./ShowCountry"

const ShowController = ({countries, loadingCountries}) => {
    
    if (!loadingCountries) {
        if (countries.length === 250)
            return (
                <div></div>
            )
        
        else if (countries.length > 10) 
            return(
                <div>
                    Too many matches, specify another filter
                </div>
            )
        
        else if (countries.length > 1)
            return (
                <div>
                    <ShowListOfCountries countriesReceived={countries}/>
                </div>
            )

        
        else if (countries.length === 0)
                return (
                    <div>
                        country not found
                    </div>
                )
        
        else 
                return (
                    <div>
                        <ShowCountry
                            country={countries[0]}
                        />
                    </div>
                )
        
     
        
}
}
export default ShowController