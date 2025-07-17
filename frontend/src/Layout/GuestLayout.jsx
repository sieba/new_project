import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navigation from '../components/Guest/Navigation/Navigation';

export default function GuestLayout() {
  return (
    <>
      <header>
        <Navigation/>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
