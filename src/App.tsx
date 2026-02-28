import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home/Home.tsx';
import Products from './pages/Products/Products.tsx';
import About from './pages/About/About.tsx';
import Contact from './pages/Contact/Contact.tsx';
import NotFound from './pages/NotFound/NotFound.tsx';
import LogIn from './pages/Authentication/LogIn.tsx';
import Register from './pages/Authentication/Register.tsx';
import ProductDetails from './pages/ProductDetails/ProductDetails.tsx';
import Cart from './pages/Cart/Cart.tsx';

const router = createBrowserRouter([
  {
    path: '/', element: <MainLayout />, children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'productsDetails/:id', element: <ProductDetails /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'login', element: <LogIn /> },
      { path: 'register', element: <Register /> },
      { path: 'cart', element: <Cart /> },
      { path: '*', element: <NotFound /> }
    ]
  }
])






function App() {


  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
