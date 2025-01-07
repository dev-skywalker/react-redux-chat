import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = useSelector((state) => state.user.token);

    if (!token) {
        // Redirect to login page if not authenticated
        return <Navigate to="/email" replace />;
    }

    return children;
};

export default ProtectedRoute;
