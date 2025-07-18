import { 
  Zap, 
  Target, 
  Users, 
  Lightbulb,
  TrendingUp,
  Shield
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      icon: Zap,
      title: 'Latest Technologies',
      description: 'Always stay ahead with cutting-edge frameworks, tools, and methodologies in the rapidly evolving tech landscape.'
    },
    {
      icon: TrendingUp,
      title: 'Rapid Development',
      description: 'Agile startup approach enabling quick iterations, faster time-to-market, and efficient project delivery.'
    },
    {
      icon: Users,
      title: 'Client-Centric Approach',
      description: 'Deep collaboration with clients to understand their vision and deliver tailored solutions that exceed expectations.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'Passionate about solving complex problems with creative solutions and pushing the boundaries of what\'s possible.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes ensure robust, secure, and reliable applications.'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Results-driven approach with clear objectives, measurable outcomes, and continuous improvement.'
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose <span className="gradient-primary bg-clip-text text-transparent">Cognito Visions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            As a dynamic startup, we bring fresh perspectives, cutting-edge expertise, and unwavering 
            commitment to transforming your digital vision into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-smooth border-0 bg-transparent"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-full gradient-primary mx-auto mb-4 group-hover:shadow-glow transition-smooth">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-smooth">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Values */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At Cognito Visions, we believe in the power of artificial intelligence to transform how we perceive and interact with the world. 
              Our mission is to develop cognitive solutions that bridge the gap between human intelligence and machine capability, creating systems that truly understand and adapt.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                <span className="text-muted-foreground">Innovation-First Mindset</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                <span className="text-muted-foreground">Continuous Learning</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                <span className="text-muted-foreground">Quality Excellence</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                <span className="text-muted-foreground">Client Success</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
