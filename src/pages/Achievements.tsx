import { Award, Trophy, FileText, Star, Lightbulb, Target } from "lucide-react";

const Achievements = () => {
  const awards = [
    {
      title: "Technology Innovation Award",
      organization: "American Bar Association",
      year: "2023",
      description: "Recognized for groundbreaking work in legal technology automation and AI compliance frameworks"
    },
    {
      title: "Rising Star in Legal Tech",
      organization: "Legal Tech Magazine",
      year: "2022",
      description: "Featured as one of the top 40 under 40 innovators in legal technology"
    },
    {
      title: "Best Legal Startup",
      organization: "TechCrunch Disrupt",
      year: "2021",
      description: "LegalTech Innovations won the startup competition for revolutionary contract automation platform"
    },
    {
      title: "Excellence in IP Law",
      organization: "Intellectual Property Society",
      year: "2020",
      description: "Recognition for outstanding contributions to intellectual property litigation and strategy"
    }
  ];

  const patents = [
    {
      title: "Automated Contract Analysis System",
      number: "US Patent 11,234,567",
      year: "2023",
      description: "AI-powered system for automated legal document review and risk assessment"
    },
    {
      title: "Blockchain-Based Legal Verification",
      number: "US Patent 11,123,456",
      year: "2022",
      description: "Distributed ledger technology for secure legal document authentication"
    },
    {
      title: "Machine Learning Legal Compliance Framework",
      number: "US Patent 10,987,654",
      year: "2021",
      description: "Automated compliance monitoring system for regulatory requirements"
    }
  ];

  const recognitions = [
    {
      title: "Harvard Law Review Publication",
      type: "Academic",
      year: "2018",
      description: "Published comprehensive analysis on AI ethics in legal practice"
    },
    {
      title: "MIT Innovation Challenge Winner",
      type: "Competition",
      year: "2013",
      description: "First place for developing smart grid optimization algorithm"
    },
    {
      title: "Google Code Jam Finalist",
      type: "Competition",
      year: "2017",
      description: "Top 100 worldwide in prestigious programming competition"
    },
    {
      title: "Bar Association Leadership Award",
      type: "Professional",
      year: "2022",
      description: "Outstanding leadership in advancing legal technology adoption"
    }
  ];

  const notableProjects = [
    {
      title: "AI-Powered Contract Platform",
      role: "Technical Lead & Co-Founder",
      impact: "Reduced contract review time by 75% for 200+ enterprise clients",
      technologies: "React, Python, TensorFlow, AWS"
    },
    {
      title: "Regulatory Compliance Automation",
      role: "Lead Developer",
      impact: "Automated compliance monitoring for financial services sector",
      technologies: "Node.js, MongoDB, Docker, Kubernetes"
    },
    {
      title: "IP Portfolio Management System",
      role: "Product Manager & Developer",
      impact: "Streamlined patent management for Fortune 500 companies",
      technologies: "Vue.js, PostgreSQL, Redis, Elasticsearch"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6">
            Achievements & Recognition
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Awards, patents, and notable accomplishments that highlight my contributions to law and technology
          </p>
        </div>

        {/* Awards Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Trophy className="text-[#FFD700] mr-3" size={32} />
            <h2 className="text-3xl font-bold text-[#2C3E50]">Awards & Honors</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 animate-fade-in hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <Award className="text-[#FFD700] mt-1" size={24} />
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{award.year}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">{award.title}</h3>
                <p className="text-[#00BFFF] font-medium mb-3">{award.organization}</p>
                <p className="text-gray-700">{award.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Patents Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Lightbulb className="text-[#00BFFF] mr-3" size={32} />
            <h2 className="text-3xl font-bold text-[#2C3E50]">Patents & IP</h2>
          </div>
          
          <div className="space-y-6">
            {patents.map((patent, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 animate-fade-in hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">{patent.title}</h3>
                    <p className="text-[#00BFFF] font-medium mb-2">{patent.number}</p>
                    <p className="text-gray-700">{patent.description}</p>
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full mt-2 lg:mt-0">
                    {patent.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Recognitions */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Star className="text-[#1ABC9C] mr-3" size={32} />
            <h2 className="text-3xl font-bold text-[#2C3E50]">Other Recognitions</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {recognitions.map((recognition, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 animate-fade-in hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    recognition.type === 'Academic' ? 'bg-blue-100 text-blue-800' :
                    recognition.type === 'Competition' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {recognition.type}
                  </span>
                  <span className="text-sm text-gray-500">{recognition.year}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">{recognition.title}</h3>
                <p className="text-gray-700">{recognition.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Notable Projects */}
        <div>
          <div className="flex items-center mb-8">
            <Target className="text-[#E74C3C] mr-3" size={32} />
            <h2 className="text-3xl font-bold text-[#2C3E50]">Notable Projects</h2>
          </div>
          
          <div className="space-y-8">
            {notableProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 animate-fade-in hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">{project.title}</h3>
                <p className="text-[#E74C3C] font-medium mb-4">{project.role}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-[#2C3E50] mb-2">Impact & Results</h4>
                    <p className="text-gray-700">{project.impact}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#2C3E50] mb-2">Technologies Used</h4>
                    <p className="text-gray-700">{project.technologies}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
