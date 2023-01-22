import React from "react";
import Input from "../../shared/components/FormElements/Input";

import "../../css/places/pages/NewPlace.css";
const NewPlace = () => {
  return (
    <form className="place-form">
      <Input element="input" type="text" label="Title" />
      <Input element="input" type="text" label="Name" />
    </form>
  );
};

export default NewPlace;
