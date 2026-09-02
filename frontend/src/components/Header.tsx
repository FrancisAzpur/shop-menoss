import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="border-bottom bg-light">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            Shop Menoss
          </Link>

          <div className="d-flex align-items-center gap-3">
            <Link className="text-decoration-none text-dark" to="/">
              Inicio
            </Link>

            <Link className="text-decoration-none text-dark" to="/productos">
              Productos
            </Link>

            <Link className="btn btn-outline-primary btn-sm" to="/login">
              Iniciar sesión
            </Link>

            <Link className="btn btn-outline-secondary btn-sm" to="/registro">
              Registrarse
            </Link>

            <Link className="btn btn-primary btn-sm" to="/carrito">
              Carrito
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header