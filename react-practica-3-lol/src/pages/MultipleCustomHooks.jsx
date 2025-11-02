import React from 'react'

export const MultipleCustomHooks = () => {
  return (
    <div>MultipleCustomHooks</div>
  )
}






// import { useEffect, useState } from "react"

// export const MultipleCustomHooks = () => {
//   const [state, setState] = useState({
//     data: null,
//     isLoading: true,
//   });

//   const { data, isLoading } = state;
//   const url = "https://thesimpsonsapi.com/api/characters/1"

//   const getFetch = async () => {
//     try {
//       const resp = await fetch(url);
//       const newData = await resp.json();
//       setState({
//         data: newData,
//         isLoading: false
//       })
//     } catch (error) {
//       console.log("Error al obrener los personajes", error)
//       setState({ data: null, isLoading: false })
//     }
//   }

//   useEffect(() => {
//     getFetch();
//   }, [url]);
//   return (
//     <>
//     <h1>Los Simpsons Api</h1>
//     <h2>Personajes</h2>

//     {isLoading ? (
//       <h3>Cargando datos de los personajes...</h3>
//     ) : (
//       <h3>{data?.name || 'No se encontraron datos del personaje'}</h3>
//     )}
//     </>
//   )
// }
