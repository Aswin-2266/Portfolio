
import { GraduationCap, Briefcase, Target, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { portfolioData } from '@/data/portfolio';

const About = () => {

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
              {portfolioData.about.title}
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {portfolioData.about.paragraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Core Strengths:</h4>
              <ul className="space-y-2 text-muted-foreground">
                {portfolioData.about.coreStrengths.map((strength, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {portfolioData.about.highlights.map((item, index) => (
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
