import {useEffect, useTransition, useState} from "react";

import {getCountries} from "../api/CountriesApi";
import Loader from "../Components/UI/Loader";

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
    <>
      <h1>Countries</h1>
    </>
  );
};

export default Country;
