
import { Code, Scale, Briefcase, Award } from "lucide-react";

const About = () => {
  const skills = [
    { category: "Legal Expertise", items: ["Contract Law", "Intellectual Property", "Corporate Law", "Regulatory Compliance"] },
    { category: "Technical Skills", items: ["Software Development", "Data Analysis", "Project Management", "Product Strategy"] },
    { category: "Leadership", items: ["Team Management", "Strategic Planning", "Business Development", "Cross-functional Collaboration"] },
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
            A unique blend of legal expertise, engineering innovation, and entrepreneurial vision
          </p>
        </div>

        {/* Bio Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Professional photo"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-6">
              My Journey
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                With a unique background spanning law, engineering, and entrepreneurship, I bring a multidisciplinary 
                perspective to solving complex challenges in today's tech-driven world.
              </p>
              <p>
                My legal expertise, combined with deep technical knowledge, allows me to navigate the intersection 
                of innovation and regulation, helping organizations build compliant yet cutting-edge solutions.
              </p>
              <p>
                Throughout my career, I've been passionate about bridging the gap between technical possibility 
                and legal feasibility, whether advising startups on IP strategy, leading engineering teams, 
                or developing innovative legal-tech solutions.
              </p>
              <p>
                I believe that the future belongs to professionals who can speak multiple "languages" – 
                legal, technical, and business – and I'm committed to being at the forefront of this evolution.
              </p>
            </div>
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#2C3E50] text-center mb-12">
            Areas of Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="bg-[#00BFFF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-4">Legal Practice</h3>
              <p className="text-gray-600">
                Comprehensive legal expertise with focus on technology law, intellectual property, 
                and regulatory compliance in innovative industries.
              </p>
            </div>
            <div className="text-center animate-fade-in">
              <div className="bg-[#1ABC9C] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-4">Engineering & Tech</h3>
              <p className="text-gray-600">
                Strong technical background in software development, systems architecture, 
                and emerging technologies with practical implementation experience.
              </p>
            </div>
            <div className="text-center animate-fade-in">
              <div className="bg-[#E74C3C] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-4">Entrepreneurship</h3>
              <p className="text-gray-600">
                Proven track record in startup environments, business development, 
                and bringing innovative legal-tech solutions from concept to market.
              </p>
            </div>
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
