import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <p className="text-primary font-medium mb-4 text-lg">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
              <span className="text-gradient">Aswin S</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
              Electronics & Communication Engineer
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Final-year ECE student passionate about IoT, web development, and
              sustainable technology. Building innovative solutions that bridge
              hardware and software for a better tomorrow.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                onClick={scrollToProjects}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg group"
              >
                View Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a
                href="https://drive.google.com/drive/folders/1DQFLudEdHGhN86xVA2fbUdWDTR872zNr?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg"
                >
                  <Download className="mr-2" />
                  Download Resume
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
                asChild
              >
                <a
                  href="https://github.com/Aswin-2266"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={24} />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
                asChild
              >
                <a
                  href="https://linkedin.com/in/aswin41"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={24} />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
                onClick={scrollToContact}
              >
                <Mail size={24} />
              </Button>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="flex justify-center lg:justify-end animate-float">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-primary/20 to-green-400/20 rounded-full blur-3xl absolute -top-10 -left-10"></div>

              <div className="w-72 h-72 md:w-80 md:h-80 bg-gradient-to-br from-blue-400 to-green-400 rounded-full flex items-center justify-center text-white text-6xl font-bold relative z-10 glass-effect">
                <img
                  src="Passport Size DP (3).jpg"
                  alt="Aswin's Profile Picture"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* <div className="text-center">
                  <div className="text-2xl mb-2">👨‍💻</div>
                  <div className="text-lg font-poppins">ECE</div>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
