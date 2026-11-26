import { useEffect } from "react";
import { supabase } from "../components/lib/supabaseClient";
import type { Country } from "../types/country";
import UseCountries from "../hooks/useCountries";

export async function deleteCountry(
  id: string,
  country: Country,
  setOnDelete: (arg0: boolean) => void,
) {
  console.log(country);
  const { error, data } = await supabase
    .from("countries")
    .delete()
    .eq("id", id);
  console.log(error);
  console.log(data);

  if (error) return;

  await deleteFlag(country.flag_url);

  setOnDelete(false);
}

export async function deleteFlag(flag_url: string) {
  const url = flag_url.split("/").pop();

  if (url) {
    console.log(url);
    const { error, data } = await supabase.storage.from("flags").remove([url]);
    console.log(error);
    console.log(data);
  }
}
