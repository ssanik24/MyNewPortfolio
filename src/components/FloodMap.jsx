import React, { useState } from 'react';
import { FiMap, FiTarget, FiAward, FiLayers, FiImage } from 'react-icons/fi';

const FloodMap = () => {
  const [isFlowchartZoomed, setIsFlowchartZoomed] = useState(false);
  const [isMapZoomed, setIsMapZoomed] = useState(false);
  const [isCompareZoomed, setIsCompareZoomed] = useState(false);

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-[#0a0f1f] to-[#020617] text-slate-100 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Hero Section */}
        <div className="col-span-2 text-center">
          <h1 className="text-6xl font-extrabold text-emerald-400 mb-8">
            Flood Susceptibility Assessment in Bangladesh
          </h1>
        </div>

        {/* Objective Section */}
        <div className="bg-[#0d1526] rounded-xl p-6 shadow-2xl border-l-4 border-emerald-400">
          <h2 className="text-3xl font-bold text-emerald-400 flex items-center gap-2 mb-4">
            <FiTarget /> Objective
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-md leading-relaxed">
            <li>Developed a <span className="text-emerald-300 font-semibold">hybridized GA-RBF-SVR</span> model for flood susceptibility mapping in Bangladesh.</li>
            <li>Integrated <span className="text-emerald-300 font-semibold">RBF-SVR</span>, <span className="text-emerald-300 font-semibold">GA-RBF-SVR</span>, and <span className="text-emerald-300 font-semibold">MLP</span> models to predict flood-prone areas.</li>
            <li>Utilized <span className="text-emerald-300 font-semibold">Random Forest (RF)</span> to rank the relative importance of nine flood conditioning factors.</li>
            <li>Aimed to create a <span className="text-emerald-300 font-semibold">flood susceptibility map</span> for Bangladesh to aid in flood risk management.</li>
            <li>Focused on improving prediction accuracy compared to standalone machine learning models.</li>
          </ul>
        </div>

        {/* Technologies Used */}
        <div className="bg-[#0d1526] rounded-xl p-6 shadow-2xl border-l-4 border-blue-400">
          <h2 className="text-3xl font-bold text-blue-400 flex items-center gap-2 mb-4">
            <FiLayers /> Technologies Used
          </h2>
          <p className="leading-relaxed text-md text-blue-300">
            Python, R, ArcGIS, Genetic Algorithm (GA), Scikit-learn
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
        <li>
          <span className="text-yellow-400 font-semibold">Data Collection:</span>
          Collected comprehensive geospatial data including
          <span className="text-yellow-400 font-semibold"> topographic</span>,
          <span className="text-yellow-400 font-semibold"> hydrological</span>, and
          <span className="text-yellow-400 font-semibold"> land cover</span> information.
          Data sources included
          <span className="text-yellow-400 font-semibold"> DEM (Digital Elevation Model)</span>,
          <span className="text-yellow-400 font-semibold"> land use/land cover (LULC)</span>, and
          <span className="text-yellow-400 font-semibold"> hydrological maps</span>.
        </li>

        <li>
          <span className="text-yellow-400 font-semibold">Feature Engineering:</span>
          Selected nine key flood conditioning factors such as:
          <ul className="list-none pl-5 space-y-1 mt-2">
            <li>➔ <span className="text-yellow-400 font-semibold">Elevation</span></li>
            <li>➔ <span className="text-yellow-400 font-semibold">Slope</span></li>
            <li>➔ <span className="text-yellow-400 font-semibold">Distance to river</span></li>
            <li>➔ <span className="text-yellow-400 font-semibold">Soil type</span></li>
            <li>➔ <span className="text-yellow-400 font-semibold">Rainfall intensity</span></li>
            <li>➔ <span className="text-yellow-400 font-semibold">Land use/land cover (LULC)</span></li>
          </ul>
          Applied <span className="text-yellow-400 font-semibold">normalization techniques</span> to standardize data across all features.
        </li>

        <li>
          <span className="text-yellow-400 font-semibold">Model Development:</span>
          Developed and implemented four key models for prediction:
          <ul className="list-none pl-5 space-y-1 mt-2">
            <li>➔ <span className="text-yellow-400 font-semibold">Support Vector Regression (SVR)</span> – Base model for regression tasks.</li>
            <li>➔ <span className="text-yellow-400 font-semibold">Genetic Algorithm (GA) Optimized SVR (GA-SVR)</span> – Enhanced SVR with optimized parameters for improved performance.</li>
            <li>➔ <span className="text-yellow-400 font-semibold">Multi-Layer Perceptron (MLP)</span> – A neural network-based model for learning complex patterns.</li>
            <li>➔ <span className="text-yellow-400 font-semibold">Hybrid GA-MLP-SVR Model</span> – Integrated GA for optimizing both MLP and SVR for superior prediction accuracy.</li>
          </ul>
        </li>

        <li>
          <span className="text-yellow-400 font-semibold">Random Forest (RF) Analysis:</span>
          Applied <span className="text-yellow-400 font-semibold">Random Forest (RF)</span> to rank the importance of the nine selected flood conditioning factors.
        </li>

        <li>
          <span className="text-yellow-400 font-semibold">Flood Susceptibility Mapping:</span>
          Developed comprehensive flood susceptibility maps based on model predictions.
          Visualized results using <span className="text-yellow-400 font-semibold">ArcGIS</span> to identify high-risk zones for effective disaster management.
        </li>
      </ul>
    </div>

    {/* Flowchart Image Section */}
    <div>
      <div
        className={`overflow-hidden rounded-lg cursor-pointer transition-all duration-300 shadow-lg
        ${isFlowchartZoomed ? 'fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center' : ''}`}
        onClick={() => setIsFlowchartZoomed(!isFlowchartZoomed)}
      >
        <img src="/icons/Floodflow2.png" alt="Flood Risk Assessment Framework" 
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
  <h2 className="text-3xl font-bold text-red-400 flex items-center gap-2 mb-4">
    <FiAward /> Results & Discussion
  </h2>
  <ul className="list-disc pl-5 space-y-2 text-md leading-relaxed">

    {/* Performance Metrics */}
    <li>
      <span className="text-red-400 font-semibold">Performance Metrics:</span>
      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li>
          The <span className="text-red-400 font-semibold">GA-MLP-SVR</span> model achieved the highest accuracy with an
          <span className="text-red-400 font-semibold"> AUROC score of 0.957</span>, outperforming all other models.
        </li>
        <li>
          The <span className="text-red-400 font-semibold">GA-RBF-SVR</span> model closely followed with an
          <span className="text-red-400 font-semibold"> AUROC score of 0.949</span>, indicating robust performance in flood susceptibility prediction.
        </li>
        <li>
          The <span className="text-red-400 font-semibold">MLP</span> model demonstrated competitive accuracy with an
          <span className="text-red-400 font-semibold"> AUROC score of 0.924</span>, confirming its capability to handle complex data patterns.
        </li>
      </ul>
    </li>

    {/* Model Comparison Insights */}
    <li>
      <span className="text-red-400 font-semibold">Model Comparison Insights:</span>
      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li>
          The <span className="text-red-400 font-semibold">GA-MLP-SVR</span> model excelled in identifying fragmented high-risk flood zones in regions with complex terrain.
        </li>
        <li>
          The <span className="text-red-400 font-semibold">GA-RBF-SVR</span> model provided superior results for areas with consistent topographical patterns.
        </li>
        <li>
          Traditional SVR showed moderate performance, highlighting the advantage of hybridized models.
        </li>
      </ul>
    </li>

    {/* Key Findings */}
    <li>
      <span className="text-red-400 font-semibold">Key Findings:</span>
      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li>
          Incorporating <span className="text-red-400 font-semibold">Genetic Algorithm (GA)</span> significantly improved model optimization, enhancing prediction accuracy.
        </li>
        <li>
          The <span className="text-red-400 font-semibold">Random Forest (RF)</span> ranking confirmed that
          <span className="text-red-400 font-semibold"> distance to river</span>,
          <span className="text-red-400 font-semibold"> elevation</span>, and
          <span className="text-red-400 font-semibold"> rainfall intensity</span> were the most influential factors in flood susceptibility.
        </li>
        <li>
          The hybrid models effectively balanced precision and recall, reducing false positives while maintaining high accuracy.
        </li>
      </ul>
    </li>

    {/* Impact & Application */}
    <li>
      <span className="text-red-400 font-semibold">Impact & Application:</span>
      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li>
          The generated <span className="text-red-400 font-semibold">flood susceptibility map</span> identified critical high-risk regions, aiding policymakers in resource allocation and disaster preparedness.
        </li>
        <li>
          The proposed methodology demonstrated potential for application in other flood-prone regions worldwide.
        </li>
      </ul>
    </li>
  </ul>

  {/* Flood Result Image with Click-to-Enlarge Feature */}
  <div className="mt-6">
    <div
      className={`overflow-hidden rounded-lg cursor-pointer transition-all duration-300 shadow-lg
      ${isCompareZoomed ? 'fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center' : ''}`}
      onClick={() => setIsCompareZoomed(!isCompareZoomed)}
    >
      <img src="/icons/FloodResult.png" alt="Flood Model Comparison" 
        className={`rounded-lg shadow-md transition-all
        ${isCompareZoomed ? 'max-w-[1400px] w-[90%] mx-auto' : 'w-full max-w-[800px] mx-auto'}`} 
      />
    </div>
    <p className="text-center text-sm mt-2 font-bold text-red-400">
      Click image to {isCompareZoomed ? 'shrink' : 'enlarge'}.
    </p>
  </div>
</div>

{/* Roles & Contributions Section */}
<div className="bg-[#0d1526] rounded-xl p-6 shadow-2xl border-l-4 border-purple-400">
  <h2 className="text-3xl font-bold text-purple-400 flex items-center gap-2 mb-4">
    <FiAward /> Roles & Contributions
  </h2>
  <ul className="list-disc pl-5 space-y-2 text-md leading-relaxed">

    {/* Data Collection & Preparation */}
    <li>
      <span className="text-purple-300 font-semibold">Data Collection & Preparation:</span>
      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li>Collected and cleaned critical datasets including:
          <ul className="list-none pl-5 space-y-1 mt-1">
            <li>➔ <span className="text-yellow-400 font-semibold">Rainfall data</span></li>
            <li>➔ <span className="text-yellow-400 font-semibold">Land use/land cover (LULC) data</span></li>
            <li>➔ <span className="text-yellow-400 font-semibold">Elevation data</span></li>
          </ul>
        </li>
        <li>Performed <span className="text-yellow-400 font-semibold">data cleaning</span>, ensuring accuracy and standardization.</li>
      </ul>
    </li>

    {/* Feature Engineering */}
    <li>
      <span className="text-purple-300 font-semibold">Feature Engineering:</span>
      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li>Collaborated in designing the feature engineering pipeline to ensure effective flood conditioning factor integration.</li>
        <li>Applied <span className="text-yellow-400 font-semibold">normalization techniques</span> to maintain data scaling consistency.</li>
      </ul>
    </li>

    {/* Model Development */}
    <li>
      <span className="text-purple-300 font-semibold">Model Development:</span>
      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li>Developed and implemented the following machine learning models:</li>
        <ul className="list-none pl-5 space-y-1 mt-1">
          <li>➔ <span className="text-yellow-400 font-semibold">Multi-Layer Perceptron (MLP)</span></li>
          <li>➔ <span className="text-yellow-400 font-semibold">Support Vector Regression (SVR)</span></li>
        </ul>
      </ul>
    </li>

    {/* Visualization & Results Interpretation */}
    <li>
      <span className="text-purple-300 font-semibold">Visualization & Results Interpretation:</span>
      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li>Contributed to the design of the <span className="text-yellow-400 font-semibold">Flood Susceptibility Map</span> using <span className="text-yellow-400 font-semibold">ArcGIS</span>.</li>
        <li>Analyzed and interpreted model performance to extract meaningful insights.</li>
      </ul>
    </li>

    {/* Report & Presentation */}
    <li>
      <span className="text-purple-300 font-semibold">Report & Presentation:</span>
      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li>Authored comprehensive documentation explaining the methodology, model evaluation, and insights.</li>
        <li>Assisted in <span className="text-yellow-400 font-semibold">formatting the paper for journal submission</span>, ensuring clarity, structure, and proper referencing.</li>
      </ul>
    </li>

  </ul>
</div>

        {/* Flood Map Full Width */}
        <div className="col-span-2">
          <div className="bg-[#0d1526] rounded-xl p-6 shadow-2xl border-l-4 border-green-400">
            <div
              className={`overflow-hidden rounded-lg cursor-pointer transition-all duration-300 shadow-lg
              ${isMapZoomed ? 'fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center' : ''}`}
              onClick={() => setIsMapZoomed(!isMapZoomed)}
            >
              <img src="/icons/FloodSus.png" alt="Flood Risk Map of Bangladesh" 
                className={`rounded-lg shadow-md transition-all
                ${isMapZoomed ? 'max-w-[1400px] w-[90%] mx-auto' : 'w-full max-w-[800px] mx-auto'}`} 
              />
            </div>
            <p className="text-center text-sm mt-2 font-bold text-green-400">
              Click image to {isMapZoomed ? 'shrink' : 'enlarge'}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloodMap;
