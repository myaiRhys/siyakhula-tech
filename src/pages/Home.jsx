import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaRocket,
  FaDollarSign,
  FaClock,
  FaGlobe,
  FaRobot,
  FaMobile,
  FaChartLine,
  FaCheckCircle,
  FaLanguage,
  FaStore
} from 'react-icons/fa';
import SectionHeader from '../components/common/SectionHeader';

/**
 * Home Page
 * Main landing page with hero, pain points, services, and CTAs
 */
const Home = () => {
  // Pain points data
  const painPoints = [
    {
      icon: FaGlobe,
      title: "No Website or Outdated Site",
      description: "Your competitors are online. You're not. Or worse—your site looks like it's from 2010.",
      solution: "Get a modern, mobile-friendly website in days."
    },
    {
      icon: FaRobot,
      title: "Missing Out on Automation",
      description: "Spending hours on repetitive tasks like answering customer questions or scheduling.",
      solution: "Automate with AI chatbots and smart workflows."
    },
    {
      icon: FaLanguage,
      title: "Can't Reach Your Full Market",
      description: "South Africa is multilingual, but your site only speaks English.",
      solution: "Connect with customers in isiZulu, isiXhosa, Afrikaans, and more."
    },
    {
      icon: FaDollarSign,
      title: "Tech is Too Expensive",
      description: "You've been quoted R50,000+ for basic web development. That's not realistic for small business.",
      solution: "Fast, affordable solutions tailored to your budget."
    }
  ];

  // Services preview data
  const services = [
    {
      icon: FaGlobe,
      title: "Website Creation & Upgrades",
      description: "Modern, responsive websites that work on any device. Multilingual options available.",
      features: ["Mobile-first design", "SEO optimized", "Fast loading", "Easy to update"]
    },
    {
      icon: FaRobot,
      title: "AI Automation & Chatbots",
      description: "24/7 customer service without hiring extra staff. Automate repetitive tasks.",
      features: ["WhatsApp bots", "Customer support", "Lead generation", "Task automation"]
    },
    {
      icon: FaMobile,
      title: "Custom Apps & Tools",
      description: "Simple apps that solve specific problems for your business.",
      features: ["Booking systems", "Inventory tracking", "Customer portals", "Workflow tools"]
    },
    {
      icon: FaStore,
      title: "Google Business Setup",
      description: "Get found on Google Maps and Search. Essential for local businesses.",
      features: ["Profile optimization", "Review management", "Local SEO", "Analytics setup"]
    }
  ];

  // Trust elements / stats
  const stats = [
    { number: "48hrs", label: "Average Delivery Time" },
    { number: "100+", label: "Projects Completed" },
    { number: "4.9/5", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary-500 opacity-10 rounded-full"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-primary-400 opacity-10 rounded-full"
          />
        </div>

        <div className="container-custom relative z-10 py-32 md:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Get Your Business Online.
                <br />
                <span className="text-primary-200">Fast. Affordable. Simple.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-primary-50"
            >
              We help South African small businesses thrive with websites, AI automation, and digital tools—without the big agency price tag.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/contact" className="btn btn-secondary text-lg px-8 py-4">
                Get a Free Quote
              </Link>
              <Link to="/services" className="btn btn-outline text-lg px-8 py-4">
                See What's Possible
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex flex-wrap justify-center gap-8 text-sm"
            >
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-primary-200" />
                <span>Delivered in Days, Not Months</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-primary-200" />
                <span>No Hidden Costs</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-primary-200" />
                <span>Multilingual Support</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Pain Points Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Sound Familiar?"
            subtitle="These are the problems we solve every day for SA businesses like yours"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-4 rounded-lg flex-shrink-0">
                    <point.icon className="text-3xl text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{point.title}</h3>
                    <p className="text-gray-600 mb-4">{point.description}</p>
                    <div className="flex items-start gap-2 text-primary-600 font-semibold">
                      <FaCheckCircle className="mt-1 flex-shrink-0" />
                      <span>{point.solution}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="What We Can Do For You"
            subtitle="Practical tech solutions that grow your business"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <FaCheckCircle className="text-primary-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link to="/services" className="btn btn-primary text-lg px-8 py-4">
              See All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats / Trust Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom">
          <SectionHeader
            title="Why Businesses Trust Us"
            subtitle="Real results, real fast"
            light={true}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Ready to Upgrade Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get a free consultation and quote. No pressure, just honest advice on what will work for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-primary text-lg px-8 py-4">
                Get Started Today
              </Link>
              <Link to="/portfolio" className="btn btn-secondary text-lg px-8 py-4">
                See Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
