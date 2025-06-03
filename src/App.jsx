// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage'; 
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
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
      </Routes>
    </Router>
  );
}

export default App;
