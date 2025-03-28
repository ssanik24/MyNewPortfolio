import React, { useState } from 'react';
import { FiMap, FiTarget, FiAward, FiLayers, FiImage } from 'react-icons/fi';

const FuzzySEIRD = () => {
  const [isFlowchartZoomed, setIsFlowchartZoomed] = useState(false);
  const [isMapZoomed, setIsMapZoomed] = useState(false);
  const [isCompareZoomed, setIsCompareZoomed] = useState(false);

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-[#0a0f1f] to-[#020617] text-slate-100 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Hero Section */}
        <div className="col-span-2 text-center">
          <h1 className="text-6xl font-extrabold text-emerald-400 mb-8">
            Fuzzy SEIRD Modeling of COVID-19 Intervention Effects
          </h1>
        </div>

        {/* Objective Section */}
        <div className="bg-[#0d1526] rounded-xl p-6 shadow-2xl border-l-4 border-emerald-400">
          <h2 className="text-3xl font-bold text-emerald-400 flex items-center gap-2 mb-4">
            <FiTarget /> Objective
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-md leading-relaxed">
            <li>Develop a <span className="text-emerald-300 font-semibold">fuzzy rule-based SEIRD compartmental model</span> to simulate COVID-19 transmission dynamics.</li>
            <li>Design a <span className="text-emerald-300 font-semibold">dynamic fuzzy transmission rate (β)</span> influenced by linguistic intervention variables.</li>
            <li>Integrate fuzzy logic inputs for <span className="text-emerald-300 font-semibold">Isolation (Is), Quarantine (Q), and Medical Facility (M)</span> effectiveness.</li>
            <li>Construct a <span className="text-emerald-300 font-semibold">Mamdani inference system</span> to estimate β(t) at each simulation step.</li>
            <li>Apply the fuzzy SEIRD model to real-world COVID-19 datasets from <span className="text-emerald-300 font-semibold">China and Bangladesh</span>.</li>
            <li>Compare predicted and actual active cases and deaths to evaluate model accuracy and policy impact.</li>
          </ul>
        </div>

        {/* Technologies Used */}
        <div className="bg-[#0d1526] rounded-xl p-6 shadow-2xl border-l-4 border-blue-400">
          <h2 className="text-3xl font-bold text-blue-400 flex items-center gap-2 mb-4">
            <FiLayers /> Technologies Used
          </h2>
          <p className="leading-relaxed text-md text-blue-300">
            MATLAB, Fuzzy Logic Toolbox, Mamdani Inference System, Real-World COVID-19 Datasets (China & Bangladesh), Numerical Solvers
          </p>
        </div>

        {/* Methodology Section with Flowchart Side-by-Side */}
        <div className="bg-[#0d1526] rounded-xl p-6 shadow-2xl border-l-4 border-amber-400">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-amber-400 flex items-center gap-2 mb-4">
                <FiAward /> Methodology
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-md leading-relaxed">
                <li><span className="text-yellow-400 font-semibold">SEIRD Modeling:</span> Designed a five-compartment model (S, E, I, R, D) representing key transmission dynamics.</li>
                <li><span className="text-yellow-400 font-semibold">Fuzzy Logic Integration:</span> Introduced fuzzy inputs: Isolation (Is), Quarantine (Q), and Medical (M), each with three levels (Low, Medium, High).</li>
                <li><span className="text-yellow-400 font-semibold">Rule Base:</span> Created 27 fuzzy IF-THEN rules mapping input combinations to dynamic transmission β(t).</li>
                <li><span className="text-yellow-400 font-semibold">Inference System:</span> Applied Mamdani fuzzy logic and centroid defuzzification to compute β(t) values.</li>
                <li><span className="text-yellow-400 font-semibold">Simulation & Validation:</span> Simulated model using real COVID-19 data and evaluated results for China and Bangladesh.</li>
              </ul>
            </div>

            {/* Flowchart Image */}
            <div>
              <div
                className={`overflow-hidden rounded-lg cursor-pointer transition-all duration-300 shadow-lg
                ${isFlowchartZoomed ? 'fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center' : ''}`}
                onClick={() => setIsFlowchartZoomed(!isFlowchartZoomed)}
              >
                <img src="/icons/FuzzySEIRDflow.png" alt="Fuzzy SEIRD Model Flowchart"
                  className={`rounded-lg shadow-md transition-all
                  ${isFlowchartZoomed ? 'max-w-[1400px] w-[90%] mx-auto' : 'w-full max-w-[800px] mx-auto'}`}
                />
              </div>
              <p className="text-center text-sm mt-2 font-bold text-amber-400">
                Click image to {isFlowchartZoomed ? 'shrink' : 'enlarge'}.
              </p>
            </div>
          </div>
        </div>

        {/* Results & Discussion Section */}
        <div className="bg-[#0d1526] rounded-xl p-6 shadow-2xl border-l-4 border-red-400">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-red-400 flex items-center gap-2 mb-4">
                <FiImage /> Results & Discussion
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-md leading-relaxed">
                <li><strong>Adaptive β:</strong> The fuzzy β(t) dynamically adjusted to intervention levels, reflecting real-world variability.</li>
                <li><strong>Prediction Accuracy:</strong> Predicted active cases and deaths closely matched real data from China and Bangladesh.</li>
                <li><strong>Intervention Sensitivity:</strong> The model captured the impact of lower quarantine effectiveness in Bangladesh vs. stronger interventions in China.</li>
                <li><strong>Interpretability:</strong> Linguistic rule-based control made the system transparent and decision-maker friendly.</li>
                <li><strong>Application Scope:</strong> Demonstrated practical use in planning, monitoring, and policy formulation for pandemic management.</li>
              </ul>
            </div>

            {/* Results Image */}
            <div>
              <div
                className={`overflow-hidden rounded-lg cursor-pointer transition-all duration-300 shadow-lg
                ${isCompareZoomed ? 'fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center' : ''}`}
                onClick={() => setIsCompareZoomed(!isCompareZoomed)}
              >
                <img src="/icons/FuzzySEIRDResult.png" alt="Fuzzy SEIRD Results"
                  className={`rounded-lg shadow-md transition-all
                  ${isCompareZoomed ? 'max-w-[1000px] w-[90%] mx-auto' : 'w-full max-w-[800px] mx-auto'}`}
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
                <li>Structured the SEIRD model and integrated fuzzy dynamic transmission β(t).</li>
              </ul>
            </li>
            <li><strong>Fuzzy Logic Development:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>Defined fuzzy input variables and helped construct the 27-rule fuzzy rule base.</li>
              </ul>
            </li>
            <li><strong>Simulation & Evaluation:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>Simulated the fuzzy SEIRD model using MATLAB and evaluated against COVID-19 data.</li>
              </ul>
            </li>
            <li><strong>Analysis & Reporting:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>Interpreted results and contributed to the writing of Results, Discussion, and Conclusion sections.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FuzzySEIRD;
