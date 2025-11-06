import { useNavigate } from "react-router";
import { useForm } from "../hooks/useForm";
export const Login = ({handleLogin}) => {
    const navigate = useNavigate();
    const { formValues, handleChange, handleReset } = useForm({ username: '', password: '' });
    const { username, password } = formValues;
    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("isLogged", "true")
        navigate("/home")
        handleLogin(username);
        handleReset();
    }
  return (
    <div className="home">
        <h1>Login</h1>
        <form className="Cont">
            <div className="Contenedor">
                <label for="username">Username</label>
                <input type="username" name="username" value={username} onChange={handleChange} />
            </div>
            <div className="Contenedor">
                <label for="password">Contraseña</label>
                <input type="password" name="password" value={password} onChange={handleChange} />
            </div>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}
