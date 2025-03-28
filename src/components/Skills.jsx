import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";




import { Code2, Paintbrush, Database, Layout, Cpu, Cloud } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaAws,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";
import { SiR } from "react-icons/si";  // Import R logo


const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      color: "text-blue-400",
      skills: [
        {
          name: "Python",
          icon: <FaPython className="w-4 h-4 text-[#3776AB]" />,
        },
        { name: "R", icon: <SiR className="w-4 h-4 text-[#276DC3]" /> },  // ✅ Fixed R Icon
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="w-4 h-4 text-[#336791]" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "HTML5",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" />,
        },
        
      ],
    },
    {
      icon: Database,
      title: "Data Visualization",
      color: "text-green-400",
      skills: [
        {
          name: "Matplotlib",
          icon: <FaNodeJs className="w-4 h-4 text-[#339933]" />,
        },
        
        
        {
          name: "Seaborn",
          icon: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
        },
        {
          name: "PowerBI",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" />,
        },
        
      ],
    },
    {
      icon: Layout,
      title: "Machine Learning and NLP",
      color: "text-purple-400",
      skills: [
        { name: "scikit-learn", icon: <FaFigma className="w-4 h-4 text-[#F24E1E]" /> },
        {
          name: "NLTK",
          icon: <Layout className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "TensorFlow",
          icon: <FaReact className="w-4 h-4 text-[#61DAFB]" />,
          
        },
        {
          name: "PyTorch",
          icon: <SiGraphql className="w-4 h-4 text-[#E10098]" />,
          
        },
      ],
    },
    {
      icon: Cloud,
      title: "MLOps & DevOps",
      color: "text-orange-400",
      skills: [
        { name: "Azure ADX", icon: <img src="/icons/adx.svg" alt="ADX" className="w-6 h-6" /> },
        { name: "Azure Databricks", icon: <img src="/icons/databricks.svg" alt="Databricks" className="w-6 h-6" /> },
        {
          name: "Docker",
          icon: <FaDocker className="w-4 h-4 text-[#2496ED]" />,
        },
        { name: "CI/CD", icon: <FcWorkflow className="w-4 h-4" /> },
        {
          name: "MLflow",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#326CE5]" />,
        },
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
      ],
    },
    {
      icon: Cpu,
      title: "Domain Specific",
      color: "text-pink-400",
      skills: [
        {
          name: "Healthcare Data Analytics and Modelling",
          icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" />,
        },
        { name: "Geospatial Data Analysis", icon: <SiJest className="w-4 h-4 text-[#C21325]" /> },
        {
          name: "Hybrid ML models",
          icon: <SiWebpack className="w-4 h-4 text-[#8DD6F9]" />,
        },
        { name: "Time series Data Analysis", icon: <SiRedux className="w-4 h-4 text-[#764ABC]" /> },
        {
          name: "Predictive Modelling",
          icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" />,
        },
        { name: "Anomaly Detection", icon: <SiVercel className="w-4 h-4 text-white" /> },
        
      ],
    },
    {
      icon: Paintbrush,
      title: "Soft Skills",
      color: "text-yellow-400",
      skills: [
        {
          name: "Teamwork and Collaboration",
          icon: <MdAnimation className="w-4 h-4 text-[#FF4081]" />,
        },
        {
          name: "ProbleM Solving",
          icon: <MdAnimation className="w-4 h-4 text-[#00C853]" />,
        },
        {
          name: "Self Motivation",
          icon: <Cpu className="w-4 h-4 text-[#7C4DFF]" />,
        },
        {
          name: "Research and Strategy",
          icon: <MdAnimation className="w-4 h-4 text-[#FF6D00]" />,
        },
      ],
    },
  ];

  return (
    <main
      className="pt-24 lg:pt-24 bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white min-h-screen"
    >
      <section className="container mx-auto px-4 py-11">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
