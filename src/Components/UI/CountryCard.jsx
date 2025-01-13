const CountryCard = ({countryData}) => {
  const {name, population, region, capital, flags} = countryData;

  return (
    <>
      <li className="country-card card">
        <div className="container-card bg-white-box">
          <img src={flags.svg} />

          <div className="countryInfo">
            <p className="card-title">{name.common}</p>
            <p className="card-title">
              <span className="card-description">Population :</span>
            </p>
            <p>
              <span className="card-description">Region : </span>
            </p>
            <p>
              <span className="card-description">Capital : </span>
            </p>
          </div>
        </div>
      </li>
    </>
  );
};

export default CountryCard;
