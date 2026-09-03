import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-top bg-light mt-auto">
      <div className="container py-4">

        <div className="row align-items-center gy-3">

          <div className="col-md-6 text-center text-md-start">
            <Link
              className="text-decoration-none text-dark fw-bold fs-5"
              to="/"
            >
              Shop Menoss
            </Link>

            <p className="text-secondary mb-0 mt-1">
              Tu tienda de abarrotes.
            </p>
          </div>

          <div className="col-md-6">
            <nav className="d-flex justify-content-center justify-content-md-end gap-3">
              <Link
                className="text-decoration-none text-secondary"
                to="/"
              >
                Inicio
              </Link>

              <Link
                className="text-decoration-none text-secondary"
                to="/productos"
              >
                Productos
              </Link>
            </nav>
          </div>

        </div>

        <hr />

        <p className="text-center text-secondary small mb-0">
          © 2026 Shop Menoss. Todos los derechos reservados.
        </p>

      </div>
    </footer>
  )
}

export default Footer