import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { DashboardPage } from './DashboardPage';
import { ErrorPage } from './ErrorPage';

export const AppPage: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};
