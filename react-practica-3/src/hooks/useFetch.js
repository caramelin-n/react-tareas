import { useEffect, useState } from "react"

export const useFetch = (url) => {
  const [ state, setState ] = useState({
    data: null,
    isLoading: true,
    error: null
  });



  const getFetch = async () => {
    try {
        const resp = await fetch(url);
        const newData = await resp.json();
        setState({
            data: newData,
            isLoading: false
        });
    } catch (error) {
        console.log("Error al obtener los personajes", error);
        setState({ data: null, isLoading: false, error: null });
    };
  };

  useEffect(()=>{
    getFetch();
  }, [url]);

  return{
    getFetch,
    state,
    setState
  };
};
