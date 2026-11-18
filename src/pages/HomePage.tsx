import CountryCard from "../components/country/CountryCard";
import UseCountries from "../hooks/useCountries";

function HomePage() {
  const { countries, error, loading } = UseCountries();
  console.log(error);
  console.log(countries);
  console.log(loading);
  return (
    <>
      {countries.map((country) => (
        <CountryCard>{country}</CountryCard>
      ))}
    </>
  );
}

export default HomePage;
