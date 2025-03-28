import React, { useState } from 'react';
import { FiMap, FiTarget, FiAward, FiLayers, FiImage } from 'react-icons/fi';

const FloodRiskAssessment = () => {
  const [isFlowchartZoomed, setIsFlowchartZoomed] = useState(false);
  const [isMapZoomed, setIsMapZoomed] = useState(false);
  const [isCompareZoomed, setIsCompareZoomed] = useState(false);

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-[#0a0f1f] to-[#020617] text-slate-100 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Hero Section */}
        <div className="col-span-2 text-center">
          <h1 className="text-6xl font-extrabold text-emerald-400 mb-8">
            Flood Risk Assessment in Bangladesh
          </h1>
        </div>

        {/* Objective Section */}
        <div className="bg-[#0d1526] rounded-xl p-6 shadow-2xl border-l-4 border-emerald-400">
          <h2 className="text-3xl font-bold text-emerald-400 flex items-center gap-2 mb-4">
            <FiTarget /> Objective
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-md leading-relaxed">
            <li>Developed a <span className="text-emerald-300 font-semibold">hybridized DNN + fuzzy AHP</span> model for flood risk assessment.</li>
            <li>Integrated <span className="text-emerald-300 font-semibold">GIS data</span>, <span className="text-emerald-300 font-semibold">remote sensing imagery</span>, and <span className="text-emerald-300 font-semibold">socio-economic data</span> for improved accuracy.</li>
            <li>Aimed to identify regions at <span className="text-emerald-300 font-semibold">moderate to very high risk</span> of flooding.</li>
            <li>Provided actionable insights for <span className="text-emerald-300 font-semibold">disaster preparedness</span> and <span className="text-emerald-300 font-semibold">resource allocation</span>.</li>
            <li>Addressed the limitations of traditional flood models by enhancing <span className="text-emerald-300 font-semibold">decision-making accuracy</span>.</li>
          </ul>
        </div>

        {/* Technologies Used */}
        <div className="bg-[#0d1526] rounded-xl p-6 shadow-2xl border-l-4 border-blue-400">
          <h2 className="text-3xl font-bold text-blue-400 flex items-center gap-2 mb-4">
            <FiLayers /> Technologies Used
          </h2>
          <p className="leading-relaxed text-md text-blue-300">
            Python, R, GIS, TensorFlow/Keras, ArcGIS
          </p>
        </div>

        {/* Methodology Section with Flowchart Side-by-Side */}
{/* Methodology Section with Flowchart Side-by-Side */}
<div className="bg-[#0d1526] rounded-xl p-6 shadow-2xl border-l-4 border-amber-400">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <h2 className="text-3xl font-bold text-amber-400 flex items-center gap-2 mb-4">
        <FiAward /> Methodology
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-md leading-relaxed">

        {/* Data Collection */}
        <li>
          <span className="text-yellow-400 font-semibold">Data Collection:</span>
          <ul className="list-disc pl-5 space-y-1">
            <li>Collected comprehensive geospatial data including 
              <span className="text-yellow-400 font-semibold"> GIS layers</span>, 
              <span className="text-yellow-400 font-semibold"> remote sensing imagery</span>, and 
              <span className="text-yellow-400 font-semibold"> socio-economic data</span>.
            </li>
            <li>Utilized sources like 
              <span className="text-yellow-400 font-semibold"> Sentinel-2 satellite data</span>, 
              <span className="text-yellow-400 font-semibold"> DEM (Digital Elevation Model)</span>, and 
              <span className="text-yellow-400 font-semibold"> meteorological records</span> for accurate mapping.
            </li>
          </ul>
        </li>

        {/* Feature Engineering */}
        <li>
          <strong>Feature Engineering:</strong>
          <ul className="list-disc pl-5 space-y-1">
            <li>Engineered critical flood risk factors such as:</li>
            <ul className="list-disc pl-5">
              <li><span className="text-yellow-400 font-semibold">Slope</span> and 
                <span className="text-yellow-400 font-semibold"> elevation</span> to assess water runoff patterns.
              </li>
              <li><span className="text-yellow-400 font-semibold">Soil permeability</span> and 
                <span className="text-yellow-400 font-semibold"> land cover types</span> for infiltration assessment.
              </li>
              <li><span className="text-yellow-400 font-semibold">SPI (Standardized Precipitation Index)</span> 
                to evaluate regional rainfall impact.
              </li>
            </ul>
            <li>Applied 
              <span className="text-yellow-400 font-semibold"> z-score normalization</span> 
              to ensure feature scaling consistency.
            </li>
          </ul>
        </li>

        {/* Model Design & Training */}
        <li>
          <strong>Model Design & Training:</strong>
          <ul className="list-disc pl-5 space-y-1">
            <li>Developed multiple DNN models optimized with:</li>
            <ul className="list-disc pl-5">
              <li><span className="text-yellow-400 font-semibold">ADAM optimizer</span> for fast convergence.</li>
              <li><span className="text-yellow-400 font-semibold">Softmax</span> and 
                <span className="text-yellow-400 font-semibold"> Sigmoid activation</span> for multi-class risk assessment.
              </li>
              <li><span className="text-yellow-400 font-semibold">Dropout layers</span> and 
                <span className="text-yellow-400 font-semibold"> L2 Regularization</span> to prevent overfitting.
              </li>
            </ul>
          </ul>
        </li>

        {/* Fuzzy AHP Integration */}
        <li>
          <strong>Fuzzy AHP Integration:</strong>
          <ul className="list-disc pl-5 space-y-1">
            <li>Integrated 
              <span className="text-yellow-400 font-semibold"> fuzzy Analytic Hierarchy Process (AHP)</span> 
              to assign optimal weights to conditioning factors, enhancing decision-making accuracy.
            </li>
            <li>The fuzzy logic system enabled improved handling of environmental uncertainties.</li>
          </ul>
        </li>

        {/* Flood Risk Mapping */}
        <li>
          <strong>Flood Risk Mapping:</strong>
          <ul className="list-disc pl-5 space-y-1">
            <li>Combined DNN outputs with geospatial data to produce a detailed 
              <span className="text-yellow-400 font-semibold"> Flood Risk Map</span> of Bangladesh.
            </li>
            <li>The map highlighted vulnerable zones, critical for guiding policymakers in flood mitigation strategies.</li>
          </ul>
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
        <img src="/icons/Floodflow.png" alt="Flood Risk Assessment Framework" 
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

      {/* Results Section with ROC Curve Side-by-Side */}
<div className="bg-[#0d1526] rounded-xl p-6 shadow-2xl border-l-4 border-red-400">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <h2 className="text-3xl font-bold text-red-400 flex items-center gap-2 mb-4">
        <FiImage /> Results & Discussion
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-md leading-relaxed">
        <li>
          <strong>Performance Metrics:</strong>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              The <span className="text-red-300 font-semibold">ADAM–ReLU–Softmax DNN</span> achieved the highest accuracy with an 
              <span className="text-red-300 font-semibold"> AUROC score of 0.957</span>, outperforming traditional models.
            </li>
            <li>
              The model’s <span className="text-red-300 font-semibold">MSE score of 0.083</span> indicated minimal prediction error, confirming its reliability in risk estimation.
            </li>
          </ul>
        </li>

        <li>
          <strong>Flood Risk Distribution:</strong>
          <ul className="list-disc pl-5 space-y-1">
            <li>Identified <span className="text-red-300 font-semibold">20.45%</span> of Bangladesh in moderate to very high-risk zones:</li>
            <ul className="list-disc pl-5">
              <li>Moderate Risk: <span className="text-red-300 font-semibold">13.37%</span></li>
              <li>High Risk: <span className="text-red-300 font-semibold">5.44%</span></li>
              <li>Very High Risk: <span className="text-red-300 font-semibold">1.64%</span></li>
            </ul>
          </ul>
        </li>

        <li>
          <strong>Model Comparison Insights:</strong>
          <ul className="list-disc pl-5 space-y-1">
            <li>The <span className="text-red-300 font-semibold">Hybridized DNN with fuzzy AHP</span> outperformed alternative models such as:</li>
            <ul className="list-disc pl-5">
              <li>Gaussian RBF–SVR (94.5%)</li>
              <li>Conditional Inference Tree (94.6%)</li>
              <li>KNN and MLP models</li>
            </ul>
          </ul>
        </li>

        <li>
          <strong>Key Findings:</strong>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              The hybrid DNN model demonstrated superior precision in identifying fragmented high-risk zones in regions with sparse data points.
            </li>
            <li>
              The inclusion of <span className="text-red-300 font-semibold">fuzzy AHP</span> improved decision-making by dynamically adjusting risk factor weights based on environmental variability.
            </li>
          </ul>
        </li>

        <li>
          <strong>Impact & Application:</strong>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              The flood risk map has influenced <span className="text-red-300 font-semibold">local policymakers</span> in allocating resources to high-risk regions such as 
              <span className="text-red-300 font-semibold"> Kurigram</span> and <span className="text-red-300 font-semibold"> Sunamganj</span>.
            </li>
            <li>
              The model’s adaptability makes it applicable to other disaster-prone regions facing similar challenges.
            </li>
          </ul>
        </li>
      </ul>
    </div>

    {/* ROC Curve Image Section */}
    <div>
      <div
        className={`overflow-hidden rounded-lg cursor-pointer transition-all duration-300 shadow-lg
        ${isCompareZoomed ? 'fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center' : ''}`}
        onClick={() => setIsCompareZoomed(!isCompareZoomed)}
      >
        <img src="/icons/FloodRiskCompare.png" alt="Flood Risk Model Comparison" 
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
{/* Roles & Contributions Section */}
<div className="bg-[#0d1526] rounded-xl p-6 shadow-2xl border-l-4 border-purple-400">
  <h2 className="text-3xl font-bold text-purple-400 flex items-center gap-2 mb-4">
    <FiAward /> Roles & Contributions
  </h2>
  <ul className="list-disc pl-5 space-y-2 text-md leading-relaxed">
    
    {/* Data Collection & Preparation */}
    <li>
      <strong>Data Collection & Preparation:</strong>
      <ul className="list-disc pl-5 space-y-1">
        <li>Identified key data sources such as <span className="text-purple-300 font-semibold">Sentinel-2 satellite data</span>, 
        <span className="text-purple-300 font-semibold"> DEM</span>, and 
        <span className="text-purple-300 font-semibold"> meteorological records</span>.</li>
        <li>Performed <span className="text-purple-300 font-semibold">data cleaning</span>, handling missing values, and ensuring data quality.</li>
      </ul>
    </li>

    {/* Feature Engineering */}
    <li>
      <strong>Feature Engineering:</strong>
      <ul className="list-disc pl-5 space-y-1">
        <li>Designed feature engineering pipeline by implementing <span className="text-purple-300 font-semibold">z-score normalization</span> for feature scaling.</li>
        <li>Developed critical flood indicators such as <span className="text-purple-300 font-semibold">slope</span>, 
        <span className="text-purple-300 font-semibold"> elevation</span>, and 
        <span className="text-purple-300 font-semibold"> SPI (Standardized Precipitation Index)</span>.</li>
      </ul>
    </li>

    {/* Model Development */}
    <li>
      <strong>Model Development:</strong>
      <ul className="list-disc pl-5 space-y-1">
        <li>Developed and optimized models including:</li>
        <ul className="list-disc pl-5">
          <li><span className="text-purple-300 font-semibold">MLP</span></li>
          <li><span className="text-purple-300 font-semibold">SVR</span></li>
          <li><span className="text-purple-300 font-semibold">GA MLP-SVR</span></li>
          <li><span className="text-purple-300 font-semibold">GA Linear-SVR</span></li>
        </ul>
      </ul>
    </li>

    {/* Visualization & Results Interpretation */}
    <li>
      <strong>Visualization & Results Interpretation:</strong>
      <ul className="list-disc pl-5 space-y-1">
        <li>Designed the <span className="text-purple-300 font-semibold">Flood Risk Map</span> visualization to effectively communicate high-risk zones.</li>
        <li>Analyzed model results to ensure insights aligned with real-world conditions.</li>
      </ul>
    </li>

    {/* Report & Presentation */}
    <li>
      <strong>Report & Presentation:</strong>
      <ul className="list-disc pl-5 space-y-1">
        <li>Authored detailed documentation explaining the methodology, model evaluation, and insights.</li>
        <li>Helped with <span className="text-purple-300 font-semibold">formatting the paper for journal submission</span>.</li>
      </ul>
    </li>
  </ul>
</div>

        {/* Flood Risk Map Full Width */}
        <div className="col-span-2">
          <div className="bg-[#0d1526] rounded-xl p-6 shadow-2xl border-l-4 border-green-400">
            <img src="/icons/Floodrisk.png" alt="Flood Risk Map of Bangladesh" className="rounded-lg shadow-md w-full"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloodRiskAssessment;
