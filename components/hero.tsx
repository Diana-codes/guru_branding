export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-muted min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full border-2 border-primary"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full border-2 border-secondary"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center py-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-pretty">
          We Take Your Brand to Its <span className="text-primary">Audience</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          Turn everyday items into memorable brands and moments. We bring creativity and strategy together to help your
          business stand out and stay seen.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-opacity-90 transition font-semibold"
          >
            Get Started
          </a>
          <a
            href="#services"
            className="border-2 border-secondary text-secondary px-8 py-3 rounded-lg hover:bg-secondary/10 transition font-semibold"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  )
}
