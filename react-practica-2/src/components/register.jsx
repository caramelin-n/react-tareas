import "./Register.css"
import { useForm } from "../hooks/useForm";


export const Register = () => {
    //handleChange, formData (el formData en el value)

    const { handleReset, handleChange, formValues } = useForm({
        lastname: "",
        firstname: "",
        username: "",
        email: "",
        password: "",
     });
    const { username, password, lastname, firstname, email } = formValues;
  return (
    <div className="home">
        <h1>Registro</h1>
        <form className="Cont">
            <div className="Contenedor">
                <label htmlFor="lastname">Lastname</label>
                <input type="text" name="lastname" value={lastname} onChange={handleChange} />
            </div>
            <div className="Contenedor">
                <label htmlFor="firstname">Firstname</label>
                <input type="text" name="firstname" value={firstname} onChange={handleChange} />
            </div>
            <div className="Contenedor">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={username} onChange={handleChange} />
            </div>
            <div className="Contenedor">
                <label htmlFor="email">Correo</label>
                <input type="email" name="email" value={email} onChange={handleChange} />
            </div>
            <div className="Contenedor">
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" value={password} onChange={handleChange} />
            </div>
        </form>
        <button type="submit" onClick={handleReset}>Submit</button>
    </div>
  )
}
