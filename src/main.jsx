import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Services } from './pages/Services.jsx';
import { UseCases } from './pages/UseCases.jsx';
import { Pricing } from './pages/Pricing.jsx';
import { Blog } from './pages/Blog.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
        </Route>

        <Route path='/about' element={<App />}>
          <Route index element={<About />} />
        </Route>

        <Route path='/services' element={<App />}>
          <Route index element={<Services />} />
        </Route>

        <Route path='/use-cases' element={<App />}>
          <Route index element={<UseCases />} />
        </Route>

        <Route path='/pricing' element={<App />}>
          <Route index element={<Pricing />} />
        </Route>

        <Route path='/blog' element={<App />}>
          <Route index element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
