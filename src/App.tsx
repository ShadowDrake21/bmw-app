import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <main className="App">
      <div>
        <NavBar />
      </div>
      <Outlet />
      <Footer />
    </main>
  )
}

export default App
