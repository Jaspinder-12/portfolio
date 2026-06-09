'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: 'Jaspinder showed exceptional problem-solving skills during his internship. His Python scripts saved our team hours of manual work.',
    author: 'Mentor at Hoping Minds',
    role: 'Data Science Lead',
  },
  {
    quote: 'One of the most dedicated learners I\'ve worked with. He completed the cybersecurity simulation with a perfect score and great attention to detail.',
    author: 'Mastercard Simulation Facilitator',
    role: 'Cybersecurity Program',
  },
  {
    quote: 'Great teammate and quick learner. Jaspinder mentored several junior developers and always explained complex concepts clearly.',
    author: 'Peer Developer',
    role: 'Collaborator',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Recommendations</h2>
          <p className="section-subtitle mx-auto">
            What mentors, colleagues, and collaborators say about working with me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6"
            >
              <Quote className="text-blue-500 mb-4" size={32} />
              <p className="text-slate-700 dark:text-slate-300 mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">{testimonial.author}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
