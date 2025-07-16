import { 
  Code, 
  Brain, 
  Database, 
  Cloud, 
  Container, 
  Cog, 
  Layers,
  Zap
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'End-to-end web application development using modern MERN stack technologies with scalable architecture.',
      features: ['React.js Frontend', 'Node.js Backend', 'RESTful APIs', 'Responsive Design']
    },
    {
      icon: Brain,
      title: 'AI Integration & Solutions',
      description: 'Cutting-edge AI and machine learning integration to enhance your applications with intelligent features.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'AI Automation']
    },
    {
      icon: Layers,
      title: 'MERN Stack Expertise',
      description: 'Specialized in MongoDB, Express.js, React.js, and Node.js for robust and scalable web applications.',
      features: ['MongoDB Database', 'Express.js APIs', 'React Components', 'Node.js Services']
    },
    {
      icon: Cloud,
      title: 'AWS Cloud Solutions',
      description: 'Comprehensive cloud infrastructure setup and management using Amazon Web Services.',
      features: ['EC2 Instances', 'S3 Storage', 'Lambda Functions', 'CloudFormation']
    },
    {
      icon: Database,
      title: 'MongoDB Management',
      description: 'Expert database design, optimization, and management for high-performance applications.',
      features: ['Schema Design', 'Performance Optimization', 'Data Migration', 'Backup Solutions']
    },
    {
      icon: Container,
      title: 'Docker Containerization',
      description: 'Application containerization for consistent deployment across different environments.',
      features: ['Container Images', 'Multi-stage Builds', 'Orchestration', 'Scalability']
    },
    {
      icon: Cog,
      title: 'DevOps Implementation',
      description: 'Complete DevOps pipeline setup for continuous integration and deployment.',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Monitoring', 'Infrastructure as Code']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Advanced optimization techniques to ensure your applications run at peak performance.',
      features: ['Code Splitting', 'Caching Strategies', 'Load Balancing', 'Database Tuning']
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our <span className="gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation 
            with cutting-edge tools and methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-large transition-smooth cursor-pointer border-0 gradient-card"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg gradient-primary mb-4 group-hover:shadow-glow transition-smooth">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg font-semibold group-hover:text-primary transition-smooth">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-xs text-muted-foreground flex items-center">
                      <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;