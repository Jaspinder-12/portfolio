'use client'

import { motion } from 'framer-motion'
import { Download, Mail, Github, Linkedin } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              Open to Remote Opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Hi, I&apos;m <span className="gradient-text">Jaspinder Singh</span>
            </h1>

            <h2 className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-6">
              Python Developer | AI Developer | Data Science Intern
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-xl">
              Final-year B.Tech student passionate about building AI-powered systems,
              intelligent automation, and secure backend solutions with Python.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/resume/Jaspinder Singh Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 gradient-bg text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                <Download size={18} />
                Download Resume
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                <Mail size={18} />
                Contact Me
              </a>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/jaspinder-12"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-slate-600 dark:text-slate-300 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/jaspinder29"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-slate-600 dark:text-slate-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Profile image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-1">
                <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <span className="text-6xl sm:text-7xl">👨‍💻</span>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700">
                <p className="text-sm font-medium text-slate-900 dark:text-white">Python Developer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
