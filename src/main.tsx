import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { NameProvider } from './context/InfoContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <NameProvider>
        <App />
      </NameProvider>
    </BrowserRouter>
  </StrictMode>,
)
