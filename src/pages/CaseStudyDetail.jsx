import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const CaseStudiesData = [
  {
    id: 1,
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    purpose:
      "To create a seamless online shopping experience that bridges modern design with powerful backend infrastructure for scalable performance.",
    designProcess:
      "Started with wireframes focusing on UX flow from product discovery to checkout. Designed UI in Figma, emphasizing clarity and trust. Used component-based design to ensure reusability across sections.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Framer Motion"],
    finalVisuals: [
      "https://images.pexels.com/photos/17485350/pexels-photo-17485350.jpeg?_gl=1*wdhafp*_ga*MTY1MDg0MTYxMi4xNzYxNjUxOTM1*_ga_8JE65Q40S6*czE3NjE2NTE5MzQkbzEkZzEkdDE3NjE2NTI1MjIkajQxJGwwJGgw",
      "https://images.unsplash.com/photo-1586880244543-0528a802be97?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    ],
  },
  {
    id: 2,
    slug: "ai-analytics-dashboard",
    title: "AI Analytics Dashboard",
    purpose:
      "Provide enterprises with predictive insights through dynamic and visually engaging dashboards.",
    designProcess:
      "Collaborated with data scientists to visualize KPIs effectively. Created interactive charts using D3.js and designed a minimal UI for data clarity.",
    technologies: ["React", "D3.js", "Python", "TensorFlow", "GSAP"],
    finalVisuals: [
      "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1115",
    ],
  },
  {
    id: 3,
    slug: "mobile-fitness-app",
    title: "Mobile Fitness App",
    purpose:
      "Encourage users to adopt healthier lifestyles through AI-personalized workouts and performance tracking.",

    designProcess:
      "Conducted user research to identify motivational triggers. Focused on clean UI, gamified progress tracking, and dynamic charts. Used Figma for prototypes.",

    technologies: [
      "React Native",
      "Firebase",
      "TensorFlow Lite",
      "Styled Components",
    ],
    finalVisuals: [
      "https://plus.unsplash.com/premium_photo-1712762000039-10cd30578841?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "https://plus.unsplash.com/premium_photo-1712761996875-3057cee4f6af?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "https://images.pexels.com/photos/4162581/pexels-photo-4162581.jpeg?_gl=1*1qqags*_ga*MTY1MDg0MTYxMi4xNzYxNjUxOTM1*_ga_8JE65Q40S6*czE3NjE2NTE5MzQkbzEkZzEkdDE3NjE2NTMxNDAkajI1JGwwJGgw",
    ],
  },
  {
    id: 4,
    slug: "saas-management-system",
    title: "SaaS Management System",
    purpose:
      "Enable enterprises to streamline workflows, manage projects, and track analytics in a single scalable platform.",

    designProcess:
      "Defined UI hierarchy and data flow diagrams to handle complex multi-tenant dashboards. Designed modular UI patterns for reuse.",
    technologies: ["Next.js", "PostgreSQL", "GraphQL", "AWS", "Tailwind CSS"],
    finalVisuals: [
      "https://images.pexels.com/photos/8284721/pexels-photo-8284721.jpeg?_gl=1*h77f3y*_ga*MTY1MDg0MTYxMi4xNzYxNjUxOTM1*_ga_8JE65Q40S6*czE3NjE2NTE5MzQkbzEkZzEkdDE3NjE2NTMyODgkajUwJGwwJGgw",
      "https://images.pexels.com/photos/8284724/pexels-photo-8284724.jpeg?_gl=1*bq3c4z*_ga*MTY1MDg0MTYxMi4xNzYxNjUxOTM1*_ga_8JE65Q40S6*czE3NjE2NTE5MzQkbzEkZzEkdDE3NjE2NTMzOTYkajEzJGwwJGgw",
    ],
  },
];

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const project = CaseStudiesData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#111827] text-white">
        <h1 className="text-[#f3f4f6] text-3xl font-bold mb-4">
          Project Not Found
        </h1>
        <Link
          to="/case-studies"
          className="text-[#9ca3af] hover:text-[#a855f7] transition-colors font-medium text-[18px]"
        >
          ← Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111827] text-[#f3f4f6] font-inter">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 sm:px-10 py-16 relative z-10"
      >
        {/* Going Back Link */}
        <Link
          to="/case-studies"
          className="inline-block text-[#9ca3af] hover:text-[#a855f7] transition-colors font-medium mb-10 mt-20 text-[18px]"
        >
          ← Back to Case Studies
        </Link>

        {/* Project Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold mb-4"
        >
          <span className="text-transparent bg-clip-text bg-[#c084fc]">
            {project.title}
          </span>
        </motion.h1>

        {/* Intro Line */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[21px] text-[#9ca3af] max-w-2xl mb-12 mt-6"
        >
          Dive deeper into the process and vision behind this creation
        </motion.p>

        {/* Info Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Purpose */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            // whileHover={{
            //   scale: 1.05,
            //   boxShadow: "0 0 25px #c084fc",
            // }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-[#1f2937] border border-[#374151] transition-all duration-300 
                                     hover:border-[#c084fc] hover:shadow-xl hover:shadow-[#c084fc]/30 transform hover:-translate-y-1"
          >
            <h3 className="text-[#f3f4f6] text-xl font-semibold mb-3">
              Purpose
            </h3>
            <p className="text-[#9ca3af] leading-relaxed">{project.purpose}</p>
          </motion.div>

          {/* Desgin Process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            // whileHover={{
            //   scale: 1.05,
            //   boxShadow: "0 0 25px rgba(192,132,252,0.3)",
            // }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-[#1f2937] border border-[#374151] transition-all duration-300 
                                     hover:border-[#c084fc] hover:shadow-xl hover:shadow-[#c084fc]/30 transform hover:-translate-y-1"
          >
            <h3 className="text-[#f3f4f6] text-xl font-semibold mb-3">
              Design Process
            </h3>
            <p className="text-[#9ca3af] leading-relaxed">
              {project.designProcess}
            </p>
          </motion.div>
        </div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          // whileHover={{
          //   scale: 1.05,
          //   boxShadow: "0 0 25px rgba(192,132,252,0.3)",
          // }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl bg-[#1f2937] border border-[#374151] transition-all duration-300 
                                     hover:border-[#c084fc] hover:shadow-xl hover:shadow-[#c084fc]/30 transform hover:-translate-y-1"
        >
          <h3 className="text-[#f3f4f6] text-xl font-semibold mb-3">
            Technologies Used
          </h3>
          <ul className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="px-4 py-2 rounded-full text-sm bg-[#c084fc]/50 text-[#f3f4f6]"
              >
                {tech}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Final Visuals */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-[#c084fc] text-[24px] font-bold mb-4">
            Final Visuals
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {project.finalVisuals.map((url, idx) => (
              <motion.img
                key={idx}
                src={url}
                alt={`visual-${idx}`}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(192,132,252,0.3)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="rounded-2xl border border-[#374151] shadow-xl"
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mt-32 mb-20 text-center p-10 sm:p-16 rounded-3xl bg-[#1f2937] backdrop-blur-sm shadow-2xl border border-[#374151]"
        >
          <h3 className="text-3xl sm:text-4xl font-extrabold text-[#f3f4f6] mb-4">
            Inspired by this work?
          </h3>
          <p className="text-xl text-[#9ca3af] mb-8 max-w-2xl mx-auto">
            Use this case study as a template for your next project, and
            experiment with motion, gradients, and immersive layouts.
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(255,122,162,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-[#ff7aa2] to-[#ff4d8b] text-white font-bold text-lg rounded-full shadow-lg transition-all duration-300 hover:from-[#ff8fb1] hover:to-[#ff5d96]"
          >
            Start A New Project →
          </motion.button>
        </motion.div>
      </motion.div>

      <footer className="py-10 text-center text-sm text-[#9ca3af] border-t border-[#374151]">
        © {new Date().getFullYear()} Fluxxion Studio. All rights reserved. Built
        with 💻 and ✨.
      </footer>
    </div>
  );
}
