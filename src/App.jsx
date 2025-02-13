import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import AdPosting from './Components/AdPosting';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import './App.css';

// Auto Redirect Component
const RedirectToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (!window.location.hash) {
      window.location.replace(`${window.location.origin}/#${location.pathname}`);
    }
  }, [location]);

  return null;
};

const App = () => {
  return (
    <Router>
      <RedirectToHash />
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/AdPosting" element={<AdPosting />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
