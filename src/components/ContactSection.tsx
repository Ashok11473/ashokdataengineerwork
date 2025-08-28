import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Github, 
  Send,
  MessageSquare,
  Clock,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+1 289 625-5482",
      href: "tel:+12896255482",
      color: "primary"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "ashoksrinivas2001@gmail.com",
      href: "mailto:ashoksrinivas2001@gmail.com",
      color: "accent"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Toronto, Ontario, Canada",
      href: "#",
      color: "accent-orange"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/ashok-srinivas",
      color: "primary"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/ashoksrinivas",
      color: "foreground"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MessageSquare className="h-6 w-6 text-primary" />
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Contact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your data into actionable insights? Let's discuss your project and explore how I can help drive your business forward.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <Card className="border-2 hover:border-primary/20 transition-all duration-300 p-6">
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                    Get In Touch
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm always excited to discuss new opportunities and challenges. Whether you need help with data engineering, BI development, or cloud architecture, I'm here to help.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className={`p-2 rounded-lg bg-${info.color}/10 text-${info.color} group-hover:bg-${info.color} group-hover:text-white transition-all`}>
                        {info.icon}
                      </div>
                      <div>
                        <div className="font-medium text-sm text-muted-foreground">{info.label}</div>
                        <div className="text-foreground font-medium">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-medium text-sm mb-3">Connect with me</h4>
                  <div className="flex space-x-3">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="icon"
                        asChild
                        className="hover:bg-primary hover:text-white hover:border-primary transition-all"
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          {social.icon}
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>

                <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Clock className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">Response Time</div>
                        <div className="text-xs text-muted-foreground">Usually within 24 hours</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="border-2 hover:border-accent/20 transition-all duration-300">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-2 focus:border-primary transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-2 focus:border-primary transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="border-2 focus:border-primary transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="border-2 focus:border-primary transition-colors resize-none"
                      placeholder="Tell me about your project or question..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full hero-gradient text-white font-medium py-3 group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>

                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>I respond to all inquiries within 24 hours</span>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;