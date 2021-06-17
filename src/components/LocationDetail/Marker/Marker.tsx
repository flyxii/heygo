/**
 * Component to display a pin on google map
 * @props {lat} latitude of the location
 * @props {lng} longitude of the location
 */

import React from "react";
import Pins from "share/images/Pins.svg";
import { Props } from "./type";

const Marker: React.FC<Props> = () => (
  <div>
    <img src={Pins} alt="Pins" />
  </div>
);

export default Marker;
