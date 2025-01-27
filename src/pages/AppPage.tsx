import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { DashboardPage } from './DashboardPage';
import { ErrorPage } from './ErrorPage';
import { ProfilePage } from './ProfilePage';

export const AppPage: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};
