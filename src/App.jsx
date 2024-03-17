import { Outlet } from "react-router-dom"
import Header from './components/Shared/Header'
import Footer from './components/Shared/Footer'

const App = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App