import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  GraduationCap, 
  Award, 
  Code, 
  Database, 
  Cloud, 
  BarChart, 
  Building, 
  Calendar, 
  MapPin, 
  TrendingUp,
  ExternalLink,
  Github,
  Zap,
  Shield,
  Settings,
  ArrowRight,
  Filter
} from "lucide-react";

const CompactAboutSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const skills = [
    { name: "Azure Synapse", level: 95, category: "Cloud", icon: "☁️" },
    { name: "Power BI", level: 98, category: "BI", icon: "📊" },
    { name: "Databricks", level: 90, category: "Analytics", icon: "🔧" },
    { name: "SQL", level: 95, category: "Database", icon: "🗄️" },
    { name: "Python", level: 88, category: "Programming", icon: "🐍" },
    { name: "Snowflake", level: 85, category: "Cloud", icon: "❄️" },
    { name: "Azure Data Factory", level: 92, category: "ETL", icon: "🔄" },
    { name: "Tableau", level: 87, category: "BI", icon: "📈" },
  ];

  const certifications = [
    "Certified Power BI Developer",
    "Complete Guide to Power BI for Data Analysts by Microsoft Press",
    "Microsoft Azure Data Engineer Associate (DP-203) Cert Prep by Microsoft Press",
    "Microsoft Azure Fundamentals (AZ 900) Cert Prep: 1 Cloud Concepts",
  ];

  const experiences = [
    {
      title: "Azure & BI Consultant",
      company: "Brickredsys, BC",
      period: "Nov 2024 – Present",
      location: "British Columbia, Canada",
      type: "Current",
      achievements: [
        "Leading cloud migration initiatives and data architecture optimization projects",
        "Designing and implementing real-time analytics solutions using Azure Synapse and Databricks",
        "Developing advanced Power BI dashboards with AI-powered insights and predictive analytics"
      ],
      technologies: ["Azure Synapse", "Power BI", "Databricks", "Azure Data Factory", "Python"]
    },
    {
      title: "Azure & BI Engineer",
      company: "Manulife Financial Corporation, ON",
      period: "Dec 2023 – Nov 2024",
      location: "Ontario, Canada",
      type: "Previous",
      achievements: [
        "Built and maintained enterprise-scale data pipelines processing 10M+ records daily",
        "Implemented data governance frameworks ensuring 99.9% data quality and compliance",
        "Optimized ETL processes reducing data processing time by 40% using Azure Data Factory"
      ],
      technologies: ["Azure Cloud", "SQL Server", "SSIS", "Power BI", "Data Governance"]
    },
    {
      title: "BI & Azure Developer",
      company: "Aviva Life Insurance Company, India",
      period: "Jan 2022 – Nov 2023",
      location: "Chennai, India",
      type: "Previous",
      achievements: [
        "Developed comprehensive BI solutions serving 500+ business users across multiple departments",
        "Created automated reporting systems reducing manual effort by 60%",
        "Implemented cloud-first data architecture supporting business scalability requirements"
      ],
      technologies: ["Power BI", "Azure Services", "SQL", "Tableau", "Data Modeling"]
    }
  ];

  const services = [
    {
      icon: <Database className="h-6 w-6" />,
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
      icon: <BarChart className="h-6 w-6" />,
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
      icon: <Cloud className="h-6 w-6" />,
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
      icon: <Shield className="h-6 w-6" />,
      title: "Data Governance & Compliance",
      description: "Implement comprehensive data governance frameworks using Azure Purview and establish data lineage, quality, and security protocols.",
      features: [
        "Data catalog management",
        "Compliance automation",
        "Data lineage tracking",
        "Access control policies"
      ],
      color: "accent-pink"
    }
  ];

  const projects = [
    {
      title: "Real-time Data Pipeline Automation",
      description: "Implemented end-to-end real-time data processing pipeline using Azure Data Factory and Databricks, processing 10M+ records daily with 99.9% uptime.",
      category: "Data Engineering",
      technologies: ["Azure Data Factory", "Databricks", "Azure Synapse", "Python", "SQL"],
      metrics: {
        performance: "40% faster processing",
        scale: "10M+ records/day",
        uptime: "99.9% availability"
      },
      icon: <Database className="h-5 w-5" />
    },
    {
      title: "AI-Powered Power BI Dashboards",
      description: "Created comprehensive BI solution with AI-powered insights serving 500+ business users across multiple departments with automated reporting.",
      category: "Business Intelligence",
      technologies: ["Power BI", "DAX", "Azure ML", "Python", "SQL Server"],
      metrics: {
        users: "500+ active users",
        reports: "50+ automated reports",
        efficiency: "60% time savings"
      },
      icon: <BarChart className="h-5 w-5" />
    },
    {
      title: "Data Lineage & Governance Platform",
      description: "Designed enterprise data governance framework using Azure Purview and Snowflake, ensuring data quality and compliance across the organization.",
      category: "Data Governance",
      technologies: ["Azure Purview", "Snowflake", "Data Catalog", "Compliance Tools"],
      metrics: {
        compliance: "100% regulatory compliance",
        coverage: "95% data catalog coverage",
        quality: "99.5% data accuracy"
      },
      icon: <Cloud className="h-5 w-5" />
    },
    {
      title: "Event-driven Architecture",
      description: "Built scalable event-driven data architecture using Azure Functions and Event Grid, enabling real-time business event processing.",
      category: "Cloud Architecture",
      technologies: ["Azure Functions", "Event Grid", "Cosmos DB", "Logic Apps"],
      metrics: {
        latency: "< 100ms response time",
        scale: "Auto-scaling to demand",
        cost: "30% cost reduction"
      },
      icon: <Zap className="h-5 w-5" />
    }
  ];

  const categories = ["All", "Data Engineering", "Business Intelligence", "Data Governance", "Cloud Architecture"];
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate data professional with 4+ years of experience transforming businesses through innovative analytics and cloud solutions.
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Professional Summary */}
              <Card className="p-6 border-2 hover:border-primary/20 transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-display font-semibold">Professional Journey</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    With 4+ years of dedicated experience in data engineering, analytics, and BI development, I specialize in building scalable cloud architectures and delivering actionable insights that drive business growth.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    My expertise spans across Azure ecosystem, advanced analytics platforms, and modern data warehousing solutions, enabling organizations to harness the full potential of their data assets.
                  </p>
                </CardContent>
              </Card>

              {/* Education & Certifications */}
              <Card className="p-6 border-2 hover:border-accent/20 transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-display font-semibold">Education & Certifications</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Badge variant="secondary" className="mt-1">Education</Badge>
                      <div>
                        <p className="font-medium">Bachelor of Technology</p>
                        <p className="text-sm text-muted-foreground">VEL TECH University, Chennai, India</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-accent-orange" />
                        <span className="font-medium">Certifications</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {certifications.map((cert, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="experience" className="animate-fade-in">
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="border-2 hover:border-primary/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Building className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <Badge 
                            variant={exp.type === "Current" ? "default" : "secondary"}
                            className={exp.type === "Current" ? "hero-gradient text-white mb-2" : "mb-2"}
                          >
                            {exp.type}
                          </Badge>
                          <h3 className="text-lg font-display font-semibold text-foreground">
                            {exp.title}
                          </h3>
                          <p className="text-accent font-medium">{exp.company}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-sm text-muted-foreground mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <TrendingUp className="h-4 w-4 text-accent-orange" />
                          <span className="font-medium text-sm">Key Achievements</span>
                        </div>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-accent-orange rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <span className="font-medium text-sm mb-3 block">Technologies Used</span>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="services" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
                >
                  <CardContent className="p-6">
                    <div className={`inline-flex p-3 rounded-full mb-4 bg-${service.color}/10 text-${service.color}`}>
                      {service.icon}
                    </div>
                    
                    <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-4">
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

            <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5 p-6">
              <CardContent className="text-center space-y-4">
                <h3 className="text-xl font-display font-bold text-foreground">
                  Ready to Transform Your Data?
                </h3>
                <p className="text-muted-foreground">
                  From initial consultation to full implementation, I provide end-to-end data solutions tailored to your business needs.
                </p>
                <Button 
                  size="lg" 
                  onClick={scrollToContact}
                  className="hero-gradient text-white font-medium"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="portfolio" className="animate-fade-in">
            <div className="space-y-6">
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3 mb-6">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProjects.map((project, index) => (
                  <Card 
                    key={index}
                    className="group border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            {project.icon}
                          </div>
                          <div>
                            <Badge variant="secondary" className="mb-2">
                              {project.category}
                            </Badge>
                            <h3 className="text-lg font-display font-semibold text-foreground">
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

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="text-center p-2 bg-muted/50 rounded-lg">
                            <div className="text-xs font-semibold text-primary">{value}</div>
                            <div className="text-xs text-muted-foreground capitalize">{key}</div>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="skills" className="animate-fade-in">
            <Card className="p-6 border-2 hover:border-accent-orange/20 transition-all duration-300">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-accent-orange/10 rounded-lg">
                    <BarChart className="h-6 w-6 text-accent-orange" />
                  </div>
                  <h3 className="text-xl font-display font-semibold">Technical Skills</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-medium text-sm">{skill.name}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {skill.category}
                        </Badge>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="hero-gradient h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technology Icons */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                  <div className="flex items-center space-x-2">
                    <Cloud className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Cloud</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Database className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium">Big Data</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BarChart className="h-5 w-5 text-accent-orange" />
                    <span className="text-sm font-medium">Analytics</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CompactAboutSection;