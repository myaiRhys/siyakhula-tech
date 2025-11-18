import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaStar, FaQuoteLeft, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa';
import SectionHeader from '../components/common/SectionHeader';

/**
 * Portfolio Page
 * Showcase of work examples and client testimonials
 */
const Portfolio = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      id: 1,
      category: 'website',
      title: "Local Bakery Website",
      client: "Sweet Things Bakery, Cape Town",
      description: "Complete website redesign with online ordering system and multilingual support (English & Afrikaans).",
      results: [
        "Online orders increased by 300%",
        "Now appearing on Google Maps",
        "Reduced phone inquiries by 50%"
      ],
      before: "No website, only Facebook page",
      after: "Modern, mobile-friendly site with online ordering",
      image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&h=600&fit=crop",
      tags: ["Website", "E-commerce", "Multilingual"]
    },
    {
      id: 2,
      category: 'automation',
      title: "WhatsApp Chatbot for Auto Repair Shop",
      client: "Joe's Auto Repair, Johannesburg",
      description: "AI chatbot handling appointment bookings, service inquiries, and quote requests 24/7.",
      results: [
        "Saves 15 hours/week on phone calls",
        "24/7 appointment booking",
        "Customer satisfaction up 40%"
      ],
      before: "Owner spent hours answering repetitive questions",
      after: "Chatbot handles 80% of initial inquiries automatically",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      tags: ["AI", "Automation", "WhatsApp"]
    },
    {
      id: 3,
      category: 'app',
      title: "Booking System for Hair Salon",
      client: "Elegance Hair Studio, Durban",
      description: "Custom online booking system with SMS reminders and client management.",
      results: [
        "90% reduction in no-shows",
        "Clients can book 24/7",
        "Staff scheduling automated"
      ],
      before: "Manual appointment book, frequent no-shows",
      after: "Digital booking with automated reminders",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop",
      tags: ["Custom App", "Booking System", "SMS"]
    },
    {
      id: 4,
      category: 'marketing',
      title: "Google Business & Local SEO",
      client: "Ubuntu Plumbing Services, Pretoria",
      description: "Complete Google Business Profile setup and local SEO optimization.",
      results: [
        "300% increase in Google calls",
        "Now ranking #1 for 'plumber near me'",
        "50+ verified reviews"
      ],
      before: "Barely visible on Google",
      after: "Top result for local searches",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
      tags: ["Google Business", "SEO", "Local Marketing"]
    },
    {
      id: 5,
      category: 'website',
      title: "Multilingual Construction Website",
      client: "Sakha Builders, Eastern Cape",
      description: "Professional website in English, isiXhosa, and Afrikaans showcasing projects and services.",
      results: [
        "Reach expanded to rural areas",
        "Enquiries up 200%",
        "Professional credibility established"
      ],
      before: "No online presence",
      after: "Multilingual website reaching diverse clients",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
      tags: ["Website", "Multilingual", "Portfolio Showcase"]
    },
    {
      id: 6,
      category: 'automation',
      title: "Email Automation for Event Planner",
      client: "Celebrate Events, Cape Town",
      description: "Automated email sequences for lead nurturing, quotes, and follow-ups.",
      results: [
        "Saves 10 hours/week",
        "Conversion rate up 35%",
        "Professional client communication"
      ],
      before: "Manually sending follow-up emails",
      after: "Automated, personalized email sequences",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
      tags: ["Automation", "Email Marketing", "CRM"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Nkosi",
      business: "Sweet Things Bakery",
      location: "Cape Town",
      rating: 5,
      text: "I was nervous about getting a website—thought it would be expensive and complicated. But these guys made it so easy! Now customers can order online, and I'm getting way more business. Best decision I made this year.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      name: "Joseph Mahlangu",
      business: "Joe's Auto Repair",
      location: "Johannesburg",
      rating: 5,
      text: "The WhatsApp chatbot is a game changer! I used to spend hours answering the same questions. Now the bot handles it, and I can focus on actually fixing cars. Plus my customers love that they can book anytime.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      name: "Thandi Dlamini",
      business: "Elegance Hair Studio",
      location: "Durban",
      rating: 5,
      text: "The booking system paid for itself in the first month! No more double bookings, no more no-shows. My clients love how easy it is to book. Highly recommend!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    },
    {
      name: "Pieter van der Merwe",
      business: "Ubuntu Plumbing",
      location: "Pretoria",
      rating: 5,
      text: "I was skeptical about Google Business, but wow! My phone doesn't stop ringing now. I'm fully booked for weeks. These guys know their stuff and they're affordable. No BS, just results.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    }
  ];

  const categories = [
    { id: 'all', label: t('portfolio.filters.all') },
    { id: 'website', label: t('portfolio.filters.websites') },
    { id: 'automation', label: t('portfolio.filters.automation') },
    { id: 'app', label: t('portfolio.filters.apps') },
    { id: 'marketing', label: t('portfolio.filters.marketing') }
  ];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(project => project.category === activeTab);

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
              {t('portfolio.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              {t('portfolio.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-primary-50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-primary-600 font-semibold mb-4">{project.client}</p>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  {/* Before & After */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-semibold text-red-600 mb-1">❌ {t('portfolio.before')}:</div>
                        <p className="text-gray-700">{project.before}</p>
                      </div>
                      <div>
                        <div className="font-semibold text-green-600 mb-1">✅ {t('portfolio.after')}:</div>
                        <p className="text-gray-700">{project.after}</p>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-2">
                    <div className="font-semibold text-gray-900">{t('portfolio.results')}:</div>
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-gray-700">
                        <FaCheckCircle className="text-primary-500 mt-1 flex-shrink-0" />
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title={t('portfolio.testimonials.title')}
            subtitle={t('portfolio.testimonials.subtitle')}
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8"
              >
                <FaQuoteLeft className="text-4xl text-primary-200 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.text}"</p>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.business}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
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
              {t('portfolio.ctaTitle')}
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              {t('portfolio.ctaDescription')}
            </p>
            <a
              href="/contact"
              className="btn btn-secondary text-lg px-8 py-4 inline-block"
            >
              {t('portfolio.ctaButton')}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
