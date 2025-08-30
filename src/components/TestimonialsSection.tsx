import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Linkedin,
  Building,
  Users,
  TrendingUp
} from "lucide-react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      content: "Ashok's expertise in Azure data architecture transformed our analytics capabilities. His implementation of real-time data pipelines increased our processing efficiency by 40% while maintaining 99.9% uptime. Simply outstanding work!",
      author: "Alex Thompson",
      position: "Director of Data Engineering",
      company: "Enterprise Solutions Corp",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      project: "Enterprise Data Pipeline",
      results: ["40% faster processing", "99.9% uptime", "10M+ records/day"]
    },
    {
      content: "Working with Ashok on our Power BI transformation was exceptional. He delivered comprehensive dashboards that serve 500+ users across our organization. His attention to detail and technical depth is remarkable.",
      author: "Rebecca Foster",
      position: "VP of Business Intelligence",
      company: "Global Analytics Inc", 
      avatar: "/api/placeholder/80/80",
      rating: 5,
      project: "BI Dashboard Suite",
      results: ["500+ active users", "60% time savings", "50+ automated reports"]
    },
    {
      content: "Ashok's cloud migration strategy and data governance implementation exceeded our expectations. His proactive approach and deep Azure expertise helped us achieve full regulatory compliance while optimizing costs.",
      author: "Marcus Williams",
      position: "Chief Technology Officer",
      company: "TechFlow Systems",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      project: "Cloud Migration & Governance",
      results: ["100% compliance", "30% cost reduction", "Zero downtime migration"]
    },
    {
      content: "The Databricks implementation Ashok led revolutionized our data science workflow. His technical leadership and collaborative approach made a complex project seamless. Highly recommend his expertise.",
      author: "David Park",
      position: "Head of Data Science",
      company: "Tech Innovations Inc",
      avatar: "/api/placeholder/80/80", 
      rating: 5,
      project: "Advanced Analytics Platform",
      results: ["5x faster analytics", "ML model deployment", "Real-time insights"]
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Users className="h-6 w-6 text-primary" />
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            What Clients Say About
            <br />
            <span className="text-gradient">My Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real feedback from industry leaders and technical executives who have experienced the impact of my data solutions firsthand.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial Card */}
          <Card className="border-2 border-primary/10 bg-gradient-to-br from-background via-background to-muted/10 shadow-2xl animate-fade-in">
            <CardContent className="p-8 md:p-12">
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Quote className="h-8 w-8 text-primary" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="text-center space-y-8">
                {/* Rating Stars */}
                <div className="flex justify-center space-x-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent-orange text-accent-orange" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed italic">
                  "{current.content}"
                </blockquote>

                {/* Project Results */}
                <div className="flex flex-wrap justify-center gap-3">
                  {current.results.map((result, index) => (
                    <Badge 
                      key={index}
                      variant="secondary" 
                      className="glass-morphism border-0 text-sm py-2 px-4"
                    >
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {result}
                    </Badge>
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 pt-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">
                        {current.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="text-left">
                      <h4 className="font-display font-semibold text-lg text-foreground">
                        {current.author}
                      </h4>
                      <p className="text-muted-foreground">{current.position}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-muted/50 rounded-lg">
                      <Building className="h-4 w-4 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-sm text-foreground">{current.company}</p>
                      <p className="text-xs text-muted-foreground">{current.project}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="glass-morphism border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Testimonial Indicators */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-primary scale-125'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="glass-morphism border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Additional Testimonials Preview */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card 
              key={index}
              className={`border-2 transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1 ${
                index === currentTestimonial ? 'border-primary/30 bg-primary/5' : 'border-muted/30 hover:border-primary/20'
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-accent-orange text-accent-orange" />
                      ))}
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    "{testimonial.content.substring(0, 120)}..."
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="border-2 border-accent/20 bg-gradient-to-r from-accent/5 to-primary/5 p-8 max-w-2xl mx-auto">
            <CardContent className="space-y-4">
              <h3 className="text-2xl font-display font-bold text-foreground">
                Ready to Join These Success Stories?
              </h3>
              <p className="text-muted-foreground">
                Let's discuss how I can help transform your data challenges into competitive advantages.
              </p>
              <Button 
                size="lg" 
                className="hero-gradient text-white font-medium"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Start Your Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;