import Link from "next/link";
import { Button } from "@/components/ui/button";
import CourseCarousel from "@/components/home/course-carousel";
import Features from "@/components/home/features";
import Testimonials from "@/components/home/testimonials";
import Statistics from "@/components/home/statistics";
import CTA from "@/components/home/cta";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5" />
        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 sm:py-40 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              <span className="block text-primary">Learn Without Limits</span>
              <span className="block">Anytime, Anywhere</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Access world-class education with our comprehensive learning
              platform. Explore courses taught by industry experts and take your
              skills to the next level.
            </p>
            <div className="mt-8 flex gap-4">
              <Button asChild size="lg">
                <Link href="/courses">Explore Courses</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/auth/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="bg-muted/50 py-16">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Featured Courses
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Expand Your Knowledge
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Discover our most popular courses and start learning today.
            </p>
          </div>
          <CourseCarousel />
          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Statistics */}
      <Statistics />

      {/* Testimonials */}
      <Testimonials />

      {/* Call to Action */}
      <CTA />
    </div>
  );
}
