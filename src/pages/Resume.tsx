
import { Download, Eye, FileText, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const handleDownload = () => {
    // In a real application, you would link to your actual resume PDF
    console.log("Downloading resume...");
    // Example: window.open('/path/to/your-resume.pdf', '_blank');
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6">
            Resume & CV
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Download my complete resume or view the summary below
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
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-2">Your Full Name</h2>
            <p className="text-lg text-gray-600 mb-4">Legal Professional • Engineer • Entrepreneur</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span>your.email@example.com</span>
              <span>•</span>
              <span>+1 (555) 123-4567</span>
              <span>•</span>
              <span>San Francisco, CA</span>
              <span>•</span>
              <span>linkedin.com/in/yourprofile</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#2C3E50] mb-4 border-l-4 border-[#00BFFF] pl-3">
              Professional Summary
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Accomplished legal professional with unique expertise bridging law, engineering, and entrepreneurship. 
              Proven track record in technology law, intellectual property, and legal-tech innovation. Successfully 
              co-founded legal technology startup, managed complex IP portfolios, and advised Fortune 500 companies 
              on regulatory compliance and emerging technology initiatives.
            </p>
          </div>

          {/* Core Competencies */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#2C3E50] mb-4 border-l-4 border-[#00BFFF] pl-3">
              Core Competencies
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-[#2C3E50] mb-2">Legal Expertise</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Intellectual Property Law</li>
                  <li>• Technology Transactions</li>
                  <li>• Regulatory Compliance</li>
                  <li>• Contract Negotiation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#2C3E50] mb-2">Technical Skills</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Software Development</li>
                  <li>• AI/Machine Learning</li>
                  <li>• Cloud Architecture</li>
                  <li>• Data Analysis</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#2C3E50] mb-2">Leadership</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Team Management</li>
                  <li>• Strategic Planning</li>
                  <li>• Business Development</li>
                  <li>• Startup Operations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#2C3E50] mb-4 border-l-4 border-[#00BFFF] pl-3">
              Key Achievements
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-[#00BFFF] mr-2">•</span>
                Co-founded legal technology startup, secured $2.5M seed funding and grew team to 12 engineers
              </li>
              <li className="flex items-start">
                <span className="text-[#00BFFF] mr-2">•</span>
                Obtained 3 patents in AI-powered legal automation and blockchain verification systems
              </li>
              <li className="flex items-start">
                <span className="text-[#00BFFF] mr-2">•</span>
                Led IP strategy resulting in 75% reduction in contract review time for 200+ enterprise clients
              </li>
              <li className="flex items-start">
                <span className="text-[#00BFFF] mr-2">•</span>
                Recognized as "Rising Star in Legal Tech" by Legal Tech Magazine (2022)
              </li>
              <li className="flex items-start">
                <span className="text-[#00BFFF] mr-2">•</span>
                Published in Harvard Law Review on AI ethics in legal practice
              </li>
            </ul>
          </div>

          {/* Recent Experience Preview */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#2C3E50] mb-4 border-l-4 border-[#00BFFF] pl-3">
              Recent Experience
            </h3>
            <div className="space-y-4">
              <div className="border-l-2 border-gray-200 pl-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h4 className="font-semibold text-[#2C3E50]">Senior Legal Counsel & Technology Advisor</h4>
                  <span className="text-sm text-gray-600">2022 - Present</span>
                </div>
                <p className="text-[#00BFFF] mb-2">Innovation Tech Corp, San Francisco, CA</p>
                <p className="text-sm text-gray-700">
                  Lead legal strategy for emerging technology initiatives and IP portfolio management. 
                  Advise engineering teams on regulatory compliance for AI and data privacy.
                </p>
              </div>
              
              <div className="border-l-2 border-gray-200 pl-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h4 className="font-semibold text-[#2C3E50]">Co-Founder & Chief Technology Officer</h4>
                  <span className="text-sm text-gray-600">2020 - 2022</span>
                </div>
                <p className="text-[#00BFFF] mb-2">LegalTech Innovations, Austin, TX</p>
                <p className="text-sm text-gray-700">
                  Co-founded legal technology startup focused on contract automation. 
                  Led technical architecture and secured $2.5M in seed funding.
                </p>
              </div>
            </div>
          </div>

          {/* Education Preview */}
          <div>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-4 border-l-4 border-[#00BFFF] pl-3">
              Education
            </h3>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="font-semibold text-[#2C3E50]">Juris Doctor (J.D.) - Magna Cum Laude</h4>
                  <p className="text-[#00BFFF]">Harvard Law School</p>
                </div>
                <span className="text-sm text-gray-600">2015 - 2018</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="font-semibold text-[#2C3E50]">M.S. Computer Science - GPA: 3.9/4.0</h4>
                  <p className="text-[#00BFFF]">Stanford University</p>
                </div>
                <span className="text-sm text-gray-600">2013 - 2015</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="font-semibold text-[#2C3E50]">B.S. Electrical Engineering - Summa Cum Laude</h4>
                  <p className="text-[#00BFFF]">MIT</p>
                </div>
                <span className="text-sm text-gray-600">2009 - 2013</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 animate-fade-in">
          <p className="text-gray-600">
            <FileText className="inline mr-2" size={16} />
            Complete work history, projects, and references available in full PDF resume
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
