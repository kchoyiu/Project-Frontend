import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import ProductListingPage from "./ui/page/ProductListingPage";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductListingPage/>
    },
    // {
    //   path: "/product/:productId/:userId",
    //   element: <ProductDetail/>
    // },
    // {
    //   path: "/shoppingcart",
    //   element: <ShoppingCart/>
    // },
    // {
    //   path: "/login",
    //   element: <LoginPage/>
    // },
    // {
    //   path: "/checkout/:transactionId",
    //   element: <Checkout/>
    // },
    // {
    //   path: "/thankyou",
    //   element: <ThankYou/>
    // }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
