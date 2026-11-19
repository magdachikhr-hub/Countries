import type { CountryNames } from "../types/names";

export default function getNativeName(names: CountryNames): string {
  const unique = Object.values(names.native)
    .map((n) => n.common)
    .filter((name, i, arr) => arr.indexOf(name) === i);

  return unique.length > 0 ? unique.join(", ") : names.common;
}
