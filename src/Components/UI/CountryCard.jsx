/* eslint-disable react/prop-types */
import {NavLink} from "react-router-dom";

const CountryCard = ({countryData}) => {
  const {name, population, region, capital, flags} = countryData;
  return (
    <>
    
      <li className="country-card card bg-yellow-box">
        <div className="container-card bg-white-box">
          <img src={flags.svg} />

          <div className="countryInfo">
            <h2 className="card-title">
              {name.common.length > 10
                ? name.common.slice(0, 10) + "..."
                : name.common}
            </h2>
            <p>
              <span className="card-description">
                Population : {population}
              </span>
            </p>
            <p>
              <span className="card-description">Region : {region}</span>
            </p>
            <p>
              <span className="card-description">Capital : {capital[0]}</span>
            </p>
            <NavLink to={`/country/${name.common}`}>
              <button>Read More</button>
            </NavLink>
          </div>
        </div>
      </li>
    </>
  );
};

export default CountryCard;
