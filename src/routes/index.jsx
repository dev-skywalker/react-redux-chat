import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RegisterPage from "../pages/RegisterPage";
import CheckEmailPage from "../pages/CheckEmailPage";
import CheckPasswordPage from "../pages/CheckPasswordPage";
import Home from "../pages/Home";
import MessagePage from "../components/MessagePage";
import AuthLayouts from "../layout";
import Forgotpassword from "../pages/Forgotpassword";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "register",
                element: <AuthLayouts><RegisterPage /></AuthLayouts>
            },
            {
                path: 'login',
                element: <AuthLayouts><LoginPage /></AuthLayouts>
            },
            {
                path: 'password',
                element: <AuthLayouts><CheckPasswordPage /></AuthLayouts>
            },
            {
                path: 'forgot-password',
                element: <AuthLayouts><Forgotpassword /></AuthLayouts>
            },
            {
                path: "",
                element: <Home />,
                children: [
                    {
                        path: ':userId',
                        element: <MessagePage />
                    }
                ]
            }
        ]
    }
])

export default router