//* UseForm Hook
//* Since: 0.0.0
//* Author: @crdgom
//* Description: Tis Hook handles all inputs and their state for passes to the json generated file.

import { useState } from "react";

const useForm = (callback, initialState = {}) => {
  const [input, setInput] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    callback(input);
  };

  return {
    input,
    handleInputChange,
    handleSubmit,
  };
};

export default useForm;
