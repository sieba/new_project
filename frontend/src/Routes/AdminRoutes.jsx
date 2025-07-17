import { Route, Navigate } from 'react-router-dom';
import ProtectedLayout from '../Layout/ProtectedLayout.jsx';
import AdminDashboard from '../pages/Admin/AdminDashboard/AdminDashboard.jsx';
import AdminLayout from '../Layout/AdminLayout.jsx';

export const AdminRoutes = () => (
  <Route path="/admin" element={<ProtectedLayout allowedRoles={['admin']} />}>
    <Route element={<AdminLayout />}>
      <Route path='dashboard' element={<AdminDashboard />} />
    </Route>
  </Route>
);
