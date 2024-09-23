export interface Project {
  userId: number;
  id: number;
  name: string;
  description: string;
}

export const PROJECTS: Project[] = [
  {
    userId: 1,
    id: 1,
    name: "Inventory Management System",
    description: "A system to manage product inventory across multiple warehouses.",
  },
  {
    userId: 2,
    id: 2,
    name: "E-commerce Website",
    description: "An online platform for buying and selling products.",
  },
  {
    userId: 3,
    id: 3,
    name: "Task Tracker App",
    description: "An app for tracking tasks and project deadlines.",
  },
  {
    userId: 4,
    id: 4,
    name: "Social Media Platform",
    description: "A platform for connecting users through posts and messages.",
  },
  {
    userId: 5,
    id: 5,
    name: "Online Learning System",
    description: "A platform for students to access online courses and materials.",
  },
  {
    userId: 6,
    id: 6,
    name: "Weather Forecast App",
    description: "An app providing real-time weather forecasts and alerts.",
  },
  {
    userId: 7,
    id: 7,
    name: "Personal Finance Tracker",
    description: "A tool for managing personal finances and tracking expenses.",
  },
  {
    userId: 8,
    id: 8,
    name: "Travel Booking System",
    description: "A system to search, book, and manage travel accommodations.",
  },
  {
    userId: 9,
    id: 9,
    name: "Health and Fitness App",
    description: "An app for tracking workouts, diet, and overall health goals.",
  },
  {
    userId: 10,
    id: 10,
    name: "Event Management System",
    description: "A platform to plan, organize, and manage events and conferences.",
  },
];
