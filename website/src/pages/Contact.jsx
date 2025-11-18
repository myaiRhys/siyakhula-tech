import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaCheckCircle
} from 'react-icons/fa';
import SectionHeader from '../components/common/SectionHeader';

/**
 * Contact Page
 * Contact form, WhatsApp integration, and contact information
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    service: '',
    message: '',
    budget: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        business: '',
        service: '',
        message: '',
        budget: ''
      });
    }, 3000);
  };

  const services = [
    'Website Creation',
    'AI & Automation',
    'Custom App Development',
    'Google Business Setup',
    'Digital Marketing',
    'Consulting',
    'Not Sure / Multiple Services'
  ];

  const contactMethods = [
    {
      icon: FaWhatsapp,
      title: "WhatsApp Us",
      description: "Fastest way to reach us",
      detail: "+27 XX XXX XXXX",
      link: "https://wa.me/27XXXXXXXXX",
      color: "from-green-500 to-green-600"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      description: "We respond within 24 hours",
      detail: "info@siyakhulatech.co.za",
      link: "mailto:info@siyakhulatech.co.za",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FaPhone,
      title: "Call Us",
      description: "Mon-Fri, 9am-6pm SAST",
      detail: "+27 XX XXX XXXX",
      link: "tel:+27XXXXXXXXX",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const faqs = [
    {
      question: "How quickly can you start?",
      answer: "Usually within 24-48 hours of your deposit. We move fast!"
    },
    {
      question: "What's your pricing?",
      answer: "It varies by project, but we're transparent. Websites start from R2,500, chatbots from R3,000, apps from R5,000."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes! For larger projects, we can arrange milestone-based payments."
    },
    {
      question: "What if I need changes later?",
      answer: "We offer ongoing support packages, or you can request changes on an ad-hoc basis."
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
              Let's Build Something Great Together
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Get a free quote and honest advice. No pressure, no jargon.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 -mt-32 mb-12 relative z-10">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8 text-center hover:scale-105 transition-transform"
              >
                <div className={`bg-gradient-to-br ${method.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <method.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{method.title}</h3>
                <p className="text-gray-600 mb-2">{method.description}</p>
                <p className="text-primary-600 font-semibold">{method.detail}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Get a Free Quote</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours with a clear proposal.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center"
                >
                  <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-700 mb-2">Thank You!</h3>
                  <p className="text-green-600">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                        placeholder="+27 XX XXX XXXX"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Business Name
                      </label>
                      <input
                        type="text"
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                        placeholder="Your Business Name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Service Interested In *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Approximate Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                    >
                      <option value="">Select your budget range</option>
                      <option value="under-5k">Under R5,000</option>
                      <option value="5k-10k">R5,000 - R10,000</option>
                      <option value="10k-20k">R10,000 - R20,000</option>
                      <option value="20k-plus">R20,000+</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition resize-none"
                      placeholder="What do you need help with? What are your goals?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-full text-lg flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane /> Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Contact Info */}
              <div className="card p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <FaMapMarkerAlt className="text-2xl text-primary-600 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Location</div>
                      <div className="text-gray-600">Cape Town, South Africa</div>
                      <div className="text-sm text-gray-500">Serving all of SA remotely</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <FaClock className="text-2xl text-primary-600 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Business Hours</div>
                      <div className="text-gray-600">Monday - Friday: 9am - 6pm</div>
                      <div className="text-gray-600">Saturday: 10am - 2pm</div>
                      <div className="text-sm text-gray-500">WhatsApp available 24/7</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-8">
                <FaWhatsapp className="text-5xl mb-4" />
                <h3 className="text-2xl font-bold mb-3">Prefer WhatsApp?</h3>
                <p className="mb-6 text-green-50">
                  Get instant responses to your questions. Chat with us now!
                </p>
                <a
                  href="https://wa.me/27XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-white text-green-600 hover:bg-green-50 w-full text-center block"
                >
                  Start WhatsApp Chat
                </a>
              </div>

              {/* FAQs */}
              <div className="card p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Quick Answers</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <div className="font-semibold text-gray-900 mb-1">{faq.question}</div>
                      <div className="text-gray-600 text-sm">{faq.answer}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
