import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Database, 
  BarChart, 
  Cloud, 
  Shield, 
  Zap, 
  ArrowRight,
  Settings,
  TrendingUp
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Engineering & Pipeline Automation",
      description: "Design and implement scalable data pipelines using Azure Data Factory, Databricks, and modern ETL/ELT processes for real-time and batch data processing.",
      features: [
        "Real-time streaming pipelines",
        "Batch processing optimization",
        "Data quality frameworks",
        "Automated monitoring & alerts"
      ],
      color: "primary"
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "BI Dashboard Development",
      description: "Create interactive, AI-powered dashboards and reports using Power BI and Tableau that transform complex data into actionable business insights.",
      features: [
        "Interactive Power BI dashboards",
        "Advanced DAX calculations",
        "Mobile-responsive designs",
        "Automated report distribution"
      ],
      color: "accent"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Data Architecture & Migration",
      description: "Architect and migrate enterprise data solutions to Azure cloud, ensuring scalability, performance, and cost-effectiveness.",
      features: [
        "Azure Synapse Analytics setup",
        "Data lake architecture",
        "Cloud migration strategies",
        "Performance optimization"
      ],
      color: "accent-orange"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Data Governance & Compliance",
      description: "Implement comprehensive data governance frameworks using Azure Purview and establish data lineage, quality, and security protocols.",
      features: [
        "Data catalog management",
        "Compliance automation",
        "Data lineage tracking",
        "Access control policies"
      ],
      color: "accent-pink"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Optimization & Security",
      description: "Optimize data processing performance and implement robust security measures to protect sensitive business information.",
      features: [
        "Query performance tuning",
        "Resource optimization",
        "Security best practices",
        "Cost management strategies"
      ],
      color: "primary"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Settings className="h-6 w-6 text-primary" />
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            I Provide Wide Range Of
            <br />
            <span className="text-gradient">Digital Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive data and analytics solutions designed to unlock your organization's full potential through cutting-edge technology and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex p-4 rounded-full mb-4 bg-${service.color}/10 text-${service.color} group-hover:bg-${service.color} group-hover:text-white transition-all duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6 text-left">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="ghost" 
                  className="group/btn hover:bg-primary/10 hover:text-primary w-full"
                  onClick={scrollToContact}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5 p-8">
            <CardContent className="space-y-4">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
                <span className="text-primary font-medium">Ready to Transform Your Data?</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From initial consultation to full implementation, I provide end-to-end data solutions tailored to your business needs.
              </p>
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="hero-gradient text-white font-medium mt-4"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;