import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Details from './pages/Details'
import { useStateContext } from './context/stateContext'

function App() {

  const { currentMode } = useStateContext()

  return (
    <div className={`${currentMode === 'Dark' ? 'dark' : ''}`}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:slug' element={<Details />} />
      </Routes>
    </div>
  )
}

export default App
