import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

const ProjectShowcase = () => {
  const items = [
    {
      type: "Project",
  title: "Time Series Anomaly Detection in Gas Compression Data",
  description: "Developed anomaly detection models using DBSCAN and Isolation Forest to identify equipment failures.",
  tags: ["Time Series", "Anomaly Detection", "DBSCAN", "Isolation Forest"],
  learnMoreLink: "/time-series", // Updated link for Learn More
  
    },
    {
      type: "Publication",
      title: "Flood Risk Assessment in Bangladesh",
      description: "GIS-based hybrid DNN and fuzzy AHP models for national-scale flood risk assessment.",
      tags: ["GIS", "Flood Risk", "Fuzzy AHP", "DNN"],
      learnMoreLink: "/flood-risk-assessment", // New link for Learn More
      readPaperLink: "https://doi.org/10.1080/10106049.2022.2063411", // Existing DOI link
    },
    {
      type: "Publication",
  title: "Hybridized SVR for Flood Susceptibility Mapping",
  description: "Support Vector Regression optimized with Genetic Algorithms for accurate flood susceptibility mapping.",
  tags: ["SVR", "Flood Mapping", "Genetic Algorithm", "GIS"],
  learnMoreLink: "/flood-map", // Updated link for Learn More
  readPaperLink: "https://doi.org/10.1007/978-3-030-79463-7_6",
    },
    {
      type: "Publication",
  title: "Fuzzy SEIRD for COVID-19 Analysis",
  description: "A fuzzy logic-enhanced SEIRD model for COVID-19 transmission prediction.",
  tags: ["Fuzzy Logic", "SEIRD Model", "COVID-19", "Epidemiology"],
  learnMoreLink: "/fuzzy-seird", // Updated link for Learn More
  readPaperLink: "https://doi.org/10.1142/S0129183122500917",
    },
    {
      type: "Publication",
      title: "Linguistic Fuzzy Rule-Based COVID-19 Modeling",
      description: "Theoretical compartmental modeling using linguistic fuzzy rules for the COVID-19 pandemic.",
      tags: ["Fuzzy Rules", "Compartmental Models", "Pandemic Modeling"],
      learnMoreLink: "/fuzzy-rule", // Updated link for Learn More
      readPaperLink: "https://doi.org/10.4018/IJFSA.285553",
    },
    {
      type: "Publication",
  title: "Road Crash Severity Prediction Using Machine Learning",
  description: "A machine learning-based approach to predict road crash severity using AHC, Random Forest, and C5.0 models.",
  tags: ["Machine Learning", "Road Safety", "AHC", "Crash Prediction"],
  learnMoreLink: "/road-crash", // Updated link for Learn More
  readPaperLink: "https://doi.org/10.1007/978-3-030-63119-2_3",
    },
  ];
  

  return (
    <div className="pt-40 min-h-screen bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 p-8 text-slate-100">
      <h2 className="text-4xl text-center font-bold mb-12">
        Projects and Publications
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
  <Card
    key={index}
    className="relative bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg shadow-md hover:scale-105 transition-transform duration-500"
  >
    <CardHeader>
      <MacOsButtons />
      <div className="mb-2">
        {item.type === "Project" ? (
          <span className="bg-emerald-500 text-xs font-semibold px-2 py-1 rounded-full text-gray-900">
            Project
          </span>
        ) : (
          <span className="bg-sky-500 text-xs font-semibold px-2 py-1 rounded-full text-gray-900">
            Publication
          </span>
        )}
      </div>
      <CardTitle className="text-2xl font-extrabold text-white">
        {item.title}
      </CardTitle>
    </CardHeader>
    <CardContent>
  <p className="mb-4 text-slate-300">{item.description}</p>
  <div className="flex flex-wrap gap-2 mb-12">
    {item.tags.map((tag, tagIndex) => (
      <span
        key={tagIndex}
        className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow"
      >
        {tag}
      </span>
    ))}
  </div>

  <div className="absolute bottom-6 left-6 right-6 flex justify-between">
  <a
    href={item.learnMoreLink || item.link} // Updated Learn More logic
    className="inline-flex items-center gap-1 text-emerald-400 hover:text-cyan-500 transition-colors text-sm"
  >
    Learn More <ExternalLink size={16} />
  </a>

  {item.type === "Publication" && item.readPaperLink && (
    <a
      href={item.readPaperLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-sm text-emerald-400 hover:text-cyan-500 transition-colors"
    >
      Read Paper <ExternalLink size={16} />
    </a>
  )}
</div>
</CardContent>
  </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
