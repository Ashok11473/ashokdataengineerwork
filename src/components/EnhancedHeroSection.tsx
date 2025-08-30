import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Download, 
  Linkedin, 
  Github, 
  Mail, 
  Play,
  Sparkles,
  Award,
  Users,
  TrendingUp,
  Code,
  Database,
  Cloud
} from "lucide-react";
import ashokProfile from "@/assets/ashok-new-profile.jpg";

const EnhancedHeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const achievements = [
    { icon: <Award className="h-4 w-4" />, label: "4+ Years", desc: "Experience" },
    { icon: <Users className="h-4 w-4" />, label: "500+", desc: "Users Served" },
    { icon: <TrendingUp className="h-4 w-4" />, label: "10M+", desc: "Records/Day" },
  ];

  const techStack = [
    { name: "Azure", color: "primary", icon: "☁️" },
    { name: "Power BI", color: "accent-orange", icon: "📊" },
    { name: "Databricks", color: "accent", icon: "🔧" },
    { name: "Python", color: "accent-pink", icon: "🐍" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20">
        {/* Dynamic grid background */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--primary) / 0.3) 0%, transparent 50%)`,
          }}
        />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl floating-element" 
             style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-40 w-24 h-24 bg-gradient-to-r from-accent-orange/30 to-accent-pink/30 rounded-full blur-2xl floating-element" 
             style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-40 w-20 h-20 bg-gradient-to-r from-accent/25 to-accent-purple/25 rounded-full blur-xl floating-element" 
             style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 glass-morphism rounded-full px-4 py-2 animate-bounce-in">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Available for new projects</span>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-accent font-semibold text-lg tracking-wide animate-slide-in-left" 
                   style={{ animationDelay: '0.2s' }}>
                  Hello, I'm Ashok Srinivas 👋
                </p>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                  <span className="block animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
                    Professional
                  </span>
                  <span className="block text-gradient animate-slide-in-left pulse-glow" style={{ animationDelay: '0.6s' }}>
                    Azure & BI
                  </span>
                  <span className="block animate-slide-in-left" style={{ animationDelay: '0.8s' }}>
                    Consultant
                  </span>
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-in-up" 
                 style={{ animationDelay: '1s' }}>
                Transforming businesses through 
                <span className="text-primary font-semibold"> data-driven insights</span> and 
                <span className="text-accent font-semibold"> scalable cloud solutions</span> 
                using cutting-edge Azure, Databricks, and Power BI technologies.
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
                {techStack.map((tech, index) => (
                  <Badge 
                    key={tech.name} 
                    variant="secondary" 
                    className="glass-morphism border-0 text-sm py-2 px-4 hover:scale-105 transition-transform cursor-default"
                     style={{ animationDelay: `${1.4 + index * 0.1}s` }}
                  >
                    <span className="mr-1">{tech.icon}</span>
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up" 
                 style={{ animationDelay: '1.6s' }}>
              <Button
                size="lg"
                onClick={() => scrollToSection("#portfolio")}
                className="hero-gradient text-white font-semibold group relative overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10 flex items-center">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="glass-morphism border-primary/30 hover:border-primary hover:bg-primary/10 font-semibold group hover:scale-105 transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>

              {/* Video Call Button */}
              <Button
                size="lg"
                variant="ghost"
                onClick={() => setIsPlaying(!isPlaying)}
                className="glass-morphism hover:bg-accent/10 font-semibold group"
              >
                <Play className={`mr-2 h-5 w-5 transition-all ${isPlaying ? 'animate-pulse' : 'group-hover:scale-110'}`} />
                {isPlaying ? 'Playing Demo' : 'Watch Demo'}
              </Button>
            </div>

            {/* Social Links & Achievements Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-6 gap-6 animate-fade-in-up"
                 style={{ animationDelay: '1.8s' }}>
              {/* Social Links */}
              <div className="flex space-x-3">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/in/ashok-srinivas-1877bb20b", color: "primary" },
                  { icon: Github, href: "#", color: "foreground" },
                  { icon: Mail, href: "mailto:ashoksrinivas2001@gmail.com", color: "accent" },
                ].map((social, index) => (
                  <Button 
                    key={index}
                    variant="ghost" 
                    size="icon" 
                    className="glass-morphism hover:scale-110 hover:rotate-6 transition-all duration-300 hover:shadow-lg"
                    onClick={() => window.open(social.href, "_blank")}
                  >
                    <social.icon className="h-5 w-5" />
                  </Button>
                ))}
              </div>

              {/* Quick Achievements */}
              <div className="flex space-x-6">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className="text-center group cursor-default animate-scale-in"
                    style={{ animationDelay: `${2 + index * 0.2}s` }}
                  >
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <div className="text-primary group-hover:animate-bounce">
                        {achievement.icon}
                      </div>
                      <span className="text-lg font-bold text-foreground">{achievement.label}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{achievement.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Profile Section */}
          <div className="relative animate-slide-in-right">
            <div className="relative mx-auto lg:mx-0 max-w-lg">
              {/* Animated Background Elements */}
              <div className="absolute -inset-8">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-2xl floating-element" 
                     style={{ animationDelay: '0s' }} />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent-orange/40 to-transparent rounded-full blur-xl floating-element" 
                     style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-conic from-primary/10 via-accent/10 to-accent-pink/10 rounded-full blur-3xl floating-element" 
                     style={{ animationDelay: '2s' }} />
              </div>
              
              {/* Main Profile Card */}
              <Card className="relative z-10 glass-morphism border-2 border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 animate-scale-in overflow-hidden group">
                <CardContent className="p-8">
                  {/* Profile Image */}
                  <div className="relative w-80 h-80 mx-auto mb-6 group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-accent-orange rounded-full p-1 animate-pulse">
                      <div className="w-full h-full rounded-full overflow-hidden bg-background p-2">
                        <img
                          src={ashokProfile}
                          alt="Ashok Srinivas - Azure & BI Consultant"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>
                    
                    {/* Floating Tech Icons */}
                    <div className="absolute -top-4 -right-4 glass-morphism rounded-full p-3 animate-bounce-in" 
                         style={{ animationDelay: '2.5s' }}>
                      <Cloud className="h-6 w-6 text-primary" />
                    </div>
                    <div className="absolute top-1/2 -left-6 glass-morphism rounded-full p-3 animate-bounce-in" 
                         style={{ animationDelay: '3s' }}>
                      <Database className="h-6 w-6 text-accent" />
                    </div>
                    <div className="absolute -bottom-4 right-8 glass-morphism rounded-full p-3 animate-bounce-in" 
                         style={{ animationDelay: '3.5s' }}>
                      <Code className="h-6 w-6 text-accent-orange" />
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div className="text-center space-y-4">
                    <div>
                      <h3 className="text-2xl font-display font-bold text-foreground">Ashok Srinivas</h3>
                      <p className="text-primary font-semibold">Senior Azure & BI Consultant</p>
                      <p className="text-sm text-muted-foreground">Toronto, ON • Available Remotely</p>
                    </div>

                    <div className="flex justify-center space-x-4 pt-4">
                      <Badge variant="secondary" className="glass-morphism">
                        <Award className="h-3 w-3 mr-1" />
                        Certified Expert
                      </Badge>
                      <Badge variant="secondary" className="glass-morphism">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Top Rated
                      </Badge>
                    </div>
                  </div>
                </CardContent>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-lg"></div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-in" 
           style={{ animationDelay: '2s' }}>
        <div className="flex flex-col items-center space-y-2 cursor-pointer group"
             onClick={() => scrollToSection("#about")}>
          <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
            Scroll to explore
          </span>
          <div className="w-6 h-10 border-2 border-muted-foreground group-hover:border-primary rounded-full flex justify-center transition-colors">
            <div className="w-1 h-3 bg-muted-foreground group-hover:bg-primary rounded-full mt-2 animate-pulse transition-colors"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHeroSection;