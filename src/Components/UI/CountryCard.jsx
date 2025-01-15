const CountryCard = ({countryData}) => {
  const {name, population, region, capital, flags} = countryData;
  return (
    <>
      <li className="country-card card">
        <div className="container-card bg-white-box">
          <img src={flags.svg} />

          <div className="countryInfo">
            <h2 className="card-title">
              {name.common.length > 15
                ? name.common.slice(0, 15) + "..."
                : name.common}
            </h2>
            <p>
              <span className="card-description">Population : </span>
              {population}
            </p>
            <p>
              <span className="card-description">Region : </span> {region}
            </p>
            <p>
              <span className="card-description">Capital : </span> {capital[0]}
            </p>
          </div>
        </div>
      </li>
    </>
  );
};

export default CountryCard;
