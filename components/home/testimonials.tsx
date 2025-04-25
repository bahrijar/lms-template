"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QuoteIcon } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content:
      "EduLearn transformed my career path. The web development courses were comprehensive and practical, helping me land a job as a front-end developer within 3 months of completion.",
    author: "James Wilson",
    position: "Frontend Developer at TechCorp",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    content:
      "As a busy professional, I appreciate the flexibility EduLearn offers. I completed my business analytics certification while managing a full-time job and family responsibilities.",
    author: "Sarah Thompson",
    position: "Marketing Director",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    content:
      "The quality of instruction on EduLearn is exceptional. The UX/UI design course I took was taught by industry leaders who provided invaluable feedback on my portfolio projects.",
    author: "Michael Rodriguez",
    position: "UI Designer at CreativeStudio",
    avatar:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    content:
      "I've tried many online learning platforms, but EduLearn stands out for its interactive elements and community support. The discussion forums add tremendous value.",
    author: "Emily Chen",
    position: "Data Scientist",
    avatar:
      "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 5,
    content:
      "The project-based learning approach on EduLearn gave me practical skills I could immediately apply at work. My Python programming course has already paid for itself many times over.",
    author: "David Okafor",
    position: "Software Engineer",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-muted/50 py-16 lg:py-24">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Student Success Stories
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What Our Students Say
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Hear from learners who have transformed their skills and careers
            with EduLearn.
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-4xl">
          <Card className="border-0 bg-transparent shadow-none">
            <CardContent className="p-0">
              <div className="relative overflow-hidden rounded-lg bg-card p-8 shadow-md">
                <QuoteIcon className="absolute right-8 top-8 h-24 w-24 opacity-10" />
                <div className="relative z-10">
                  <p className="mb-6 text-lg italic text-card-foreground">
                    "{testimonials[activeIndex].content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[activeIndex].avatar}
                      alt={testimonials[activeIndex].author}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">
                        {testimonials[activeIndex].author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[activeIndex].position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                className={`h-3 w-3 rounded-full p-0 ${
                  index === activeIndex
                    ? "bg-primary"
                    : "bg-muted-foreground/20"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="sr-only">Go to testimonial {index + 1}</span>
              </Button>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={prevTestimonial}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={nextTestimonial}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
