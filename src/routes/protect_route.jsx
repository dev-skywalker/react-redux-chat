import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    // const token = useSelector((state) => state.user.token);
    // console.log(token);

    // setTimeout(function () {
    //     //your code to be executed after 1 second
    // }, 1000);

    // if (!token) {
    //     // Redirect to login page if not authenticated
    //     return <Navigate to="/email" replace />;
    // }

    return children;
};

export default ProtectedRoute;
