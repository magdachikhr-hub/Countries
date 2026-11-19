import type { Country } from "../../types/country";

function CountryDetailedInfo({ countryInfo }: { countryInfo: Country }) {
  console.log(countryInfo);
  return (
    <>
      <div>
        <div>
          <img src={countryInfo.flag_url} alt={`${countryInfo.name} flag`} />
        </div>
      </div>
    </>
  );
}

export default CountryDetailedInfo;
