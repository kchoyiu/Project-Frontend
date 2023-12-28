import {RouterProvider} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createContext, useEffect, useState} from "react";
import {UserData} from "./data/dto/UserDto.ts";
import * as FirebaseAuthService from "./authService/FirebaseAuthService.ts"
import {router} from "./config/ReactRouterConfig.tsx";

export const LoginUserContext = createContext<UserData | undefined | null>(undefined)

function App() {

    const [loginUser, setLoginUser] = useState<UserData | null | undefined>(undefined);

    useEffect(() => {
        FirebaseAuthService.handleOnAuthStateChanged(setLoginUser);
    }, []);


    return (
        <>
            <LoginUserContext.Provider value={loginUser}>
                <RouterProvider router={router}/>
            </LoginUserContext.Provider>
        </>
    )
}

export default App
