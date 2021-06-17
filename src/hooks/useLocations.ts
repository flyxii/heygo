/**
 * The query to fetch the location list
 */

import { useQuery, QueryObserverResult } from "react-query";

type Locations = {
  name: string;
  id: number;
};

const getLocations = async (query: string) => {
  const response = await fetch(
    `https://code-challenge-backend.herokuapp.com/locations?q=${query}`
  );
  const data = await response.json();
  return data;
};

export const useLocations = (
  query: string
): QueryObserverResult<Locations[], unknown> => {
  return useQuery(["locations", query], () => getLocations(query));
};
