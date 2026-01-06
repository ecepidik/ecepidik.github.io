import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create mailto link
    const subject = encodeURIComponent('Portfolio Contact')
    const body = encodeURIComponent(`Name: ${formData.name}\n\nMessage: ${formData.message}`)
    window.location.href = `mailto:pidik.ece@gmail.com?subject=${subject}&body=${body}`
    
    setFormData({ name: '', email: '', message: '' })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-5 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-darkblue text-white">
                  <Mail className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-darkblue">Email</h4>
                <a
                  href="mailto:pidik.ece@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  pidik.ece@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-darkblue text-white">
                  <Phone className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-darkblue">Phone</h4>
                <a
                  href="tel:+15145154544"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +1 (514) 515-4544
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-darkblue text-white">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-darkblue">Location</h4>
                <p className="text-gray-400">Montreal, Canada</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-gray-700">
              <h4 className="text-lg font-semibold text-darkblue mb-4">Connect Online</h4>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/ecepidik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 border border-darkblue text-white rounded-lg hover:bg-darkblue hover:text-white transition-colors font-semibold"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/ecepidik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 border border-darkblue text-white rounded-lg hover:bg-darkblue hover:text-white transition-colors font-semibold"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-600 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-darkblue focus:border-darkblue outline-none transition placeholder-gray-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-600 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-darkblue focus:border-darkblue outline-none transition placeholder-gray-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-darkblue focus:border-darkblue outline-none transition resize-none bg-gray-800 text-white"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>

              {submitted && (
                <div className="p-4 bg-green-900 border border-green-700 rounded-lg text-green-100 text-sm">
                  ✓ Message sent! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
