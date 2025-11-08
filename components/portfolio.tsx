export default function Portfolio() {
  return (
    <section className="py-16 bg-card">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Our Work</h2>
          <p className="text-lg text-muted-foreground">
            Bringing brands to life through thoughtful design and strategic branding
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="bg-gradient-to-br from-muted to-muted/50 rounded-lg overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-08%20at%2017.50.46-rahh2xBXIBP5b63jGUxqYmUHZBZWYs.jpeg"
              alt="Guru Branding portfolio showcase with branded merchandise including tote bag, coffee cup, and tags"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-secondary mb-4">Brand Identity Design</h3>
              <p className="text-lg text-foreground mb-4">
                We create comprehensive brand identities that resonate with your audience. From logo design to complete
                visual systems, we ensure your brand stands out.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1 bg-primary flex-shrink-0 rounded" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Logo & Mark Design</h4>
                  <p className="text-muted-foreground">Distinctive logos that define your brand</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1 bg-primary flex-shrink-0 rounded" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Brand Applications</h4>
                  <p className="text-muted-foreground">Complete merchandise and collateral design</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1 bg-primary flex-shrink-0 rounded" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Visual Systems</h4>
                  <p className="text-muted-foreground">Cohesive design guidelines for consistency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
