
import { GraduationCap, Briefcase, Target, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="text-primary" size={32} />,
      title: "Education",
      description: "Electronics & Communication Engineering at Rathinam Technical Campus (Anna University) - CGPA: 7.9"
    },
    {
      icon: <Briefcase className="text-green-500" size={32} />,
      title: "Experience",
      description: "Signal & Telecommunication Intern at Southern Railways with hands-on railway automation experience"
    },
    {
      icon: <Target className="text-blue-500" size={32} />,
      title: "Leadership",
      description: "Led 5+ hackathon teams delivering scalable, user-centric apps with measurable impact"
    },
    {
      icon: <Zap className="text-yellow-500" size={32} />,
      title: "Innovation",
      description: "Full-stack development, IoT systems, and cloud computing with focus on sustainability"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background/95 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins mb-4 text-foreground">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ambitious and results-driven IT enthusiast with hands-on experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6 font-poppins text-foreground">
              Electronics & Communication Engineer with Full-Stack Expertise
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Ambitious and results-driven IT enthusiast with hands-on experience in full-stack web development, 
                cloud computing, and IoT systems. Proficient in Java, React, Node.js, PostgreSQL, AWS, and Firebase.
              </p>
              <p>
                Led 5+ hackathon teams delivering scalable, user-centric apps that reduced water usage by 15% 
                and boosted sustainability awareness by 25%. Strong collaborator in agile teams with a passion 
                for continuous learning.
              </p>
              <p>
                Currently completing my final year in Electronics & Communication Engineering at Rathinam Technical Campus 
                (Anna University) with a CGPA of 7.9, combining theoretical knowledge with practical implementation.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Core Strengths:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Full-stack web development with modern frameworks
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  IoT systems and sustainable technology solutions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Team leadership and hackathon excellence
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Cloud computing and database management
                </li>
              </ul>
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="card-hover glass-effect shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold mb-2 font-poppins text-card-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
