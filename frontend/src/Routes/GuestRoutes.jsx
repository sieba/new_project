import { Route } from 'react-router-dom';

import GuestLayout from '../Layout/GuestLayout';
import Home from '../pages/Guest/Home/Home';
import About from '../pages/Guest/About/About';

export const GuestRoutes = () => (
  <Route path="/" element={<GuestLayout />}>
    <Route path='/' element={<Home />} />
    <Route path="about" element={<About />} />
  </Route>
);
