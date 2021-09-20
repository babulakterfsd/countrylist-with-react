import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-10 mx-auto">
            <h1 className="text-center"><u>Countries of the World</u></h1>
            <div>
             <GetAndDisplayCountries></GetAndDisplayCountries>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GetAndDisplayCountries(props) {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
     .then(response => response.json())
      .then(data => setCountries(data.slice(0,20)))
  }, [])
  return (
    <div className="countryContainer py-5 animate__animated animate__zoomIn">
     {countries.map(country => <div className="card border border-success border-1"><img class="card-img-top" src={country.flag} alt="country" style={{height: '100px', objectFit: 'cover'}}></img><div className="card-body"><div className="card-title">country : <span className="text-success fw-bolder">{country.name}</span></div><div className="card-text"><p>capital : <span className="fw-bold text-success">{country.capital}</span></p><p>population : <span className="fw-bold text-success">{country.population}</span></p><p>region : <span className="fw-bold text-success">{country.region}</span></p></div></div></div>)}
    </div>
  )
}

export default App;