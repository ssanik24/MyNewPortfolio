import React, { useState } from "react";
import Hero from "./components/Hero";
import "./assets/css/index.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { Route, Routes } from "react-router-dom";
import FloodRiskAssessment from "./components/FloodRiskAssessment";
import FloodMap from "./components/FloodMap"; // New Import
import FuzzySEIRD from "./components/FuzzySEIRD";
import FuzzyRule from "./components/FuzzyRule";
import RoadCrash from "./components/RoadCrash";
import TimeSeries from "./components/TimeSeries";
export default function App() {
  const [isOnePage, setIsOnePage] = useState(false); // Toggle state

  return (
    <>
      <Header />
      {/* Conditional Rendering */}
      {isOnePage ? (
        // One-Page Mode: Render all components together
        <>
          <Hero />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </>
      ) : (
        // Router Mode: Use routes for navigation
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/flood-risk-assessment" element={<FloodRiskAssessment />} /> {/* New Route */}
          <Route path="/flood-map" element={<FloodMap />} /> {/* New Route */}
          <Route path="/fuzzy-seird" element={<FuzzySEIRD />} />
          <Route path="/fuzzy-rule" element={<FuzzyRule />} />
          <Route path="/road-crash" element={<RoadCrash />} />
          <Route path="/time-series" element={<TimeSeries />} />
        </Routes>
      )}
    </>
  );
}
