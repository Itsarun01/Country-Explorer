import {useEffect, useTransition, useState} from "react";
import {getCountries} from "../api/CountriesApi";
import Loader from "../Components/UI/Loader";
import CountryCard from "../Components/UI/CountryCard";
import SearchFilter from "../Components/UI/SearchFilter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // useTransition hook to delay rendering until data is fetched
    startTransition(async () => {
      const res = await getCountries();
      setCountries(res.data);
    });
  }, []);

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    } else {
      return country;
    }
  };

  const selectRegion = (country) => {
    if (filter === "all") {
      return country;
    } else {
      return country.region.toLowerCase().includes(filter);
    }
  };

  const filterCountries = countries.filter(
    (country) => searchCountry(country) && selectRegion(country)
  );

  return (
    <section className="container country-section">
      <SearchFilter
        className="search-filter"
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />
      {isPending && <Loader />}
      <ul className="grid grid-four-col">
        {filterCountries.map((countryData, index) => {
          return <CountryCard countryData={countryData} key={index} />;
        })}
      </ul>
    </section>
  );
};

export default Country;
