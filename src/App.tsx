import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import ProductListingPage from "./ui/page/ProductListingPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorPage from "./ui/page/ErrorPage.tsx";
import ProductDetailPage from "./ui/page/ProductDetailPage";
import LoginPage from "./ui/page/LoginPage";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductListingPage/>
    },
    {
      path: "/product/:productId/",
      element: <ProductDetailPage/>
    },
    // {
    //   path: "/shoppingcart",
    //   element: <ShoppingCart/>
    // },
    {
      path: "/login",
      element: <LoginPage/>
    },
    // {
    //   path: "/checkout/:transactionId",
    //   element: <Checkout/>
    // },
    // {
    //   path: "/thankyou",
    //   element: <ThankYou/>
    // }
    {
      path:"/error",
      element: <ErrorPage/>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
