import type { CountryCapital } from "./capital";
import type { CountryCurrency, CountryLanguage } from "./currency&lang";
import type { CountryLeader } from "./leader";
import type { CountryNames } from "./names";

export interface CountryData {
  area: {
    miles: number;
    kilometers: number;
  };
  borders: string[];
  calling_codes: string[];
  capitals: CountryCapital[];
  codes: {
    ccn3: string;
    cioc: string | null;
    fifa: string | null;
    alpha_2: string;
    alpha_3: string;
  };
  currencies: CountryCurrency[];
  flag: {
    emoji: string;
    url_webp: string;
  };
  languages: CountryLanguage[];
  leaders: CountryLeader[];
  memberships: Record<string, boolean>;
  names: CountryNames;
  population: number;
  region: string;
  subregion: string;
  timezones: string[];
  tlds: string[];
  uuid: string;
}
