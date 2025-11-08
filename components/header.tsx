"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
            G
          </div>
          <span className="font-bold text-lg hidden sm:inline">Guru Branding</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-foreground hover:text-primary transition">
            Services
          </Link>
          <Link href="#about" className="text-foreground hover:text-primary transition">
            About
          </Link>
          <Link href="#contact" className="text-foreground hover:text-primary transition">
            Contact
          </Link>
          <a
            href="tel:0798816285"
            className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-opacity-90 transition"
          >
            Call Us
          </a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link href="#services" className="text-foreground hover:text-primary transition">
                Services
              </Link>
              <Link href="#about" className="text-foreground hover:text-primary transition">
                About
              </Link>
              <Link href="#contact" className="text-foreground hover:text-primary transition">
                Contact
              </Link>
              <a
                href="tel:0798816285"
                className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-opacity-90 transition text-center"
              >
                Call Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
