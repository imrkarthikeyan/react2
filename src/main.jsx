import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RegForm } from './Components/RegForm'
//import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RegForm/>
  </StrictMode>,
)
