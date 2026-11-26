import { type UserFormValues } from "../../schema/userSchema";
import { userSchema, GENDERS } from "../../schema/userSchema";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerService } from "../../services/registerService";

function RegisterForm() {
  const [preview, setPreview] = useState<null | string>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormValues>({ resolver: yupResolver(userSchema) });

  const oneFile = register("avatar");

  async function onSubmit(values: UserFormValues) {
    console.log(values);
    registerService(values);
    // console.log(values.flag[0]);
    // try {
    //   const url = await uploadFlag(values.alpha_2, values.flag[0]);

    //   await createCountry({
    //     name: values.name,
    //     official_name: values.official_name,
    //     alpha_2: values.alpha_2,
    //     alpha_3: values.alpha_3,
    //     capital: values.capital,
    //     region: values.region,
    //     subregion: values.subregion,
    //     population: values.population,
    //     flag_url: url,
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-8 w-[60%] min-w-82.5 max-w-162.5 m-auto">
          <div>
            <label htmlFor="name" className="text-sm text-[#666666]">
              name:
            </label>
            <input
              type="text"
              id="name"
              className="border border-[#CCC] w-full h-14 "
              {...register("name")}
            />
            <div className="h-3">
              {errors.name && (
                <p className="text-red-600"> {errors.name.message}</p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="email" className="text-sm text-[#666666]">
              email:
            </label>
            <input
              type="text"
              id="email"
              className="border border-[#CCC] w-full h-14 "
              {...register("email")}
            />
            <div className="h-3">
              {errors.email && (
                <p className="text-red-600"> {errors.email.message}</p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="password" className="text-sm text-[#666666]">
              password:
            </label>
            <input
              type="text"
              id="password"
              className="border border-[#CCC] w-full h-14 "
              {...register("password")}
            />
            <div className="h-3">
              {errors.password && (
                <p className="text-red-600"> {errors.password.message}</p>
              )}
            </div>
          </div>

          <div>
            <select
              {...register("gender")}
              defaultValue=""
              className="text-md  text-[#666666] border border-[#CCC] w-25 h-14"
            >
              <option value="" disabled>
                gender:
              </option>
              {GENDERS.map((gender) => (
                <option key={gender} value={gender}>
                  {gender}
                </option>
              ))}
            </select>
            <div className="h-3">
              {errors.gender && (
                <p className="text-red-600"> {errors.gender.message}</p>
              )}
            </div>
          </div>

          <div>
            <div className="flex w-full h-44.5 items-start gap-10">
              <div className="flex flex-col h-full py-4 justify-between ">
                <label
                  htmlFor="avatar"
                  className="bg-blue-300 rounded px-5 py-2 cursor-pointer"
                >
                  upload avatar
                </label>
                <input
                  type="file"
                  id="avatar"
                  className="hidden "
                  accept="image/webp"
                  {...oneFile}
                  onChange={(e) => {
                    oneFile.onChange(e);
                    const file = e.target.files![0];
                    const url = URL.createObjectURL(file);
                    if (preview) URL.revokeObjectURL(preview);
                    setPreview(file ? url : null);
                  }}
                />
                <button
                  onClick={() => setPreview(null)}
                  className="bg-gray-300 p-1 rounded cursor-pointer"
                >
                  clear
                </button>
              </div>
              <div className="w-70.5 h-44.5">
                {preview ? (
                  <img
                    src={preview ?? undefined}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                ) : (
                  <img
                    src="/placeholder.jpg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                )}
              </div>
            </div>
            <div className="h-3">
              {errors.avatar && (
                <p className="text-red-600"> {errors.avatar.message}</p>
              )}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="bg-green-300 p-4 rounded cursor-pointer"
            >
              confirm
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default RegisterForm;
