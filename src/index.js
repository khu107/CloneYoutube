import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import NotFound from './pages/NotFound';
import Vidios from './pages/Vidios';
import VidioDetail from './pages/VidioDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Vidios />,
      },
      { index: 'vidios', element: <Vidios /> },
      { path: 'vidios', element: <Vidios /> },
      { path: 'vidios/:keyword', element: <Vidios /> },
      { path: 'vidios/watch/:vidioId', element: <VidioDetail /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
