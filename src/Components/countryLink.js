
import React, {Fragment} from 'react'
import './countryLink.css'

function CountryLink(props) {
    return (
        <li className="nav-item">
            <a className="nav-link" onClick={()=>props.showInfo(props.code)} href="#">{props.name}</a>
        </li>
    )
}

function CountriesSidebar(props) {
    return (
        <Fragment>
            <nav className="col-2  bg-faded sidebar">
                <ul className="nav nav-pills flex-column">
                    {props.countries.map(country =>
                        <CountryLink key={country.alpha3Code} showInfo={props.showInfo} code={country.alpha3Code} name={country.name}/>
                    )

                    }
                </ul>
            </nav>
        </Fragment>
    )
}

export default CountriesSidebar