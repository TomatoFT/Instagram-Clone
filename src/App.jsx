import { useState } from 'react'
import './App.css'
import { Button } from '@chakra-ui/react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import  HomePage  from './pages/HomePage/HomePage'
import AuthPage from './pages/AuthPage/AuthPage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
    <Routes>
    <Route path="/home" element={<HomePage />} />    
    <Route path="/auth" element={<AuthPage />} />    
    </Routes>
    </Router>
  );
}

export default App
