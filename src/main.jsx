import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Loyout/Main.jsx';
import AuthProvider from './components/Context/AuthProvider.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';

// import Home from './components/Home/Home.jsx';
const LazyHome = React.lazy(()=> import('./components/Home/Home.jsx'))

import Details from './components/Details/Details.jsx';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import Error from './components/Error/Error.jsx';
import Blog from './components/Blog/Blog.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children: [
      {
        path:'/',
        element: <React.Suspense fallback='Loading...'><LazyHome></LazyHome></React.Suspense>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader:({params})=> fetch(`https://assignment-ten-server-masudbhuiya.vercel.app/chef/${params.id}`)
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
