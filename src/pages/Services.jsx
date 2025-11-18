import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaGlobe,
  FaRobot,
  FaMobile,
  FaStore,
  FaChartLine,
  FaHeadset,
  FaCheckCircle,
  FaLanguage,
  FaShoppingCart,
  FaCalendarAlt,
  FaDatabase,
  FaWhatsapp
} from 'react-icons/fa';
import SectionHeader from '../components/common/SectionHeader';

/**
 * Services Page
 * Detailed service offerings with features and CTAs
 */
const Services = () => {
  const services = [
    {
      icon: FaGlobe,
      title: "Website Creation & Upgrades",
      tagline: "Your digital storefront that works 24/7",
      description: "A professional website isn't a luxury anymore—it's essential. We build fast, modern, mobile-friendly sites that actually bring in customers.",
      features: [
        "Responsive design (looks great on phones, tablets, desktops)",
        "SEO optimized to rank on Google",
        "Fast loading times",
        "Easy content management",
        "Multilingual options (English, isiZulu, isiXhosa, Afrikaans, etc.)",
        "Contact forms and CTAs",
        "Social media integration"
      ],
      pricing: "From R2,500",
      deliveryTime: "3-7 days",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FaRobot,
      title: "AI Automation & Chatbots",
      tagline: "Work smarter, not harder",
      description: "Stop spending hours on repetitive tasks. Our AI solutions handle customer queries, qualify leads, and automate workflows—so you can focus on growing your business.",
      features: [
        "WhatsApp chatbots for customer service",
        "Automated lead qualification",
        "FAQ automation",
        "Appointment booking bots",
        "Email automation",
        "24/7 customer support without extra staff",
        "Integration with your existing systems"
      ],
      pricing: "From R3,000",
      deliveryTime: "5-10 days",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: FaMobile,
      title: "Custom Apps & Tools",
      tagline: "Solve your unique business problems",
      description: "Need something specific? We build simple, effective apps tailored to your workflow—booking systems, inventory trackers, customer portals, and more.",
      features: [
        "Online booking and scheduling systems",
        "Inventory management tools",
        "Customer/client portals",
        "Quote/invoice generators",
        "Internal workflow automation",
        "Mobile-friendly web apps",
        "Integration with existing tools"
      ],
      pricing: "From R5,000",
      deliveryTime: "7-14 days",
      color: "from-green-500 to-green-600"
    },
    {
      icon: FaStore,
      title: "Google Business Profile Setup",
      tagline: "Get found by local customers",
      description: "Show up when people in your area search for what you offer. We optimize your Google Business Profile so you appear on Maps and Search.",
      features: [
        "Complete profile setup and optimization",
        "Google Maps listing",
        "Review management strategy",
        "Local SEO optimization",
        "Photo and description optimization",
        "Business hours and contact setup",
        "Post scheduling (updates, offers, events)"
      ],
      pricing: "From R1,500",
      deliveryTime: "2-3 days",
      color: "from-red-500 to-red-600"
    },
    {
      icon: FaChartLine,
      title: "Digital Marketing Starter Packages",
      tagline: "Get more customers online",
      description: "Simple, effective marketing that fits your budget. Social media setup, Google Ads basics, email campaigns—we get you started the right way.",
      features: [
        "Social media profile setup and branding",
        "Content calendar planning",
        "Google Ads campaign setup",
        "Email marketing setup (newsletters, promos)",
        "Basic analytics and tracking",
        "Landing page creation",
        "Ad copywriting"
      ],
      pricing: "From R2,000",
      deliveryTime: "5-7 days",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: FaHeadset,
      title: "Digital Transformation Consulting",
      tagline: "Navigate the digital world with confidence",
      description: "Not sure where to start? We'll assess your business, identify opportunities, and create a realistic roadmap for digital growth—no jargon, just clear advice.",
      features: [
        "Business needs assessment",
        "Technology recommendations",
        "Process automation opportunities",
        "Digital strategy roadmap",
        "Training and onboarding support",
        "Ongoing support and guidance",
        "Budget-friendly solutions"
      ],
      pricing: "From R1,000/session",
      deliveryTime: "Flexible",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Services That Grow Your Business
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Fast, affordable, and actually useful. Pick what you need—or bundle for maximum impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card p-8 md:p-12"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Service Header */}
                  <div className="md:col-span-2">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`bg-gradient-to-br ${service.color} p-4 rounded-xl flex-shrink-0`}>
                        <service.icon className="text-3xl text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">{service.title}</h2>
                        <p className="text-lg text-primary-600 font-semibold">{service.tagline}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-lg mb-6">{service.description}</p>

                    {/* Features */}
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <FaCheckCircle className="text-primary-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="md:col-span-1">
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 sticky top-24">
                      <div className="text-center mb-6">
                        <div className="text-4xl font-bold text-gray-900 mb-2">{service.pricing}</div>
                        <div className="text-gray-600">Starting price</div>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-center gap-2 text-gray-700">
                          <FaCalendarAlt className="text-primary-500" />
                          <span><strong>Delivery:</strong> {service.deliveryTime}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <FaHeadset className="text-primary-500" />
                          <span><strong>Support:</strong> Included</span>
                        </div>
                      </div>

                      <Link
                        to="/contact"
                        className="btn btn-primary w-full text-center block mb-3"
                      >
                        Get a Quote
                      </Link>
                      <a
                        href="https://wa.me/27XXXXXXXXX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary w-full text-center flex items-center justify-center gap-2"
                      >
                        <FaWhatsapp /> WhatsApp Us
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Why Work With Us?"
            subtitle="We're not like those big agencies with 6-month timelines and corporate jargon"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCalendarAlt className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Most projects delivered in days, not months. You'll see results quickly.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLanguage className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Clear Communication</h3>
              <p className="text-gray-600">No tech jargon. We explain everything in plain language so you understand exactly what you're getting.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Results-Focused</h3>
              <p className="text-gray-600">We build things that actually help your business grow—more customers, less manual work, better visibility.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Not Sure What You Need?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Book a free consultation. We'll chat about your business goals and recommend the best solutions for your budget.
            </p>
            <Link to="/contact" className="btn btn-secondary text-lg px-8 py-4">
              Get Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
