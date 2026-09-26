import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CompritasApp } from './CompritasApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CompritasApp/>
  </StrictMode>,
)
