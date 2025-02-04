import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { UsersProvider } from "./contexts/UsersContext/UsersContext.tsx";
import { InventoryProvider } from "./contexts/InventoryContext/InventoryContext.tsx";
import { PartesInmediatosProvider } from "./contexts/PartesInmediatos/PartesInmediatosContext.tsx";
import { AuthProvider } from "./contexts/AuthContext/AuthContext.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <UsersProvider>
    <AuthProvider>
      <InventoryProvider>
        <PartesInmediatosProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </PartesInmediatosProvider>
      </InventoryProvider>
    </AuthProvider>
  </UsersProvider>,
);
