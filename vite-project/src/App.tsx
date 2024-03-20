import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@/pages/layout";
import HomePage from "@/pages/home";
import PropertyPassionPage from "@/pages/cart";
import CachingPage from "@/pages/caching";
import HttpStatePage from "@/pages/manager-state/http/default";
import HttpLocalDefault from "./pages/manager-state/local/default";

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
          <Route
            path="manager-state/local-state"
            element={<HttpLocalDefault />}
          />
          <Route path="manager-state/global-state" element={<CachingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
