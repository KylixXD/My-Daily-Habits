import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { HabitsProvider } from './contexts/HabitsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <HabitsProvider>
          <App />
      </HabitsProvider>
    </BrowserRouter>
  </StrictMode>,
)
