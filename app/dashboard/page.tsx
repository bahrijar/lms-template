"use client";

import Link from "next/link";
import {
  BookOpen,
  ChevronRight,
  Clock,
  MousePointerClick,
  BarChart,
  Calendar,
  CheckCircle2,
  ListChecks,
  MessageCircle,
  Bell,
  AlertCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AreaChart } from "@/components/ui/chart";

// Sample data
const enrolledCourses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    progress: 68,
    image:
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    instructor: "Sarah Johnson",
    lastAccessed: "2 days ago",
    nextLesson: "CSS Flexbox Layout",
    category: "Development",
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    progress: 32,
    image:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    instructor: "Dr. Michael Chen",
    lastAccessed: "Yesterday",
    nextLesson: "Data Visualization with Matplotlib",
    category: "Data Science",
  },
  {
    id: 3,
    title: "UX/UI Design Essentials",
    progress: 12,
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    instructor: "Emily Rodriguez",
    lastAccessed: "1 week ago",
    nextLesson: "User Research Methods",
    category: "Design",
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: "Live Q&A Session: Web Development",
    date: "June 15, 2025",
    time: "2:00 PM - 3:30 PM",
    instructor: "Sarah Johnson",
  },
  {
    id: 2,
    title: "Data Science Project Workshop",
    date: "June 18, 2025",
    time: "10:00 AM - 12:00 PM",
    instructor: "Dr. Michael Chen",
  },
];

const notifications = [
  {
    id: 1,
    type: "announcement",
    title: "New course materials available",
    description: "Web Development course has new resources in Module 4.",
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "reminder",
    title: "Assignment due tomorrow",
    description: "Don't forget to submit your Data Science project.",
    time: "5 hours ago",
  },
  {
    id: 3,
    type: "feedback",
    title: "Your assignment was graded",
    description: "You received feedback on your UX/UI Design project.",
    time: "Yesterday",
  },
];

const chartData = [
  {
    date: "Jan",
    "Study Hours": 12,
  },
  {
    date: "Feb",
    "Study Hours": 18,
  },
  {
    date: "Mar",
    "Study Hours": 15,
  },
  {
    date: "Apr",
    "Study Hours": 22,
  },
  {
    date: "May",
    "Study Hours": 28,
  },
  {
    date: "Jun",
    "Study Hours": 25,
  },
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-8 p-8 pt-6">
        <div className="flex flex-col justify-between space-y-2 md:flex-row md:items-center md:space-y-0">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="h-8">
              <Bell className="mr-2 h-4 w-4" />
              Notifications
              <Badge
                className="ml-2 bg-primary text-primary-foreground"
                variant="secondary"
              >
                3
              </Badge>
            </Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Courses Enrolled
                  </CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">
                    +1 from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Completed Lessons
                  </CardTitle>
                  <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">28</div>
                  <p className="text-xs text-muted-foreground">
                    +8 from last week
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Study Hours
                  </CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">25.3</div>
                  <p className="text-xs text-muted-foreground">
                    +2.5 from last week
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Avg. Completion
                  </CardTitle>
                  <BarChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">37.4%</div>
                  <p className="text-xs text-muted-foreground">
                    +7% from last month
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-7">
              <Card className="md:col-span-4">
                <CardHeader>
                  <CardTitle>Study Progress</CardTitle>
                  <CardDescription>
                    Your monthly learning activity
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px]">
                    <AreaChart
                      data={chartData}
                      categories={["Study Hours"]}
                      index="date"
                      colors={["hsl(var(--chart-1))"]}
                      yAxisWidth={30}
                      showLegend={false}
                    />
                  </div>
                </CardContent>
              </Card>
              <Card className="md:col-span-3">
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>
                    Your scheduled sessions and deadlines
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="flex space-x-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <Calendar className="h-5 w-5 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium leading-none">
                            {event.title}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {event.date} • {event.time}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            By {event.instructor}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full" asChild>
                    <Link href="/calendar">View Full Calendar</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="lg:col-span-4">
                <CardHeader>
                  <CardTitle>Recent Courses</CardTitle>
                  <CardDescription>
                    Your currently active courses
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {enrolledCourses.map((course) => (
                    <div
                      key={course.id}
                      className="flex flex-col space-y-2 rounded-lg border p-3 sm:flex-row sm:space-x-4 sm:space-y-0"
                    >
                      <div className="h-24 w-full overflow-hidden rounded-md sm:w-40">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <Badge variant="outline">{course.category}</Badge>
                            <p className="text-sm text-muted-foreground">
                              Last accessed {course.lastAccessed}
                            </p>
                          </div>
                          <h3 className="font-semibold">{course.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {course.instructor}
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <p>Progress</p>
                            <p className="font-medium">{course.progress}%</p>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full" asChild>
                    <Link href="/dashboard/courses">
                      <span className="mr-1">View All Courses</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle>Recent Notifications</CardTitle>
                  <CardDescription>
                    Your latest updates and alerts
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="flex space-x-3 rounded-lg border p-3"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                        {notification.type === "announcement" ? (
                          <Bell className="h-5 w-5 text-primary" />
                        ) : notification.type === "reminder" ? (
                          <AlertCircle className="h-5 w-5 text-primary" />
                        ) : (
                          <MessageCircle className="h-5 w-5 text-primary" />
                        )}
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="font-medium leading-none">
                          {notification.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {notification.description}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full" asChild>
                    <Link href="/dashboard/notifications">
                      <span className="mr-1">View All Notifications</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="courses" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>My Enrolled Courses</CardTitle>
                <CardDescription>
                  Manage and track your current courses
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {enrolledCourses.map((course) => (
                  <div
                    key={course.id}
                    className="flex flex-col rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex flex-col space-y-1 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
                      <div className="h-16 w-16 overflow-hidden rounded-md">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">{course.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {course.instructor}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0">
                      <div className="mb-2 flex justify-between text-sm">
                        <p>Progress</p>
                        <p className="font-medium">{course.progress}%</p>
                      </div>
                      <Progress value={course.progress} className="h-2 w-40" />
                    </div>
                    <div className="mt-4 flex items-center space-x-2 sm:mt-0">
                      <Button variant="outline" size="sm">
                        <MousePointerClick className="mr-2 h-4 w-4" />
                        Continue
                      </Button>
                      <Button variant="ghost" size="sm">
                        <ListChecks className="mr-2 h-4 w-4" />
                        Details
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="calendar" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>
                  Your upcoming events and deadlines
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Calendar view will be implemented soon...
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="messages" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Messages</CardTitle>
                <CardDescription>
                  Your conversations with instructors and classmates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Messaging system will be implemented soon...
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
