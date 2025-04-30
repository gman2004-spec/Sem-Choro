import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import './index.css';

import App from './App.jsx';
import Contact from './Contact.jsx';
import Calcs from './Calcs.jsx';
import Req from './Req.jsx';

// ✅ Placeholder temporário para o Analytics (substitua por import real, se necessário)
const Analytics = () => null;

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/calcs',
    element: <Calcs />,
  },
  {
    path: '/requisicao',
    element: <Req />,
  },
]);

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Analytics />
      <RouterProvider router={router} />
    </StrictMode>
  );
} else {
  console.error("❌ Elemento com id 'root' não encontrado no DOM.");
}
