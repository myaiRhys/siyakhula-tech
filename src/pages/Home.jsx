import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  // Pain points data
  const painPoints = [
    {
      icon: FaGlobe,
      title: t('home.painPoints.noWebsite.title'),
      description: t('home.painPoints.noWebsite.description'),
      solution: t('home.painPoints.noWebsite.solution')
    },
    {
      icon: FaRobot,
      title: t('home.painPoints.missingAutomation.title'),
      description: t('home.painPoints.missingAutomation.description'),
      solution: t('home.painPoints.missingAutomation.solution')
    },
    {
      icon: FaLanguage,
      title: t('home.painPoints.cantReach.title'),
      description: t('home.painPoints.cantReach.description'),
      solution: t('home.painPoints.cantReach.solution')
    },
    {
      icon: FaDollarSign,
      title: t('home.painPoints.tooExpensive.title'),
      description: t('home.painPoints.tooExpensive.description'),
      solution: t('home.painPoints.tooExpensive.solution')
    }
  ];

  // Services preview data
  const services = [
    {
      icon: FaGlobe,
      title: t('services.website.title'),
      description: t('home.servicesPreview.website.description'),
      features: t('home.servicesPreview.website.features', { returnObjects: true })
    },
    {
      icon: FaRobot,
      title: t('services.aiAutomation.title'),
      description: t('home.servicesPreview.aiAutomation.description'),
      features: t('home.servicesPreview.aiAutomation.features', { returnObjects: true })
    },
    {
      icon: FaMobile,
      title: t('services.customApps.title'),
      description: t('home.servicesPreview.customApps.description'),
      features: t('home.servicesPreview.customApps.features', { returnObjects: true })
    },
    {
      icon: FaStore,
      title: t('services.googleBusiness.title'),
      description: t('home.servicesPreview.googleBusiness.description'),
      features: t('home.servicesPreview.googleBusiness.features', { returnObjects: true })
    }
  ];

  // Trust elements / stats
  const stats = [
    { number: "48hrs", label: t('home.stats.deliveryTime') },
    { number: "100+", label: t('home.stats.projectsCompleted') },
    { number: "4.9/5", label: t('home.stats.satisfaction') },
    { number: "24/7", label: t('home.stats.supportAvailable') }
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
                {t('home.hero.title')}
                <br />
                <span className="text-primary-200">{t('home.hero.subtitle')}</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-primary-50"
            >
              {t('home.hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/contact" className="btn btn-secondary text-lg px-8 py-4">
                {t('home.hero.freeQuote')}
              </Link>
              <Link to="/services" className="btn btn-outline text-lg px-8 py-4">
                {t('home.hero.seePossible')}
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
                <span>{t('home.hero.deliveredFast')}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-primary-200" />
                <span>{t('home.hero.noCosts')}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-primary-200" />
                <span>{t('home.hero.multilingual')}</span>
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
            title={t('home.painPoints.title')}
            subtitle={t('home.painPoints.subtitle')}
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
            title={t('home.services.title')}
            subtitle={t('home.services.subtitle')}
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
              {t('home.services.seeAll')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats / Trust Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom">
          <SectionHeader
            title={t('home.stats.title')}
            subtitle={t('home.stats.subtitle')}
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
              {t('home.cta.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('home.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-primary text-lg px-8 py-4">
                {t('home.cta.getStarted')}
              </Link>
              <Link to="/portfolio" className="btn btn-secondary text-lg px-8 py-4">
                {t('home.cta.seeWork')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
