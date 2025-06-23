// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import DashboardLayout from "./components/DashboardLayout";
import RegisterPage from "./pages/RegisterPage";
import DashboardHome from "./pages/dashboard/index";
import RecipientsPage from "./pages/dashboard/recipients";
import TransactionsPage from "./pages/dashboard/transactions";
import SettingsPage from "./pages/dashboard/settings";
import Layout from "./components/Layout";
import SendMoneyPage from "./pages/SendMoneyPage/SendMoney"; // ✅ make sure this path is correct

function App() {
  return (
    <Router>
      <Routes>
        {/* Public pages */}
        <Route
          path="/"
          element={
            <Layout>
              <LandingPage />
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <RegisterPage />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <LoginPage />
            </Layout>
          }
        />

        {/* Dashboard layout pages */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="recipients" element={<RecipientsPage />} />
          <Route path="transactions" element={<TransactionsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>

        {/*  Send Money Route */}
        <Route path="/send-money" element={<SendMoneyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
