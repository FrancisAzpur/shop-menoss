import Header from './components/Header'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <div className="flex-grow-1">
        <AppRoutes />
      </div>

      <Footer />
    </div>
  )
}

export default App