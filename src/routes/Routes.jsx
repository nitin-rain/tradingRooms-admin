/** @format */

import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../containers/Dashboard";
import MSI from "../containers/MSI";

export default function RoutesComp() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/mis" element={<MSI />} />
    </Routes>
  );
}
