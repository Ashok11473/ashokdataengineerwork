import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, TrendingUp } from "lucide-react";

const ExperienceSection = () => {
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

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through impactful roles, delivering innovative data solutions across different industries and scales.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/20"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card className="border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <Badge 
                            variant={exp.type === "Current" ? "default" : "secondary"}
                            className={exp.type === "Current" ? "hero-gradient text-white" : ""}
                          >
                            {exp.type}
                          </Badge>
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

                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Building className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-display font-semibold text-foreground">
                              {exp.title}
                            </h3>
                            <p className="text-accent font-medium">{exp.company}</p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
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

                        <div className="flex flex-wrap gap-2 pt-3 border-t">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;