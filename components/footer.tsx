export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-foreground font-bold">
                G
              </div>
              <span className="font-bold">Guru Branding</span>
            </div>
            <p className="text-background/70">Turning everyday items into memorable brands and moments.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="space-y-2 text-background/70">
              <a href="#services" className="block hover:text-background transition">
                Services
              </a>
              <a href="#about" className="block hover:text-background transition">
                About
              </a>
              <a href="#contact" className="block hover:text-background transition">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-2 text-background/70">
              <a href="tel:0798816285" className="block hover:text-background transition">
                +250 798 816 285
              </a>
              <a
                href="mailto:gurubrandingandmarketinghouse@gmail.com"
                className="block hover:text-background transition"
              >
                gurubrandingandmarketinghouse@gmail.com
              </a>
              <p>Kigali, Rwanda</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/70">
          <p>&copy; {currentYear} Guru Branding & Marketing House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
