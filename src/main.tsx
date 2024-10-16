import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.tsx'
import { Error } from './pages/Error/Error.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
