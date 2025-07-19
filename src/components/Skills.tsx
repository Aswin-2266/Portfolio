import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
     {
    title: "Programming Languages",
    skills: ["Java", "C", "JavaScript", "Python", "TypeScript"]
  },
  {
    title: "Web & Backend Technologies",
    skills: ["React.js", "HTML & CSS", "Node.js", "Express.js", "REST APIs", "Spring Boot"]
  },
  {
    title: "Cloud, Deployment & Databases",
    skills: [
      "AWS (S3, IAM)", "Firebase (Authentication, Realtime DB)", "Vercel", "Render", "PostgreSQL", "MongoDB"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git & GitHub", "Linux", "Postman", "VS Code", "Canva",]
  },
  {
    title: "Core CS Concepts",
    skills: ["Data Structures and Algorithms", "Object-Oriented Programming", "API Design", "MVC Architecture"]
  },
  {
    title: "IoT & Embedded Systems",
    skills: ["Raspberry Pi", "ESP32", "Arduino", "LoRa", "Proteus", "Arduino IDE", "MultiSim", "TinkerCad"]
  }
  ];

  const certifications = [
    {
      name: "IBM Full Stack Software Developer Specialization (Coursera)",
      url: "https://www.coursera.org/account/accomplishments/specialization/MJHQPK3D9S1N"
    },
    {
      name: "Meta React Native Specialization (Coursera)",
      url: "https://www.coursera.org/account/accomplishments/specialization/HEFS6GS7LENU"
    },
    {
      name: "Prototypes in Figma: Creating an Initial Low Fidelity Design (Coursera)",
      url: "https://www.coursera.org/account/accomplishments/records/7TTYSRWCGG5U"
    },
    {
      name: "UX Design Fundamentals (Coursera)",
      url: "https://www.coursera.org/account/accomplishments/records/K8LLJKXKAA4H"
    },
    {
      name: "Microsoft Azure Cloud Services (Coursera)",
      url: "https://www.coursera.org/account/accomplishments/records/TKL3AWTGQ44W"
    },
    {
      name: "UiPath Automation Developer Associate (UiPath)",
      url: "https://credentials.uipath.com/a7e419c7-85cc-4fd3-b837-dd7775bf269a"
    }
  ];

  const hackathons = [
    "Smart India Hackathon 2024 – Team Lead",
    "L&T Techgium 8th Edition – Team Lead",
    "L&T Edutech World Water Day 2025 – Team Lead",
    "WEN IGNITE Bootcamp 3.0 by Wadhwani Foundation – Team Lead",
    "UYIR Road Safety Hackathon 2025 – Team Lead"
  ];

  const internshipExperience = [
    {
      title: "Signal & Telecommunication Intern",
      company: "Southern Railways – Podanur, Coimbatore",
      duration: "Sept–Oct 2023",
      description: "Railway automation, relay interlocking, and safety systems.",
      link: "https://drive.google.com/drive/folders/1vgEZu6M9tLKYWyyTMlOauRwjFVbrkwmx?usp=sharing"
    },
    // Add another internship here to see the grid layout in action:
    // {
    //   title: "Software Development Intern",
    //   company: "Another Tech Company",
    //   duration: "Jan 2024 – Apr 2024",
    //   description: "Developed and maintained web applications.",
    //   link: "https://www.example.com"
    // },
  ];

  const softSkills = [
    "Strong Communication & Leadership",
    "Problem-solving & Team Collaboration",
    "Self-motivated, Fast Learner"
  ];

  const certBadgeClass = "border-accent/70 text-accent-foreground hover:bg-accent/20 hover:shadow-lg hover:scale-105 transition-all duration-500 ease-in-out";

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
          <h3 className="text-2xl font-bold font-poppins text-gradient inline-block pb-2 border-b-2 border-accent/50 mb-8">
            Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Badge
                  variant="outline"
                  className={`px-4 py-2 text-sm glass-effect font-medium cursor-pointer flex items-center justify-center gap-2 ${certBadgeClass}`}
                >
                  {cert.name}
                  <ExternalLink className="h-4 w-4 shrink-0" />
                </Badge>
              </a>
            ))}
          </div>
        </div>

        {/* Hackathons */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold font-poppins text-gradient inline-block pb-2 border-b-2 border-accent/50 mb-8">
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

        {/* Internship Experience - Conditional Rendering for centering */}
<div className="text-center mb-16">
  <h3 className="text-2xl font-bold font-poppins text-gradient inline-block pb-2 border-b-2 border-accent/50 mb-8">
    Internship Experience
  </h3>
  {internshipExperience.length === 1 ? (
    // If only one internship, center it using flexbox
    <div className="flex justify-center items-center max-w-4xl mx-auto">
      {internshipExperience.map((internship, index) => (
        <a
          key={index}
          href={internship.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full sm:w-3/4 md:w-2/3 lg:w-1/2"
        >
          <Card
            className="glass-effect shadow-lg text-left hover:shadow-xl hover:scale-[1.02] transition-all duration-500 ease-in-out"
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-poppins text-card-foreground flex items-center gap-2">
                {internship.title}
                {/* Apply hover effect to ExternalLink directly */}
                <ExternalLink
                  size={18}
                  className="shrink-0 text-muted-foreground hover:text-blue-500 transition-colors"
                />
              </CardTitle>
              <p className="text-base text-muted-foreground">{internship.company}</p>
              <p className="text-sm text-muted-foreground">{internship.duration}</p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {internship.description}
              </p>
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  ) : (
    // If more than one internship, use the grid layout
    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {internshipExperience.map((internship, index) => (
        <a
          key={index}
          href={internship.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block" // Ensure the link takes full width of the grid item
        >
          <Card
            className="glass-effect shadow-lg text-left hover:shadow-xl hover:scale-[1.02] transition-all duration-500 ease-in-out"
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-poppins text-card-foreground flex items-center gap-2">
                {internship.title}
                {/* Apply hover effect to ExternalLink directly */}
                <ExternalLink
                  size={18}
                  className="shrink-0 text-muted-foreground hover:text-blue-500 transition-colors"
                />
              </CardTitle>
              <p className="text-base text-muted-foreground">{internship.company}</p>
              <p className="text-sm text-muted-foreground">{internship.duration}</p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {internship.description}
              </p>
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  )}
</div>

        {/* Soft Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-bold font-poppins text-gradient inline-block pb-2 border-b-2 border-accent/50 mb-8">
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