import {
  CheckCircle,
  Users,
  BookOpen,
  Award,
  Clock,
  Globe,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Diverse Course Library",
      description:
        "Access thousands of courses across multiple disciplines, from technical skills to business leadership.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Expert Instructors",
      description:
        "Learn from industry professionals and academics who bring real-world experience to their teaching.",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Learn at Your Pace",
      description:
        "Self-paced learning allows you to study whenever it fits your schedule, with lifetime access to course materials.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Interactive Assessments",
      description:
        "Reinforce your learning with quizzes, assignments, and hands-on projects that test your knowledge.",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Certificates",
      description:
        "Earn recognized certificates upon course completion to showcase your achievements to employers.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Global Community",
      description:
        "Connect with fellow learners worldwide through discussion forums and collaborative projects.",
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Why Choose EduLearn
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Features Designed for Better Learning
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Our platform offers everything you need to enhance your learning
            journey.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
