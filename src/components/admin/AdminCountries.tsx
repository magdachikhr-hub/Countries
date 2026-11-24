import UseCountries from "../../hooks/useCountries";
import CountryCard from "../country/CountryCard";
import DeleteModal from "../common/DeleteModal";
import { useState } from "react";
function AdminCountries() {
  const { countries, error, loading } = UseCountries();
  const [onDelete, setOnDelete] = useState<boolean>(false);

  //   const handleOnDelete = () => {
  //     setOnDelete(true);
  //     console.log(onDelete);
  //   };

  //   console.log(error);
  //   console.log(countries);
  //   console.log(loading);
  console.log(onDelete);
  return (
    <>
      <div className="flex flex-wrap gap-20">
        {countries.map((country) => (
          <>
            <div>
              <CountryCard>{country}</CountryCard>
              <button
                onClick={() => setOnDelete(true)}
                className="bg-red-500 rounded cursor-pointer px-2"
              >
                delete
              </button>
            </div>
          </>
        ))}
      </div>
      {onDelete && <DeleteModal open={{ onDelete, setOnDelete }}></DeleteModal>}
    </>
  );
}

export default AdminCountries;
