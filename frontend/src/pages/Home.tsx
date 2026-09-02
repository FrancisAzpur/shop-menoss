import { Link } from 'react-router-dom'

function Home() {
  return (
    <main>
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-7 py-5">
            <h1 className="display-4 fw-bold mb-3">
              Todo lo que necesitas en un solo lugar
            </h1>

            <p className="lead text-secondary mb-4">
              Encuentra productos para tu hogar de forma rápida, sencilla y segura
              en Shop Menoss.
            </p>

            <Link to="/productos" className="btn btn-primary btn-lg">
              Ver productos
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home