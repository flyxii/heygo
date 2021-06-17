import React from "react";
import Pins from "share/images/Pins.svg";
import { Props } from "./type";

const Marker: React.FC<Props> = () => (
  <div>
    <img src={Pins} alt="Pins" />
  </div>
);

export default Marker;
