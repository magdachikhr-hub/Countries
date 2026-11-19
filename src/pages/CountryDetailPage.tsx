import UseGetCountry from "../hooks/useGetCountry";
import { useParams } from "react-router-dom";
import ReturnBtn from "../components/common/ReturnBtn";
import CountryDetailedInfo from "../components/country/CountryDetailedInfo";

function CountryDetailPage() {
  const { id } = useParams();
  console.log(id);
  const { country, loading, error } = UseGetCountry(id);
  console.log(country);
  return (
    <>
      <div>
        <ReturnBtn />
        {country && <CountryDetailedInfo countryInfo={country} />}
      </div>
    </>
  );
}

export default CountryDetailPage;
