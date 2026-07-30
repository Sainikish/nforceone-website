import type { ServicePage } from "@/lib/types";

export const databaseManagement: ServicePage = {
  slug: "database-management",
  title: "Database Management",
  category: "Platform & Consulting",
  metaDescription:
    "Database management services that reduce risk, improve scalability, and deliver peace of mind and peak performance.",
  icon: "database",
  heroEyebrow: "Platform & Consulting",
  heroHeadline: "Database Management",
  heroSubtext:
    "A poorly maintained database creates risk, hinders scalability, and can cost you customers. Our database management services deliver peace of mind and peak performance.",
  why: {
    heading: "Why Your Business Needs Professional Database Management",
    paragraphs: [
      "A poorly maintained database creates risk, hinders scalability, and can cost you customers. NForceOne's database management services deliver peace of mind and peak performance.",
    ],
  },
  typesSection: {
    heading: "Types of Database Management Systems We Work With",
    items: [
      { icon: "server", title: "Relational Databases (RDBMS)", description: "MySQL, PostgreSQL, and SQL Server for transactional applications." },
      { icon: "layers", title: "NoSQL Databases", description: "MongoDB and Redis for unstructured or changing data." },
      { icon: "cloud", title: "Cloud-Managed Databases", description: "Amazon RDS, Azure SQL, and Firebase." },
      { icon: "network", title: "Distributed Databases", description: "Cassandra and CockroachDB for high availability and fault tolerance." },
      { icon: "zap", title: "In-Memory Databases", description: "Redis and Memcached for real-time analytics and caching." },
      { icon: "building-2", title: "Industry-Specific Database Solutions", description: "Solutions for banking, healthcare, logistics, and telecom." },
    ],
  },
  toolsSection: {
    heading: "Tools and Techniques We Use",
    items: ["MySQL Workbench", "pgAdmin", "MongoDB Compass", "phpMyAdmin", "DBeaver", "AWS RDS Console", "RedisInsight", "Azure Data Studio"],
  },
  impact: {
    heading: "Our Impact",
    text: "Drive greater revenues, reduce inefficiencies and costs, maximize profits.",
  },
};
