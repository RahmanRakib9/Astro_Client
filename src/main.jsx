import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import UserAuthenticationProvider from './provider/UserAuthenticationProvider/UserAuthenticationProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <UserAuthenticationProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserAuthenticationProvider>

  </React.StrictMode>,
)
