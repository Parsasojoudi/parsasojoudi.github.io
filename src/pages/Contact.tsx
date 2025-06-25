
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'd love to hear from you. Whether you have a question, opportunity, or just want to connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <div className="bg-gradient-to-r from-[#2C3E50] to-[#34495e] rounded-lg p-8 text-white">
              <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Mail className="text-[#00BFFF] mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-300">sojoudiparsa@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-[#00BFFF] mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-300">+1 (672) 514-4006</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-[#00BFFF] mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-gray-300">Greater Victoria, BC, Canada</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <h3 className="font-semibold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/parsa-sojoudi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0077B5] p-3 rounded-full text-white hover:bg-[#005885] transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://x.com/Parsasojoudi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1DA1F2] p-3 rounded-full text-white hover:bg-[#1a91da] transition-colors"
                  >
                    <X size={20} />
                  </a>
                </div>
              </div>

              {/* Professional Note */}
              <div className="p-6 bg-black/20 rounded-lg">
                <h3 className="font-semibold mb-2">Professional Inquiries Welcome</h3>
                <p className="text-gray-300">
                  Transitioning from research and development to law school, I'm interested in 
                  discussing legal opportunities, my work experience, and current interests in 
                  intellectual property and patent law.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#2C3E50] mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-gray-300 focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#2C3E50] mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-gray-300 focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#2C3E50] mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#2C3E50] mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border-gray-300 focus:border-[#00BFFF] focus:ring-[#00BFFF] resize-none"
                    placeholder="Tell me more about your inquiry..."
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-[#00BFFF] hover:bg-[#0099CC] text-white py-3 px-6 rounded-lg transition-all hover:scale-105"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
