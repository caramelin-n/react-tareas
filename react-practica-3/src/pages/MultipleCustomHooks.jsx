import "../components/style.css";
import { CharacterInfo } from '../components/CharacterInfo';
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';
import { Loading } from '../components/Loading';

export const MultipleCustomHooks = () => {
  const { count, handleIncrement, handleDecrement, handleReset } = useCounter(1);

  const url = `https://thesimpsonsapi.com/api/characters/${count}`;
  
  const { state } = useFetch(url);  
  const { data, isLoading, error } = state;
  
  return (
    <div>
      <img src="https://thesimpsonsapi.com/hero.webp" alt="Api Simpsons Logo" className="logo1" />
      {isLoading ? (
        <Loading/>
      ) : error ? (
        <p>Error al cargar el personaje. {error.message}</p>
      ) : (
        <CharacterInfo data={data}/>
      )}
      <button onClick={() => handleDecrement(1)} disabled={isLoading || count <= 1}>Anterior</button>
      <button onClick={handleReset} disabled={isLoading}>Reiniciar</button>
      <button onClick={() => handleIncrement(1)} disabled={isLoading}>Siguiente</button>
    </div>
  )
};
