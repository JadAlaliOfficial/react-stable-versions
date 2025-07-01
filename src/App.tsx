import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/Auth/login';
import Register from './pages/Auth/register';
import ResetPassword from './pages/Auth/resetPassword';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Account from './pages/Account';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Files from './pages/Files';

const App = () => (
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="account" element={<Account />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
          <Route path="files" element={<Files />} />
        </Route>
        <Route path="/Auth/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="reset" element={<ResetPassword />} />


          
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
