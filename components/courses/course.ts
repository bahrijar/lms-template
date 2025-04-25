export const courses = [
  {
    id: "1",
    title: "Introduction to Web Development",
    description:
      "Learn the fundamentals of web development, including HTML, CSS, and JavaScript. This comprehensive course takes you from the basics to building responsive websites.",
    longDescription:
      "This course is designed for beginners who want to start their journey in web development. You'll learn how to structure web content with HTML, style it with CSS, and add interactivity with JavaScript. By the end of the course, you'll be able to build responsive websites that work across different devices and screen sizes.\n\nThe course includes practical projects where you'll apply your knowledge to create real-world websites. You'll also learn best practices for web development, including accessibility, performance optimization, and cross-browser compatibility.",
    instructor: {
      name: "Sarah Johnson",
      title: "Senior Web Developer",
      bio: "Sarah has over 10 years of experience in web development and has worked with companies like Google and Meta. She's passionate about teaching and has helped over 50,000 students learn web development.",
      avatar:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    image:
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.8,
    reviewCount: 235,
    category: "Development",
    price: 49.99,
    duration: "6 weeks",
    level: "Beginner",
    studentsCount: 12549,
    language: "English",
    lastUpdated: "April 2025",
    requirements: [
      "Basic computer skills",
      "No prior programming experience required",
      "A computer with internet access",
    ],
    whatYouWillLearn: [
      "Build websites using HTML, CSS, and JavaScript",
      "Create responsive layouts that work on all devices",
      "Implement interactive features with JavaScript",
      "Understand web development best practices",
      "Deploy websites to the internet",
      "Debug and troubleshoot common web development issues",
    ],
    modules: [
      {
        id: 1,
        title: "Introduction to HTML",
        duration: "1 week",
        lessons: [
          {
            id: 1,
            title: "What is HTML?",
            duration: "10 min",
            type: "video",
          },
          {
            id: 2,
            title: "Basic HTML Structure",
            duration: "15 min",
            type: "video",
          },
          {
            id: 3,
            title: "HTML Elements and Tags",
            duration: "20 min",
            type: "video",
          },
          {
            id: 4,
            title: "HTML Attributes",
            duration: "15 min",
            type: "video",
          },
          {
            id: 5,
            title: "HTML Forms",
            duration: "25 min",
            type: "video",
          },
          {
            id: 6,
            title: "Module 1 Quiz",
            duration: "20 min",
            type: "quiz",
          },
        ],
      },
      {
        id: 2,
        title: "CSS Fundamentals",
        duration: "1 week",
        lessons: [
          {
            id: 7,
            title: "Introduction to CSS",
            duration: "12 min",
            type: "video",
          },
          {
            id: 8,
            title: "CSS Selectors",
            duration: "18 min",
            type: "video",
          },
          {
            id: 9,
            title: "Box Model",
            duration: "20 min",
            type: "video",
          },
          {
            id: 10,
            title: "CSS Layout",
            duration: "25 min",
            type: "video",
          },
          {
            id: 11,
            title: "Responsive Design",
            duration: "30 min",
            type: "video",
          },
          {
            id: 12,
            title: "Module 2 Assignment",
            duration: "45 min",
            type: "assignment",
          },
        ],
      },
      {
        id: 3,
        title: "JavaScript Basics",
        duration: "1 week",
        lessons: [
          {
            id: 13,
            title: "Introduction to JavaScript",
            duration: "15 min",
            type: "video",
          },
          {
            id: 14,
            title: "Variables and Data Types",
            duration: "20 min",
            type: "video",
          },
          {
            id: 15,
            title: "Functions and Control Flow",
            duration: "25 min",
            type: "video",
          },
          {
            id: 16,
            title: "DOM Manipulation",
            duration: "30 min",
            type: "video",
          },
          {
            id: 17,
            title: "Events and Event Handling",
            duration: "25 min",
            type: "video",
          },
          {
            id: 18,
            title: "Module 3 Quiz",
            duration: "20 min",
            type: "quiz",
          },
        ],
      },
      {
        id: 4,
        title: "Building a Responsive Website",
        duration: "1 week",
        lessons: [
          {
            id: 19,
            title: "Project Overview",
            duration: "10 min",
            type: "video",
          },
          {
            id: 20,
            title: "Setting Up the Project",
            duration: "15 min",
            type: "video",
          },
          {
            id: 21,
            title: "HTML Structure",
            duration: "20 min",
            type: "video",
          },
          {
            id: 22,
            title: "Styling with CSS",
            duration: "25 min",
            type: "video",
          },
          {
            id: 23,
            title: "Adding JavaScript Functionality",
            duration: "30 min",
            type: "video",
          },
          {
            id: 24,
            title: "Testing and Debugging",
            duration: "20 min",
            type: "video",
          },
          {
            id: 25,
            title: "Final Project Submission",
            duration: "60 min",
            type: "assignment",
          },
        ],
      },
      {
        id: 5,
        title: "Advanced Topics",
        duration: "1 week",
        lessons: [
          {
            id: 26,
            title: "CSS Preprocessors",
            duration: "20 min",
            type: "video",
          },
          {
            id: 27,
            title: "CSS Frameworks",
            duration: "25 min",
            type: "video",
          },
          {
            id: 28,
            title: "JavaScript Libraries",
            duration: "30 min",
            type: "video",
          },
          {
            id: 29,
            title: "Web Accessibility",
            duration: "25 min",
            type: "video",
          },
          {
            id: 30,
            title: "Performance Optimization",
            duration: "20 min",
            type: "video",
          },
          {
            id: 31,
            title: "Module 5 Quiz",
            duration: "20 min",
            type: "quiz",
          },
        ],
      },
      {
        id: 6,
        title: "Course Wrap-up",
        duration: "1 week",
        lessons: [
          {
            id: 32,
            title: "Course Review",
            duration: "15 min",
            type: "video",
          },
          {
            id: 33,
            title: "Next Steps in Web Development",
            duration: "20 min",
            type: "video",
          },
          {
            id: 34,
            title: "Final Exam",
            duration: "60 min",
            type: "exam",
          },
          {
            id: 35,
            title: "Course Completion Certificate",
            duration: "5 min",
            type: "certificate",
          },
        ],
      },
    ],
    reviews: [
      {
        id: 1,
        user: {
          name: "Michael Brown",
          avatar:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        rating: 5,
        date: "May 10, 2025",
        comment:
          "This course was exactly what I needed to start my web development journey. Sarah explains complex concepts in a way that's easy to understand, and the projects helped me apply what I learned. Highly recommended!",
        likes: 24,
      },
      {
        id: 2,
        user: {
          name: "Jennifer Lee",
          avatar:
            "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        rating: 4,
        date: "April 28, 2025",
        comment:
          "Great course overall. I'm giving it 4 stars because some of the JavaScript sections felt a bit rushed. However, the HTML and CSS parts were excellent, and I feel much more confident in my web development skills now.",
        likes: 12,
      },
      {
        id: 3,
        user: {
          name: "David Wilson",
          avatar:
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        rating: 5,
        date: "April 15, 2025",
        comment:
          "I had some experience with HTML and CSS before, but this course helped me fill in the gaps and learn JavaScript properly. The final project was challenging but extremely rewarding. Thanks, Sarah!",
        likes: 18,
      },
    ],
  },
  // Other courses would be defined here
];
