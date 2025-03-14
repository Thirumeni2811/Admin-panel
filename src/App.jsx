import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { ThemeProvider } from './components/Theme/ThemeContext'
import Loaders from './components/Loader/Loaders';

//Lazy loading components
const Login = lazy(() => import('./pages/Login'));
const Homepage = lazy(() => import('./pages/Homepage'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Fake = lazy(() => import('./pages/Fake'));
const Designation = lazy(() => import('./pages/Designation'));

function App() {
  const ProtectedRoute = ({ children }) => {
    const token = sessionStorage.getItem('token');
    return token ? children : <Navigate to="/" />;
  };
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-screen w-full">
              <Loaders />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            {/* Parent Route */}
            <Route path="/*" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
              <Route path="fake" element={<Fake />} />
              <Route path="designation" element={<Designation />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
