import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-md shadow-md z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-darkblue">Ece Pidik</h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6 text-darkblue" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 border-t border-gray-700 pt-4">
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-300 hover:text-white transition-colors font-medium text-left"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-300 hover:text-white transition-colors font-medium text-left"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors font-medium text-left"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
