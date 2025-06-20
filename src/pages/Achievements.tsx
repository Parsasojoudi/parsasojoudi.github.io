
import { Award, Trophy, FileText, Star, Lightbulb, Target } from "lucide-react";

const Achievements = () => {
  const awards = [
    {
      title: "Full Graduate Scholarship",
      organization: "Simon Fraser University",
      year: "2021-2023",
      description: "Recipient of a total of CAD 52,000 for an MSc in Chemistry"
    },
    {
      title: "Travel and Research Award",
      organization: "Simon Fraser University",
      year: "2023",
      description: "Received CAD 1,000 twice for conference travel and research activities"
    },
    {
      title: "Special Graduate Entrance Scholarship",
      organization: "Simon Fraser University", 
      year: "2021",
      description: "Recipient of a total of CAD 4000 for academic excellence"
    },
    {
      title: "Youth Chess Champion",
      organization: "District 8, Province of Tehran",
      year: "2007",
      description: "Youth Chess Champion in the District 8, Province of Tehran"
    }
  ];

  const academicRankings = [
    {
      title: "Ranked 5th out of 30 undergraduate students",
      category: "Polymer Engineering",
      institution: "University of Tehran",
      year: "2020",
      description: "Top 17% performance in Polymer Engineering program"
    },
    {
      title: "Top 0.5% Nationwide University Entrance Exam",
      category: "Mathematics",
      institution: "Iran National Exam",
      year: "2016", 
      description: "Ranked in the top 0.5% among approximately 300,000 participants"
    },
    {
      title: "Semifinalist in National Mathematics Olympiad",
      category: "Mathematics Competition",
      institution: "Iran Mathematics Society",
      year: "2013",
      description: "Advanced to semifinal round of prestigious national competition"
    }
  ];

  const publications = [
    {
      title: "Development of a Spot Test (ST) based on the Nucleic Acid Amplification Test (NAAT) for Ginseng Species Authentication",
      authors: "P. Sojoudi, C. Oberc, Al-H. Tiffere, P. Li",
      journal: "Analytical Letters",
      year: "October 2024",
      description: "Published research on novel authentication method for ginseng species"
    },
    {
      title: "Nucleic Acid Amplification Test (NAAT) Conducted in a Microfluidic Chip to Differentiate Between Various Ginseng Types",
      authors: "C. Oberc, P. Sojoudi, P. Li",
      journal: "The Analyst",
      year: "December 2022",
      description: "Co-authored research on microfluidic applications for species differentiation"
    },
    {
      title: "Synthesis of magnetic gold coated poly (ε-caprolactonediol) based polyurethane/poly(N-isopropylacrylamide)-grafted-chitosan core-shell nanofibers for controlled release of paclitaxel and 5-FU",
      authors: "A. Farboudi, A. Nour, S. Shirinzad, P. Sojoudi, S. Davaran, M. Akrami, M. Irani",
      journal: "International Journal of Biological Macromolecules",
      year: "November 2019",
      description: "Research on controlled drug release systems using magnetic nanofibers"
    }
  ];

  const conferences = [
    {
      title: "Development of a Lateral Flow Assay (LFA) for Ginseng Species Differentiation",
      event: "CSC Vancouver 2023",
      location: "Vancouver, BC",
      year: "Jun. 2023",
      type: "Oral Presentation"
    },
    {
      title: "Differentiation of ginseng DNA strands using a Nucleic Acid Lateral Flow Assay (NALFA)",
      event: "CBGRC",
      location: "Montreal, QC", 
      year: "Nov. 2022",
      type: "Poster Presentation"
    }
  ];

  const volunteerActivities = [
    {
      title: "Social Justice Committee",
      organization: "Simon Fraser University",
      dates: "Feb. 2022 - Oct. 2023",
      duties: [
        "Served as an executive member of the Social Justice Committee at SFU",
        "Led and promoted various social justice initiatives, collaborating with activists and community leaders",
        "Organized and facilitated events aimed at raising awareness and advocating for social justice issues",
        "Allocated funds to local charities, with a focus on supporting workers' rights organizations"
      ]
    },
    {
      title: "Membership Committee",
      organization: "Simon Fraser University",
      dates: "Feb. 2022 - Oct. 2023",
      duties: [
        "Served as an executive member of the Membership Committee at SFU",
        "Supported union bargaining and member rights advocacy through strategic outreach and mobilization efforts",
        "Assisted with union drives and campaigns aimed at improving worker conditions and rights",
        "Developed and distributed outreach materials to engage members and increase awareness of union initiatives",
        "Conducted door-to-door outreach to connect with members and build support for union activities"
      ]
    },
    {
      title: "Contract Committee",
      organization: "Simon Fraser University",
      dates: "Feb. 2022 - Oct. 2023",
      duties: [
        "Served as an executive member of the Contract Committee at SFU",
        "Negotiated with SFU administration to establish a new Collective Agreement for Research Assistants (RAs)",
        "Designed and conducted RA membership surveys to gather input and identify key issues for bargaining",
        "Developed proposals for the first-ever RA Collective Agreement, addressing fair wages, benefits, and working conditions"
      ]
    },
    {
      title: "VP Coordination, SFU Iranian Club",
      organization: "Simon Fraser University",
      dates: "Sept. 2021 - Mar. 2022",
      duties: [
        "Led event planning and coordinated club activities to promote Iranian culture and community engagement",
        "Managed communication with members, ensuring effective outreach and involvement in club initiatives",
        "Oversaw the organization and execution of cultural, social, and educational events, fostering a strong sense of community among members"
      ]
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
            Academic awards, research publications, and community contributions that highlight my commitment to excellence
          </p>
        </div>

        {/* Awards Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Trophy className="text-[#FFD700] mr-3" size={32} />
            <h2 className="text-3xl font-bold text-[#2C3E50]">Awards & Scholarships</h2>
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

        {/* Academic Rankings */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Star className="text-[#1ABC9C] mr-3" size={32} />
            <h2 className="text-3xl font-bold text-[#2C3E50]">Academic Excellence</h2>
          </div>
          
          <div className="space-y-6">
            {academicRankings.map((ranking, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 animate-fade-in hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">{ranking.title}</h3>
                    <p className="text-[#1ABC9C] font-medium mb-2">{ranking.institution}</p>
                    <p className="text-gray-700">{ranking.description}</p>
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full mt-2 lg:mt-0">
                    {ranking.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <FileText className="text-[#00BFFF] mr-3" size={32} />
            <h2 className="text-3xl font-bold text-[#2C3E50]">Publications</h2>
          </div>
          
          <div className="space-y-6">
            {publications.map((publication, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 animate-fade-in hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#2C3E50] mb-2">{publication.title}</h3>
                    <p className="text-[#00BFFF] font-medium mb-2">{publication.journal}</p>
                    <p className="text-gray-600 mb-2 text-sm">{publication.authors}</p>
                    <p className="text-gray-700">{publication.description}</p>
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full mt-2 lg:mt-0">
                    {publication.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conferences */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Lightbulb className="text-[#E74C3C] mr-3" size={32} />
            <h2 className="text-3xl font-bold text-[#2C3E50]">Conference Presentations</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {conferences.map((conference, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 animate-fade-in hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs px-3 py-1 rounded-full bg-red-100 text-red-800">
                    {conference.type}
                  </span>
                  <span className="text-sm text-gray-500">{conference.year}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#2C3E50] mb-3">{conference.title}</h3>
                <p className="text-[#E74C3C] font-medium mb-1">{conference.event}</p>
                <p className="text-gray-600">{conference.location}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteer Activities */}
        <div>
          <div className="flex items-center mb-8">
            <Target className="text-[#9B59B6] mr-3" size={32} />
            <h2 className="text-3xl font-bold text-[#2C3E50]">Volunteer Activities</h2>
          </div>
          
          <div className="space-y-8">
            {volunteerActivities.map((activity, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 animate-fade-in hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">{activity.title}</h3>
                    <p className="text-[#9B59B6] font-medium mb-4">{activity.organization}</p>
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {activity.dates}
                  </span>
                </div>
                <ul className="space-y-2">
                  {activity.duties.map((duty, dutyIndex) => (
                    <li key={dutyIndex} className="text-gray-700 flex items-start">
                      <span className="text-[#9B59B6] mr-2 mt-2">•</span>
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

export default Achievements;
