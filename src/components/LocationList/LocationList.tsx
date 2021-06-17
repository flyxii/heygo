/**
 * Component to display the input field and the list of locations
 * @props {query} the location query
 */

import React, { useState } from "react";
import InputField from "./InputField";
import List from "./List";

const LocationList: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  return (
    <>
      <InputField
        placeholder="Enter your query here"
        value={query}
        onChangeHandler={(val) => {
          setQuery(val);
        }}
      />
      <List query={query} />
    </>
  );
};

export default LocationList;
