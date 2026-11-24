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
    .required("validation.required")
    .min(2, "validation.min2")
    .max(100, "validation.max100"),

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
    .required("validation.required")
    .matches(/^[A-Z]{2}$/, "validation.alpha2"),

  alpha_3: yup
    .string()
    .trim()
    .transform((value) => value?.toUpperCase())
    .required("validation.required")
    .matches(/^[A-Z]{3}$/, "validation.alpha3"),

  capital: yup.string().trim().required("validation.required"),

  region: yup
    .string()
    .oneOf(REGIONS, "validation.region")
    .required("validation.required"),

  subregion: yup.string().trim().required("validation.required"),

  population: yup
    .number()
    .typeError("validation.number")
    .required("validation.required")
    .integer("validation.integer")
    .min(0, "validation.positive"),

  flag_url: yup
    .string()
    .trim()
    .url("validation.url")
    .required("validation.required"),
});

export type CountryFormValues = yup.InferType<typeof countrySchema>;
