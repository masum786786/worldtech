"use client";
import {
  FaBrain,
  FaCogs,
  FaPencilRuler,
  FaServer,
  FaCode,
  FaCheckCircle,
  FaProjectDiagram,
  FaShieldAlt,
} from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const services = [
  {
    name: "App Development",
    description: "Building high-performance mobile apps using React Native.",
    icon: FaBrain,
  },
  {
    name: "Web Development",
    description: "Creating fast, responsive, and user-friendly web interfaces.",
    icon: FaPencilRuler,
  },
  {
    name: "DevOps",
    description: "Accelerating delivery with CI/CD, automation, and IaC.",
    icon: FaCogs,
  },
  {
    name: "Infrastructure Design",
    description: "Designing secure, scalable, and cloud-ready architectures.",
    icon: FaServer,
  },
  {
    name: "Programming Logic",
    description: "Writing clean, efficient, and maintainable application logic.",
    icon: FaCode,
  },
  {
    name: "Quality Verification",
    description: "Ensuring reliability through unit, integration, and E2E testing.",
    icon: FaCheckCircle,
  },
  {
    name: "Project Management",
    description: "Managing timelines, teams, and deliverables effectively.",
    icon: FaProjectDiagram,
  },
  {
    name: "Cybersecurity",
    description: "Securing systems with proactive protection and risk control.",
    icon: FaShieldAlt,
  },
];

const ServiceCard = ({ name, description, Icon }) => (
  <div
    className="
      relative p-6 sm:p-8 rounded-2xl
      border border-gray-200 dark:border-gray-700
      bg-floralwhite dark:bg-gray-900
      hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 dark:hover:from-gray-800 dark:hover:to-gray-700
      hover:border-blue-500 hover:shadow-xl hover:scale-[1.03]
      transition-all duration-300 ease-out
      flex flex-col justify-between
    "
  >
    {/* Top-right arrow icon */}
    <FaArrowUpRightFromSquare className="absolute top-4 right-4 w-5 h-5 text-blue-500" />

    {/* Main icon */}
    <div className="mb-4">
      <Icon className="w-10 h-10 text-blue-500" />
    </div>

    {/* Text content */}
    <div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {name}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

export default function ServicesGrid() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-floralwhite-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-blue-500 text-sm font-semibold uppercase tracking-wider mb-2">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            How we{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              create value
            </span>
          </h2>
        </div>

        {/* Responsive Grid */}
        <div
          className="
            grid gap-6 sm:gap-8
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          {services.map((service) => (
            <ServiceCard
              key={service.name}
              name={service.name}
              description={service.description}
              Icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
