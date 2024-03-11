import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/layout";
import HomePage from "./pages/home";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage title="Labs" />} />
          <Route path="/about" element={<HomePage title="About" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
