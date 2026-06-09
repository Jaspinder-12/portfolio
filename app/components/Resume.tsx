'use client'

import { motion } from 'framer-motion'
import { Download, FileText, CheckCircle2 } from 'lucide-react'

const skillSummary = [
  { category: 'Programming', items: 'Python, SQL, OOP' },
  { category: 'AI & ML', items: 'NLP, Prompt Engineering, OpenAI API, Scikit-learn, Pandas' },
  { category: 'Backend', items: 'FastAPI, REST APIs, Automation' },
  { category: 'Frontend', items: 'HTML, CSS, Tailwind CSS, React (Learning)' },
  { category: 'QA & Tools', items: 'Selenium, Playwright, PyTest, Git, GitHub, Docker' },
  { category: 'Security', items: 'Cybersecurity Fundamentals, Computer Networks' },
]

export default function Resume() {
  return (
    <section id="resume" className="bg-white dark:bg-slate-950">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Resume</h2>
          <p className="section-subtitle mx-auto">
            Download my full resume or preview key qualifications below.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Download card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 mb-8 text-center"
          >
            <FileText className="mx-auto mb-4 text-blue-500" size={48} />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Jaspinder Singh — Resume
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
              B.Tech CSE • Python Developer • AI Specialist • Data Science Intern
            </p>
            <a
              href="/resume/Jaspinder Singh Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 gradient-bg text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <Download size={18} />
              Download PDF Resume
            </a>
          </motion.div>

          {/* Skills summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="card p-8"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Skills Summary</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skillSummary.map((group, index) => (
                <div key={group.category} className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      {group.category}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{group.items}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
