import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./../Marker";
import { Props } from "./type";
import styles from "./Map.module.scss";

const Map: React.FC<Props> = (props) => {
  const { lat, long } = props;

  const params = {
    center: {
      lat: lat,
      lng: long,
    },
    zoom: 11,
  };

  return (
    <div className={styles.wrapper}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCV5EgMR7qhlUtErYtc3JDOnWQ1HrZAJWs" }}
        defaultCenter={params.center}
        defaultZoom={params.zoom}
      >
        <Marker lat={params.center.lat} lng={params.center.lng} />
      </GoogleMapReact>
    </div>
  );
};

export default React.memo(Map);
