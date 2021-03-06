import React from 'react'

function CountryInfo(props) {
    const country=props.getCountry(props.country)

    return (
        <main className="col-10 offset-2  pt-3">
            <h1 className='d-inline-block'>{country.name}</h1>
            <img className='float-right mr-3 border border-dark' width='30%' src={country.flag}></img>
            <div className='mt-5'>
                <p>Capital: {country.capital}</p>
                <p>Population: {country.population}</p>
                <p>Area: {country.area} km<sup>2</sup></p>
                <p>Languages: </p>
                <ul>
                    {country.languages.map(language=>
                        <li key={language.name}>{language.name}</li>
                    )}
                </ul>
                <p>Borders to: </p>
                <ul>
                    {country.borders.map(countryCode=>{

                        return <p><a href='#' key={countryCode} onClick={()=>props.showInfo(countryCode)} >{props.getCountry(countryCode).name}</a></p>}
                    )}
                </ul>
            </div>
        </main>
    )

}

export default CountryInfo