import * as yup from "yup";

export const REGIONS = [
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
] as const;

export const countrySchema = yup.object({
  name: yup
    .string()
    .trim()
    .required("required")
    .min(2, "min2")
    .max(100, "max100"),

  official_name: yup
    .string()
    .trim()
    .nullable()
    .defined()
    .transform((value) => (value === "" ? null : value)), // ცარიელი ველი -> null

  alpha_2: yup
    .string()
    .trim()
    .transform((value) => value?.toUpperCase())
    .required("required")
    .matches(/^[A-Z]{2}$/, "only two symbols"),

  alpha_3: yup
    .string()
    .trim()
    .transform((value) => value?.toUpperCase())
    .required("required")
    .matches(/^[A-Z]{3}$/, "only three symbols"),

  capital: yup.string().trim().required("required"),

  region: yup.string().oneOf(REGIONS, "region").required("required"),

  subregion: yup.string().trim().required("required"),

  population: yup
    .number()
    .typeError("must be a number")
    .required("required")
    .integer("must be integer")
    .min(0, "must be a positive number"),

  flag: yup.mixed<File>().required("required"),
});

export type CountryFormValues = yup.InferType<typeof countrySchema>;
