import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About';
import Company from './components/Company/Company';
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import Login from './components/Login/Login';
import UploadDocument from './components/UploadDocument/UploadDocument';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('features.json')
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/company',
        element: <Company></Company>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/upload',
        element: <UploadDocument></UploadDocument>
      }
      
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
