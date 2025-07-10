import React, { useState } from 'react';
import { ExternalLink, Github, Zap, Smartphone, Globe, Cpu } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "Personal Sustainability Tracker",
      description: "Full-stack web app with user authentication, sustainability data logging, leaderboard, and visualization. Increased eco-friendly actions by 25%.",
      tech: ["React", "Express.js", "Node.js", "PostgreSQL", "JWT", "bcrypt"],
      icon: <Globe className="text-green-500" size={32} />,
      github: "https://github.com/Aswin-2266/personal-sustainability-tracker", 
      demo: "https://www.linkedin.com/posts/aswin41_hackathonexperience-webdevelopment-sustainabilitytech-activity-7347440404008419328-Jcv2?utm_source=share&utm_medium=member_desktop&rcm=ACoAADzKcWABoSgh2LiGnZ-erxPJYxFmBV2mXdU", 
      category: "Full-Stack"
    },
    {
      title: "Java + Spring Boot AWS File Manager",
      description: "File management system with upload/download via AWS S3 and email notifications. Boosted file access and satisfaction by 30%.",
      tech: ["HTML/CSS", "JavaScript", "Java", "Spring Boot", "AWS S3", "JavaMailSender"],
      icon: <Cpu className="text-orange-500" size={32} />,
      github: "https://github.com/Aswin-2266/S3FileManager", 
      demo: null, 
      category: "Full-Stack"
    },
    {
      title: "Smart Forests – IoT Precision Farming",
      description: "IoT-based precision farming system with real-time farming data and auto irrigation. Reduced water use by 15% and improved yield.",
      tech: ["HTML/CSS", "ESP32", "Firebase", "Weather API", "Soil Sensors"],
      icon: <Zap className="text-blue-500" size={32} />,
      github: null, 
      demo: "https://drive.google.com/drive/u/0/folders/1zRN8hcxwmR72j5tUu1LuPoXAhQ8HUfQM", 
      category: "IoT"
    },
    {
      title: "Snowfall Detection System",
      description: "IoT monitoring system with real-time alerts, dashboard, and SMS/email notifications. Improved snow-clearing efficiency by 20%.",
      tech: ["HTML/CSS", "Firebase", "DHT22", "Piezo", "TDS Sensors"],
      icon: <Smartphone className="text-purple-500" size={32} />,
      github: null, 
      demo: "https://drive.google.com/drive/u/0/folders/1n_hbfHQY-mEPegKZkOiMFk1eukXvDdlH", 
      category: "IoT"
    }    
  ];

  const categories = ["All", "Full-Stack", "IoT"];

  const filteredProjects = projects.filter(project => {
    if (activeCategory === "All") {
      return true;
    }
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="py-20 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins mb-4 text-foreground">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions in IoT, full-stack development, and cloud computing with measurable impact
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className="rounded-full px-6"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Map over filteredProjects instead of raw projects */}
          {filteredProjects.map((project, index) => (
            <Card key={index} className="card-hover glass-effect shadow-lg overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  {project.icon}
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-poppins text-card-foreground">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs border-border/50">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {/* GitHub Link */}
                  {project.github && ( 
                    <Button 
                      size="sm" 
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                      asChild 
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  
                  {/* Demo Link */}
                  {project.demo && ( 
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 border-border hover:bg-accent"
                      asChild 
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
