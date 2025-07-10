
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-poppins mb-3 sm:mb-4 text-gradient">
              Aswin S
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Electronics & Communication Engineering student passionate about 
              IoT, web development, and sustainable technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground text-sm sm:text-base">
              <p>aswinmsc123@gmail.com</p>
              <p>8428226636</p>
              <p>Coimbatore, Tamil Nadu</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2 text-sm sm:text-base">
            Made with <Heart className="text-red-500" size={16} /> by Aswin S
          </p>
          <p className="text-muted-foreground text-xs sm:text-sm mt-2">
            © 2024 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
