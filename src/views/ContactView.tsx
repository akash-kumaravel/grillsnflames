/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Smartphone, Phone, ExternalLink, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setError("Please provide at least your Name and Email Address.");
      return;
    }
    setError(null);
    setIsSubmitted(true);
  };

  const launchWhatsAppDirect = () => {
    const formattedText = encodeURIComponent("Hello Grills and Flames, I would like to inquire about a custom shade, fireplace, or outdoor cooking design.");
    window.open(`https://wa.me/97142345678?text=${formattedText}`, '_blank');
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div id="contact-view-container" className="pt-32 pb-16 min-h-screen bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Contact Us Page Title - Consistent Layout Container */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 mb-16 max-w-3xl text-left items-start"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#B89A7A] tracking-[0.2em] uppercase">
            <span className="w-6 h-[1px] bg-[#B89A7A]" />
            <span>GET IN TOUCH</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 tracking-tight leading-tight uppercase">
            LET'S CO-CREATE <br />YOUR DREAM SPACE
          </h1>
          <p className="text-sm text-neutral-500 leading-relaxed font-light mt-2 max-w-2xl">
            Have a custom project in mind? Reach out to our design and engineering team to bring premium luxury grills, fire features, and pergolas to your property.
          </p>
        </motion.div>

        {/* Main Content Split: Left Text & Info, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-12">
          
          {/* Left Column (lg:col-span-5) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="lg:col-span-5 flex flex-col gap-10"
          >

            {/* Direct Channels Directory */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8"
            >
              
              {/* General Inquiries */}
              <motion.div variants={fadeInUp} className="flex flex-col gap-3">
                <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-neutral-900 border-b border-neutral-100 pb-2">
                  General Inquiries
                </h3>
                <ul className="flex flex-col gap-2.5 text-xs text-neutral-600">
                  <li className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                    <a href="mailto:info@flamesfireplace.com" className="hover:text-[#B89A7A] transition-colors">
                      info@flamesfireplace.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                    <a href="tel:+97142345678" className="hover:text-[#B89A7A] transition-colors">
                      +971 4 234 5678
                    </a>
                  </li>
                </ul>
              </motion.div>

              {/* Studio Office */}
              <motion.div variants={fadeInUp} className="flex flex-col gap-3">
                <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-neutral-900 border-b border-neutral-100 pb-2">
                  Studio Office
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-light">
                  Office 1420, Primetime Tower,<br />
                  Business Bay, Dubai, UAE
                </p>
              </motion.div>

              {/* New Projects */}
              <motion.div variants={fadeInUp} className="flex flex-col gap-3 sm:col-span-2 mt-2">
                <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-neutral-900 border-b border-neutral-100 pb-2">
                  New Projects &amp; Consultations
                </h3>
                <ul className="flex flex-col gap-2.5 text-xs text-neutral-600">
                  <li className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                    <a href="mailto:info@flamesfireplace.com" className="hover:text-[#B89A7A] transition-colors">
                      info@flamesfireplace.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Smartphone className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                    <a href="tel:+97142345678" className="hover:text-[#B89A7A] transition-colors">
                      +971 4 234 5678
                    </a>
                  </li>
                </ul>
              </motion.div>

            </motion.div>

          </motion.div>

          {/* Right Column - Interactive Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-white"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="flex flex-col gap-5"
                >
                  {error && (
                    <div className="bg-red-50 border border-red-200/50 text-red-700 text-xs px-4 py-3 rounded-lg font-light tracking-wide animate-fadeIn">
                      {error}
                    </div>
                  )}
                  
                  {/* Row 1: Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input
                      id="contact-form-name"
                      type="text"
                      name="name"
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-neutral-200 rounded-lg text-sm text-neutral-800 placeholder-neutral-400 bg-white focus:outline-none focus:border-[#B89A7A] transition-colors"
                    />
                    <input
                      id="contact-form-phone"
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-neutral-200 rounded-lg text-sm text-neutral-800 placeholder-neutral-400 bg-white focus:outline-none focus:border-[#B89A7A] transition-colors"
                    />
                  </div>

                  {/* Row 2: Email */}
                  <input
                    id="contact-form-email"
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-neutral-200 rounded-lg text-sm text-neutral-800 placeholder-neutral-400 bg-white focus:outline-none focus:border-[#B89A7A] transition-colors"
                  />

                  {/* Row 3: Message box with overlaid WhatsApp Quick Launch Button */}
                  <div className="relative">
                    <textarea
                      id="contact-form-message"
                      name="message"
                      placeholder="Message"
                      rows={8}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full p-4 pr-16 border border-neutral-200 rounded-lg text-sm text-neutral-800 placeholder-neutral-400 bg-white focus:outline-none focus:border-[#B89A7A] transition-colors resize-none"
                    />
                    
                    {/* Floating WhatsApp Action Button inside the message box corner */}
                    <button
                      id="contact-whatsapp-overlay-launcher"
                      type="button"
                      onClick={launchWhatsAppDirect}
                      className="absolute bottom-4 right-4 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer group"
                      title="Chat on WhatsApp"
                    >
                      <svg
                        className="w-6 h-6 fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.989 3.3 1.513 5.35 1.515 5.548 0 10.061-4.512 10.064-10.064.002-2.69-1.045-5.216-2.946-7.119C17.154 1.582 14.636.536 12.01.536c-5.55 0-10.069 4.512-10.073 10.064-.001 2.036.529 4.01 1.535 5.713L2.503 21.64l5.477-1.436z" />
                        <path d="M8.823 6.613c-.156-.347-.32-.354-.47-.36l-.398-.008c-.143 0-.376.054-.572.268-.195.214-.748.73-.748 1.779 0 1.05.764 2.062.87 2.206.107.144 1.503 2.296 3.642 3.22.508.22.905.35 1.213.448.51.162.973.139 1.34.084.408-.06 1.24-.507 1.413-.997.172-.49.172-.91.121-.997-.051-.088-.188-.139-.395-.244-.207-.104-1.226-.605-1.415-.673-.189-.068-.328-.104-.465.103-.137.207-.532.673-.652.81-.12.138-.24.156-.448.052-.207-.104-.876-.323-1.668-1.03-.615-.55-1.03-1.228-1.15-1.436-.12-.207-.013-.32.09-.423.094-.093.208-.244.312-.366.103-.122.138-.207.207-.347.069-.138.034-.26-.017-.364-.051-.104-.415-1.002-.57-1.347z" />
                      </svg>
                    </button>
                  </div>

                  {/* Submit Action Button */}
                  <div className="flex justify-start">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      id="contact-form-submit"
                      type="submit"
                      className="px-10 py-3 bg-[#B89A7A] hover:bg-[#a38668] text-white text-sm font-medium rounded-lg transition-colors duration-300 cursor-pointer shadow-sm font-semibold"
                    >
                      Send
                    </motion.button>
                  </div>

                </motion.form>
              ) : (
                /* Success State */
                <motion.div 
                  key="success-panel"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  id="contact-success-panel" 
                  className="border border-neutral-100 p-8 rounded-2xl flex flex-col items-center justify-center text-center gap-6 shadow-sm"
                >
                  <span className="w-12 h-12 bg-[#B89A7A]/10 text-[#B89A7A] rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6" />
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-medium text-neutral-900">Thank You</h3>
                    <p className="text-xs text-neutral-500 mt-2 max-w-sm leading-relaxed font-light">
                      Your message has been successfully transmitted. Our landscape and swimming pool design consultants will connect with you shortly.
                    </p>
                  </div>
                  <button
                    id="contact-reset-button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', message: '' });
                    }}
                    className="px-6 py-2 border border-neutral-200 hover:border-neutral-900 rounded-lg text-xs text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
