import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import MudanzasPage from './MudanzasPage.jsx'
import CarpinteriaPage from './MontajeMuebles.jsx'
import ServicePlaceholder from './ServicePlaceholder.jsx'
import './index.css'
import { Analytics } from "@vercel/analytics/react"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/mudanzas" element={<MudanzasPage />} />
        {/* Placeholder routes for other services - replace with actual components as you create them */}
        <Route path="/carpinteria" element={<CarpinteriaPage />} /> 
        <Route path="/electricidad" element={<ServicePlaceholder serviceName="Electricidad" />} />
        <Route path="/albanileria" element={<ServicePlaceholder serviceName="Albañilería" />} />
        <Route path="/plato-ducha" element={<ServicePlaceholder serviceName="Plato de Ducha" />} />
        <Route path="/tarima" element={<ServicePlaceholder serviceName="Tarima" />} />
        <Route path="/pladur" element={<ServicePlaceholder serviceName="Pladur" />} />
        <Route path="/pintura" element={<ServicePlaceholder serviceName="Pintura" />} />
        <Route path="/fontaneria" element={<ServicePlaceholder serviceName="Fontanería" />} />
      </Routes>
    </BrowserRouter>
    <Analytics />
  </React.StrictMode>,
)