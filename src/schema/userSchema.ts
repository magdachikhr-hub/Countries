import * as yup from "yup";

export const GENDERS = ["male", "female", "other"] as const;

export const userSchema = yup.object({
  name: yup
    .string()
    .trim()
    // .required("required")
    .min(2, "min2")
    .max(30, "max100"),

  email: yup.string().trim().required().defined(),
  gender: yup.string().oneOf(GENDERS, "gender").required("required"),

  password: yup.string().required(),

  avatar: yup.mixed<FileList>().required("required"),
});

export type UserFormValues = yup.InferType<typeof userSchema>;
