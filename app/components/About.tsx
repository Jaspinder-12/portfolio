'use client'

import { motion } from 'framer-motion'
import { Code, Brain, Shield, TrendingUp, Users, Award } from 'lucide-react'

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: 'Python Developer',
      description: 'Final-year B.Tech (CSE) student building practical AI/ML solutions with clean, maintainable Python code.',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Focused on LLMs, prompt engineering, NLP, and MCP integrations for intelligent automation.',
    },
    {
      icon: Shield,
      title: 'Cybersecurity Mindset',
      description: 'Completed Mastercard Cybersecurity Simulation with 100% score; incorporates security thinking in code.',
    },
    {
      icon: TrendingUp,
      title: 'Data Science Intern',
      description: '6-month intern at Hoping Minds cleaning data, building ML pipelines, and mentoring peers in Python.',
    },
    {
      icon: Users,
      title: 'Team Leader',
      description: 'Led teams in customer-facing environments; strong communication & training skills.',
    },
    {
      icon: Award,
      title: 'Continuous Learner',
      description: 'Currently upskilling in FastAPI, Docker, RAG, vector DBs, and scalable system design.',
    },
  ]

  return (
    <section id="about" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">
            A driven computer science student blending Python engineering, AI innovation, and cybersecurity awareness.
          </p>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card p-8 sm:p-12 mb-12"
        >
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 mb-4">
              I&apos;m <strong>Jaspinder Singh</strong>, a final-year B.Tech Computer Science student at Shaheed Bhagat Singh Technical Campus based in <strong>Punjab, India</strong>.
              My journey started with customer support and operations, where I developed strong problem-solving and communication skills. Over time, I transitioned into <strong>Data Science</strong> and now focus intensively on <strong>Python development, AI systems, and intelligent automation</strong>.
            </p>
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300">
              I&apos;m passionate about building real-world AI-powered tools — from AI code analyzers and plagiarism detection systems to MCP servers and ML prediction models. I also maintain a strong curiosity in cybersecurity and backend engineering, making me a well-rounded developer ready for remote opportunities.
            </p>
          </div>
        </motion.div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                <item.icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
