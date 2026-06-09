'use client'

import { motion } from 'framer-motion'
import { Github, Code2, GitCommit, Star } from 'lucide-react'

const githubStats = {
  username: 'jaspinder-12',
  repos: 6,
  stars: 552,
  followers: 11,
  following: 38,
  topLanguages: ['Python', 'HTML', 'Jupyter Notebook'],
}

export default function GitHubStats() {
  return (
    <section id="github" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">GitHub Activity</h2>
          <p className="section-subtitle mx-auto">
            My open source contributions and coding activity.
          </p>
        </motion.div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Repositories', value: githubStats.repos, icon: Code2 },
            { label: 'Stars Earned', value: githubStats.stars, icon: Star },
            { label: 'Followers', value: githubStats.followers, icon: Github },
            { label: 'Following', value: githubStats.following, icon: GitCommit },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="card p-6 text-center"
            >
              <stat.icon className="mx-auto mb-2 text-blue-500" size={24} />
              <p className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* GitHub readme stats cards (static display) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-6"
          >
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Most Used Languages</h3>
            <div className="space-y-3">
              {githubStats.topLanguages.map((lang) => {
                const width = lang === 'Python' ? '90%' : lang === 'HTML' ? '10%' : '5%'
                const color = lang === 'Python' ? 'from-blue-500 to-cyan-500' : 'from-yellow-500 to-orange-500'
                return (
                  <div key={lang} className="flex items-center gap-3">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 w-32 truncate">{lang}</span>
                    <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${color}`}
                        style={{ width }}
                      />
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 w-10 text-right">
                      {parseInt(width)}
                    </span>
                  </div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="card p-6"
          >
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Top Repositories</h3>
            <ul className="space-y-3">
              {['Vibe-Code-Risk-Analyzer', 'Pintrest-MCP', 'MGR-S-Complete', 'Plagiarism-Detector'].map((repo) => (
                <li key={repo} className="flex items-center justify-between">
                  <a
                    href={`https://github.com/${githubStats.username}/${repo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline truncate"
                  >
                    {repo}
                  </a>
                  <Github size={14} className="text-slate-400 flex-shrink-0" />
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* View GitHub link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://github.com/jaspinder-12"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <Github size={18} />
            View Full GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  )
}
