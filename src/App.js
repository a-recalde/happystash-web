import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Layout
import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import Features from './pages/Features';

import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <Layout>
              <Home />
            </Layout>
          } />
          <Route path="/features" element={
            <Layout>
              <Features />
            </Layout>
          } />

          <Route path="/privacy" element={
            <Layout>
              <Privacy />
            </Layout>
          } />
          <Route path="/terms" element={
            <Layout>
              <Terms />
            </Layout>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
