import { Linkedin, Twitter, Github, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Team = () => {
  const teamMembers = [
    {
      name: 'Amit Sharma',
      role: 'Founder & CEO',
      bio: 'Visionary leader with 8+ years in full-stack development and AI integration. Passionate about building innovative solutions.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      expertise: ['Strategic Planning', 'AI Solutions', 'Leadership', 'Product Vision'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'amit@tattvainnovations.com'
      }
    },
    {
      name: 'Priya Patel',
      role: 'Lead Full Stack Developer',
      bio: 'Expert in MERN stack development with a focus on scalable architecture and modern web technologies.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b60e5d3c?w=400&h=400&fit=crop&crop=face',
      expertise: ['React.js', 'Node.js', 'MongoDB', 'System Design'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'priya@tattvainnovations.com'
      }
    },
    {
      name: 'Rahul Kumar',
      role: 'AI/ML Engineer',
      bio: 'Specialized in machine learning algorithms and AI model deployment with hands-on experience in TensorFlow and PyTorch.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      expertise: ['Machine Learning', 'Deep Learning', 'Python', 'TensorFlow'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'rahul@tattvainnovations.com'
      }
    },
    {
      name: 'Sneha Reddy',
      role: 'DevOps Specialist',
      bio: 'Cloud infrastructure expert with extensive experience in AWS, Docker, and CI/CD pipeline implementation.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      expertise: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'sneha@tattvainnovations.com'
      }
    }
  ];

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Meet Our <span className="gradient-primary bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A passionate team of innovators, developers, and problem-solvers dedicated to 
            transforming ideas into cutting-edge digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-large transition-smooth text-center border-0">
              <CardHeader className="pb-4">
                <div className="relative mx-auto mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto shadow-medium group-hover:shadow-glow transition-smooth"
                  />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary rounded-full border-2 border-background"></div>
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-smooth">
                  {member.name}
                </CardTitle>
                <CardDescription className="text-accent font-medium">
                  {member.role}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4 justify-center">
                  {member.expertise.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-center gap-2">
                  <button className="p-2 hover:bg-muted rounded-full transition-smooth">
                    <Linkedin className="w-4 h-4 text-muted-foreground hover:text-primary" />
                  </button>
                  <button className="p-2 hover:bg-muted rounded-full transition-smooth">
                    <Twitter className="w-4 h-4 text-muted-foreground hover:text-primary" />
                  </button>
                  <button className="p-2 hover:bg-muted rounded-full transition-smooth">
                    <Github className="w-4 h-4 text-muted-foreground hover:text-primary" />
                  </button>
                  <button className="p-2 hover:bg-muted rounded-full transition-smooth">
                    <Mail className="w-4 h-4 text-muted-foreground hover:text-primary" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join Our Growing Team</h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for talented individuals who share our passion for innovation 
              and excellence in technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm">
                Remote-First Culture
              </span>
              <span className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm">
                Flexible Hours
              </span>
              <span className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm">
                Growth Opportunities
              </span>
              <span className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm">
                Innovation Focus
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;