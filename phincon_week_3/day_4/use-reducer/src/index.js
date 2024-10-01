import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountdownTimer from "./components/CountdownTimer";
import Calculation from "./components/Calculation";
import Count from "./components/Count";
import NoPageFound from "./components/NoPageFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<CountdownTimer />} />
            <Route path="calculation" element={<Calculation />} />
            <Route path="count" element={<Count />} />
            <Route path="*" element={<NoPageFound />} />
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
