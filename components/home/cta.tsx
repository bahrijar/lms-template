import Link from "next/link";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="px-4 md:px-6">
        <div className="relative overflow-hidden rounded-lg bg-primary p-8 md:p-12 lg:p-16">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
          <div className="relative z-10 flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl">
                Ready to Start Your Learning Journey?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/90">
                Join thousands of students and transform your career with
                in-demand skills. Get unlimited access to all courses for one
                affordable subscription.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
                asChild
              >
                <Link href="/auth/signup">Sign Up Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 bg-primary text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/courses">Explore Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
