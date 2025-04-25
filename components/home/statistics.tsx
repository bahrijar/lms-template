"use client";

import { useEffect, useRef, useState } from "react";
import { Users, BookOpen, Award, Globe } from "lucide-react";

const stats = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    value: 50000,
    label: "Active Students",
    suffix: "+",
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    value: 500,
    label: "Courses",
    suffix: "+",
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    value: 200,
    label: "Expert Instructors",
    suffix: "+",
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    value: 100,
    label: "Countries",
    suffix: "+",
  },
];

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-primary/5 lg:py-24">
      <div className="px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                {stat.icon}
              </div>
              <h3 className="mt-4 text-3xl font-bold md:text-4xl">
                {isVisible ? (
                  <>
                    {stat.value.toLocaleString()}
                    {stat.suffix}
                  </>
                ) : (
                  "0"
                )}
              </h3>
              <p className="mt-2 text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
