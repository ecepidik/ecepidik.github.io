export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-darkblue text-white pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="border-t border-darkblue_light pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-90">
              © {currentYear} Ece Pidik. All rights reserved.
            </p>
            <p className="text-sm opacity-90">
              Built with React + Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
