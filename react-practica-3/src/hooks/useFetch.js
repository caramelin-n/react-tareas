import { useEffect, useState } from "react"

export const useFetch = (url) => {
  const [ state, setState ] = useState({
    data: null,
    isLoading: true,
    error: null
  });



  const getFetch = async () => {
    try {
      setState({
        ...state,
        isLoading: true,
      });
      const resp = await fetch(url);
      const newData = await resp.json();
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setState({
        data: newData,
        isLoading: false,
        error: null
      });

    } catch (error) {
        console.log("Error al obtener los personajes", error);
        setState({ data: null, isLoading: false, error: error });
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
