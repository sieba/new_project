
import { Navigate } from 'react-router-dom';
import { useAuthenticatedUser } from './UserAuth';

const ProtectedRoutes = ({ children, allowedRoles }) => {
  const { user } = useAuthenticatedUser();

  if (user === null) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  // include the user's roles in the allowedRoles using includes methos - an array
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoutes;
