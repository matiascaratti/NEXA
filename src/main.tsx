import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { NexaApp } from './NexaApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NexaApp/>
  </StrictMode>,
)
