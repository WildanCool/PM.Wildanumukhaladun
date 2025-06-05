import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SAS from './project/SAS'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SAS />
  </StrictMode>,
)
