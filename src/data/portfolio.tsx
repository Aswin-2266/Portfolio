import { 
  Globe, Cpu, Zap, Smartphone, GraduationCap, Briefcase, Target, 
  Github, Linkedin, Mail, Phone 
} from 'lucide-react';

export const portfolioData = {
  hero: {
    name: "Aswin S",
    title: "Electronics & Communication Engineer",
    bio: "Final-year ECE student passionate about IoT, web development, and sustainable technology. Building innovative solutions that bridge hardware and software for a better tomorrow.",
    resumeLink: "https://drive.google.com/drive/folders/1DQFLudEdHGhN86xVA2fbUdWDTR872zNr?usp=drive_link",
  },
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/Aswin-2266",
      icon: <Github size={28} />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/aswin41",
      icon: <Linkedin size={28} />,
    },
    {
      name: "Email",
      url: "mailto:aswinmsc123@gmail.com",
      icon: <Mail size={28} />,
    }
  ],
  about: {
    title: "Electronics & Communication Engineer with Full-Stack Expertise",
    paragraphs: [
      "Ambitious and results-driven IT enthusiast with hands-on experience in full-stack web development, cloud computing, and IoT systems. Proficient in Java, React, Node.js, PostgreSQL, AWS, and Firebase.",
      "Led 5+ hackathon teams delivering scalable, user-centric apps that reduced water usage by 15% and boosted sustainability awareness by 25%. Strong collaborator in agile teams with a passion for continuous learning.",
      "Currently completing my final year in Electronics & Communication Engineering at Rathinam Technical Campus (Anna University) with a CGPA of 7.9, combining theoretical knowledge with practical implementation."
    ],
    coreStrengths: [
      "Full-stack web development with modern frameworks",
      "IoT systems and sustainable technology solutions",
      "Team leadership and hackathon excellence",
      "Cloud computing and database management"
    ],
    highlights: [
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
    ]
  },
  projects: [
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
  ],
  skillsData: {
    categories: [
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
        skills: ["AWS (S3, IAM)", "Firebase (Authentication, Realtime DB)", "Vercel", "Render", "PostgreSQL", "MongoDB"]
      },
      {
        title: "Tools & Platforms",
        skills: ["Git & GitHub", "Linux", "Postman", "VS Code", "Canva"]
      },
      {
        title: "Core CS Concepts",
        skills: ["Data Structures and Algorithms", "Object-Oriented Programming", "API Design", "MVC Architecture"]
      },
      {
        title: "IoT & Embedded Systems",
        skills: ["Raspberry Pi", "ESP32", "Arduino", "LoRa", "Proteus", "Arduino IDE", "MultiSim", "TinkerCad"]
      }
    ],
    certifications: [
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
    ],
    hackathons: [
      "Smart India Hackathon 2024 – Team Lead",
      "L&T Techgium 8th Edition – Team Lead",
      "L&T Edutech World Water Day 2025 – Team Lead",
      "WEN IGNITE Bootcamp 3.0 by Wadhwani Foundation – Team Lead",
      "UYIR Road Safety Hackathon 2025 – Team Lead"
    ],
    internshipExperience: [
      {
        title: "Signal & Telecommunication Intern",
        company: "Southern Railways – Podanur, Coimbatore",
        duration: "Sept–Oct 2023",
        description: "Railway automation, relay interlocking, and safety systems.",
        link: "https://drive.google.com/drive/folders/1vgEZu6M9tLKYWyyTMlOauRwjFVbrkwmx?usp=sharing"
      }
    ],
    softSkills: [
      "Strong Communication & Leadership",
      "Problem-solving & Team Collaboration",
      "Self-motivated, Fast Learner"
    ],
    languages: ["English", "Tamil", "Malayalam"]
  },
  contact: {
    contactInfo: [
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
    ],
    education: [
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
    ]
  }
};
