import { Palette, Zap, Users, TrendingUp } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Brand Identity Basics",
    description:
      "We help businesses define and develop a strong visual identity that resonates with their target audience.",
  },
  {
    icon: Zap,
    title: "Logo Design",
    description: "Professional and impactful logos that capture your brand essence and make a lasting impression.",
  },
  {
    icon: Users,
    title: "Event Branding",
    description:
      "We design and brand items for events that create memorable experiences and strengthen brand connections.",
  },
  {
    icon: TrendingUp,
    title: "Marketing & Promotion",
    description: "Strategic marketing solutions to promote your brand effectively and reach your target market.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive branding and marketing solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-background p-8 rounded-lg border border-border hover:border-primary transition"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
