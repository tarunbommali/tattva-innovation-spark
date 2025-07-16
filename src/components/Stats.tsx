import { Users, CheckCircle, Brain, Award } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: '0',
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide'
    },
    {
      icon: CheckCircle,
      value: '0',
      label: 'Projects Completed',
      description: 'Successfully delivered solutions'
    },
    {
      icon: Brain,
      value: '0',
      label: 'AI Models Deployed',
      description: 'Intelligent systems implemented'
    },
    {
      icon: Award,
      value: '0',
      label: 'Years of Innovation',
      description: 'Building the future today'
    }
  ];

  return (
    <section className="py-20 gradient-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary-foreground">
            Our Journey So Far
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            As a startup, we're just getting started. These numbers represent our potential 
            and our commitment to growing with our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 backdrop-blur-sm mx-auto mb-4 group-hover:bg-primary-foreground/20 transition-smooth">
                <stat.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-xl font-semibold text-primary-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-primary-foreground/70">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-primary-foreground/80 text-sm">
            Ready to be our first success story? Let's build something amazing together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;