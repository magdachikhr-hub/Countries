import UseGetCountry from "../hooks/useGetCountry";
import { useParams } from "react-router-dom";

function CountryDetailPage() {
  const { id } = useParams();
  console.log(id);
  const { country, loading, error } = UseGetCountry(id);
  console.log(country);
  return <></>;
}

export default CountryDetailPage;
