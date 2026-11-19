import type { Country } from "../../types/country";
import getNativeName from "../../utils/getNativeName";
function CountryDetailedInfo({ countryInfo }: { countryInfo: Country }) {
  console.log(countryInfo);
  const { data } = countryInfo;
  return (
    <>
      <div>
        <div>
          <img src={countryInfo.flag_url} alt={`${countryInfo.name} flag`} />
        </div>
        <div>
          <div>
            <div>
              <div>
                <h2>{countryInfo.name}</h2>

                <dl>
                  <div>
                    <dt>Native Name:</dt>
                    <dd>{getNativeName(data.names)}</dd>
                  </div>
                  <div>
                    <dt>Population:</dt>
                    <dd>11,319,511</dd>
                  </div>
                  <div>
                    <dt>Region:</dt>
                    <dd>Europe</dd>
                  </div>
                  <div>
                    <dt>Sub Region:</dt>
                    <dd>Western Europe</dd>
                  </div>
                  <div>
                    <dt>Capital:</dt>
                    <dd>Brussels</dd>
                  </div>
                </dl>
              </div>
              <dl>
                <div>
                  <dt>Top Level Domain:</dt>
                  <dd>.be</dd>
                </div>
                <div>
                  <dt>Currencies:</dt>
                  <dd>Euro</dd>
                </div>
                <div>
                  <dt>Languages:</dt>
                  <dd>Dutch, French, German</dd>
                </div>
              </dl>
            </div>
            <div>
              <p>Border Countries: </p>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryDetailedInfo;
