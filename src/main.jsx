import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Coba from './coba.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Coba />
  </StrictMode>,
)
