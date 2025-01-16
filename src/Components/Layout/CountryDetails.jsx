import {useParams} from "react-router-dom";

import {useTransition, useState, useEffect} from "react";

import Loader from "../UI/Loader";
import {getCountry} from "../../api/CountriesApi";

const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountry(params.id);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
    });
  }, []);

  if (isPending) return <Loader />;

  return (
    <>
      <section className="container  card country-details-card">
        <div className="container-card bg-white-box">
          <div className="country-image grid grid-two-col">
            <img src={country?.flags?.svg} alt={country?.flags?.alt} />
            <div className="country-content">
              <p className="card-title">{country?.name?.common}</p>
              <div className="infoContainer">
                <p>
                  <span className="card-description">Native Name : </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CountryDetails;
