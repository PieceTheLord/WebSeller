import { Button } from "./components/ui/button"; // eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import {
  Star,
  Code,
  Zap,
  Users,
  MessageCircle,
  Mail,
  Instagram,
  Send,
  CheckCircle,
  Sparkles,
  Brain,
  Clock,
} from "lucide-react";

export default function App() {
  const portfolioItems = [
    {
      title: "Modern Business Website",
      description:
        "Clean, professional design that converts visitors into customers",
      image:
        "https://images.unsplash.com/photo-1706700392626-5279fb90ae73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhfDF8fHx8MTc1NjA2OTk1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
    },
    {
      title: "Mobile-First Platform",
      description:
        "Optimized for mobile users with seamless experience across all devices",
      image:
        "https://images.unsplash.com/photo-1490222939321-2a267366a124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdlYnNpdGUlMjBtb2JpbGV8ZW58MXx8fHwxNzU2MTUyOTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Mobile Optimized", "Touch Friendly", "App-like Feel"],
    },
    {
      title: "E-commerce Dashboard",
      description:
        "Powerful admin panel with analytics and inventory management",
      image:
        "https://images.unsplash.com/photo-1642132652860-471b4228023e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1NjA5OTYzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Real-time Analytics",
        "Inventory Management",
        "Payment Integration",
      ],
    },
  ];

  const features: { icon: any; title: string; description: string }[] = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI-Powered Development",
      description:
        "Using cutting-edge AI tools to create smarter, more efficient websites that adapt to user behavior",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "5+ Years Experience",
      description:
        "Proven track record with hundreds of successful projects and satisfied clients worldwide",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Delivery",
      description:
        "Get your website live in days, not months. Quick turnaround without compromising quality",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Client-First Approach",
      description:
        "Your success is my priority. I build websites that actually bring you more customers",
    },
  ];

  const benefits = [
    "Increase online visibility by 300%",
    "Generate leads 24/7 automatically",
    "Professional image that builds trust",
    "Mobile-optimized for all devices",
    "SEO-ready to rank on Google",
    "Ongoing support and maintenance",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Code className="h-8 w-8 text-primary" />
            <span className="text-xl">WebDev Pro</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a
              href="#services"
              className="hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="hover:text-primary transition-colors"
            >
              Portfolio
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          <Button asChild>
            <a href="#contact">Get Started</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="h-4 w-4 mr-1" />
            AI-Powered Web Development
          </Badge>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Get More Clients with a Professional Website
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stop losing customers to competitors! I create high-converting
            websites that work 24/7 to bring you more business. 5+ years of
            experience with AI-enhanced development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild className="text-lg px-8 py-3">
              <a href="#contact">Order Your Website Now</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="text-lg px-8 py-3"
            >
              <a href="#portfolio">View My Work</a>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>5+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>100+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>AI-Enhanced Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Why Choose My Services?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I combine years of experience with cutting-edge AI technology to
              deliver websites that actually grow your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 rounded-lg bg-primary/10 text-primary w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg text-red-600 mb-1">
                    {feature.title}
                  </CardTitle>
                  <CardTitle className="text-base text-muted-foreground">
                    {feature.description}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="bg-secondary/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl mb-6 text-center">What You Get:</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-around">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-3 pl-4"
                >
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="flex-1">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-secondary/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Recent Projects</h2>
            <p className="text-xl text-muted-foreground">
              See how I've helped businesses like yours succeed online
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {item.features.map((feature, featureIndex) => (
                      <Badge
                        key={featureIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">What Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                business: "Local Restaurant",
                comment:
                  "My restaurant bookings increased 200% after getting my new website. The design is beautiful and it's so easy for customers to make reservations!",
                rating: 5,
              },
              {
                name: "Mike Chen",
                business: "Fitness Coach",
                comment:
                  "Finally have a professional online presence that brings me clients automatically. The AI-powered features really make a difference!",
                rating: 5,
              },
              {
                name: "Emma Davis",
                business: "Online Store",
                comment:
                  "Sales went through the roof! The new e-commerce site is fast, looks amazing on mobile, and customers love the smooth checkout process.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="mb-4 italic">"{testimonial.comment}"</p>
                  <div>
                    <p className="text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.business}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 bg-primary text-primary-foreground"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl mb-4">Ready to Get More Clients?</h2>
          <p className="text-xl mb-12 text-primary-foreground/80 max-w-2xl mx-auto">
            Contact me now to discuss your project. I'll create a website that
            brings you customers while you sleep!
          </p>

          <div className="w-full max-w-2xl mx-auto">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <Send className="h-6 w-6" />
                  Order via Telegram
                </CardTitle>
                <CardDescription>
                  Quick and easy - message me directly on Telegram to get
                  started
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="lg" asChild>
                  <a
                    href="https://t.me/Alexey_TheGreat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Message on Telegram
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <p className="mt-8 text-primary-foreground/60">
            Usually respond within 2-4 hours • Free consultation included
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-background">
        <div className="container mx-auto text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code className="h-6 w-6" />
            <span>WebDev Pro</span>
          </div>
          <p>
            &copy; 2025 Professional Web Development Services. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
