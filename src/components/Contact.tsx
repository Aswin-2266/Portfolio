import { useState } from 'react';
import axios from 'axios';
import { Mail, Github, Linkedin, MapPin, Phone, Send, GraduationCap, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const FORMSPREE_FORM_ID = "https://formspree.io/f/mkgbdoon";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(FORMSPREE_FORM_ID, formData, {
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.status === 200) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon!",
          variant: "default",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Handle Formspree specific errors if needed, though toast handles general ones
        toast({
          title: "Submission Failed",
          description: "Oops! There was an issue sending your message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "A network error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={24} />,
      title: "Email",
      value: "aswinmsc123@gmail.com",
      link: "mailto:aswinmsc123@gmail.com"
    },
    {
      icon: <Phone className="text-green-500" size={24} />,
      title: "Phone",
      value: "8428226636",
      link: "tel:8428226636"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: "GitHub",
      url: "https://github.com/Aswin-2266",
      color: "hover:text-foreground"
    },
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/aswin41",
      color: "hover:text-blue-500"
    },
    {
      icon: <Mail size={24} />,
      name: "Email",
      url: "mailto:aswinmsc123@gmail.com",
      color: "hover:text-primary"
    }
  ];

  const education = [
    {
      icon: <GraduationCap className="text-primary" size={20} />,
      degree: "Electronics and Communication Engineering",
      institution: "Rathinam Technical Campus (Anna University)",
      grade: "CGPA: 7.9"
    },
    {
      icon: <GraduationCap className="text-blue-500" size={20} />,
      degree: "HSC",
      institution: "Govt. Higher Secondary School, Coimbatore",
      grade: "79.5%"
    },
    {
      icon: <GraduationCap className="text-green-500" size={20} />,
      degree: "SSLC",
      institution: "Sree Narayana Mission HSS, Coimbatore", 
      grade: "85.4%"
    }
  ];

  return (
    <section id="contact" className="py-20 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins mb-4 text-foreground">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss your next project or internship opportunity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 font-poppins text-foreground">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Electronics & Communication Engineering student with expertise in full-stack development, 
                IoT systems, and cloud computing. Open to internships, projects, and collaboration opportunities.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg glass-effect">
                  {info.icon}
                  <div>
                    <p className="font-medium text-card-foreground">{info.title}</p>
                    <a 
                      href={info.link} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                <GraduationCap className="text-primary" size={20} />
                Education
              </h4>
              <div className="space-y-3">
                {education.map((edu, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg glass-effect/50">
                    {edu.icon}
                    <div>
                      <p className="font-medium text-card-foreground text-sm">{edu.degree}</p>
                      <p className="text-muted-foreground text-xs">{edu.institution}</p>
                      <p className="text-primary text-xs font-medium">{edu.grade}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Internship */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                <Briefcase className="text-green-500" size={20} />
                Internship Experience
              </h4>
              <div className="p-4 rounded-lg glass-effect">
                <p className="font-medium text-card-foreground">Signal & Telecommunication Intern</p>
                <p className="text-muted-foreground text-sm">Southern Railways – Podanur, Coimbatore</p>
                <p className="text-primary text-sm font-medium">Sept–Oct 2023</p>
                <p className="text-muted-foreground text-xs mt-2">
                  Railway automation, relay interlocking, and safety systems
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full glass-effect hover:bg-accent transition-all duration-200 ${social.color} text-muted-foreground`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="glass-effect shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins text-card-foreground">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="glass-effect border-border"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="glass-effect border-border"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="glass-effect border-border"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="glass-effect border-border"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <Send className="mr-2" size={20} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
