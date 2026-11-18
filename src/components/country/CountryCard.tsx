import type { Country } from "../../types/country";

function CountryCard({ children }: { children: Country }) {
  const {
    id,
    name,
    alpha_2,
    alpha_3,
    capital,
    flag_url,
    offical_name,
    population,
    region,
    subregion,
  } = children;
  return (
    <>
      <div className="card w-66 h-84">
        <div>
          <img className="w-66 h-40" src={flag_url} alt={name} />
        </div>
        <div>
          <h2>{offical_name}</h2>
          <div>
            <span>Population:{population}</span>
            <span>Region:{region}</span>
            <span>Capital:{capital}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryCard;
