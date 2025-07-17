// components/ProtectedLayout.jsx
import { Outlet } from "react-router-dom";
import ProtectedRoutes from "../hooks/ProtectedRoutes";

const ProtectedLayout = ({ allowedRoles }) => {
  return (
    <ProtectedRoutes allowedRoles={allowedRoles}>
      <Outlet /> {/* Render child routes */}
    </ProtectedRoutes>
  );
};

export default ProtectedLayout;
