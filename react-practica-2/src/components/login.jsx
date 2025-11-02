
import { useForm } from "../hooks/useForm";
export const Login = ({handleLogin}) => {
    const { formValues, handleChange, handleReset } = useForm({ username: '', password: '' });
    const { username, password } = formValues;
    const handleSubmit = (event) => {
        event.preventDefault();
        handleLogin(username),
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
        </form>
        <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  )
}
