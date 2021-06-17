/**
 * Component to display the detail of single location
 * @querystring {id} the id of a single location
 */

import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { useLocationDetail } from "hooks/useLocationDetail";
import Map from "./Map";
import styles from "./LocationDetail.module.scss";

type QueryString = {
  id: string;
};

const LocationDetail: React.FC = () => {
  /**
   * Get the id of a single location
   */
  const { id } = useParams() as QueryString;

  /**
   * Get the detail of a single location
   */
  const { isLoading, error, data } = useLocationDetail(id);

  /**
   * Display error message if fetch return error
   */
  if (error)
    return (
      <div className={styles.wrapper} data-testid="error">
        Error fetching data...
      </div>
    );

  /**
   * Display loading message before fetch complete
   */
  if (isLoading)
    return (
      <div className={styles.wrapper} data-testid="loading">
        We are working hard to get the data...
      </div>
    );

  /**
   * Redirect to home page if no data return from api call or location not found
   * This approach is just a demonstration for the coding test only, but not simulate a real world scenario
   */
  if (!data || data.message === "Not found") return <Redirect to="/" />;

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{data.name}</div>
      <Map lat={data.latitude} lng={data.longitude} />
    </div>
  );
};

export default LocationDetail;
