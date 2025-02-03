import {useParams} from "react-router-dom";
import {useTransition, useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
``;
// Components
import Loader from "../UI/Loader";
import {getCountry} from "../../api/CountriesApi";

const CountryDetails = () => {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountry(params.id);
      setCountry(res.data[0]);
      console.log(country);
    });
  }, []);

  if (isPending) return <Loader />;

  return (
    <>
      <section className="card country-details-card container ">
        <div className="container-card  card-flex card-border">
          {country && (
            <div className="country-image grid grid-two-col ">
              <img
                src={country.flags.svg}
                alt={country.flags.alt}
                className="flag"
              />
              <div className="country-content">
                <span className="card-title"> {country.name.official} </span>

                <div className="infoContainer">
                  <p>
                    <span className="card-description">
                      Native Names :{" "}
                      {Object.keys(country.name.nativeName)
                        .map((key) => country.name.nativeName[key].common)
                        .join(", ")}
                    </span>
                  </p>
                  <p>
                    <span className="card-description">
                      Population : {country.population.toLocaleString()}
                    </span>
                  </p>
                  <p>
                    <span className="card-description">
                      Region : {country.region}
                    </span>
                  </p>
                  <p>
                    <span className="card-description">
                      Sub Region : {country.subregion}
                    </span>
                  </p>
                  <p>
                    <span className="card-description">
                      Capital : {country.capital}
                    </span>
                  </p>

                  <p>
                    <span className="card-description">
                      Top Level Domain : {country.tld[0]}
                    </span>
                  </p>
                  <p>
                    <span className="card-description">
                      Currencies :{" "}
                      {Object.keys(country.currencies)
                        .map((curElem) => country.currencies[curElem].name)
                        .join(", ")}
                    </span>
                  </p>
                  <p>
                    <span className="card-description">
                      Languages :
                      {Object.keys(country.languages)
                        .map((key) => country.languages[key])
                        .join(", ")}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className="country-card-backBtn">
            <NavLink to="/country" className="backBtn">
              <button>Go Back</button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default CountryDetails;
