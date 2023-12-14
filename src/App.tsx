import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import ProductListingPage from "./ui/page/ProductListingPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorPage from "./ui/page/ErrorPage.tsx";
import ProductDetailPage from "./ui/page/ProductDetailPage";
import LoginPage from "./ui/page/LoginPage";
import {createContext, useEffect, useState} from "react";
import {UserData} from "./data/dto/UserDto.ts";
import * as FirebaseAuthService from "./authService/FirebaseAuthService.ts"
import ShoppingCart from "./ui/page/ShoppingCartPage";

export const LoginUserContext = createContext<UserData | undefined | null>(undefined)

function App() {

    const [loginUser, setLoginUser] = useState<UserData | null | undefined>(undefined);

    useEffect(() => {
        FirebaseAuthService.handleOnAuthStateChanged(setLoginUser);
    }, []);

    const router = createBrowserRouter([
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
        // {
        //   path: "/checkout/:transactionId",
        //   element: <Checkout/>
        // },
        // {
        //   path: "/thankyou",
        //   element: <ThankYou/>
        // }
        {
            path: "/error",
            element: <ErrorPage/>
        }
    ])

    return (
        <>
            <LoginUserContext.Provider value={loginUser}>
                <RouterProvider router={router}/>
            </LoginUserContext.Provider>
        </>
    )
}

export default App
