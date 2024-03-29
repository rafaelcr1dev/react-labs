import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@/pages/layout";
import HomePage from "@/pages/home";
import PropertyPassionPage from "@/pages/cart";
import CachingPage from "@/pages/caching";
import HttpStatePage from "@/pages/manager-state/http/default";
import LocalState from "@/pages/manager-state/local/default";
import Cart from "@/pages/manager-state/global/pages/cart";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage title="Labs" />} />
          <Route path="/cart" element={<PropertyPassionPage />} />
          <Route path="/caching" element={<CachingPage />} />
          <Route path="manager-state/http-state" element={<HttpStatePage />} />
          <Route path="manager-state/local-state" element={<LocalState />} />
          <Route path="manager-state/global-state" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
