/**
 * Location list component
 * @props {query} the location query
 */

import React from "react";
import { Link } from "react-router-dom";
import { useLocations } from "hooks/useLocations";
import { Props } from "./type";
import styles from "./List.module.scss";

const List: React.FC<Props> = ({ query }) => {
  /**
   * Get the list of locations from the user input
   */
  const { isLoading, error, data } = useLocations(query);

  /**
   * Display error message if fetch return error
   */
  if (error)
    return <div className={styles.wrapper}>Error fetching data...</div>;

  /**
   * Display loading message before fetch complete
   */
  if (isLoading)
    return (
      <div className={styles.wrapper}>
        We are working hard to get the data...
      </div>
    );

  /**
   * Display message if no data return from fetch
   */
  if (!data || data.length === 0)
    return (
      <div className={styles.wrapper}>No relevant locations could be found</div>
    );

  return (
    <div className={styles.wrapper} data-testid="location-list">
      <div className={styles.locationList}>
        {data.map((location) => (
          <div key={location.id} className={styles.location}>
            <Link to={`/location/${location.id}`}>{location.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
