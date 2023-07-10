import React from 'react';
import './App.css';
import MainRoutes from './routes/MainRoutes';
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
