import React from "react";
import profileImage from "../assets/images/profile.png";

const AboutMe = () => {
  return (
    <section
      className="about-section bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white py-16 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
      <div className="content max-w-2xl">
  <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>

  <p className="text-lg leading-relaxed mb-4">
    I am a Software Engineer specializing in Machine Learning, Data Science, and Software Development, with nearly three years of experience in ML and data-driven problem-solving. I hold a Master’s in Software Engineering from Memorial University of Newfoundland (MUN) and have hands-on experience applying ML models to solve real-world challenges.
  </p>

  <p className="text-lg leading-relaxed mb-4">
    During my internship at MUN, I worked on time series analysis and anomaly detection, implementing DBSCAN and Isolation Forest on industrial datasets. I have authored 5 research papers with 55+ citations, contributing to flood risk assessment, fuzzy logic modeling, and road safety analysis.
  </p>

  <p className="text-lg leading-relaxed">
    My expertise spans a wide range of ML algorithms, including Deep Neural Networks (DNN), Genetic Algorithms (GA), Random Forest, C5.0, and PART. I am passionate about leveraging AI to drive innovation and actively building my portfolio to advance as an ML Engineer, creating impactful AI-driven solutions.
  </p>
</div>

        
      </div>
    </section>
  );
};

export default AboutMe;
