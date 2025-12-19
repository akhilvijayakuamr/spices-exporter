import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const HeritageTimeline = () => {
  const [activeYear, setActiveYear] = useState(0);

  const timelineData = [
    {
      year: "1950s",
      title: "The Foundation",
      description: "Our grandfather established the family's first spice plantation in the hills of Kerala, cultivating cardamom and black pepper using traditional organic methods passed down through generations.",
      icon: "Sprout",
      color: "primary"
    },
    {
      year: "1980s",
      title: "Second Generation",
      description: "Our father expanded the operations, introducing sustainable farming practices and building relationships with local farming communities. The focus shifted to quality over quantity.",
      icon: "Users",
      color: "secondary"
    },
    {
      year: "2010",
      title: "Spice Heritage Founded",
      description: "Combining traditional knowledge with modern agricultural science, we established Spice Heritage to create direct connections between farmers and global markets, ensuring fair trade and premium quality.",
      icon: "Building2",
      color: "accent"
    },
    {
      year: "2015",
      title: "International Expansion",
      description: "Achieved organic certification and began exporting to premium restaurants and specialty retailers across Europe and North America. Established partnerships with 25+ farming families.",
      icon: "Globe",
      color: "success"
    },
    {
      year: "2020",
      title: "Sustainability Leadership",
      description: "Launched comprehensive sustainability initiatives including water conservation, biodiversity protection, and carbon-neutral shipping. Expanded farmer network to 50+ partners.",
      icon: "Leaf",
      color: "primary"
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Continuing to innovate while preserving tradition. Investing in farmer education, traceability technology, and expanding our range of heirloom spice varieties for discerning customers worldwide.",
      icon: "Rocket",
      color: "accent"
    }
  ];

  const colorClasses = {
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    accent: "bg-accent text-accent-foreground",
    success: "bg-success text-success-foreground"
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="Clock" size={20} color="var(--color-primary)" />
            <span className="text-sm font-medium text-primary">Our Journey</span>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Three Generations of Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From humble beginnings to global recognition, our story is one of dedication, innovation, and unwavering commitment to quality
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="hidden lg:block relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-border -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 transition-all duration-500"
                 style={{ width: `${(activeYear / (timelineData?.length - 1)) * 100}%` }}></div>
            
            <div className="relative flex justify-between">
              {timelineData?.map((item, index) => (
                <div key={index} className="flex flex-col items-center" style={{ width: `${100 / timelineData?.length}%` }}>
                  <button
                    onClick={() => setActiveYear(index)}
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 mb-6 ${
                      activeYear === index
                        ? `${colorClasses?.[item?.color]} scale-110 shadow-lg`
                        : 'bg-muted text-muted-foreground hover:scale-105'
                    }`}
                  >
                    <Icon name={item?.icon} size={28} />
                  </button>
                  
                  <div className={`text-center transition-all duration-300 ${
                    activeYear === index ? 'opacity-100' : 'opacity-50'
                  }`}>
                    <p className="font-semibold text-lg text-foreground mb-2">{item?.year}</p>
                    <p className="font-serif text-xl font-semibold text-foreground mb-3">{item?.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                      {item?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:hidden space-y-6">
            {timelineData?.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${colorClasses?.[item?.color]}`}>
                    <Icon name={item?.icon} size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-primary mb-1">{item?.year}</p>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{item?.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item?.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageTimeline;