import { supabase } from "../components/lib/supabaseClient";
import { useState, useEffect } from "react";
import type { Country } from "../types/country";
import CountryCard from "../components/country/CountryCard";

function HomePage() {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    async function getCountries() {
      try {
        const { data, error } = await supabase.from("countries").select("*");

        if (!data) return;
        if (error) {
          throw error;
        }
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    }
    getCountries();
  }, []);
  console.log(countries);

  return (
    <>
      {countries.map((country) => (
        <CountryCard>{country}</CountryCard>
      ))}
    </>
  );
}

export default HomePage;
