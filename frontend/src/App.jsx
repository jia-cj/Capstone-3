import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Home from './components/Home';
import Login from './components/user/Login';
import ProductDetails from './components/product/ProductDetails'; // Corrected import

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} /> {/* Corrected component name */}
            <Route path="/login" element={<Login />} />
          </Routes>
        </Container>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
