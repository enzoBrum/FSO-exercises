const ShowCountry = ({country}) => {

    return (<>
        <h1>
            {country.name.common}
        </h1>
        <p>
            capital {country.capital[0]}
        </p>
        <p>
            area {country.area}
        </p>
        <div>
        <strong>languages:</strong>
            <ul>
                {Object.values(country.languages).map(
                    (lang) =>
                        <li key={lang}>
                            {lang}
                        </li>
                )}
            </ul>
        </div>
        <div>
            <img src={country.flags.png}/>
        </div>
    </>)
}

export default ShowCountry