import { useState } from "react";

//1. Hacer una constante de la data que use usestate y los parámetros de initial value
//2. Crear el handlechange, en donde se ponga como target el nombre y el valor de lo que le vamos a
// pasar, setee este from con esa data y pinte toda la data anterior para cambiarlo por el nuevo
// valor.
//3. Crear el handle reset que haga un console log de la data actual y resetee el formulario con
//initial value.
//4. Retornar las funciones utilizadas (formData, ...formFata, handlechange y reset.)

export const useForm = (initialValue) => {
    const [formData, setFormData] = useState(initialValue);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
    }

    const handleReset = () => {
        console.log(formData);
        setFormData(initialValue);
    }

    return{
        formData,
        ...formData,
        handleChange,
        handleReset
    }
}