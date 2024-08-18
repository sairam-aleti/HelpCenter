import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SearchSection from './components/SearchSection';
import CardsSection from './components/CardsSection';
import AddCardForm from './components/AddCardForm';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import CardDetail from './components/CardDetail';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="text-center bg-white py-12">
                <h1 className="text-5xl font-bold mb-4">Welcome to the Help Center</h1>
                <p className="text-lg text-gray-700">Find answers to your questions or submit a request.</p>
              </div>
              <SearchSection />
              <CardsSection />
            </>
          }
        />
        <Route path="/cards" element={<CardsSection />} />
        <Route path="/card/:title" element={<CardDetail />} />
        <Route path="/add-card" element={<AddCardForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
