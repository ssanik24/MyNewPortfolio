import React, { useState } from 'react';
import { FiMap, FiTarget, FiAward, FiLayers, FiImage } from 'react-icons/fi';

const TimeSeries = () => {
  const [isFlowchartZoomed, setIsFlowchartZoomed] = useState(false);
  const [isMapZoomed, setIsMapZoomed] = useState(false);
  const [isCompareZoomed, setIsCompareZoomed] = useState(false);

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-[#0a0f1f] to-[#020617] text-slate-100 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Hero Section */}
        <div className="col-span-2 text-center">
          <h1 className="text-6xl font-extrabold text-emerald-400 mb-8">
            Time Series Anomaly Detection in Gas Compression Data
          </h1>
        </div>

        {/* Objective Section */}
        <div className="bg-[#0d1526] rounded-xl p-6 shadow-2xl border-l-4 border-emerald-400">
          <h2 className="text-3xl font-bold text-emerald-400 flex items-center gap-2 mb-4">
            <FiTarget /> Objective
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-md leading-relaxed">
            <li>Developed an <span className="text-emerald-300 font-semibold">end-to-end anomaly detection framework</span> for ExxonMobil’s Hebron gas compression time series data.</li>
            <li>Implemented and evaluate <span className="text-emerald-300 font-semibold">unsupervised ML algorithms (DBSCAN & Isolation Forest)</span> to detect abnormal patterns.</li>
            <li>Engineered key features such as <span className="text-emerald-300 font-semibold">rolling statistics, first-order differences, and lag values</span> for temporal insight.</li>
            <li>Visualized and compare anomaly detection outputs through <span className="text-emerald-300 font-semibold">interactive visualizations</span> and intuitive plots.</li>
            <li>Designed a scalable pipeline to support <span className="text-emerald-300 font-semibold">future integration with Azure-based ML systems</span>.</li>
          </ul>
        </div>

        {/* Technologies Used */}
        <div className="bg-[#0d1526] rounded-xl p-6 shadow-2xl border-l-4 border-blue-400">
          <h2 className="text-3xl font-bold text-blue-400 flex items-center gap-2 mb-4">
            <FiLayers /> Technologies Used
          </h2>
          <p className="leading-relaxed text-md text-blue-300">
            Python, Scikit-learn, Pandas, NumPy, Matplotlib, Plotly, Azure ADX, Azure Databricks, Azure ML
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
                <li><span className="text-yellow-400 font-semibold">Data Preparation:</span> Preprocessed Hebron gas compression data (1-minute interval) and selected key sensors: temperature, vibration, frequency, pressure.</li>
                <li><span className="text-yellow-400 font-semibold">Feature Engineering:</span> Generated rolling means, rolling std dev, first-order differences, lagged features, and applied z-score normalization.</li>
                <li><span className="text-yellow-400 font-semibold">Model Implementation:</span> Applied DBSCAN and Isolation Forest algorithms using a modular and reusable Python pipeline.</li>
                <li><span className="text-yellow-400 font-semibold">Evaluation:</span> Evaluated anomalies through visualization and false positive/negative comparison with expert observations.</li>
                <li><span className="text-yellow-400 font-semibold">Visualization:</span> Created dual-style visual output — highlighting isolated points and contiguous anomaly regions on time series plots.</li>
              </ul>
            </div>

            {/* Flowchart Image Section */}
            <div>
              <div
                className={`overflow-hidden rounded-lg cursor-pointer transition-all duration-300 shadow-lg
                ${isFlowchartZoomed ? 'fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center' : ''}`}
                onClick={() => setIsFlowchartZoomed(!isFlowchartZoomed)}
              >
                <img src="/icons/TimeseriesFlow.png" alt="Anomaly Detection Flowchart"
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

        {/* Results Section with Chart Side-by-Side */}
        <div className="bg-[#0d1526] rounded-xl p-6 shadow-2xl border-l-4 border-red-400">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-red-400 flex items-center gap-2 mb-4">
                <FiImage /> Results & Discussion
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-md leading-relaxed">
                <li><strong>DBSCAN:</strong> Detected high-density anomaly clusters with simple parameter tuning (eps, min_samples).</li>
                <li><strong>Isolation Forest:</strong> Performed well at scale but was more sensitive to parameterization and less interpretable for domain experts.</li>
                <li><strong>Visualization:</strong> Clearly distinguished isolated anomalies and contiguous anomaly regions using color-coded time series charts.</li>
                <li><strong>Validation:</strong> Verified outputs through domain-expert-aligned visual comparisons and false positive/negative summaries.</li>
                <li><strong>Scalability:</strong> Architecture supports Azure-based deployment and future expansion to semi-supervised anomaly detection systems.</li>
              </ul>
            </div>

            {/* Results Chart Image */}
            <div>
              <div
                className={`overflow-hidden rounded-lg cursor-pointer transition-all duration-300 shadow-lg
                ${isCompareZoomed ? 'fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center' : ''}`}
                onClick={() => setIsCompareZoomed(!isCompareZoomed)}
              >
                <img src="/icons/TimeseriesResult.png" alt="Anomaly Detection Comparison"
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
            <li><strong>Data Preparation & Feature Engineering:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>Processed raw time series data and created features like rolling statistics, lag values, and first-order differences.</li>
                <li>Applied z-score normalization across all features for consistent scaling.</li>
              </ul>
            </li>
            <li><strong>Model Development & Evaluation:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>Implemented and tuned DBSCAN and Isolation Forest algorithms for anomaly detection.</li>
                <li>Compared detection outputs using visual evaluation and false positive/negative metrics.</li>
              </ul>
            </li>
            <li><strong>Visualization & Results Interpretation:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>Designed charts highlighting both isolated and grouped anomalies across the timeline.</li>
                <li>Developed overlapping comparison plots to understand algorithm behavior.</li>
              </ul>
            </li>
            <li><strong>Solution Architecture:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>Contributed to designing a cloud-integrated pipeline across Azure ADX, Databricks, and AzureMLfor scalable deployment.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimeSeries;
