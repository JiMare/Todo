import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { DashboardPage } from './DashboardPage';

export const AppPage: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
    </Routes>
  );
};
