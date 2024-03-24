import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import useItemsStore from "@/pages/manager-state/global/store/use-items-store";

import "./globals.css";

console.log("Listener zustand out react");

useItemsStore.subscribe((state) => {
  console.log("New state", state);
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
