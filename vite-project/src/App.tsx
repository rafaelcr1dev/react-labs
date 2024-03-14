import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@/pages/layout";
import HomePage from "@/pages/home";
import PropertyPassionPage from "@/pages/cart";
import CachingPage from "./pages/caching";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage title="Labs" />} />
          <Route path="/cart" element={<PropertyPassionPage />} />
          <Route path="/caching" element={<CachingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
