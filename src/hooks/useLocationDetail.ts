/**
 * The query to fetch the location detail
 */

import { useQuery, QueryObserverResult } from "react-query";

type LocationDetail = {
  name: string;
  id: number;
  latitude: number;
  longitude: number;
  message?: string;
};

const getLocationDetail = async (id: string) => {
  const response = await fetch(
    `https://code-challenge-backend.herokuapp.com/locations/${id}`
  );
  const data = await response.json();
  return data;
};

export const useLocationDetail = (
  id: string
): QueryObserverResult<LocationDetail, unknown> => {
  return useQuery(["locationDetail", id], () => getLocationDetail(id));
};
