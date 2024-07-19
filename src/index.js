import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SelectFeatures from "./Components/SelectFeatures";
import Payment from "./Components/Payment";
import { FeaturesProvider } from "./FeaturesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FeaturesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SelectFeatures />}>
            <Route path="/features" element={<SelectFeatures />} />
          </Route>
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </FeaturesProvider>
  </React.StrictMode>
);

reportWebVitals();