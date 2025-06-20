
import { ArrowRight, Download, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2C3E50] to-[#34495e] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Hello, I'm{" "}
                <span className="text-[#00BFFF]">Your Name</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Legal Professional • Engineer • Entrepreneur
              </p>
              <p className="text-lg mb-8 text-gray-400 leading-relaxed">
                Bridging the gap between law, technology, and innovation. 
                Passionate about creating solutions at the intersection of legal expertise and engineering excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about">
                  <Button className="bg-[#00BFFF] hover:bg-[#0099CC] text-white px-6 py-3 rounded-lg transition-all hover:scale-105">
                    Learn More About Me
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#2C3E50] px-6 py-3 rounded-lg transition-all">
                    <Mail className="mr-2" size={20} />
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Professional headshot"
                  className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#2C3E50]">
            Explore My Background
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/experience" className="group">
              <div className="bg-[#FAFAFA] p-8 rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105 border-l-4 border-[#00BFFF]">
                <h3 className="text-xl font-semibold mb-4 text-[#2C3E50] group-hover:text-[#00BFFF] transition-colors">
                  Professional Experience
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover my journey through law, engineering, and entrepreneurship with detailed work history and educational background.
                </p>
                <span className="text-[#00BFFF] font-medium group-hover:underline">
                  View Experience →
                </span>
              </div>
            </Link>

            <Link to="/achievements" className="group">
              <div className="bg-[#FAFAFA] p-8 rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105 border-l-4 border-[#1ABC9C]">
                <h3 className="text-xl font-semibold mb-4 text-[#2C3E50] group-hover:text-[#1ABC9C] transition-colors">
                  Achievements & Awards
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore my professional recognitions, patents, and notable projects that showcase my expertise and impact.
                </p>
                <span className="text-[#1ABC9C] font-medium group-hover:underline">
                  View Achievements →
                </span>
              </div>
            </Link>

            <Link to="/resume" className="group">
              <div className="bg-[#FAFAFA] p-8 rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105 border-l-4 border-[#E74C3C]">
                <h3 className="text-xl font-semibold mb-4 text-[#2C3E50] group-hover:text-[#E74C3C] transition-colors">
                  Resume & CV
                </h3>
                <p className="text-gray-600 mb-4">
                  Download my complete resume or view my comprehensive CV with detailed information about my background.
                </p>
                <span className="text-[#E74C3C] font-medium group-hover:underline">
                  <Download className="inline mr-1" size={16} />
                  Download Resume →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
