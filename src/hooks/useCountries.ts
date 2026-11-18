import { supabase } from "../components/lib/supabaseClient";
import { useState, useEffect } from "react";
import type { Country } from "../types/country";

function UseCountries() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    async function getCountries() {
      try {
        const { data, error } = await supabase.from("countries").select("*");

        if (!data) return;
        if (error) {
          throw error;
        }
        setCountries(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getCountries();
  }, []);
  console.log(countries);
  return { countries, error, loading };
}

export default UseCountries;
