import "./style.css";

export const CharacterInfo = ({data}) => {
    return (
    <div className="container1">
        <div className="img">
            <img src={`https://cdn.thesimpsonsapi.com/500${data?.portrait_path}`} alt={data?.name} className="img_pj" />
        </div>
        <div className="data">
            
            <h1>Nombre: {data?.name}</h1>
            <h2>Edad: {data?.age === null ? 'Unknown' : data?.age}</h2>
            <h2>Ocupación: {data?.occupation}</h2>
            <h2>Estado: {data?.status}</h2>
        </div>
    </div>
  )
}
