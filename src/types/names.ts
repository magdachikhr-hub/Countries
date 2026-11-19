export interface CountryNativeName {
  common: string;
  official: string;
}

export interface CountryNames {
  common: string;
  official: string;
  native: Record<string, CountryNativeName>;
}
