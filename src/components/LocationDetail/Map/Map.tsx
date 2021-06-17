/**
 * Component to display google map
 * @props {lat} latitude of the location
 * @props {lng} longitude of the location
 */

import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./../Marker";
import { Props } from "./type";
import styles from "./Map.module.scss";

const Map: React.FC<Props> = (props) => {
  const { lat, lng } = props;

  const params = {
    center: {
      lat: lat,
      lng: lng,
    },
    zoom: 11,
  };

  return (
    <div className={styles.wrapper} data-testid="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY! }}
        defaultCenter={params.center}
        defaultZoom={params.zoom}
      >
        <Marker lat={params.center.lat} lng={params.center.lng} />
      </GoogleMapReact>
    </div>
  );
};

export default React.memo(Map);
