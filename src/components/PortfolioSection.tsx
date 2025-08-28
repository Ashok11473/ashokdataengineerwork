import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Github, 
  Database, 
  BarChart, 
  Cloud, 
  Zap, 
  Filter,
  TrendingUp
} from "lucide-react";

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      title: "Real-time Data Pipeline Automation",
      description: "Implemented end-to-end real-time data processing pipeline using Azure Data Factory and Databricks, processing 10M+ records daily with 99.9% uptime.",
      image: "/api/placeholder/600/400",
      category: "Data Engineering",
      technologies: ["Azure Data Factory", "Databricks", "Azure Synapse", "Python", "SQL"],
      features: [
        "Real-time streaming processing",
        "Automated data quality checks",
        "Performance monitoring dashboard",
        "Error handling & recovery"
      ],
      metrics: {
        performance: "40% faster processing",
        scale: "10M+ records/day",
        uptime: "99.9% availability"
      },
      icon: <Database className="h-6 w-6" />
    },
    {
      title: "AI-Powered Power BI Dashboards",
      description: "Created comprehensive BI solution with AI-powered insights serving 500+ business users across multiple departments with automated reporting.",
      image: "/api/placeholder/600/400",
      category: "Business Intelligence",
      technologies: ["Power BI", "DAX", "Azure ML", "Python", "SQL Server"],
      features: [
        "Interactive executive dashboards",
        "Predictive analytics models",
        "Mobile-responsive design",
        "Automated report distribution"
      ],
      metrics: {
        users: "500+ active users",
        reports: "50+ automated reports",
        efficiency: "60% time savings"
      },
      icon: <BarChart className="h-6 w-6" />
    },
    {
      title: "Data Lineage & Governance Platform",
      description: "Designed enterprise data governance framework using Azure Purview and Snowflake, ensuring data quality and compliance across the organization.",
      image: "/api/placeholder/600/400",
      category: "Data Governance",
      technologies: ["Azure Purview", "Snowflake", "Data Catalog", "Compliance Tools"],
      features: [
        "Complete data lineage tracking",
        "Automated compliance reporting",
        "Data quality monitoring",
        "Access control management"
      ],
      metrics: {
        compliance: "100% regulatory compliance",
        coverage: "95% data catalog coverage",
        quality: "99.5% data accuracy"
      },
      icon: <Cloud className="h-6 w-6" />
    },
    {
      title: "Event-driven Architecture",
      description: "Built scalable event-driven data architecture using Azure Functions and Event Grid, enabling real-time business event processing.",
      image: "/api/placeholder/600/400",
      category: "Cloud Architecture",
      technologies: ["Azure Functions", "Event Grid", "Cosmos DB", "Logic Apps"],
      features: [
        "Serverless event processing",
        "Scalable microservices",
        "Real-time notifications",
        "Cost-optimized architecture"
      ],
      metrics: {
        latency: "< 100ms response time",
        scale: "Auto-scaling to demand",
        cost: "30% cost reduction"
      },
      icon: <Zap className="h-6 w-6" />
    }
  ];

  const categories = ["All", "Data Engineering", "Business Intelligence", "Data Governance", "Cloud Architecture"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <TrendingUp className="h-6 w-6 text-primary" />
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Featured Projects &
            <br />
            <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my recent work showcasing innovative data solutions, advanced analytics, and cloud architectures that delivered measurable business impact.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex items-center space-x-2 mb-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Filter by:</span>
          </div>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "hero-gradient text-white" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index}
              className="group border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-xl overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                {/* Project Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {project.icon}
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-2">
                          {project.category}
                        </Badge>
                        <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Key Features */}
                <div className="px-6 pb-4">
                  <h4 className="font-medium text-sm mb-3 flex items-center space-x-2">
                    <span>Key Features</span>
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="px-6 pb-4">
                  <h4 className="font-medium text-sm mb-3">Project Impact</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-2 bg-muted/50 rounded-lg">
                        <div className="text-sm font-semibold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="px-6 pb-6 border-t pt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="border-2 border-accent/20 bg-gradient-to-r from-accent/5 to-primary/5 p-8">
            <CardContent className="space-y-4">
              <h3 className="text-2xl font-display font-bold text-foreground">
                Interested in Similar Solutions?
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Each project is custom-designed to meet specific business requirements. Let's discuss how I can help transform your data challenges into competitive advantages.
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
                Discuss Your Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;