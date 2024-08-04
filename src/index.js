import React from 'react';
import ReactDOM from 'react-dom/client';
import "tailwindcss/tailwind.css";
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blogpreview from './blog';
import { BlogProvider } from './Blogcontext';
import About from './About';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <App />
  },

  {
    path: '/blog/:id',
    element: <Blogpreview />
  },

  {
    path: '/about',
    element: <About />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BlogProvider>
      <RouterProvider router={router} />
    </BlogProvider>
  </React.StrictMode>
);