import { useAuthenticatedUser } from '../../../hooks/UserAuth';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const { user } = useAuthenticatedUser();
  return (
    <>
         <div className="admin_dahboard">
            <h1>Admin Dashboard</h1>
            <p>Welcome to the admin dashboard. Here you can manage users, view reports, and perform administrative tasks.</p>
            <div className="admin_data">
              <p>Email: <span>{user?.email || ""}</span></p>
              <p>Role: <span>{user?.role || ""}</span></p>
            </div>
         </div>
    </>
  )
}

export default AdminDashboard