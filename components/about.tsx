export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Us</h2>
            <p className="text-lg text-muted-foreground mb-4">
              We are a rising branding and marketing studio based in Kigali, dedicated to transforming everyday items
              into memorable brands and moments.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              At Guru Branding & Marketing House, we bring creativity and strategy together to help businesses stand out
              and stay seen. We're inspired by the power of simple ideas — turning ordinary things into meaningful brand
              experiences that connect people and create impact.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-primary mb-2">Who We Work With</h3>
                <p className="text-muted-foreground">
                  Event planners, small businesses, restaurants, hotels, shopping malls, and motels across Kigali and
                  beyond.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg p-8 flex items-center justify-center min-h-[200px]">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">14+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-lg p-8 flex items-center justify-center min-h-[200px]">
              <div className="text-center">
                <p className="text-4xl font-bold text-secondary mb-2">14+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg p-8 flex items-center justify-center min-h-[200px]">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">9+</p>
                <p className="text-sm text-muted-foreground">Months Experience</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-lg p-8 flex items-center justify-center min-h-[200px]">
              <div className="text-center">
                <p className="text-4xl font-bold text-secondary mb-2">24/7</p>
                <p className="text-sm text-muted-foreground">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
