import { Suggestion } from "../components/Autocomplete/types";

export const fetchSuggestions = async (query: string) => {
  const response = await fetch("/data/neighbourhoods.json");

  if (!response.ok) throw new Error("Failed to fetch neighbourhoods");

  const data: Suggestion[] = await response.json();

  return data.filter((neighbourhood) =>
    neighbourhood.text.toLowerCase().includes(query.toLowerCase())
  );
};
