import { useState } from "react";

export const useForm = (initialValue) => {
  const [formValues, setFormValues] = useState(initialValue);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues({
        ...formValues,
        [name]: value
    })
  }
  const handleReset = (event) => {
    console.log(formValues);
    setFormValues(initialValue);
  }

  return{
    formValues,
    handleChange,
    handleReset
  }
}
