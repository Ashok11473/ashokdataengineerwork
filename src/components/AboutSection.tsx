import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Code, Database, Cloud, BarChart } from "lucide-react";

const AboutSection = () => {
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

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate data professional with 4 years of experience transforming businesses through innovative analytics and cloud solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Professional Summary */}
          <div className="space-y-6 animate-fade-in">
            <Card className="p-6 border-2 hover:border-primary/20 transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold">Professional Journey</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  With 4 years of dedicated experience in data engineering, analytics, and BI development, I specialize in building scalable cloud architectures and delivering actionable insights that drive business growth.
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
                    {certifications.map((cert, index) => (
                      <Badge key={index} variant="outline" className="mr-2 mb-2">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <div className="animate-slide-in-right">
            <Card className="p-6 h-full border-2 hover:border-accent-orange/20 transition-all duration-300">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-accent-orange/10 rounded-lg">
                    <BarChart className="h-6 w-6 text-accent-orange" />
                  </div>
                  <h3 className="text-xl font-display font-semibold">Technical Skills</h3>
                </div>

                <div className="grid grid-cols-1 gap-4">
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
                <div className="grid grid-cols-3 gap-4 pt-4 border-t">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;