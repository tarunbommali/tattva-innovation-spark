import { Briefcase, MapPin, Clock, Users, Zap, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Careers = () => {
  const jobOpenings = [
    {
      title: 'Senior Full Stack Developer (React/Node)',
      location: 'Remote / Bangalore',
      type: 'Full-time',
      experience: '3-5 years',
      status: 'Coming Soon',
      description: 'Lead development of scalable web applications using MERN stack with AI integration capabilities.',
      requirements: ['React.js', 'Node.js', 'MongoDB', 'AWS', 'AI/ML basics']
    },
    {
      title: 'AI/ML Engineer',
      location: 'Remote / Hyderabad',
      type: 'Full-time',
      experience: '2-4 years',
      status: 'Coming Soon',
      description: 'Develop and deploy machine learning models for various client applications and internal products.',
      requirements: ['Python', 'TensorFlow', 'PyTorch', 'MLOps', 'Cloud platforms']
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote / Mumbai',
      type: 'Full-time',
      experience: '2-3 years',
      status: 'Coming Soon',
      description: 'Build and maintain CI/CD pipelines, containerization, and cloud infrastructure.',
      requirements: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Infrastructure as Code']
    },
    {
      title: 'UI/UX Designer',
      location: 'Remote / Delhi',
      type: 'Full-time',
      experience: '2-4 years',
      status: 'Coming Soon',
      description: 'Create intuitive and beautiful user interfaces for web and mobile applications.',
      requirements: ['Figma', 'Adobe Creative Suite', 'User Research', 'Prototyping', 'Design Systems']
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Collaborative Environment',
      description: 'Work with passionate individuals in a supportive, growth-oriented culture.'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'Stay at the forefront of technology with access to latest tools and frameworks.'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible working hours and remote-first approach for better work-life integration.'
    },
    {
      icon: MapPin,
      title: 'Remote-First Culture',
      description: 'Work from anywhere with occasional team meetups and collaboration sessions.'
    }
  ];

  return (
    <section id="careers" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Join Our <span className="gradient-primary bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Be part of an innovative startup that's shaping the future of technology. 
            We're growing and looking for talented individuals to join our mission.
          </p>
        </div>

        {/* Growing Team Banner */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full gradient-primary text-primary-foreground shadow-glow">
            <Briefcase className="w-5 h-5 mr-2" />
            <span className="font-medium">We're growing! Check back soon for exciting opportunities</span>
          </div>
        </div>

        {/* Job Openings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {jobOpenings.map((job, index) => (
            <Card key={index} className="hover:shadow-medium transition-smooth border-0">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-semibold mb-2 hover:text-primary transition-smooth">
                      {job.title}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
                    {job.status}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  {job.description}
                </CardDescription>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2">Requirements:</h4>
                  <div className="flex flex-wrap gap-1">
                    {job.requirements.map((req, reqIndex) => (
                      <span 
                        key={reqIndex}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                      >
                        {req}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Experience: {job.experience}
                  </span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    disabled
                    className="text-xs"
                  >
                    Apply Soon
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Why Work With Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full gradient-primary mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold mb-2">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact for Opportunities */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Don't See Your Role?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always on the lookout for exceptional talent. If you're passionate about 
            technology and innovation, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="gradient-primary hover:shadow-glow transition-smooth">
              Send Your Resume
            </Button>
            <Button variant="outline">
              careers@trinetrax.com
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
