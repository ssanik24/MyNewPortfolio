import React, { useState } from 'react';
import { FiTarget, FiAward, FiLayers } from 'react-icons/fi';

const RoadCrash = () => {
  const [isFlowchartZoomed, setIsFlowchartZoomed] = useState(false);
  const [isCompareZoomed, setIsCompareZoomed] = useState(false);
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-[#0a0f1f] to-[#020617] text-slate-100 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Hero Section */}
        <div className="col-span-2 text-center">
          <h1 className="text-6xl font-extrabold text-emerald-400 mb-8">
            Road Crash Severity Prediction in Bangladesh
          </h1>
        </div>

        {/* Objective Section */}
        <div className="bg-[#0d1526] rounded-xl p-6 shadow-2xl border-l-4 border-emerald-400">
          <h2 className="text-3xl font-bold text-emerald-400 flex items-center gap-2 mb-4">
            <FiTarget /> Objective
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-md leading-relaxed">
            <li>Developed machine learning models to predict road crash severity in Bangladesh based on environmental and road conditions.</li>
            <li>Identified homogeneous clusters of road crashes using <span className="text-emerald-300 font-semibold">Agglomerative Hierarchical Clustering (AHC)</span>.</li>
            <li>Extracted significant predictors using <span className="text-emerald-300 font-semibold">Random Forest</span> based on Mean Decrease Accuracy.</li>
            <li>Built classification models for each cluster using the <span className="text-emerald-300 font-semibold">C5.0</span> algorithm.</li>
            <li>Generated predictive rules for fatal and non-fatal crashes using <span className="text-emerald-300 font-semibold">PART analysis</span>.</li>
            <li>Addressed data underreporting by applying <span className="text-emerald-300 font-semibold">oversampling techniques</span>.</li>
          </ul>
        </div>

        {/* Technologies Used */}
        <div className="bg-[#0d1526] rounded-xl p-6 shadow-2xl border-l-4 border-blue-400">
          <h2 className="text-3xl font-bold text-blue-400 flex items-center gap-2 mb-4">
            <FiLayers /> Technologies Used
          </h2>
          <p className="leading-relaxed text-md text-blue-300">
            R, Python, WEKA, Microsoft Excel
          </p>
        </div>
{/* Methodology Section (2-column inside full width) */}
<div className="col-span-2 bg-[#0d1526] rounded-xl p-6 shadow-2xl border-l-4 border-amber-400">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    
    {/* Methodology Text */}
    <div>
      <h2 className="text-3xl font-bold text-amber-400 flex items-center gap-2 mb-4">
        <FiAward /> Methodology
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-md leading-relaxed">
        <li><span className="text-yellow-400 font-semibold">Data Preparation:</span> Removed rows with missing values and merged non-fatal accident categories to reduce classification bias.</li>
        <li><span className="text-yellow-400 font-semibold">Clustering:</span> Used <span className="text-yellow-400 font-semibold">AHC</span> with <span className="text-yellow-400 font-semibold">Gower distance</span> to group similar crashes into clusters.</li>
        <li><span className="text-yellow-400 font-semibold">Feature Selection:</span> Applied <span className="text-yellow-400 font-semibold">Random Forest</span> to extract important predictors using <span className="text-yellow-400 font-semibold">Mean Decrease Accuracy</span> and validated with <span className="text-yellow-400 font-semibold">OOB error</span>.</li>
        <li><span className="text-yellow-400 font-semibold">Classification:</span> Built separate models for each cluster using the <span className="text-yellow-400 font-semibold">C5.0 decision tree</span> algorithm with oversampling using <span className="text-yellow-400 font-semibold">SMOTE</span>.</li>
        <li><span className="text-yellow-400 font-semibold">Rule Generation:</span> Employed <span className="text-yellow-400 font-semibold">PART analysis</span> to generate interpretable decision rules explaining crash severity.</li>
      </ul>
    </div>

    {/* Flowchart Image */}
    <div>
      <div
        className={`overflow-hidden rounded-lg cursor-pointer transition-all duration-300 shadow-lg
        ${isFlowchartZoomed ? 'fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 overflow-y-auto' : ''}`}
        onClick={() => setIsFlowchartZoomed(!isFlowchartZoomed)}
      >
        <img src="/icons/AccidentFlow.png" alt="Road Crash Methodology Flowchart"
          className={`rounded-lg shadow-md transition-all
            ${isFlowchartZoomed ? 'max-w-[600px] w-[90%] mx-auto' : 'w-full max-w-[800px] max-h-[500px] object-contain mx-auto'}`}
        />
      </div>
      <p className="text-center text-sm mt-2 font-bold text-amber-400">
        Click image to {isFlowchartZoomed ? 'shrink' : 'enlarge'}.
      </p>
    </div>

  </div>
</div>

{/* Results & Discussion Section (2-column inside full width) */}
<div className="col-span-2 bg-[#0d1526] rounded-xl p-6 shadow-2xl border-l-4 border-red-400">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    
    {/* Results Text */}
    <div>
      <h2 className="text-3xl font-bold text-red-400 flex items-center gap-2 mb-4">
        <FiAward /> Results & Discussion
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-md leading-relaxed">
        <li><span className="text-red-400 font-semibold">Clustering:</span> Optimal number of clusters determined using silhouette width for each crash group.</li>
        <li><span className="text-red-400 font-semibold">Feature Selection:</span> Key predictors included road class, traffic control, divider, location type, and movement.</li>
        <li><span className="text-red-400 font-semibold">Classification Accuracy:</span> Achieved up to <span className="text-red-400 font-semibold">84.55%</span> accuracy for pedestrian cluster and over <span className="text-red-400 font-semibold">80%</span> for single and multi-vehicle clusters.</li>
        <li><span className="text-red-400 font-semibold">Rule Insights:</span> Identified fatal crash patterns such as absence of dividers on national roads and uncontrolled intersections.</li>
        <li><span className="text-red-400 font-semibold">Impact:</span> Provides actionable insights for transportation safety policies and accident prevention in developing countries.</li>
      </ul>
    </div>

    {/* Result Image */}
    <div>
      <div
        className={`overflow-hidden rounded-lg cursor-pointer transition-all duration-300 shadow-lg
        ${isCompareZoomed ? 'fixed inset-0 bg-black bg-opacity-70 z-50 flex items-start justify-center p-4 overflow-y-auto' : ''}`}
        onClick={() => setIsCompareZoomed(!isCompareZoomed)}
      >
        <img src="/icons/RoadResult.png" alt="Road Crash Model Results"
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
        <div className="bg-[#0d1526] rounded-xl p-6 shadow-2xl border-l-4 border-purple-400 col-span-2">
          <h2 className="text-3xl font-bold text-purple-400 flex items-center gap-2 mb-4">
            <FiAward /> Roles & Contributions
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-md leading-relaxed">
            <li>
              <span className="text-purple-300 font-semibold">Data Collection & Preparation:</span>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Cleaned and preprocessed the accident dataset by handling missing values and standardizing class labels.</li>
              </ul>
            </li>

            <li>
              <span className="text-purple-300 font-semibold">Feature Engineering:</span>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Applied <span className="text-yellow-400 font-semibold">Random Forest</span> to identify significant predictors.</li>
                <li>Performed <span className="text-yellow-400 font-semibold">OOB error</span> analysis to validate predictor selection.</li>
              </ul>
            </li>

            <li>
              <span className="text-purple-300 font-semibold">Model Development:</span>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Implemented <span className="text-yellow-400 font-semibold">AHC</span> for clustering and <span className="text-yellow-400 font-semibold">PART analysis</span> for rule generation.</li>
              </ul>
            </li>

            <li>
              <span className="text-purple-300 font-semibold">Report & Presentation:</span>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Contributed to writing the <span className="text-yellow-400 font-semibold">Results & Discussion</span> and <span className="text-yellow-400 font-semibold">Conclusion</span> sections.</li>
                <li>Assisted in <span className="text-yellow-400 font-semibold">formatting the paper for journal submission</span>, ensuring clarity and structure.</li>
              </ul>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default RoadCrash;
