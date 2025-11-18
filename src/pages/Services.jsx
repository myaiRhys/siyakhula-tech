import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const services = [
    {
      icon: FaGlobe,
      title: t('services.website.title'),
      tagline: t('services.website.tagline'),
      description: t('services.website.description'),
      features: t('services.website.features', { returnObjects: true }),
      pricing: t('services.website.pricing'),
      deliveryTime: t('services.website.deliveryTime'),
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FaRobot,
      title: t('services.aiAutomation.title'),
      tagline: t('services.aiAutomation.tagline'),
      description: t('services.aiAutomation.description'),
      features: t('services.aiAutomation.features', { returnObjects: true }),
      pricing: t('services.aiAutomation.pricing'),
      deliveryTime: t('services.aiAutomation.deliveryTime'),
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: FaMobile,
      title: t('services.customApps.title'),
      tagline: t('services.customApps.tagline'),
      description: t('services.customApps.description'),
      features: t('services.customApps.features', { returnObjects: true }),
      pricing: t('services.customApps.pricing'),
      deliveryTime: t('services.customApps.deliveryTime'),
      color: "from-green-500 to-green-600"
    },
    {
      icon: FaStore,
      title: t('services.googleBusiness.title'),
      tagline: t('services.googleBusiness.tagline'),
      description: t('services.googleBusiness.description'),
      features: t('services.googleBusiness.features', { returnObjects: true }),
      pricing: t('services.googleBusiness.pricing'),
      deliveryTime: t('services.googleBusiness.deliveryTime'),
      color: "from-red-500 to-red-600"
    },
    {
      icon: FaChartLine,
      title: t('services.digitalMarketing.title'),
      tagline: t('services.digitalMarketing.tagline'),
      description: t('services.digitalMarketing.description'),
      features: t('services.digitalMarketing.features', { returnObjects: true }),
      pricing: t('services.digitalMarketing.pricing'),
      deliveryTime: t('services.digitalMarketing.deliveryTime'),
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: FaHeadset,
      title: t('services.consulting.title'),
      tagline: t('services.consulting.tagline'),
      description: t('services.consulting.description'),
      features: t('services.consulting.features', { returnObjects: true }),
      pricing: t('services.consulting.pricing'),
      deliveryTime: t('services.consulting.deliveryTime'),
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
              {t('services.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              {t('services.hero.subtitle')}
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
                        <div className="text-gray-600">{t('services.pricing.startingPrice')}</div>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-center gap-2 text-gray-700">
                          <FaCalendarAlt className="text-primary-500" />
                          <span><strong>{t('services.pricing.delivery')}:</strong> {service.deliveryTime}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <FaHeadset className="text-primary-500" />
                          <span><strong>{t('services.pricing.support')}:</strong> {t('services.pricing.included')}</span>
                        </div>
                      </div>

                      <Link
                        to="/contact"
                        className="btn btn-primary w-full text-center block mb-3"
                      >
                        {t('services.pricing.getQuote')}
                      </Link>
                      <a
                        href="https://wa.me/27XXXXXXXXX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary w-full text-center flex items-center justify-center gap-2"
                      >
                        <FaWhatsapp /> {t('services.pricing.whatsappUs')}
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
            title={t('services.whyUs.title')}
            subtitle={t('services.whyUs.subtitle')}
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
              <h3 className="text-xl font-bold mb-2">{t('services.whyUs.fastDelivery.title')}</h3>
              <p className="text-gray-600">{t('services.whyUs.fastDelivery.description')}</p>
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
              <h3 className="text-xl font-bold mb-2">{t('services.whyUs.clearComm.title')}</h3>
              <p className="text-gray-600">{t('services.whyUs.clearComm.description')}</p>
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
              <h3 className="text-xl font-bold mb-2">{t('services.whyUs.results.title')}</h3>
              <p className="text-gray-600">{t('services.whyUs.results.description')}</p>
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
              {t('services.ctaTitle')}
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              {t('services.ctaDescription')}
            </p>
            <Link to="/contact" className="btn btn-secondary text-lg px-8 py-4">
              {t('services.ctaButton')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
