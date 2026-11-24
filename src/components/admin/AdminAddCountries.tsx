import { type CountryFormValues } from "../../schema/countrySchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { countrySchema, REGIONS } from "../../schema/countrySchema";
import { supabase } from "../lib/supabaseClient";

function AdminAddCountries() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CountryFormValues>({ resolver: yupResolver(countrySchema) });

  function onSubmit() {}

  return (
    <>
      <form onSubmit={() => onSubmit}>
        <div>
          <label htmlFor="name">name</label>
          <input
            type="text"
            className="border"
            id="name"
            {...register("name")}
          />
        </div>
        <div>
          <label htmlFor="official_name">official_name</label>
          <input
            type="text"
            className="border"
            id="official_name"
            {...register("official_name")}
          />
        </div>
        <div>
          <label htmlFor="alpha_2">alpha 2:</label>
          <input
            type="text"
            className="border"
            id="alpha_2"
            {...register("alpha_2")}
          />
        </div>
        <div>
          <label htmlFor="alpha_3">alpha 3:</label>
          <input
            type="text"
            className="border"
            id="alpha_3"
            {...register("alpha_3")}
          />
        </div>
        <div>
          <label htmlFor="capital">capital city</label>
          <input
            type="text"
            className="border"
            id="capital"
            {...register("capital")}
          />
        </div>
        <div>
          <select {...register("region")} defaultValue="">
            <option value="" disabled>
              Region:
            </option>
            {REGIONS.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="sub-region">sub-region:</label>
          <input
            type="text"
            className="border"
            id="sub-region"
            {...register("subregion")}
          />
        </div>
        <div>
          <label htmlFor="population">population:</label>
          <input
            type="number"
            className="border"
            id="population"
            {...register("population")}
          />
        </div>
        <input type="file" name="" id="" />
      </form>
    </>
  );
}

export default AdminAddCountries;
