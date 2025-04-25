"use client";
import React, { useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Award,
  BarChart3,
  Bookmark,
  BookOpen,
  CheckCircle,
  Clock,
  FileText,
  MessageSquare,
  PlayCircle,
  Share2,
  Star,
  ThumbsUp,
  Users,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Progress } from "../ui/progress";
import { Separator } from "../ui/separator";
import { courses } from "./course";

const CourseDetail = ({ id }: { id: string }) => {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Course Not Found</h1>
          <p className="mt-2 text-muted-foreground">
            The course you are looking for does not exist.
          </p>
          <Button className="mt-4" asChild>
            <Link href="/courses">Back to Courses</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Calculate total course duration in minutes
  const totalMinutes = course.modules.reduce(
    (total, module) =>
      total +
      module.lessons.reduce(
        (moduleTotal, lesson) =>
          moduleTotal + parseInt(lesson.duration.split(" ")[0]),
        0
      ),
    0
  );

  // Convert minutes to hours and minutes format
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const totalDuration = `${hours}h ${minutes}m`;

  // Calculate total number of lessons
  const totalLessons = course.modules.reduce(
    (total, module) => total + module.lessons.length,
    0
  );

  return (
    <div className="px-4 py-12 md:px-6">
      <div className="grid gap-8 md:grid-cols-3">
        {/* Course Content - Left Column on large screens, full width on small */}
        <div className="md:col-span-2">
          <div className="mb-8">
            <div className="mb-2 flex flex-wrap gap-2">
              <Badge
                variant="secondary"
                className="bg-primary/90 text-primary-foreground"
              >
                {course.category}
              </Badge>
              <Badge variant="outline">{course.level}</Badge>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(course.rating)
                        ? "fill-primary text-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm font-medium">
                  {course.rating} ({course.reviewCount} reviews)
                </span>
              </div>
            </div>
            <h1 className="text-3xl font-bold lg:text-4xl">{course.title}</h1>
            <p className="mt-4 text-muted-foreground">{course.description}</p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center">
                <Users className="mr-1 h-4 w-4 text-muted-foreground" />
                <span>{course.studentsCount.toLocaleString()} students</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="mr-1 h-4 w-4 text-muted-foreground" />
                <span>{totalLessons} lessons</span>
              </div>
              <div className="flex items-center">
                <BarChart3 className="mr-1 h-4 w-4 text-muted-foreground" />
                <span>{course.level}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                <span>Total duration: {totalDuration}</span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <Avatar className="h-12 w-12">
                <AvatarImage
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                />
                <AvatarFallback>
                  {course.instructor.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{course.instructor.name}</p>
                <p className="text-sm text-muted-foreground">
                  {course.instructor.title}
                </p>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="relative mb-4 w-full overflow-hidden rounded-lg">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full object-cover"
                    style={{ height: "200px" }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Button variant="secondary" className="gap-2" asChild>
                      <Link href="#">
                        <PlayCircle className="h-5 w-5" />
                        <span>Preview Course</span>
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="mb-4 text-center">
                  <div className="text-3xl font-bold">${course.price}</div>
                </div>
                <Button
                  size="lg"
                  className="mb-4 w-full"
                  onClick={() => setIsEnrolled(!isEnrolled)}
                >
                  {isEnrolled ? "Continue Learning" : "Enroll in Course"}
                </Button>
                <div className="text-center text-sm text-muted-foreground">
                  {isEnrolled ? (
                    <p>You enrolled on April 1, 2025</p>
                  ) : (
                    <p>30-day money-back guarantee • Full lifetime access</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="mt-8">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-6 space-y-6">
              <div>
                <h3 className="mb-4 text-xl font-bold">About This Course</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>{course.longDescription}</p>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-bold">
                  What You&apos;ll Learn
                </h3>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {course.whatYouWillLearn.map((item, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-bold">Requirements</h3>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  {course.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-bold">This Course Includes</h3>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="flex items-center space-x-2">
                    <PlayCircle className="h-5 w-5 text-primary" />
                    <span>{totalLessons} on-demand videos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <span>25 downloadable resources</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Full lifetime access</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <span>Instructor Q&A support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Learning community access</span>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="curriculum" className="mt-6">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold">Course Content</h3>
                  <div className="text-sm text-muted-foreground">
                    {course.modules.length} modules • {totalLessons} lessons •{" "}
                    {totalDuration} total
                  </div>
                </div>

                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  defaultValue="item-0"
                >
                  {course.modules.map((module, index) => (
                    <AccordionItem key={module.id} value={`item-${index}`}>
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex flex-1 items-center justify-between pr-4">
                          <div className="text-left">
                            <span className="font-medium">
                              {index + 1}. {module.title}
                            </span>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {module.lessons.length} lessons • {module.duration}
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 px-1 pt-2">
                          {module.lessons.map((lesson) => (
                            <div
                              key={lesson.id}
                              className="flex items-center justify-between rounded-lg p-2 hover:bg-muted/50"
                            >
                              <div className="flex items-center space-x-3">
                                {lesson.type === "video" ? (
                                  <PlayCircle className="h-5 w-5 text-primary" />
                                ) : lesson.type === "quiz" ? (
                                  <FileText className="h-5 w-5 text-primary" />
                                ) : lesson.type === "assignment" ? (
                                  <FileText className="h-5 w-5 text-primary" />
                                ) : lesson.type === "exam" ? (
                                  <FileText className="h-5 w-5 text-primary" />
                                ) : (
                                  <Award className="h-5 w-5 text-primary" />
                                )}
                                <span>{lesson.title}</span>
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {lesson.duration}
                              </div>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>

            <TabsContent value="instructor" className="mt-6">
              <div className="space-y-6">
                <div className="flex flex-col items-start gap-6 sm:flex-row">
                  <Avatar className="h-24 w-24">
                    <AvatarImage
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                    />
                    <AvatarFallback>
                      {course.instructor.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold">
                      {course.instructor.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {course.instructor.title}
                    </p>
                    <div className="mt-2 flex items-center gap-4">
                      <div className="flex items-center">
                        <Star className="mr-1 h-4 w-4 fill-primary text-primary" />
                        <span className="text-sm font-medium">
                          4.8 Instructor Rating
                        </span>
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="mr-1 h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">
                          1,357 Reviews
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Users className="mr-1 h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">
                          50,297 Students
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">About the Instructor</h4>
                  <p className="text-muted-foreground">
                    {course.instructor.bio}
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-6">
                <div className="flex flex-col items-center justify-between gap-6 rounded-lg bg-muted p-6 sm:flex-row">
                  <div className="text-center sm:text-left">
                    <div className="text-5xl font-bold">{course.rating}</div>
                    <div className="mt-2 flex items-center justify-center sm:justify-start">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(course.rating)
                              ? "fill-primary text-primary"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      Course Rating • {course.reviewCount} Reviews
                    </div>
                  </div>
                  <div className="w-full space-y-2 sm:w-2/3">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-primary text-primary"
                          />
                        ))}
                      </div>
                      <Progress value={70} className="h-2 w-full" />
                      <div className="w-12 text-right text-sm text-muted-foreground">
                        70%
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        {[...Array(4)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-primary text-primary"
                          />
                        ))}
                        <Star className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <Progress value={20} className="h-2 w-full" />
                      <div className="w-12 text-right text-sm text-muted-foreground">
                        20%
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        {[...Array(3)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-primary text-primary"
                          />
                        ))}
                        {[...Array(2)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-muted-foreground"
                          />
                        ))}
                      </div>
                      <Progress value={7} className="h-2 w-full" />
                      <div className="w-12 text-right text-sm text-muted-foreground">
                        7%
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        {[...Array(2)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-primary text-primary"
                          />
                        ))}
                        {[...Array(3)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-muted-foreground"
                          />
                        ))}
                      </div>
                      <Progress value={2} className="h-2 w-full" />
                      <div className="w-12 text-right text-sm text-muted-foreground">
                        2%
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        {[...Array(4)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-muted-foreground"
                          />
                        ))}
                      </div>
                      <Progress value={1} className="h-2 w-full" />
                      <div className="w-12 text-right text-sm text-muted-foreground">
                        1%
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-6">
                  {course.reviews.map((review) => (
                    <div key={review.id} className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarImage
                              src={review.user.avatar}
                              alt={review.user.name}
                            />
                            <AvatarFallback>
                              {review.user.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">
                              {review.user.name}
                            </div>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating
                                      ? "fill-primary text-primary"
                                      : "text-muted-foreground"
                                  }`}
                                />
                              ))}
                              <span className="ml-2 text-xs text-muted-foreground">
                                {review.date}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                      <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm" className="h-8 gap-1">
                          <ThumbsUp className="h-4 w-4" />
                          <span>Helpful ({review.likes})</span>
                        </Button>
                      </div>
                      <Separator />
                    </div>
                  ))}

                  <div className="flex justify-center">
                    <Button variant="outline">Load More Reviews</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Course Info Card - Right Column on large screens, hidden on small */}
        <div className="hidden md:block">
          <div className="sticky top-24">
            <Card>
              <CardContent className="p-6">
                <div className="relative mb-4 w-full overflow-hidden rounded-lg">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full object-cover"
                    style={{ height: "200px" }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Button variant="secondary" className="gap-2" asChild>
                      <Link href="#">
                        <PlayCircle className="h-5 w-5" />
                        <span>Preview Course</span>
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="mb-4 text-center">
                  <div className="text-3xl font-bold">${course.price}</div>
                </div>
                <Button
                  size="lg"
                  className="mb-4 w-full"
                  onClick={() => setIsEnrolled(!isEnrolled)}
                >
                  {isEnrolled ? "Continue Learning" : "Enroll in Course"}
                </Button>
                <div className="text-center text-sm text-muted-foreground">
                  {isEnrolled ? (
                    <p>You enrolled on April 1, 2025</p>
                  ) : (
                    <p>30-day money-back guarantee • Full lifetime access</p>
                  )}
                </div>
              </CardContent>
              <Separator />
              <CardContent className="p-6">
                <h3 className="mb-4 font-semibold">This Course Includes</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <PlayCircle className="h-5 w-5 text-muted-foreground" />
                      <span>Videos</span>
                    </div>
                    <span className="text-sm">{totalLessons} lessons</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                      <span>Total Duration</span>
                    </div>
                    <span className="text-sm">{totalDuration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <span>Resources</span>
                    </div>
                    <span className="text-sm">25 files</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Award className="h-5 w-5 text-muted-foreground" />
                      <span>Certificate</span>
                    </div>
                    <span className="text-sm">Included</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-5 w-5 text-muted-foreground" />
                      <span>Access</span>
                    </div>
                    <span className="text-sm">Lifetime</span>
                  </div>
                </div>
              </CardContent>
              <Separator />
              <CardFooter className="flex justify-between p-6">
                <Button variant="ghost" size="sm" className="h-8 gap-1">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </Button>
                <Button variant="ghost" size="sm" className="h-8 gap-1">
                  <Bookmark className="h-4 w-4" />
                  <span>Wishlist</span>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
