'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award } from 'lucide-react'

const experiences = [
  {
    type: 'work',
    icon: Briefcase,
    title: 'Data Science Intern',
    company: 'Hoping Minds',
    duration: 'Jan 2024 – Jun 2024',
    location: 'Mohali, India',
    details: [
      'Cleaned and processed real-world datasets, improving workflow efficiency',
      'Built analysis pipelines and improved ML preprocessing quality',
      'Mentored 10+ peers in Python debugging and best practices',
      'Worked on practical data science and ML tasks',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    type: 'work',
    icon: Award,
    title: 'Cybersecurity Simulation Trainee',
    company: 'Mastercard',
    duration: 'Nov 2023',
    location: 'Remote',
    details: [
      'Designed phishing detection scenarios and vulnerability simulations',
      'Explored social engineering attack patterns',
      'Achieved 100% simulation assessment score',
      'Gained practical security awareness and analysis skills',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    type: 'work',
    icon: Briefcase,
    title: 'Crew Leader & Trainer',
    company: 'Burger King',
    duration: '2022 – 2023',
    location: 'Moga, India',
    details: [
      'Led a team of 15+ employees in daily operations',
      'Developed strong leadership, decision-making, and communication skills',
      'Managed customer escalations and service delivery',
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    type: 'education',
    icon: GraduationCap,
    title: 'B.Tech in Computer Science',
    company: 'Shaheed Bhagat Singh Technical Campus',
    duration: 'Expected 2026',
    location: 'Punjab, India',
    details: [
      'Relevant coursework: Cybersecurity, Computer Networks, Databases',
      'Active in technical projects and peer mentoring',
    ],
    color: 'from-indigo-500 to-purple-500',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle mx-auto">
            My professional journey combining technical development with operational experience.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <div className="card p-6 hover:shadow-lg transition-shadow">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-3 bg-gradient-to-r ${exp.color} text-white`}>
                      {exp.duration}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
                      {exp.company}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                      {exp.location}
                    </p>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      {exp.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          <span className={index % 2 === 0 ? 'md:text-right' : ''}>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-slate-900 border-4 border-blue-500 items-center justify-center z-10">
                  <exp.icon className="text-blue-600 dark:text-blue-400" size={20} />
                </div>

                {/* Empty space for opposite side */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
