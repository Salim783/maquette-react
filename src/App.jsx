import React from 'react';
import Footer from './components/footer.jsx';
import Navigation from './components/navbar.jsx';
import Banniere from './components/banniere.jsx';
import Contenue from './components/contenu.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './components/style.css'
function App(){
  return (
    <>
    <Router>
      <Routes>
      <Route
          path="/"
          element={
            <>
              <Navigation />
              <Banniere/>
              <Contenue/>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
    </>
  )
}

export default App
