import Error404 from './pages/404/404';
import About from './pages/about/About';
import ContactUs from './pages/contact-us/ContactUs';
import Home from './pages/home/Home'
import Merch from './pages/merch/Merch';
import Shop from './pages/shop/Shop'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
