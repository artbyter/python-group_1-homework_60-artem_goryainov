import 'bootstrap/dist/css/bootstrap.min.css'
import React, {Component} from 'react';

import './App.css';
import CountriesSidebar from './Components/countryLink'
import CountryInfo from './Components/countryInfo'

class App extends Component {

    state = {
        countries: null,
        currentCountry: null

    }

    getCountries = () => {
        fetch('https://restcountries.eu/rest/v2/all').then(response => {
            if (response.ok) {
                return response.json()


            }
            throw new Error('Something went wrong with network request');
        }).then(countries => {
            this.setState({countries: countries})
        }).catch(error => console.log(error))
    }

    componentDidMount() {
        this.getCountries()
    }

    showCountryInfo = code => {
        this.setState({currentCountry: code})
    }
    getCountryByCode = code => {
        return this.state.countries.filter(country => country.alpha3Code === code)[0]
    }

    render() {
        return (

            <div className="container-fluid">
                <div className="row">
                    {this.state.countries ?
                        <CountriesSidebar countries={this.state.countries} showInfo={this.showCountryInfo}/> : null}
                    {this.state.countries ? <CountryInfo
                        country={this.state.currentCountry ? this.state.currentCountry : this.state.countries[0].alpha3Code}
                        getCountry={this.getCountryByCode}/> : null}
                </div>
            </div>

        );
    }
}

export default App;
