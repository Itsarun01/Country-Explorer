import {useEffect, useTransition, useState} from "react";
import {getCountries} from "../api/CountriesApi";
import Loader from "../Components/UI/Loader";
import CountryCard from "../Components/UI/CountryCard";

const Country = () => {
  const [isPending, startTransition] = useTransition();

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountries();
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loader />;

  return (
    <section className="country-section">
      <ul className="grid grid-four-col">
        {countries.map((country, i) => {
          return <CountryCard key={i} country={country} />;
        })}
      </ul>
    </section>
  );
};

export default Country;
