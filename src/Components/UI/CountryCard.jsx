const CountryCard = ({countryData}) => {
  const {name, population, region, capital, flags} = countryData;

  return (
    <>
      <li className="country-card card">
        <div className="container-card bg-white-box">
          <img src={flags.svg} />

          <div className="countryInfo">
            <p className="card-title">{name.common}</p>
            <p>Population : {population}</p>
            <p>Region : {region}</p>
            <p>Capital: {capital}</p>
          </div>
        </div>
      </li>
    </>
  );
};

export default CountryCard;
