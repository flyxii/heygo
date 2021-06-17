/**
 * Location list component
 * @props {query} the location query
 */

import React from "react";
import { useHistory } from "react-router-dom";
import { useLocations } from "hooks/useLocations";
import { Props } from "./type";
import styles from "./List.module.scss";

const List: React.FC<Props> = ({ query }) => {
  /**
   * Fetch the list of locations from the user input
   */
  const { isLoading, error, data } = useLocations(query);
  const history = useHistory();

  /**
   * onClick function when user click on a single location
   * @param {id} the location id
   */
  const onClickHandler = (id: string): void => {
    history.push(`/location/${id}`);
  };

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
   * Display message if no data return from fetch
   */
  if (!data || data.length === 0)
    return (
      <div className={styles.wrapper} data-testid="message-no-data">
        No relevant locations could be found
      </div>
    );

  return (
    <div className={styles.wrapper} data-testid="location-list">
      <div className={styles.locationList}>
        {data.map((location) => (
          <div
            key={location.id}
            className={styles.location}
            onClick={() => {
              onClickHandler(location.id.toString());
            }}
          >
            {location.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
