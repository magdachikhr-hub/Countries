import CountryCard from "../components/country/CountryCard";
import UseCountries from "../hooks/useCountries";
import CountriesLoading from "../components/loaders/CountriesLoading";
function HomePage() {
  const { countries, error, loading } = UseCountries();

  console.log(error);
  console.log(countries);
  console.log(loading);
  return (
    <>
      {loading && <CountriesLoading></CountriesLoading>}
      {countries.map((country) => (
        <CountryCard>{country}</CountryCard>
      ))}
    </>
  );
}

export default HomePage;
