import React from "react";
import Heading from "../heading";
import PersonsCheckboxes from "../items-checkboxes";
import SearchInput from "../search-input";

const Teams = (props) => {
  return (
    <div>
      <SearchInput />
      <Heading>Team</Heading>
      <PersonsCheckboxes items={[]} />
    </div>
  );
};

export default Teams;
