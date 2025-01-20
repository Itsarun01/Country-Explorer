import CountryFactsData from "../api/CountryData.json";
const TopCountries = () => {
  return (
    <>
      <section className="section-about container">
        <h2 className="container-title">
          Here Are Top Countries, Intresting Facts
        </h2>
      </section>
      <div className="gradient-cards container">
        {CountryFactsData.map((country) => {
          const {id, countryName, capital, population, interestingFact} =
            country;
          return (
            <div className="card" key={id}>
              <div className="container-card bg-yellow-box">
                <p className="card-title"> {countryName}</p>
                <p>
                  <span className="card-description">Capital : {capital}</span>
                </p>
                <p>
                  <span className="card-description">
                    Population : {population}
                  </span>
                </p>
                <p>
                  <span className="card-description">
                    Interesting Fact : {interestingFact}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TopCountries;
