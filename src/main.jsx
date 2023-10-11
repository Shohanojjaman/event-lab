import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import AuthContextProvider from './Components/Context/AuthContextProvider';
import DataContextProvider from './Components/Context/DataContextProvider';
import MainRoutes from './Routes/MainRoutes';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <DataContextProvider>
        <RouterProvider router={MainRoutes}></RouterProvider>
      </DataContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
