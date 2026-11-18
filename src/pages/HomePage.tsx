import { supabase } from "../components/lib/supabaseClient";
import { useState, useEffect } from "react";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getCountries() {
      try {
        const { data, error } = await supabase.from("countries").select("*");

        if (!data) return;

        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    }
    getCountries();
  }, []);
  console.log(countries);

  return <></>;
}

export default HomePage;
