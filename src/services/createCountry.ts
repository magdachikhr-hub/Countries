import { supabase } from "../components/lib/supabaseClient";

export type NewCountry = {
  name: string;
  official_name: string | null;
  alpha_2: string;
  alpha_3: string;
  capital: string;
  region: NonNullable<
    "Africa" | "Americas" | "Asia" | "Europe" | "Oceania" | undefined
  >;
  subregion: string;
  population: number;
  flag_url: string;
};

const FILE_TYPE = "webp";

export async function uploadFlag(alpha_2: string, flag: File) {
  //   const ext = flag.name.split(".")[-1];
  const file_name = `${alpha_2.toLowerCase()}.${FILE_TYPE}`;
  //   console.log(ext);

  console.log(file_name);

  const { data, error } = await supabase.storage
    .from("flags")
    .upload(file_name, flag);

  if (error) {
    console.log(error.message);
    throw error;
  }

  const { data: urlData } = supabase.storage
    .from("flags")
    .getPublicUrl(data.path);
  console.log(urlData.publicUrl);
  return urlData.publicUrl;
}

export async function createCountry(values: NewCountry) {
  const { data, error } = await supabase
    .from("countries")
    .insert(values)
    .select();

  if (error) {
    console.log(error.code, error.message);
    throw error;
  }
  console.log(data);
}
