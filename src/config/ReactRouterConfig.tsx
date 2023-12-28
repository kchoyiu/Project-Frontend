import {createBrowserRouter} from "react-router-dom";
import ProductListingPage from "../ui/page/ProductListingPage";
import ProductDetailPage from "../ui/page/ProductDetailPage";
import ShoppingCart from "../ui/page/ShoppingCartPage";
import LoginPage from "../ui/page/LoginPage";
import CheckOutPage from "../ui/page/CheckOutPage";
import ThankYouPage from "../ui/page/ThankyouPage";
import ErrorPage from "../ui/page/ErrorPage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ProductListingPage/>
    },
    {
        path: "/product/:productId/",
        element: <ProductDetailPage/>
    },
    {
        path: "/shoppingcart",
        element: <ShoppingCart/>
    },
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: "/checkout/:transactionId",
        element: <CheckOutPage/>
    },
    {
        path: "/thankyou",
        element: <ThankYouPage/>
    },
    {
        path: "/error",
        element: <ErrorPage/>
    }
])