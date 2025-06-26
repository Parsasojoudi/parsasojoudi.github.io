
import { Calendar, MapPin, Building, GraduationCap } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Experience = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#education') {
      const educationSection = document.getElementById('education');
      if (educationSection) {
        educationSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const workExperience = [
    {
      title: "Full-time Research and Development Engineer",
      company: "Brokkr Mineral Resources Corp.",
      location: "Burnaby, BC, Canada",
      dates: "Feb. 2024 - Present",
      duties: [
        "Full-time Research and Development Engineer",
        "Peptide synthesis, design, and engineering for the use of metal chelation",
        "Conducting fundamental and analytical report writing to support the Research and Development Team",
        "Responsible for budget planning and roadmap development for current and future projects"
      ]
    },
    {
      title: "Part-time Polymer Engineering Intern",
      company: "Brokkr Mineral Resources Corp.",
      location: "Burnaby, BC, Canada", 
      dates: "Oct. 2022 - Dec. 2023",
      duties: [
        "Part-time Polymer Engineering Intern",
        "Prepared analytical reports to support the R&D team",
        "Managed lab equipment and supported research activities",
        "Assisted in budget planning and roadmap development for ongoing and upcoming projects"
      ]
    },
    {
      title: "Research Assistant",
      company: "Department of Chemistry, Simon Fraser University",
      location: "Burnaby, BC, Canada",
      dates: "Sept. 2021 - Dec. 2023",
      duties: [
        "Working on Lateral Flow Assay design to differentiate between different types of ginseng DNA sequences as my master's project",
        "Designing a colorimetric SNP detection device",
        "Senior supervisor: Dr. Paul C. H. Li, co-supervisors: Dr. Gary Leach and Dr. Bonnie Gray"
      ]
    },
    {
      title: "Teaching Assistant",
      company: "Department of Chemistry, Simon Fraser University",
      location: "Burnaby, BC, Canada",
      dates: "Sept. 2021 - Dec. 2023",
      duties: [
        "Teaching Assistant for General Chemistry Laboratory I (CHEM 125) under the supervision of Drs. Rebecca Goyan, and Garry Mund",
        "Teaching Assistant for Introductory Chemistry CHEM 110/111 under the supervision of James Zhou and Dr. Dev Sharma"
      ]
    },
    {
      title: "Research Assistant",
      company: "Membrane Center of Tehran",
      location: "Tehran, Iran",
      dates: "Summer 2018",
      duties: [
        "Investigation of synthesis magnetic gold-coated poly (ε-caprolactonediol) for controlled release of paclitaxel and 5-FU under the supervision of Dr. Irani.",
        "Co-authored and collaborated in an academic publication on the synthesis of magnetic gold-coated poly (ε-caprolactonediol)"
      ]
    }
  ];

  const education = [
    {
      degree: "Juris Doctor (J.D.)",
      institution: "Faculty of Law, University of Victoria",
      location: "Victoria, BC, Canada",
      dates: "Sept. 2025 - May. 2028",
      honors: "Incoming 1L Student, Class of 2028",
      details: "Passionate about Business Law, with a strong interest in Intellectual Property Law, Technology Law, Patent Law, and Mergers & Acquisitions (M&A)."
    },
    {
      degree: "Master of Science in Chemistry",
      institution: "Simon Fraser University",
      location: "Burnaby, BC, Canada", 
      dates: "Sept. 2021 - Dec. 2023",
      honors: "Master's Thesis: 'Development of a Paper-based Microfluidic Assay based on the Nucleic Acid Amplification Test (NAAT) for Ginseng Species Authentication'",
      details: "Completed Dec 14th, 2023, under the supervision of Dr. Paul C. H. Li."
    },
    {
      degree: "Bachelor of Science in Polymer Engineering",
      institution: "School of Chemical Engineering, University of Tehran",
      location: "Tehran, Iran",
      dates: "Sept. 2016 - Sept. 2020",
      honors: "Ranked 5th out of 30 Polymer Engineering Majors",
      details: "GPA of last two years: 17/20 (equivalent to an A in the Iranian grading system)"
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
            A comprehensive overview of my education and career journey
          </p>
        </div>

        {/* Education Section - Now First */}
        <div className="mb-16" id="education">
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

        {/* Work Experience Section - Now Second */}
        <div>
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
      </div>
    </div>
  );
};

export default Experience;
