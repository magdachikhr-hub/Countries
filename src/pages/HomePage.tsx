import CountryCard from "../components/country/CountryCard";
import UseCountries from "../hooks/useCountries";
import CountriesLoading from "../components/loaders/CountriesLoading";
import { Link } from "react-router-dom";

function HomePage() {
  const { countries, error, loading } = UseCountries();

  console.log(error);
  console.log(countries);
  console.log(loading);
  return (
    <>
      {loading && <CountriesLoading></CountriesLoading>}
      <div className="w-full flex flex-wrap px-13.75 md:px-20 mt-7 md:mt-12 gap-10 md:gap-18.75 justify-center">
        {countries.map((country) => (
          <Link to={`/country-details/${country.id}`}>
            <CountryCard>{country}</CountryCard>
          </Link>
        ))}
      </div>
    </>
  );
}

export default HomePage;
