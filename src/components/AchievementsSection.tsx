import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  TrendingUp, 
  Users, 
  Clock, 
  Target, 
  Zap,
  Database,
  BarChart,
  Shield,
  Star
} from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: <Database className="h-8 w-8" />,
      title: "10M+ Records",
      subtitle: "Processed Daily",
      description: "Built enterprise-scale data pipelines processing millions of records with 99.9% uptime",
      color: "primary",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "500+ Users",
      subtitle: "Served Globally",
      description: "Created BI solutions serving hundreds of business users across multiple departments",
      color: "accent",
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "60% Efficiency",
      subtitle: "Improvement",
      description: "Optimized data processes reducing manual effort and processing time significantly",
      color: "accent-orange",
      gradient: "from-accent-orange/20 to-accent-orange/5"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "99.5% Accuracy",
      subtitle: "Data Quality",
      description: "Implemented comprehensive data governance ensuring high-quality, compliant datasets",
      color: "accent-pink",
      gradient: "from-accent-pink/20 to-accent-pink/5"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "40% Faster",
      subtitle: "Performance",
      description: "Achieved significant performance improvements through optimized ETL processes",
      color: "accent-purple",
      gradient: "from-accent-purple/20 to-accent-purple/5"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Uptime",
      subtitle: "Monitoring",
      description: "Established robust monitoring and alerting systems for continuous data availability",
      color: "primary",
      gradient: "from-primary/20 to-primary/5"
    }
  ];

  const certifications = [
    {
      name: "Power BI Data Analyst Associate",
      issuer: "Microsoft",
      year: "2024",
      level: "Associate"
    },
    {
      name: "Azure Data Engineer Associate",
      issuer: "Microsoft", 
      year: "2023",
      level: "Associate"
    },
    {
      name: "Azure Solutions Architect Expert",
      issuer: "Microsoft",
      year: "2023",
      level: "Expert"
    },
    {
      name: "Databricks Certified Developer",
      issuer: "Databricks",
      year: "2024",
      level: "Professional"
    }
  ];

  const recognitions = [
    {
      title: "Top Performer",
      organization: "Manulife Financial",
      description: "Recognized for exceptional performance in data pipeline optimization",
      year: "2024"
    },
    {
      title: "Innovation Award", 
      organization: "Aviva Life Insurance",
      description: "Led implementation of cloud-first data architecture",
      year: "2023"
    },
    {
      title: "Client Excellence",
      organization: "Brickredsys",
      description: "Delivered project 20% ahead of schedule with 100% client satisfaction",
      year: "2024"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Award className="h-6 w-6 text-primary" />
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Achievements</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Proven Track Record of
            <br />
            <span className="text-gradient">Excellence & Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Measurable results and recognition from industry-leading organizations, showcasing consistent delivery of high-impact data solutions.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className={`group border-2 hover:border-primary/20 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up bg-gradient-to-br ${achievement.gradient} backdrop-blur-sm`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className={`inline-flex p-4 rounded-full mb-4 bg-${achievement.color}/10 text-${achievement.color} group-hover:bg-${achievement.color} group-hover:text-white transition-all duration-300 group-hover:scale-110`}>
                  {achievement.icon}
                </div>
                
                <div className="space-y-2 mb-4">
                  <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-sm font-semibold text-muted-foreground">
                    {achievement.subtitle}
                  </p>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>

                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Target className="h-4 w-4 text-primary" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <Card className="border-2 hover:border-primary/20 transition-all duration-300 animate-slide-in-left">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground">Certifications</h3>
                  <p className="text-muted-foreground">Industry-recognized credentials</p>
                </div>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Star className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-foreground">{cert.name}</h4>
                        <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-1">
                        {cert.level}
                      </Badge>
                      <p className="text-xs text-muted-foreground">{cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recognition & Awards */}
          <Card className="border-2 hover:border-accent/20 transition-all duration-300 animate-slide-in-right">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground">Recognition</h3>
                  <p className="text-muted-foreground">Awards & client testimonials</p>
                </div>
              </div>

              <div className="space-y-6">
                {recognitions.map((recognition, index) => (
                  <div 
                    key={index}
                    className="relative p-4 rounded-lg bg-gradient-to-r from-accent/5 to-transparent border-l-4 border-accent hover:border-accent-orange transition-colors group"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-foreground group-hover:text-accent-orange transition-colors">
                          {recognition.title}
                        </h4>
                        <Badge variant="outline" className="text-xs">
                          {recognition.year}
                        </Badge>
                      </div>
                      <p className="text-sm font-medium text-accent">
                        {recognition.organization}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {recognition.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/20">
                <div className="flex items-center space-x-3">
                  <BarChart className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Ready to achieve similar results?</p>
                    <p className="text-xs text-muted-foreground">Let's discuss your project goals</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;