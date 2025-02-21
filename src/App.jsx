import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'

export default App
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" component={Dashboard} />
        </Routes>
    </Router>
  )
}