
import { Code, Scale, Briefcase, Award } from "lucide-react";

const About = () => {
  const skills = [
    { category: "Legal Foundations", items: ["Technology & Innovation Law", "Regulatory Insight (Biotech/Mining)", "Contract and Compliance Awareness", "Legal Research & Analysis"] },
    { category: "Industry Experience", items: ["Laboratory & Field Operations", "R&D Project Coordination", "Technical Reporting", "Data Interpretation in Scientific Settings"] },
    { category: "Leadership & Collaboration", items: ["Team Coordination", "Cross-Disciplinary Communication", "Problem Solving in Technical Contexts", "Strategic Planning & Decision Support"] },
  ];

  const legalInterests = [
    "Technology Law",
    "Intellectual Property Law", 
    "Patent Law",
    "Entrepreneurship Law",
    "Merger and Acquisition Law"
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bridging innovation and law: from engineering to intellectual property and beyond
          </p>
        </div>

        {/* Bio Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Legal books and gavel representing law and justice"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-6">
              My Journey
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                With a foundation in engineering and hands-on experience in research, development, and startups, I'm now stepping into the legal world as an incoming JD student at the University of Victoria (Class of 2028). My passion lies at the intersection of innovation and the law, particularly in patent, intellectual property, and technology law.
              </p>
              <p>
                Over the years, I've worked closely on projects involving patents and product development, which inspired me to pursue law and support inventors, creators, and tech-driven businesses in protecting their ideas and navigating complex regulatory landscapes.
              </p>
              <p>
                While I'm just beginning my formal legal education, my technical background gives me a unique lens through which I approach legal challenges. I aim to become a professional who can fluently connect the legal, technical, and business aspects of innovation.
              </p>
              <p>
                I believe the future of law lies in cross-disciplinary thinking, and I'm excited to grow at that intersection.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Interests */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#2C3E50] text-center mb-12">
            Legal Interests
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {legalInterests.map((interest, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="bg-[#00BFFF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="text-white" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-[#2C3E50]">{interest}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-[#2C3E50] text-center mb-12">
            Core Competencies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="animate-fade-in">
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-4 border-b-2 border-[#00BFFF] pb-2">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-700 flex items-center">
                      <Award className="text-[#00BFFF] mr-2" size={16} />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
