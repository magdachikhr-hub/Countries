import UseCountries from "../../hooks/useCountries";
import CountryCard from "../country/CountryCard";
import DeleteModal from "../common/DeleteModal";
import { useState } from "react";
import type { Country } from "../../types/country";
function AdminCountries() {
  const { countries, error, loading } = UseCountries();
  const [onDelete, setOnDelete] = useState<boolean>(false);
  const [countryToDelete, setCountryToDelete] = useState<Country | null>(null);

  //   const handleOnDelete = () => {
  //     setOnDelete(true);
  //     console.log(onDelete);
  //   };

  //   console.log(error);
  //   console.log(countries);
  //   console.log(loading);
  console.log(onDelete);
  console.log(countryToDelete);
  return (
    <>
      <div className="flex flex-wrap gap-20">
        {countries.map((country) => (
          <>
            <div>
              <CountryCard>{country}</CountryCard>
              <button
                onClick={() => {
                  setOnDelete(true);
                  setCountryToDelete(country);
                }}
                className="bg-red-500 rounded cursor-pointer px-2"
              >
                delete
              </button>
            </div>
          </>
        ))}
      </div>
      {onDelete && countryToDelete && (
        <DeleteModal
          open={{ onDelete, setOnDelete, countryToDelete }}
        ></DeleteModal>
      )}
    </>
  );
}

export default AdminCountries;
