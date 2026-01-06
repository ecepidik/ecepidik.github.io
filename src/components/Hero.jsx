import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Photo Placeholder */}
        <div className="flex justify-center md:justify-start">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-darkblue to-darkblue_light rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl">📷</span>
                  <p className="text-gray-600 mt-4 text-sm font-medium">Photo Placeholder</p>
                  <p className="text-gray-500 text-xs mt-2">Add your photo here</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <div>
            <h1 className="text-5xl font-bold text-white mb-2">Ece Pidik</h1>
            <p className="text-2xl text-darkblue_light font-semibold">Architect & Senior Full-Stack Developer</p>
          </div>

          <p className="text-lg text-gray-300 leading-relaxed">
            Specializing in event-driven systems, cloud-native platforms, and enterprise integration. I deliver API-driven features end-to-end from design to production, improving reliability, scalability, and security through strong data modeling, testing, and operational readiness.
          </p>

          {/* Contact Info */}
          <div className="space-y-3 pt-4">
            <a
              href="mailto:pidik.ece@gmail.com"
              className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              pidik.ece@gmail.com
            </a>
            <a
              href="tel:+15145154544"
              className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              +1 (514) 515-4544
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-6">
            <a
              href="https://linkedin.com/in/ecepidik"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-lg hover:bg-darkblue hover:text-white transition-colors shadow-md"
              title="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/ecepidik"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-lg hover:bg-darkblue hover:text-white transition-colors shadow-md"
              title="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:pidik.ece@gmail.com"
              className="p-3 bg-gray-800 rounded-lg hover:bg-darkblue hover:text-white transition-colors shadow-md"
              title="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
