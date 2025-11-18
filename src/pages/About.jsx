import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  FaRocket,
  FaHandshake,
  FaLightbulb,
  FaAward,
  FaCode,
  FaComments,
  FaClock,
  FaHeart,
  FaGlobe,
  FaCheckCircle
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/common/SectionHeader';

/**
 * About Page
 * Company story, values, and unique selling points
 */
const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: FaRocket,
      title: "Fast Delivery",
      description: "We move quickly. Most projects are delivered in days, not months. Your time is valuable, and we respect that."
    },
    {
      icon: FaHandshake,
      title: "Clear Communication",
      description: "No jargon, no confusion. We explain everything in plain language so you always know what's happening."
    },
    {
      icon: FaLightbulb,
      title: "Practical Solutions",
      description: "We don't sell you fancy tech you don't need. We focus on what will actually help your business grow."
    },
    {
      icon: FaHeart,
      title: "Affordable Pricing",
      description: "Small business budgets are real. We offer enterprise-quality solutions at prices that make sense for SMEs."
    }
  ];

  const strengths = [
    {
      icon: FaCode,
      title: "Strong Technical Skills",
      description: "We build clean, efficient, modern solutions using the latest technologies."
    },
    {
      icon: FaComments,
      title: "Sales & Business Understanding",
      description: "We don't just code—we understand business. We know what drives revenue and saves time."
    },
    {
      icon: FaClock,
      title: "Quick Turnaround",
      description: "Speed is our competitive advantage. We deliver fast without sacrificing quality."
    },
    {
      icon: FaGlobe,
      title: "Multilingual Capability",
      description: "We serve South Africa's diverse market with solutions in English, isiZulu, isiXhosa, Afrikaans, and more."
    }
  ];

  const whySA = [
    {
      title: "Many SMEs have NO website",
      description: "In 2025, your competitors are getting customers online while you're invisible. We fix that fast."
    },
    {
      title: "Digital adoption is slow",
      description: "Most small businesses know they need to go digital but don't know where to start. We guide you."
    },
    {
      title: "Automation is underutilized",
      description: "Business owners waste hours on tasks a chatbot could handle. We free up your time."
    },
    {
      title: "The multilingual market is underserved",
      description: "South Africa has 11 official languages, but most websites only speak English. We help you reach everyone."
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
              {t('about.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              {t('about.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                {t('about.story.title')}
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  We started Siyakhula Tech because we saw a problem: small businesses in South Africa are being left behind in the digital age.
                </p>
                <p>
                  Big agencies charge R50,000+ for a basic website. They take months to deliver. They use confusing jargon. And worst of all, they build things that look fancy but don't actually help your business grow.
                </p>
                <p>
                  We're different. We're fast, we're affordable, and we focus on <strong>results</strong>—more customers, less manual work, better online visibility.
                </p>
                <p>
                  "Siyakhula" means "we are growing" in isiZulu. That's our mission: to help your business grow with smart, practical tech solutions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold">100+</div>
                <div className="text-primary-100">{t('about.story.happyClients')}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title={t('about.values.title')}
            subtitle={t('about.values.subtitle')}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-3xl text-primary-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title={t('about.strengths.title')}
            subtitle={t('about.strengths.subtitle')}
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl"
              >
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-4 rounded-lg flex-shrink-0">
                  <strength.icon className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{strength.title}</h3>
                  <p className="text-gray-600">{strength.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SA Needs This Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <SectionHeader
            title={t('about.whySA.title')}
            subtitle={t('about.whySA.subtitle')}
            light={true}
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {whySA.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-2xl text-primary-200 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                    <p className="text-primary-100">{point.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title={t('about.approach.title')}
            subtitle={t('about.approach.subtitle')}
          />

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Discovery Call (30 minutes)",
                  description: "We chat about your business, your goals, and what you actually need (not what sounds cool)."
                },
                {
                  step: "2",
                  title: "Clear Proposal (Same Day)",
                  description: "You get a straightforward quote with timeline, deliverables, and pricing. No surprises."
                },
                {
                  step: "3",
                  title: "Fast Build (Days, Not Months)",
                  description: "We build your solution quickly using proven frameworks and templates—customized for your brand."
                },
                {
                  step: "4",
                  title: "Your Feedback",
                  description: "You review, we adjust. Simple as that."
                },
                {
                  step: "5",
                  title: "Launch & Support",
                  description: "We launch your solution and provide ongoing support. You're never left hanging."
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {t('about.ctaTitle')}
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('about.ctaDescription')}
            </p>
            <Link to="/contact" className="btn btn-primary text-lg px-8 py-4">
              {t('about.ctaButton')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
