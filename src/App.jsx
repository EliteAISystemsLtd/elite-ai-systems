import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, Bot, Zap, TrendingUp, Users, Clock, DollarSign, CheckCircle, Star, Mail, Phone } from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const services = [
    {
      icon: <Bot className="h-8 w-8 text-blue-600" />,
      title: "Lead Generation Automation",
      description: "AI-powered lead discovery and qualification systems that find and convert your ideal customers 24/7.",
      price: "£3,000 setup + £750/month",
      features: ["LinkedIn automation", "Email sequences", "CRM integration", "Lead scoring"]
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Customer Service Chatbots",
      description: "Intelligent chatbots that handle customer inquiries, bookings, and support with human-like precision.",
      price: "£3,000-8,000 setup + £800-2,000/month",
      features: ["24/7 availability", "Multi-language support", "Integration ready", "Learning algorithms"]
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
      title: "Sales Process Automation",
      description: "Complete sales funnel automation from prospect to payment, maximizing conversion rates.",
      price: "£5,000-15,000 setup + £1,000-3,000/month",
      features: ["Pipeline automation", "Follow-up sequences", "Deal tracking", "Revenue optimization"]
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      title: "Content Creation Systems",
      description: "AI content engines that produce high-quality marketing materials, social posts, and campaigns.",
      price: "£2,000-5,000 setup + £500-1,500/month",
      features: ["Blog automation", "Social media content", "Email campaigns", "SEO optimization"]
    }
  ]

  const benefits = [
    { icon: <DollarSign className="h-6 w-6" />, title: "Increase Revenue", description: "Average 40% revenue increase within 90 days" },
    { icon: <Clock className="h-6 w-6" />, title: "Save Time", description: "Automate 80% of repetitive business tasks" },
    { icon: <TrendingUp className="h-6 w-6" />, title: "Scale Faster", description: "Handle 10x more customers without hiring" },
    { icon: <CheckCircle className="h-6 w-6" />, title: "Guaranteed Results", description: "ROI guarantee or money back" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Bot className="h-8 w-8 text-blue-600 mr-2" />
                <span className="text-xl font-bold text-gray-900">Elite AI Systems</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#benefits" className="text-gray-700 hover:text-blue-600 transition-colors">Benefits</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
            <Star className="h-4 w-4 mr-1" />
            Premium AI Automation Solutions
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Dominate Your Market with
            <span className="text-blue-600 block">Elite AI Automation</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI systems that generate leads, automate sales, and scale your operations while you sleep. Join the top 1% of businesses leveraging AI for explosive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
              Book Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Elite Businesses Choose Us</h2>
            <p className="text-xl text-gray-600">Results that speak louder than promises</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium AI Solutions</h2>
            <p className="text-xl text-gray-600">Enterprise-grade automation that delivers results</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <CardTitle className="ml-3 text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Badge variant="secondary" className="text-lg font-semibold">
                      {service.price}
                    </Badge>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join the AI Revolution?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book a strategy call today and discover how AI automation can transform your business in 30 days or less.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
            Book Your Strategy Call Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Ready to dominate your market? Let's talk.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Get a response within 24 hours</p>
                <a href="mailto:info@eliteaisystemsltd.com" className="text-blue-600 hover:text-blue-700 font-semibold">
                  info@eliteaisystemsltd.com
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Book a Call
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Schedule your strategy session</p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Book Strategy Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Bot className="h-6 w-6 text-blue-400 mr-2" />
              <span className="text-lg font-semibold">Elite AI Systems Ltd</span>
            </div>
            <div className="text-gray-400">
              © 2024 Elite AI Systems Ltd. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

