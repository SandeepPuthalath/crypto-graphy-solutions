import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Invoice from './pages/Invoice';
import Customer from './pages/Customer';
import Users from './pages/Users';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        index: true,
        element: <Dashboard/>
      },
      {
        path:'/profile',
        element:<Profile/>
      },
      {
        path: '/invoice',
        element: <Invoice/>
      },
      {
        path: '/customers',
        element: <Customer/>
      },
      {
        path: '/users',
        element: <Users/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);

