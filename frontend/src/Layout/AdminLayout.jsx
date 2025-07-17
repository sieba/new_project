import './AdminLayout.css';
import { Outlet, Link } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      {/* Top Navigation */}
      {/* <header className="admin-header">
        <h1>Admin Panel</h1>
      </header> */}

      <div className="admin-body">
        {/* Sidebar */}
        <aside className="admin-sidebar">
          <div className='admin_navbar'>
            <ul>
              <li><Link to="/admin">Dashboard</Link></li>
              <li><Link to="/admin/settings">Settings</Link></li>
            </ul>
          </div>
        </aside>

        {/* Main content */}
        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
