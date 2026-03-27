import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './components/App'
import AboutPage from './components/AboutPage'
import RestaurantsPage from './components/RestaurantsPage'
import ScrollToTop from './components/ScrollToTop'
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/restaurants" element={<RestaurantsPage />} />
            </Routes>
        </BrowserRouter>
)
