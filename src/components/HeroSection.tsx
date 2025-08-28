import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Linkedin, Github, Mail } from "lucide-react";
import ashokProfile from "@/assets/ashok-profile.jpg";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-2">
              <p className="text-accent font-medium text-lg">Hello, I'm Ashok Srinivas</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
                Professional
                <br />
                <span className="text-gradient">Azure & BI Consultant</span>
                <br />
                <span className="text-foreground">& Data Engineer</span>
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Delivering data-driven insights and scalable cloud solutions using Azure, Databricks, Power BI, and Snowflake with 4+ years of experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("#portfolio")}
                className="hero-gradient text-white font-medium group"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="font-medium border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            <div className="flex space-x-4 pt-2">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image with Decorative Elements */}
          <div className="relative animate-slide-in-right">
            <div className="relative mx-auto lg:mx-0">
              {/* Background decorative shapes */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent-orange/20 rounded-full blur-2xl"></div>
              <div className="absolute top-20 -right-12 w-32 h-32 bg-accent-pink/30 rounded-full blur-xl"></div>
              
              {/* Main profile image */}
              <div className="relative z-10 w-80 h-80 mx-auto">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <img
                    src={ashokProfile}
                    alt="Ashok Srinivas - Professional headshot"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating geometric shapes */}
              <div className="absolute top-10 left-10 w-6 h-6 bg-accent rounded-full animate-pulse"></div>
              <div className="absolute bottom-20 left-0 w-4 h-4 bg-accent-orange rounded-full animate-bounce"></div>
              <div className="absolute top-32 right-6 w-8 h-8 border-2 border-accent-pink rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;