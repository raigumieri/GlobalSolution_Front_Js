import { } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login.jsx'
import Home from './routes/Home.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,

    children:[
      {path: '/', element: <Home />},
      {path: '/home', element: <Home />},
      {path: '/login', element: <Login />},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
