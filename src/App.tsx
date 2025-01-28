import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '@/theme/theme';
import { GlobalStyles } from '@/theme/globalStyle';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { AuthPage } from './pages/AuthPage';
import { AppPage } from './pages/AppPage';
import { useAuthStore } from './stores/authStore';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './queryClient';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useThemeStore } from './stores/themeStore';
import { useEffect } from 'react';

const ProtectedRoute: React.FC = () => {
  const { token } = useAuthStore();

  if (!token) {
    return <Navigate to="/auth" />;
  }
  return <Outlet />;
};

function App() {
  const { mode } = useThemeStore();

  useEffect(() => {
    document.documentElement.className = mode;
  }, [mode]);
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <ToastContainer position="top-center" autoClose={2000} draggable pauseOnHover hideProgressBar={false} />
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<AuthPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="*" element={<AppPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
