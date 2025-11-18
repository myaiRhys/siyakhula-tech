import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

/**
 * Footer Component
 * Site-wide footer with links, contact info, and social media
 */
const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Website Development', path: '/services' },
      { name: 'AI & Automation', path: '/services' },
      { name: 'Custom Apps', path: '/services' },
      { name: 'Digital Marketing', path: '/services' },
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Portfolio', path: '/portfolio' },
      { name: 'Contact', path: '/contact' },
    ],
  };

  const socialLinks = [
    { icon: FaWhatsapp, href: 'https://wa.me/27XXXXXXXXX', label: 'WhatsApp' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Siyakhula<span className="text-primary-400">Tech</span>
            </h3>
            <p className="text-gray-400">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contactTitle')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-primary-400" />
                <span>Cape Town, South Africa</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <FaEnvelope className="flex-shrink-0 text-primary-400" />
                <a href="mailto:info@siyakhulatech.co.za" className="hover:text-primary-400 transition-colors">
                  info@siyakhulatech.co.za
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <FaPhone className="flex-shrink-0 text-primary-400" />
                <a href="tel:+27XXXXXXXXX" className="hover:text-primary-400 transition-colors">
                  +27 XX XXX XXXX
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Siyakhula Tech. {t('footer.allRights')}.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
