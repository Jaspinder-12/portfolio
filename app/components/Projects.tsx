'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Filter } from 'lucide-react'

const projects = [
  {
    title: 'VibeCode Risk Analyzer',
    description: 'AI-powered static analysis system designed to detect risky or vulnerable coding patterns and improve software reliability. Combines AI + cybersecurity concepts for secure development.',
    problem: 'Developers often miss subtle security risks in code. Traditional linters catch syntax errors but miss logical security flaws.',
    tech: ['Python', 'AI', 'Security', 'Automation'],
    github: 'https://github.com/Jaspinder-12/Vibe-Code-Risk-Analyzer',
    demo: null,
    featured: true,
  },
  {
    title: 'Pinterest MCP Server',
    description: 'MCP server that lets AI agents search Pinterest for design, UI/UX, branding, and creative inspiration through a simple MCP interface for tool use.',
    problem: 'AI agents need external sources of visual inspiration. Pinterest is rich in design data but not easily accessible to AI systems.',
    tech: ['Python', 'MCP', 'API Integration', 'AI Agents'],
    github: 'https://github.com/Jaspinder-12/Pintrest-MCP',
    demo: null,
    featured: true,
  },
  {
    title: 'Plagiarism Detection Tool',
    description: 'NLP-based semantic similarity system designed to improve plagiarism detection beyond simple keyword matching using contextual understanding.',
    problem: 'Traditional plagiarism checkers rely on keyword matching, missing paraphrased or semantically similar content.',
    tech: ['Python', 'NLP', 'Scikit-learn', 'Machine Learning'],
    github: 'https://github.com/Jaspinder-12/Plagiarism-Detector',
    demo: null,
    featured: true,
  },
  {
    title: 'Wine Quality Prediction',
    description: 'Machine Learning model for predicting wine quality using chemical properties with Random Forest and SVM algorithms, achieving strong prediction accuracy.',
    problem: 'Wine quality assessment traditionally relies on human experts. ML can provide consistent, data-driven predictions.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Random Forest', 'SVM'],
    github: 'https://github.com/Jaspinder-12/Wine-Quality-ML',
    demo: null,
    featured: false,
  },
  {
    title: 'House Price Prediction',
    description: 'Regression-based ML project for predicting real-estate pricing trends using Linear Regression and Decision Trees with comprehensive data visualization.',
    problem: 'Real estate pricing involves many variables. ML models can identify key pricing factors and estimate property values.',
    tech: ['Python', 'Regression', 'Matplotlib', 'Seaborn'],
    github: 'https://github.com/Jaspinder-12/House-Price-Predictor',
    demo: null,
    featured: false,
  },
  {
    title: "MGR'S Complete",
    description: 'Multi-functional Python project focused on automation, structured workflows, and system-level experimentation with modular architecture principles.',
    problem: 'Complex workflows need modular, maintainable Python solutions that can be extended and automated.',
    tech: ['Python', 'Automation', 'Backend'],
    github: 'https://github.com/Jaspinder-12/MGR-S-Complete',
    demo: null,
    featured: false,
  },
  {
    title: 'AI Job Search Automation System',
    description: 'Automates job searching by scraping listings, matching skills, and generating tailored applications using AI-powered matching algorithms.',
    problem: 'Manual job searching is time-consuming. Automation can match candidates to roles faster and more accurately.',
    tech: ['Python', 'AI Agents', 'Web Scraping', 'Automation'],
    github: null,
    demo: null,
    featured: false,
  },
]

const filters = ['All', 'AI/ML', 'Automation', 'Python', 'Featured']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : activeFilter === 'Featured'
      ? projects.filter(p => p.featured)
      : projects.filter(p => p.tech.some(t => t.toLowerCase().includes(activeFilter.toLowerCase())))

  return (
    <section id="projects" className="bg-white dark:bg-slate-950">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            A selection of projects demonstrating Python, AI, and automation expertise.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeFilter === filter
                  ? 'gradient-bg text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group overflow-hidden"
            >
              {/* Project header with gradient */}
              <div className={`h-32 bg-gradient-to-br ${project.featured ? 'from-blue-600 to-cyan-500' : 'from-slate-600 to-slate-700'} relative`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Filter className="text-white/50" size={48} />
                </div>
                {project.featured && (
                  <span className="absolute top-4 right-4 px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                    Featured
                  </span>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {!project.github && !project.demo && (
                    <span className="text-sm text-slate-400 dark:text-slate-500 italic">
                      Coming soon
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-slate-500 dark:text-slate-400 py-12">
            No projects match this filter.
          </p>
        )}
      </div>
    </section>
  )
}
