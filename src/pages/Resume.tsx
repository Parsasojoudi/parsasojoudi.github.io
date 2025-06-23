
import { Download, Eye, FileText, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const handleDownload = () => {
    // In a real application, you would link to your actual resume PDF
    console.log("Downloading resume...");
    // Example: window.open('/path/to/your-resume.pdf', '_blank');
  };

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
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6">
            Curriculum Vitae
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Download my complete CV or view the summary below
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleDownload}
              className="bg-[#00BFFF] hover:bg-[#0099CC] text-white px-6 py-3 rounded-lg transition-all hover:scale-105"
            >
              <Download className="mr-2" size={20} />
              Download PDF Resume
            </Button>
            <Button
              variant="outline"
              className="border-[#2C3E50] text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white px-6 py-3 rounded-lg transition-all"
            >
              <Eye className="mr-2" size={20} />
              View Online
            </Button>
          </div>
        </div>

        {/* Resume Preview */}
        <div className="bg-white rounded-lg shadow-xl p-8 animate-fade-in">
          {/* Header Section */}
          <div className="text-center mb-8 pb-8 border-b-2 border-gray-200">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-2">Parsa Sojoudi</h2>
            <p className="text-lg text-gray-600 mb-4">1L Law Student • University of Victoria Faculty of Law</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span>sojoudiparsa@gmail.com</span>
              <span>•</span>
              <span>+1 672 514 4006</span>
              <span>•</span>
              <span>Greater Victoria, BC, Canada</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#2C3E50] mb-4 border-l-4 border-[#00BFFF] pl-3">
              Professional Summary
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Accomplished research professional with expertise in analytical chemistry, microfluidics, and nucleic acid research. 
              Currently pursuing a Juris Doctor at the University of Victoria with a focus on intellectual property law and patent law. 
              Strong background in polymer engineering and extensive experience in research and development, with published work in peer-reviewed journals.
            </p>
          </div>

          {/* Legal Interests */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#2C3E50] mb-4 border-l-4 border-[#00BFFF] pl-3">
              Legal Interests
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-[#00BFFF] mr-2">•</span>
                Intellectual Property Law
              </li>
              <li className="flex items-start">
                <span className="text-[#00BFFF] mr-2">•</span>
                Patent Law
              </li>
              <li className="flex items-start">
                <span className="text-[#00BFFF] mr-2">•</span>
                Business Law
              </li>
            </ul>
          </div>

          {/* Key Achievements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#2C3E50] mb-4 border-l-4 border-[#00BFFF] pl-3">
              Key Achievements
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-[#00BFFF] mr-2">•</span>
                Received CAD 52,000 in graduate scholarships for MSc in Chemistry at Simon Fraser University
              </li>
              <li className="flex items-start">
                <span className="text-[#00BFFF] mr-2">•</span>
                Published 3 peer-reviewed research papers in analytical chemistry and biomedical applications with currently more than 70 citations
              </li>
              <li className="flex items-start">
                <span className="text-[#00BFFF] mr-2">•</span>
                Ranked 5th out of 30 students in Polymer Engineering program at University of Tehran
              </li>
              <li className="flex items-start">
                <span className="text-[#00BFFF] mr-2">•</span>
                Top 0.5% performance in Iran's National University Entrance Exam among 300,000 participants
              </li>
            </ul>
          </div>

          {/* Education Preview */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#2C3E50] mb-4 border-l-4 border-[#00BFFF] pl-3">
              Education
            </h3>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="font-semibold text-[#2C3E50]">Juris Doctor (J.D.) - Incoming 1L Student</h4>
                  <p className="text-[#00BFFF]">University of Victoria Faculty of Law</p>
                </div>
                <span className="text-sm text-gray-600">2025 - 2028</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="font-semibold text-[#2C3E50]">M.S. Chemistry - Graduate Scholarship Recipient</h4>
                  <p className="text-[#00BFFF]">Simon Fraser University</p>
                </div>
                <span className="text-sm text-gray-600">2021 - 2023</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="font-semibold text-[#2C3E50]">B.S. Polymer Engineering - Ranked 5th/30</h4>
                  <p className="text-[#00BFFF]">University of Tehran</p>
                </div>
                <span className="text-sm text-gray-600">2016 - 2020</span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-4 border-l-4 border-[#00BFFF] pl-3">
              Work Experience
            </h3>
            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <div key={index} className="border-l-2 border-gray-200 pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="font-semibold text-[#2C3E50]">{job.title}</h4>
                    <span className="text-sm text-gray-600">{job.dates}</span>
                  </div>
                  <p className="text-[#00BFFF] mb-2">{job.company}</p>
                  <p className="text-sm text-gray-600 mb-2">{job.location}</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {job.duties.map((duty, dutyIndex) => (
                      <li key={dutyIndex} className="flex items-start">
                        <span className="text-[#00BFFF] mr-2">•</span>
                        <span>{duty}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 animate-fade-in">
          <p className="text-gray-600">
            <FileText className="inline mr-2" size={16} />
            Complete work history, research publications, and references available in full PDF resume
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
