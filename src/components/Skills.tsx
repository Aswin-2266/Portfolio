
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "C", "JavaScript", "Python"]
    },
    {
      title: "Web & Cloud Technologies",
      skills: ["HTML, CSS", "Node.js", "Express", "REST APIs", "Spring Boot", "Firebase", "AWS", "PostgreSQL"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git/GitHub", "Linux"]
    },
    {
      title: "IoT & Embedded",
      skills: ["Raspberry Pi", "ESP32", "Arduino"]
    }
  ];

  const certifications = [
    "IBM Full Stack Software Developer (Coursera)",
    "DBMS Expert (Coursera)"
  ];

  const hackathons = [
    "Smart India Hackathon 2024 – Team Lead",
    "L&T Techgium 8th Edition – Team Lead", 
    "L&T Edutech World Water Day 2025 – Team Lead",
    "WEN IGNITE Bootcamp 3.0 by Wadhwani Foundation – Team Lead",
    "UYIR Road Safety Hackathon 2025"
  ];

  const softSkills = [
    "Strong Communication & Leadership",
    "Problem-solving & Team Collaboration", 
    "Self-motivated, Fast Learner"
  ];

  return (
    <section id="skills" className="py-20 bg-background/95 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins mb-4 text-foreground">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical skills, certifications, and leadership experience
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-effect shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-poppins text-center text-card-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className="px-4 py-2 text-sm glass-effect border-primary/20 hover:bg-primary/10 transition-colors text-card-foreground font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-semibold mb-8 font-poppins text-foreground">
            Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 text-sm glass-effect border-primary/20 hover:bg-primary/10 transition-colors text-card-foreground font-medium"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div>

        {/* Hackathons */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-semibold mb-8 font-poppins text-foreground">
            Hackathons & Leadership
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {hackathons.map((hackathon, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 text-sm glass-effect border-green-500/20 hover:bg-green-500/10 transition-colors text-card-foreground font-medium"
              >
                {hackathon}
              </Badge>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 font-poppins text-foreground">
            Soft Skills & Languages
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-6">
            {softSkills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 text-sm glass-effect border-blue-500/20 hover:bg-blue-500/10 transition-colors text-card-foreground font-medium"
              >
                {skill}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {["English", "Tamil", "Malayalam"].map((language, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 text-sm glass-effect border-purple-500/20 hover:bg-purple-500/10 transition-colors text-card-foreground font-medium"
              >
                {language}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
