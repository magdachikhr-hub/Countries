import type { Country } from "../../types/country";
import formatPopulation from "../../utils/formatPopulation.ts";

function CountryCard({ children }: { children: Country }) {
  const {
    id,
    name,
    alpha_2,
    alpha_3,
    capital,
    flag_url,
    official_name,
    population,
    region,
    subregion,
  } = children;
  return (
    <>
      <div className="card w-66 h-84 shadow-[0px_0px_7px_2px_#00000008]">
        <div>
          <img className="w-66 h-40" src={flag_url} alt={name} />
        </div>
        <div className="pl-6">
          <h2 className="mt-4 mb-4 text-lg text-[#111517] font-extrabold">
            {name}
          </h2>
          <div className="flex flex-col gap-2">
            <span>
              <span className="font-semibold">Population:</span>{" "}
              {formatPopulation(population)}
            </span>
            <span>
              <span className="font-semibold">Region:</span>
              {region}
            </span>
            <span>
              <span className="font-semibold">Capital:</span>
              {capital}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryCard;
