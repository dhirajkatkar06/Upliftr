import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoutesFromElements, Route } from 'react-router';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './assets/Home/App';
import ProfilePage from './assets/Profile/ProfilePage';
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<App />} />
      <Route path="/profile/:name" element={<ProfilePage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
