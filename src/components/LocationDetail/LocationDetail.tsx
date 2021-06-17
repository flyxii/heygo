import React from "react";
import { useParams } from "react-router-dom";
import { useLocationDetail } from "hooks/useLocationDetail";
import Map from "./Map";
import styles from "./LocationDetail.module.scss";

type Param = {
  id: string;
};

const LocationDetail: React.FC = () => {
  const { id } = useParams() as Param;
  const { isLoading, error, data } = useLocationDetail(id);

  if (error)
    return <div className={styles.wrapper}>Error fetching data...</div>;

  if (isLoading)
    return (
      <div className={styles.wrapper}>
        We are working hard to get the data...
      </div>
    );

  if (!data)
    return (
      <div className={styles.wrapper}>No relevant locations could be found</div>
    );

  return (
    <div className={styles.wrapper} data-testid="location-detail">
      <div className={styles.title}>{data.name}</div>
      <Map lat={data.latitude} long={data.longitude} />
    </div>
  );
};

export default LocationDetail;
