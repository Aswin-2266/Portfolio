import React, { useState, useCallback, useEffect } from 'react';
import { ExternalLink, Github, Zap, Smartphone, Globe, Cpu, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import useEmblaCarousel from 'embla-carousel-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  icon: JSX.Element;
  github: string | null;
  demo: string | null;
  category: string;
  images?: string[];
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      title: "Personal Sustainability Tracker",
      description: "Full-stack web app with user authentication, sustainability data logging, leaderboard, and visualization. Increased eco-friendly actions by 25%.",
      tech: ["React", "Express.js", "Node.js", "PostgreSQL", "JWT", "bcrypt"],
      icon: <Globe className="text-green-500" size={32} />,
      github: "https://github.com/Aswin-2266/personal-sustainability-tracker",
      demo: "https://personal-sustainability-tracker.vercel.app/login",
      category: "Full-Stack",
      images: [
        "/project-images/sustainability-tracker-1.png",
        "/project-images/sustainability-tracker-2.png",
        "/project-images/sustainability-tracker-3.png",
        "/project-images/sustainability-tracker-4.png",
        "/project-images/sustainability-tracker-5.png",
      ]
    },
    {
      title: "AWS S3 File Manager",
      description: "File management system with upload/download via AWS S3 and email notifications. Boosted file access and satisfaction by 30%.",
      tech: ["HTML/CSS", "JavaScript", "Java", "Spring Boot", "AWS S3", "JavaMailSender"],
      icon: <Cpu className="text-orange-500" size={32} />,
      github: "https://github.com/Aswin-2266/S3FileManager",
      demo: null,
      category: "Full-Stack",
      images: [
        "/project-images/s3-file-manager-1.png",
        "/project-images/s3-file-manager-2.png",
        "/project-images/s3-file-manager-3.png",
        "/project-images/s3-file-manager-4.png",
      ]
    },
    {
      title: "Smart Forests – IoT Precision Farming",
      description: "IoT-based precision farming system with real-time farming data and auto irrigation. Reduced water use by 15% and improved yield.",
      tech: ["HTML/CSS", "ESP32", "Firebase", "Weather API", "Soil Sensors"],
      icon: <Zap className="text-blue-500" size={32} />,
      github: null,
      demo: "https://drive.google.com/drive/u/0/folders/1zRN8hcxwmR72j5tUu1LuPoXAhQ8HUfQM",
      category: "IoT",
      images: [
        "/project-images/smart-forests-1.jpg",
      ]
    },
    {
      title: "Snowfall Detection System",
      description: "IoT monitoring system with real-time alerts, dashboard, and SMS/email notifications. Improved snow-clearing efficiency by 20%.",
      tech: ["HTML/CSS", "Firebase", "DHT22", "Piezo", "TDS Sensors"],
      icon: <Smartphone className="text-purple-500" size={32} />,
      github: null,
      demo: "https://drive.google.com/drive/u/0/folders/1n_hbfHQY-mEPegKZkOiMFk1eukXvDdlH",
      category: "IoT",
      images: [
        "/project-images/snowfall-detection-1.jpg",
        "/project-images/snowfall-detection-2.png",
        "/project-images/snowfall-detection-3.png",
        "/project-images/snowfall-detection-4.jpeg",
      ]
    }
  ];

  const categories = ["All", "Full-Stack", "IoT"];

  const filteredProjects = projects.filter(project => {
    if (activeCategory === "All") {
      return true;
    }
    return project.category === activeCategory;
  });

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="relative group card-hover glass-effect shadow-lg overflow-hidden cursor-pointer
                transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              onClick={() => openProjectModal(project)}
            >
              {/* Persistent Eye Icon at Top-Right */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-3 right-3 z-10 bg-background/70 hover:bg-accent p-2 shadow-lg rounded-full"
                onClick={e => {
                  e.stopPropagation();
                  openProjectModal(project);
                }}
              >
                <Eye size={22} className="text-foreground" />
                <span className="sr-only">View Details</span>
              </Button>
              
              <CardHeader className="pb-4 pt-6">
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
                  {project.github && (
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                      asChild
                      onClick={e => e.stopPropagation()}
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                  )}

                  {project.demo && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-border hover:bg-accent"
                      asChild
                      onClick={e => e.stopPropagation()}
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

      {/* Project Detail Modal */}
      {selectedProject && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-[800px] w-full max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-3xl font-poppins text-foreground">{selectedProject.title}</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {selectedProject.category} Project
              </DialogDescription>
            </DialogHeader>
            
            {/* Carousel of Images */}
            {selectedProject.images && selectedProject.images.length > 0 && (
              <ProjectImageCarousel images={selectedProject.images} title={selectedProject.title} />
            )}

            <div className="py-4">
              <p className="text-lg text-foreground mb-4 leading-relaxed">
                {selectedProject.description}
              </p>

              <h4 className="text-xl font-semibold mb-2 text-foreground">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="text-sm bg-secondary text-secondary-foreground">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4 mt-6">
                {selectedProject.github && (
                  <Button asChild className="flex-1">
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      View Code
                    </a>
                  </Button>
                )}
                {selectedProject.demo && (
                  <Button asChild variant="outline" className="flex-1">
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default Projects;

interface ProjectImageCarouselProps {
  images: string[];
  title: string; // For alt text
}

const ProjectImageCarousel: React.FC<ProjectImageCarouselProps> = ({ images, title }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [isPlaying, setIsPlaying] = useState(true); // State to manage auto-play

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || !isPlaying) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 1800);

    return () => clearInterval(autoplay);
  }, [emblaApi, isPlaying]);

  const handleMouseEnter = () => setIsPlaying(false);
  const handleMouseLeave = () => setIsPlaying(true);

  return (
    <div
      className="embla relative mt-4 mb-6 rounded-lg overflow-hidden shadow-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {images.map((image, index) => (
            <div className="embla__slide flex-shrink-0 flex-grow-0 basis-full" key={index}>
              <img
                src={image}
                alt={`${title} Screenshot ${index + 1}`}
                className="w-full h-64 md:h-80 lg:h-96 object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <Button
            className="embla__prev absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-background/50 hover:bg-background/70 text-foreground rounded-full p-2"
            onClick={scrollPrev}
            size="icon"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            className="embla__next absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-background/50 hover:bg-background/70 text-foreground rounded-full p-2"
            onClick={scrollNext}
            size="icon"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}
    </div>
  );
};