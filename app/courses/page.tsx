import { Suspense } from "react";
import {
  BookOpen,
  Clock,
  Filter,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

// Mock data
const courses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    description:
      "Learn the basics of HTML, CSS, and JavaScript to build modern websites.",
    instructor: "Sarah Johnson",
    image:
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.8,
    reviewCount: 235,
    category: "Development",
    price: 49.99,
    duration: "6 weeks",
    level: "Beginner",
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    description:
      "Master the essential concepts of data analysis, visualization, and machine learning.",
    instructor: "Dr. Michael Chen",
    image:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.9,
    reviewCount: 412,
    category: "Data Science",
    price: 69.99,
    duration: "8 weeks",
    level: "Intermediate",
  },
  {
    id: 3,
    title: "UX/UI Design Essentials",
    description:
      "Create beautiful and functional user interfaces with modern design principles.",
    instructor: "Emily Rodriguez",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.7,
    reviewCount: 178,
    category: "Design",
    price: 59.99,
    duration: "6 weeks",
    level: "Beginner",
  },
  {
    id: 4,
    title: "Advanced JavaScript Programming",
    description:
      "Take your JavaScript skills to the next level with advanced concepts and frameworks.",
    instructor: "David Wilson",
    image:
      "https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.6,
    reviewCount: 198,
    category: "Development",
    price: 79.99,
    duration: "10 weeks",
    level: "Advanced",
  },
  {
    id: 5,
    title: "Business Management & Leadership",
    description:
      "Develop essential skills for effective team management and business leadership.",
    instructor: "Lisa Carter",
    image:
      "https://images.pexels.com/photos/6483582/pexels-photo-6483582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.8,
    reviewCount: 256,
    category: "Business",
    price: 64.99,
    duration: "8 weeks",
    level: "Intermediate",
  },
  {
    id: 6,
    title: "Mobile App Development with React Native",
    description:
      "Build cross-platform mobile applications using React Native and JavaScript.",
    instructor: "Alex Martinez",
    image:
      "https://images.pexels.com/photos/193003/pexels-photo-193003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.7,
    reviewCount: 183,
    category: "Development",
    price: 69.99,
    duration: "8 weeks",
    level: "Intermediate",
  },
  {
    id: 7,
    title: "Digital Marketing Mastery",
    description:
      "Learn effective strategies for social media, SEO, email marketing, and more.",
    instructor: "Rebecca Thompson",
    image:
      "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.8,
    reviewCount: 217,
    category: "Marketing",
    price: 54.99,
    duration: "7 weeks",
    level: "Beginner",
  },
  {
    id: 8,
    title: "Python for Data Analysis",
    description:
      "Master Python libraries like Pandas, NumPy, and Matplotlib for data analysis.",
    instructor: "James Wilson",
    image:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.9,
    reviewCount: 325,
    category: "Data Science",
    price: 64.99,
    duration: "8 weeks",
    level: "Intermediate",
  },
];

const categories = [
  "Development",
  "Data Science",
  "Design",
  "Business",
  "Marketing",
  "Photography",
  "Health & Fitness",
  "Music",
];

const levels = ["Beginner", "Intermediate", "Advanced"];

function CourseSkeleton() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-48 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <div className="flex justify-between">
        <Skeleton className="h-8 w-24" />
        <Skeleton className="h-8 w-16" />
      </div>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <div className="px-4 py-12 md:py-16 lg:px-6">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Courses
          </h1>
          <p className="text-muted-foreground">
            Explore our comprehensive library of courses to enhance your skills
          </p>
        </div>

        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search courses..."
              className="pl-8"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Select defaultValue="newest">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon" className="md:hidden">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* Filters - Desktop */}
          <div className="hidden md:col-span-3 md:block">
            <div className="sticky top-24 space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Filters</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2 text-xs"
                  >
                    Reset
                  </Button>
                </div>
                <Separator className="my-4" />
              </div>

              <div>
                <h4 className="mb-3 font-medium">Category</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox id={`category-${category}`} />
                      <label
                        htmlFor={`category-${category}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-3 font-medium">Level</h4>
                <div className="space-y-2">
                  {levels.map((level) => (
                    <div key={level} className="flex items-center space-x-2">
                      <Checkbox id={`level-${level}`} />
                      <label
                        htmlFor={`level-${level}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {level}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-3 font-medium">Price</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="price-free" />
                    <label
                      htmlFor="price-free"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Free
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="price-paid" />
                    <label
                      htmlFor="price-paid"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Paid
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-3 font-medium">Duration</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="duration-short" />
                    <label
                      htmlFor="duration-short"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      0-4 weeks
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="duration-medium" />
                    <label
                      htmlFor="duration-medium"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      5-8 weeks
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="duration-long" />
                    <label
                      htmlFor="duration-long"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      9+ weeks
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Filters - Mobile */}
          <div className="md:hidden">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="filters">
                <AccordionTrigger className="flex items-center">
                  <div className="flex items-center">
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    <span>Filters</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-2 font-medium">Category</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {categories.slice(0, 6).map((category) => (
                          <div
                            key={category}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox id={`mobile-category-${category}`} />
                            <label
                              htmlFor={`mobile-category-${category}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {category}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-2 font-medium">Level</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {levels.map((level) => (
                          <div
                            key={level}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox id={`mobile-level-${level}`} />
                            <label
                              htmlFor={`mobile-level-${level}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {level}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button variant="outline" size="sm" className="mr-2">
                        Reset
                      </Button>
                      <Button size="sm">Apply Filters</Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Course Grid */}
          <div className="md:col-span-9">
            <Suspense
              fallback={
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {Array(6)
                    .fill(0)
                    .map((_, i) => (
                      <Card key={i}>
                        <CardContent className="p-4">
                          <CourseSkeleton />
                        </CardContent>
                      </Card>
                    ))}
                </div>
              }
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                  <Card
                    key={course.id}
                    className="overflow-hidden transition-all duration-300 hover:shadow-lg"
                  >
                    <CardHeader className="p-0">
                      <div className="relative h-48 w-full overflow-hidden">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute bottom-2 left-2">
                          <Badge
                            variant="secondary"
                            className="bg-primary/90 text-primary-foreground"
                          >
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
                        <p className="text-sm text-muted-foreground">
                          {course.instructor}
                        </p>
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="mr-1 h-4 w-4 fill-primary text-primary"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm font-medium">
                            {course.rating}
                          </span>
                          <span className="ml-1 text-xs text-muted-foreground">
                            ({course.reviewCount})
                          </span>
                        </div>
                      </div>
                      <h3 className="mt-2 line-clamp-1 text-xl font-bold">
                        {course.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                        {course.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="mr-1 h-4 w-4" />
                          {course.duration}
                        </div>
                        <p className="font-bold">${course.price}</p>
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
            </Suspense>

            <div className="mt-8 flex justify-center">
              <Button variant="outline" className="mx-2">
                Previous
              </Button>
              <Button variant="outline" className="mx-1">
                1
              </Button>
              <Button className="mx-1">2</Button>
              <Button variant="outline" className="mx-1">
                3
              </Button>
              <Button variant="outline" className="mx-2">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
