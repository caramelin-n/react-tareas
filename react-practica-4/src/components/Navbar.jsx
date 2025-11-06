import { useNavigate } from "react-router-dom"

export const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login', {
      replace: true
    });
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          </ul>
        </div>
        <div className="d-flex">
          <button
            className="btn btn-outline-danger"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}