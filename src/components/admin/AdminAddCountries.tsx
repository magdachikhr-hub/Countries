import { type CountryFormValues } from "../../schema/countrySchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { countrySchema, REGIONS } from "../../schema/countrySchema";
import { supabase } from "../lib/supabaseClient";
import { useState } from "react";

function AdminAddCountries() {
  const [preview, setPreview] = useState<null | string>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CountryFormValues>({ resolver: yupResolver(countrySchema) });

  function onSubmit() {}

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-8 w-[60%] min-w-82.5 max-w-162.5 m-auto">
          <div>
            <label htmlFor="name" className="font-bold text-sm text-[#666666]">
              name
            </label>
            <input
              type="text"
              className="border border-[#CCC] w-full h-12"
              id="name"
              {...register("name")}
            />
            <div className="h-3">
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="official_name"
              className="font-bold text-sm text-[#666666] "
            >
              official_name
            </label>
            <input
              type="text"
              className="border border-[#CCC] w-full h-12"
              id="official_name"
              {...register("official_name")}
            />
            <div className="h-3">
              {errors.official_name && (
                <p className="text-red-500">{errors.official_name.message}</p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="alpha_2"
              className="font-bold text-sm text-[#666666]"
            >
              alpha 2:
            </label>
            <input
              type="text"
              className="border border-[#CCC] w-full h-12"
              id="alpha_2"
              {...register("alpha_2")}
            />
            <div className="h-3">
              {errors.alpha_2 && (
                <p className="text-red-500">{errors.alpha_2.message}</p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="alpha_3"
              className="font-bold text-sm text-[#666666]"
            >
              alpha 3:
            </label>
            <input
              type="text"
              className="border border-[#CCC] w-full h-12"
              id="alpha_3"
              {...register("alpha_3")}
            />
            <div className="h-3">
              {errors.alpha_3 && (
                <p className="text-red-500">{errors.alpha_3.message}</p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="capital"
              className="font-bold text-sm text-[#666666]"
            >
              capital city
            </label>
            <input
              type="text"
              className="border border-[#CCC] w-full h-12"
              id="capital"
              {...register("capital")}
            />
            <div className="h-3">
              {errors.capital && (
                <p className="text-red-500">{errors.capital.message}</p>
              )}
            </div>
          </div>
          <div>
            <select
              {...register("region")}
              defaultValue=""
              className="font-bold text-md text-[#666666] border border-[#CCC] w-25 h-12"
            >
              <option value="" disabled>
                Region:
              </option>
              {REGIONS.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
            <div className="h-3">
              {errors.region && (
                <p className="text-red-500">{errors.region.message}</p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="sub-region"
              className="font-bold text-sm text-[#666666]"
            >
              sub-region:
            </label>
            <input
              type="text"
              className="border border-[#CCC] w-full h-12"
              id="sub-region"
              {...register("subregion")}
            />
            <div className="h-3">
              {errors.subregion && (
                <p className="text-red-500">{errors.subregion.message}</p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="population"
              className="font-bold text-sm text-[#666666]"
            >
              population:
            </label>
            <input
              type="number"
              className="border border-[#CCC] w-full h-12"
              id="population"
              {...register("population")}
            />
            <div className="h-3">
              {errors.population && (
                <p className="text-red-500">{errors.population.message}</p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="flag"
              className="bg-blue-300 rounded px-5 py-2 cursor-pointer hover:bg-blue-600 hover:text-white"
            >
              upload flag
            </label>
            <div className="mt-6">
              <input
                type="file"
                id="flag"
                className="hidden"
                // multiple
                {...register("flag")}
                onChange={(e) => {
                  const file = e.target.files![0];
                  console.log(file);
                  const url = URL.createObjectURL(file);
                  console.log(url);
                  setPreview(url);
                }}
              />
              <div className="w-95 h-45">
                <img
                  src={preview ?? undefined}
                  className="w-full h-full"
                  alt=""
                />
              </div>
            </div>
            <div className="h-3">
              {errors.flag && (
                <p className="text-red-500">{errors.flag.message}</p>
              )}
            </div>
          </div>
          <div>
            <button
              className="w-35 h-15 bg-green-600 rounded-2xl text-white font-bold hover:bg-green-950"
              type="submit"
            >
              upload country
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AdminAddCountries;
