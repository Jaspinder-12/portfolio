'use client'

import { motion } from 'framer-motion'
import { Database, Server, Globe, Bug, Wrench, Headphones, TrendingUp } from 'lucide-react'

const skillCategories = [
  {
    title: 'Programming',
    icon: Globe,
    skills: ['Python', 'SQL', 'OOP Concepts'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'AI & Automation',
    icon: Database,
    skills: [
      'Prompt Engineering',
      'OpenAI API',
      'AI Agents',
      'MCP Servers',
      'Workflow Automation',
      'NLP',
      'Scikit-learn',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['FastAPI (Learning)', 'REST APIs', 'Authentication', 'Automation Scripts'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Frontend',
    icon: Globe,
    skills: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React (Learning)'],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Data Science & ML',
    icon: TrendingUp,
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'ML Models', 'EDA', 'Matplotlib'],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'QA & Tools',
    icon: Bug,
    skills: ['Selenium', 'Playwright', 'PyTest', 'API Testing', 'Git', 'GitHub', 'Docker (Learning)'],
    color: 'from-red-500 to-rose-500',
  },
  {
    title: 'Support & Operations',
    icon: Headphones,
    skills: ['Technical Support', 'Troubleshooting', 'Incident Management', 'Service Desk', 'Customer Communication'],
    color: 'from-teal-500 to-cyan-500',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-white dark:bg-slate-950">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle mx-auto">
            Verified skills from resume, GitHub repositories, and project analysis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="text-white" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="badge hover:scale-105 transition-transform cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
