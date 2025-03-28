import React, { useState } from 'react';
import { FiMap, FiTarget, FiAward, FiLayers, FiImage } from 'react-icons/fi';

const FuzzyRule = () => {
  const [isFlowchartZoomed, setIsFlowchartZoomed] = useState(false);
  const [isMapZoomed, setIsMapZoomed] = useState(false);
  const [isCompareZoomed, setIsCompareZoomed] = useState(false);

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-[#0a0f1f] to-[#020617] text-slate-100 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Hero Section */}
        <div className="col-span-2 text-center">
          <h1 className="text-6xl font-extrabold text-emerald-400 mb-8">
            Fuzzy Rule-Based SEIIsR COVID-19 Modeling
          </h1>
        </div>

        {/* Objective Section */}
        <div className="bg-[#0d1526] rounded-xl p-6 shadow-2xl border-l-4 border-emerald-400">
          <h2 className="text-3xl font-bold text-emerald-400 flex items-center gap-2 mb-4">
            <FiTarget /> Objective
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-md leading-relaxed">
            <li>Developed a <span className="text-emerald-300 font-semibold">fuzzy rule-based SEIIsR compartmental model</span> for COVID-19 transmission.</li>
            <li>Incorporated heterogeneity using fuzzy inputs: <span className="text-emerald-300 font-semibold">viral load (V)</span> and antibody levels (<span className="text-emerald-300 font-semibold">IgG, IgM</span>).</li>
            <li>Designed a <span className="text-emerald-300 font-semibold">Mamdani inference system</span> to compute a dynamic reproduction number Rₜ.</li>
            <li>Derived a time-varying transmission rate β(t) and analyze the system’s stability.</li>
            <li>Simulated model dynamics and evaluate the fuzzy reproduction number R₀f.</li>
            <li>Offered theoretical insight into pandemic progression under biological uncertainty.</li>
          </ul>
        </div>

        {/* Technologies Used */}
        <div className="bg-[#0d1526] rounded-xl p-6 shadow-2xl border-l-4 border-blue-400">
          <h2 className="text-3xl font-bold text-blue-400 flex items-center gap-2 mb-4">
            <FiLayers /> Technologies Used
          </h2>
          <p className="leading-relaxed text-md text-blue-300">
            MATLAB, Fuzzy Logic Toolbox, Mamdani Inference System, Next-Generation Matrix, Simulation Tools for SEIIsR Dynamics
          </p>
        </div>

        {/* Methodology Section with Flowchart */}
        <div className="bg-[#0d1526] rounded-xl p-6 shadow-2xl border-l-4 border-amber-400">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-amber-400 flex items-center gap-2 mb-4">
                <FiAward /> Methodology
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-md leading-relaxed">
                <li><span className="text-yellow-400 font-semibold">Model Structure:</span> Introduced the SEIIsR model with two infectious stages to capture biological heterogeneity.</li>
                <li><span className="text-yellow-400 font-semibold">Fuzzy Inference:</span> Used Mamdani system with fuzzy variables (V, IgG, IgM) to infer R₀f.</li>
                <li><span className="text-yellow-400 font-semibold">Rule Base:</span> Constructed fuzzy IF-THEN rules and defuzzified the output to compute β(t).</li>
                <li><span className="text-yellow-400 font-semibold">Stability Analysis:</span> Derived fuzzy basic reproduction number R₀f    and performed equilibrium analysis.</li>
                <li><span className="text-yellow-400 font-semibold">Simulation:</span> Simulated compartment transitions under different immune/viral conditions.</li>
              </ul>
            </div>

            {/* Flowchart Image */}
            <div>
              <div
                className={`overflow-hidden rounded-lg cursor-pointer transition-all duration-300 shadow-lg
                ${isFlowchartZoomed ? 'fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center' : ''}`}
                onClick={() => setIsFlowchartZoomed(!isFlowchartZoomed)}
              >
                <img src="/icons/FuzzyRuleFlow.png" alt="Fuzzy SEIIsR Model Flowchart"
                  className={`rounded-lg shadow-md transition-all
                  ${isFlowchartZoomed ? 'max-w-[1200px] w-[90%] mx-auto' : 'w-full max-w-[800px] mx-auto'}`}
                />
              </div>
              <p className="text-center text-sm mt-2 font-bold text-amber-400">
                Click image to {isFlowchartZoomed ? 'shrink' : 'enlarge'}.
              </p>
            </div>
          </div>
        </div>

        {/* Results Section with Image */}
        <div className="bg-[#0d1526] rounded-xl p-6 shadow-2xl border-l-4 border-red-400">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-red-400 flex items-center gap-2 mb-4">
                <FiImage /> Results & Discussion
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-md leading-relaxed">
                <li><strong>β(t) Behavior:</strong> Transmission rate varied realistically based on fuzzy inputs of viral and immune factors.</li>
                <li><strong>Simulation Output:</strong> Displayed smooth SEIIsR transitions, validating fuzzy-based progression modeling.</li>
                <li><strong>R₀f Calculation:</strong> Derived fuzzy basic reproduction number using next-generation matrix approach.</li>
                <li><strong>Biological Uncertainty:</strong> Effectively captured impact of partial immunity and fluctuating viral loads.</li>
                <li><strong>Model Strength:</strong> Offered improved flexibility and interpretability compared to classical SEIR models.</li>
              </ul>
            </div>

            {/* Results Image */}
            <div>
              <div
                className={`overflow-hidden rounded-lg cursor-pointer transition-all duration-300 shadow-lg
                ${isCompareZoomed ? 'fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center' : ''}`}
                onClick={() => setIsCompareZoomed(!isCompareZoomed)}
              >
                <img src="/icons/FuzzyRuleResult.png" alt="Fuzzy SEIIsR Results"
                  className={`rounded-lg shadow-md transition-all
                  ${isCompareZoomed ? 'max-w-[1400px] w-[90%] mx-auto' : 'w-full max-w-[800px] mx-auto'}`}
                />
              </div>
              <p className="text-center text-sm mt-2 font-bold text-red-400">
                Click image to {isCompareZoomed ? 'shrink' : 'enlarge'}.
              </p>
            </div>
          </div>
        </div>

        {/* Roles & Contributions */}
        <div className="bg-[#0d1526] rounded-xl p-6 shadow-2xl border-l-4 border-purple-400">
          <h2 className="text-3xl font-bold text-purple-400 flex items-center gap-2 mb-4">
            <FiAward /> Roles & Contributions
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-md leading-relaxed">
            <li><strong>Model Design & Formulation:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>Co-developed the SEIIsR structure and its integration with fuzzy-based infectivity modeling.</li>
              </ul>
            </li>
            <li><strong>Fuzzy System Development:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>Helped define fuzzy variables (V, IgG, IgM) and build the rule-based inference structure.</li>
              </ul>
            </li>
            <li><strong>Mathematical Analysis:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>Derived equilibrium points and fuzzy reproduction number R₀f using matrix-based methods.</li>
              </ul>
            </li>
            <li><strong>Simulation & Interpretation:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>Performed simulations and contributed to results interpretation and reporting of pandemic dynamics.</li>
              </ul>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default FuzzyRule;
