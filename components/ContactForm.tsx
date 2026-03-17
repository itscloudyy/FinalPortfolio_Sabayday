'use client';

import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  // Initialize EmailJS once on component mount
  useEffect(() => {
    emailjs.init('daotetnhnFn25MYu9');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await emailjs.send(
        'service_7gxxf6j',
        'template_1j9nq0p',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'sabaydayj@gmail.com',
        }
      );

      if (response.status === 200) {
        setStatus('success');
        setMessage('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 5000);
      }
    } catch (err) {
      setStatus('error');
      setMessage('Failed to send message. Please try again or email me directly.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Have a question or want to work together? Send me a message!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-700/50 rounded-xl p-8 border border-slate-600">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition"
              placeholder="your@email.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition resize-none"
              placeholder="Your message here..."
            />
          </div>

          {message && (
            <div className={`mb-6 p-4 rounded-lg text-center ${status === 'success'
                ? 'bg-green-500/20 text-green-300'
                : 'bg-red-500/20 text-red-300'
              }`}>
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition transform hover:scale-105 disabled:opacity-50"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6">
          Or email me directly at <a href="mailto:hello@example.com" className="text-cyan-400 hover:underline">hello@example.com</a>
        </p>
      </div>
    </section>
  );
}
