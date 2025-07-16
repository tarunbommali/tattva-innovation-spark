import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: 'AI-Powered E-Commerce Platform',
      description: 'Full-stack e-commerce solution with AI-driven product recommendations and inventory management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'TensorFlow'],
      status: 'Coming Soon',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      category: 'E-Commerce'
    },
    {
      title: 'Smart Analytics Dashboard',
      description: 'Real-time data visualization platform with machine learning insights for business intelligence.',
      technologies: ['React', 'Express.js', 'PostgreSQL', 'Docker', 'Python'],
      status: 'In Development',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      category: 'Analytics'
    },
    {
      title: 'Healthcare Management System',
      description: 'Comprehensive healthcare platform with patient management, appointment scheduling, and telemedicine.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'WebRTC'],
      status: 'Planning',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop',
      category: 'Healthcare'
    },
    {
      title: 'FinTech Mobile Application',
      description: 'Secure mobile banking solution with AI fraud detection and personal finance management.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'Machine Learning'],
      status: 'Concept',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&h=300&fit=crop',
      category: 'FinTech'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Coming Soon':
        return 'bg-primary/20 text-primary';
      case 'In Development':
        return 'bg-accent/20 text-accent';
      case 'Planning':
        return 'bg-secondary/20 text-secondary';
      case 'Concept':
        return 'bg-muted-foreground/20 text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our <span className="gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Exciting projects in development! As a startup, we're working on groundbreaking solutions 
            that will showcase our expertise in full-stack development and AI integration.
          </p>
        </div>

        {/* Coming Soon Banner */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full gradient-primary text-primary-foreground shadow-glow">
            <Sparkles className="w-5 h-5 mr-2" />
            <span className="font-medium">Our first groundbreaking projects are underway!</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-large transition-smooth overflow-hidden border-0">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-foreground text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    disabled
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    disabled
                    className="flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Have a project in mind? Let's discuss how we can bring your vision to life.
          </p>
          <Button className="gradient-primary hover:shadow-glow transition-smooth">
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;