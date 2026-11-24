import UseCountries from "../../hooks/useCountries";
import CountryCard from "../country/CountryCard";
import DeleteModal from "../common/DeleteModal";
function AdminCountries() {
  const { countries, error, loading } = UseCountries();

  console.log(error);
  console.log(countries);
  console.log(loading);
  return (
    <>
      <div className="flex flex-wrap gap-20">
        {countries.map((country) => (
          <>
            <div>
              <CountryCard>{country}</CountryCard>
              <button className="bg-red-500 rounded cursor-pointer px-2">
                delete
              </button>
            </div>
          </>
        ))}
      </div>
      <DeleteModal></DeleteModal>
    </>
  );
}

export default AdminCountries;
