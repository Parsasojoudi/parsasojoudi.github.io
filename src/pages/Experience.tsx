
import { Calendar, MapPin, Building, GraduationCap } from "lucide-react";

const Experience = () => {
  const workExperience = [
    {
      title: "Senior Legal Counsel & Technology Advisor",
      company: "Innovation Tech Corp",
      location: "San Francisco, CA",
      dates: "2022 - Present",
      duties: [
        "Lead legal strategy for emerging technology initiatives and IP portfolio management",
        "Advise engineering teams on regulatory compliance for AI and data privacy",
        "Negotiate complex technology licensing agreements and strategic partnerships",
        "Develop legal frameworks for agile development and product launches"
      ]
    },
    {
      title: "Co-Founder & Chief Technology Officer",
      company: "LegalTech Innovations",
      location: "Austin, TX",
      dates: "2020 - 2022",
      duties: [
        "Co-founded legal technology startup focused on contract automation",
        "Led technical architecture and development of SaaS platform",
        "Secured $2.5M in seed funding and built engineering team of 12",
        "Established legal compliance frameworks for enterprise clients"
      ]
    },
    {
      title: "Associate Attorney",
      company: "Morrison & Associates LLP",
      location: "New York, NY",
      dates: "2018 - 2020",
      duties: [
        "Specialized in intellectual property litigation and technology transactions",
        "Managed patent prosecution portfolio for Fortune 500 clients",
        "Conducted legal research and drafted briefs for complex IP disputes",
        "Collaborated with technical experts on software and hardware IP matters"
      ]
    },
    {
      title: "Software Engineering Intern",
      company: "Google",
      location: "Mountain View, CA",
      dates: "Summer 2017",
      duties: [
        "Developed machine learning algorithms for search optimization",
        "Collaborated with cross-functional teams on product feature development",
        "Implemented performance improvements resulting in 15% speed increase",
        "Presented technical findings to senior engineering leadership"
      ]
    }
  ];

  const education = [
    {
      degree: "Juris Doctor (J.D.)",
      institution: "Harvard Law School",
      location: "Cambridge, MA",
      dates: "2015 - 2018",
      honors: "Magna Cum Laude, Harvard Law Review",
      details: "Focus on Intellectual Property and Technology Law"
    },
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      dates: "2013 - 2015",
      honors: "GPA: 3.9/4.0",
      details: "Specialization in Artificial Intelligence and Machine Learning"
    },
    {
      degree: "Bachelor of Science in Electrical Engineering",
      institution: "MIT",
      location: "Cambridge, MA",
      dates: "2009 - 2013",
      honors: "Summa Cum Laude, Phi Beta Kappa",
      details: "Minor in Computer Science and Entrepreneurship"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6">
            Professional Experience
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my career journey across law, technology, and entrepreneurship
          </p>
        </div>

        {/* Work Experience Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Building className="text-[#00BFFF] mr-3" size={32} />
            <h2 className="text-3xl font-bold text-[#2C3E50]">Work Experience</h2>
          </div>
          
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 animate-fade-in hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">{job.title}</h3>
                    <p className="text-lg text-[#00BFFF] font-medium mb-2">{job.company}</p>
                  </div>
                  <div className="flex flex-col lg:items-end text-gray-600">
                    <div className="flex items-center mb-1">
                      <Calendar className="mr-2" size={16} />
                      <span>{job.dates}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2" size={16} />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.duties.map((duty, dutyIndex) => (
                    <li key={dutyIndex} className="text-gray-700 flex items-start">
                      <span className="text-[#00BFFF] mr-2 mt-2">•</span>
                      <span>{duty}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="flex items-center mb-8">
            <GraduationCap className="text-[#1ABC9C] mr-3" size={32} />
            <h2 className="text-3xl font-bold text-[#2C3E50]">Education</h2>
          </div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 animate-fade-in hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">{edu.degree}</h3>
                    <p className="text-lg text-[#1ABC9C] font-medium mb-2">{edu.institution}</p>
                    <p className="text-gray-700 mb-2">{edu.details}</p>
                  </div>
                  <div className="flex flex-col lg:items-end text-gray-600">
                    <div className="flex items-center mb-1">
                      <Calendar className="mr-2" size={16} />
                      <span>{edu.dates}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2" size={16} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#FAFAFA] p-4 rounded-lg">
                  <p className="text-[#2C3E50] font-medium">{edu.honors}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
