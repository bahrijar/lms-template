"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock data for courses
const courses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    description: "Learn the basics of HTML, CSS, and JavaScript to build modern websites.",
    instructor: "Sarah Johnson",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.8,
    reviewCount: 235,
    category: "Development",
    price: 49.99,
    duration: "6 weeks",
    level: "Beginner"
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    description: "Master the essential concepts of data analysis, visualization, and machine learning.",
    instructor: "Dr. Michael Chen",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.9,
    reviewCount: 412,
    category: "Data Science",
    price: 69.99,
    duration: "8 weeks",
    level: "Intermediate"
  },
  {
    id: 3,
    title: "UX/UI Design Essentials",
    description: "Create beautiful and functional user interfaces with modern design principles.",
    instructor: "Emily Rodriguez",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.7,
    reviewCount: 178,
    category: "Design",
    price: 59.99,
    duration: "6 weeks",
    level: "Beginner"
  },
  {
    id: 4,
    title: "Advanced JavaScript Programming",
    description: "Take your JavaScript skills to the next level with advanced concepts and frameworks.",
    instructor: "David Wilson",
    image: "https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.6,
    reviewCount: 198,
    category: "Development",
    price: 79.99,
    duration: "10 weeks",
    level: "Advanced"
  },
  {
    id: 5,
    title: "Business Management & Leadership",
    description: "Develop essential skills for effective team management and business leadership.",
    instructor: "Lisa Carter",
    image: "https://images.pexels.com/photos/6483582/pexels-photo-6483582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.8,
    reviewCount: 256,
    category: "Business",
    price: 64.99,
    duration: "8 weeks",
    level: "Intermediate"
  },
];

const CourseCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex + itemsToShow >= courses.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex <= 0 ? courses.length - itemsToShow : prevIndex - 1
    );
  };

  const visibleCourses = courses.slice(startIndex, startIndex + itemsToShow);
  
  // If we don't have enough courses from the slice, add from the beginning
  if (visibleCourses.length < itemsToShow) {
    visibleCourses.push(...courses.slice(0, itemsToShow - visibleCourses.length));
  }

  return (
    <div className="relative mt-12">
      <div className="flex gap-6 overflow-hidden py-4">
        {visibleCourses.map((course) => (
          <Card key={course.id} className="w-full min-w-[300px] transition-all duration-300 hover:shadow-lg">
            <CardHeader className="p-0">
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-2 left-2">
                  <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                    {course.category}
                  </Badge>
                </div>
                <div className="absolute bottom-2 right-2">
                  <Badge variant="outline" className="bg-background/80">
                    {course.level}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">{course.instructor}</p>
                <div className="flex items-center">
                  <Star className="mr-1 h-4 w-4 fill-primary text-primary" />
                  <span className="text-sm font-medium">{course.rating}</span>
                  <span className="ml-1 text-xs text-muted-foreground">({course.reviewCount})</span>
                </div>
              </div>
              <h3 className="mt-2 line-clamp-1 text-xl font-bold">{course.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                {course.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <p className="font-bold">${course.price}</p>
                <p className="text-sm text-muted-foreground">{course.duration}</p>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button className="w-full" asChild>
                <Link href={`/courses/${course.id}`}>View Course</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute -left-4 top-1/2 z-10 h-9 w-9 -translate-y-1/2 rounded-full bg-background shadow-md"
        onClick={prevSlide}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute -right-4 top-1/2 z-10 h-9 w-9 -translate-y-1/2 rounded-full bg-background shadow-md"
        onClick={nextSlide}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    </div>
  );
};

export default CourseCarousel;