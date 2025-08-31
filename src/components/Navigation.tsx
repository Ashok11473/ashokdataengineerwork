import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, Download, Mail, Linkedin, Github } from "lucide-react";
import { useTheme } from "next-themes";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Testimonials", href: "#testimonials", id: "testimonials" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const socialLinks = [
    { 
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/ashok-srinivas-1877bb20b", 
      icon: <Linkedin className="h-4 w-4" />,
      color: "hover:text-blue-500"
    },
    { 
      name: "GitHub", 
      href: "#", 
      icon: <Github className="h-4 w-4" />,
      color: "hover:text-gray-700 dark:hover:text-gray-300"
    },
    { 
      name: "Email", 
      href: "mailto:contact@example.com", 
      icon: <Mail className="h-4 w-4" />,
      color: "hover:text-red-500"
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const downloadResume = () => {
    window.open("https://drive.google.com/file/d/1e0qVevl4TQYqzaZ4wgqyKZ19AOWQsEzr/view?usp=sharing", "_blank");
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-lg" 
        : "bg-background/80 backdrop-blur-md border-b border-border/50"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 group cursor-pointer" onClick={() => scrollToSection("#home")}>
            <span className="text-xl font-display font-bold text-gradient group-hover:scale-105 transition-transform duration-200">
              Ashok Srinivas
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                    activeSection === item.id
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-secondary/50"
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                  )}
                  <div className="absolute inset-0 rounded-lg bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Social Icons */}
            <div className="flex items-center space-x-1 mr-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  className={`h-8 w-8 hover:scale-110 transition-all duration-300 ${social.color}`}
                  onClick={() => window.open(social.href, "_blank")}
                >
                  {social.icon}
                </Button>
              ))}
            </div>
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="hover:scale-110 transition-transform duration-300"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            {/* Resume Download */}
            <Button
              variant="outline"
              size="sm"
              onClick={downloadResume}
              className="hover:bg-accent/10 hover:text-accent border-accent/20 hover:border-accent transition-all duration-300 group"
            >
              <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
              Resume
            </Button>
            
            {/* Contact CTA */}
            <Button 
              onClick={() => scrollToSection("#contact")}
              className="hero-gradient text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:scale-110 transition-transform duration-300"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden animate-slide-in-right">
          <div className="px-4 pt-2 pb-4 space-y-2 bg-background/95 backdrop-blur-lg border-b border-border shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-secondary/50"
                }`}
              >
                {item.name}
              </button>
            ))}
            
            {/* Mobile Social Links */}
            <div className="flex justify-center space-x-4 py-3 border-t border-border/20">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  className={`hover:scale-110 transition-all duration-300 ${social.color}`}
                  onClick={() => window.open(social.href, "_blank")}
                >
                  {social.icon}
                </Button>
              ))}
            </div>
            
            {/* Mobile Actions */}
            <div className="space-y-2 pt-2">
              <Button
                variant="outline"
                onClick={downloadResume}
                className="w-full hover:bg-accent/10 hover:text-accent border-accent/20 hover:border-accent transition-all duration-300"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </Button>
              <Button 
                onClick={() => scrollToSection("#contact")}
                className="hero-gradient text-white font-medium w-full hover:shadow-lg transition-all duration-300"
              >
                Let's Talk
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;