import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2, Clock, Shield } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('indoor-ethanol');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Quick basic validation
    if (!name.trim()) {
      setErrorMsg('Full Name is required.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('A valid Email Address is required.');
      return;
    }
    if (!phone.trim()) {
      setErrorMsg('Phone Number is required.');
      return;
    }

    setIsSubmitting(true);

    const product = 
      interest === 'indoor-ethanol' ? 'Indoor Bio Ethanol Fireplace' :
      interest === 'outdoor-features' ? 'Outdoor Fire Features' : 'General Enquiry';

    try {
      await emailjs.send(
        'service_dzl8p0h',
        'template_ch21qi2',
        {
          name,
          email,
          phone,
          product,
          message,
        },
        'gmX3idNk9LXpymr6p'
      );
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      setErrorMsg('Failed to send message. Please try again or contact us directly via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateWhatsAppLink = () => {
    const interestLabel = 
      interest === 'indoor-ethanol' ? 'Indoor Bio Ethanol Fireplace' :
      interest === 'outdoor-features' ? 'Outdoor Fire Features' : 'General Enquiry';

    const text = `Hi Flames Fireplace team, I'm reaching out from your website contact form:\n\n` +
      `- Name: ${name || 'Interested Client'}\n` +
      `- Email: ${email || 'Not provided'}\n` +
      `- Phone: ${phone || 'Not provided'}\n` +
      `- Interest: ${interestLabel}\n` +
      `- Message: ${message || 'I would like to request more information.'}`;

    return `https://wa.me/971542112891?text=${encodeURIComponent(text)}`;
  };

  return (
    <div id="contact-us-page-wrapper" className="min-h-screen bg-[#0b0b0b] text-neutral-350 pb-28 selection:bg-orange-500 selection:text-white">
      {/* Top Header Block */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-28 sm:pt-36 pb-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-2.5"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-[10px] font-bold uppercase tracking-widest font-mono">
            Get In Touch
          </span>
          <h1 className="font-sans font-medium text-3xl md:text-5xl text-white tracking-tight max-w-2xl mx-auto leading-tight">
            Contact Flames Fireplace — Dubai Fire Place Experts
          </h1>
          <p className="font-sans text-xs md:text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed mt-1">
            Have a project in mind? Fill out the contact form below, and our engineering advisory group will reach out within 1 business day to coordinate specifications.
          </p>
        </motion.div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Direct Contact Form */}
        <div className="lg:col-span-7 bg-[#121212] rounded-3xl border border-neutral-800 shadow-xs p-8 md:p-10">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="contact-form"
                onSubmit={handleFormSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <h2 className="font-sans font-semibold text-lg text-white">Send an Enquiry</h2>
                  <p className="text-xs text-neutral-450 font-sans">
                    Please provide your contact details and message below. Fields marked with * are required.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-sans">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="contact-name" className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 font-mono">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#161616] border border-neutral-800 focus:bg-[#1a1a1a] focus:outline-none focus:border-orange-500 transition-all font-sans text-xs h-12 text-white"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="contact-email" className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 font-mono">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="hello@flamesfireplace.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#161616] border border-neutral-800 focus:bg-[#1a1a1a] focus:outline-none focus:border-orange-500 transition-all font-sans text-xs h-12 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Phone field */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="contact-phone" className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 font-mono">
                      Phone Number (WhatsApp preferred) *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="e.g. +971 50 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#161616] border border-neutral-800 focus:bg-[#1a1a1a] focus:outline-none focus:border-orange-500 transition-all font-sans text-xs h-12 text-white"
                    />
                  </div>

                  {/* Product Interest Selector */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="contact-interest" className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 font-mono">
                      Product Interest *
                    </label>
                    <select
                      id="contact-interest"
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#161616] border border-neutral-800 focus:bg-[#1a1a1a] focus:outline-none focus:border-orange-500 transition-all font-sans text-xs h-12 cursor-pointer text-white"
                    >
                      <option value="indoor-ethanol" className="bg-[#121212] text-white">Indoor Bio Ethanol Fireplace</option>
                      <option value="outdoor-features" className="bg-[#121212] text-white">Outdoor Fire Feature</option>
                      <option value="general" className="bg-[#121212] text-white">General Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Message field */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="contact-message" className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 font-mono">
                    Your Message / Project Scope
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Tell us about your project dimensions, desired finish, or structural timeline..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#161616] border border-neutral-800 focus:bg-[#1a1a1a] focus:outline-none focus:border-orange-500 transition-all font-sans text-xs leading-relaxed resize-none text-white"
                  />
                </div>

                {/* Form Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-sans text-xs font-semibold transition-all duration-300 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                      Submitting Enquiry...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Form
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              /* Simple beautiful success message */
              <motion.div
                key="success-card"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-950/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-900/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-sans font-bold text-2xl text-white">
                    Enquiry Submitted Successfully!
                  </h3>
                  <p className="font-sans text-xs text-neutral-450 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{name}</strong>. Your message has been routed directly to our Dubai advisor group. We will be in touch with you shortly.
                  </p>
                </div>

                {/* Direct alternative actions */}
                <div className="pt-4 flex flex-col sm:flex-row gap-3 max-w-md mx-auto justify-center">
                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-sans text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shadow-emerald-500/10"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5 fill-current">
                      <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.907.533 3.698 1.464 5.23L2 22l4.912-1.39A9.972 9.972 0 0012.004 22c5.523 0 10.003-4.48 10.003-10.004C22.007 6.48 17.527 2 12.004 2zm5.787 14.156c-.244.69-1.42 1.265-1.968 1.348-.5.076-1.15.114-1.834-.103-.437-.14-1.002-.323-1.63-.585-2.73-1.14-4.5-3.896-4.636-4.08-.137-.181-1.107-1.472-1.107-2.81 0-1.336.685-1.992.93-2.253.244-.26.533-.327.712-.327.178 0 .356 0 .512.007.163.007.382-.062.597.456.223.533.763 1.86.83 1.996.067.137.112.297.022.477-.09.18-.135.297-.268.452-.133.155-.282.346-.402.465-.133.132-.274.275-.118.543.155.267.69.1.802 1.13 1.488.99 2.5 1.543 2.857 1.764.356.22 1.14.73 1.22.427.08-.303.427-.478.472-.614.045-.136.09-.272.268-.362.178-.09 1.127-.53 1.438-.682.312-.153.512-.227.712-.046.2.181 1.002 1.002 1.128 1.127.127.126.244.227.022.614z" />
                    </svg>
                    Chat on WhatsApp Now
                  </a>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setName('');
                      setEmail('');
                      setPhone('');
                      setMessage('');
                    }}
                    className="flex-1 py-3.5 rounded-xl border border-neutral-800 text-neutral-400 hover:text-white font-sans text-xs font-semibold text-center transition-all cursor-pointer bg-[#161616]"
                  >
                    Send Another Message
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column: Project Details */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Company Details Block */}
          <div className="bg-[#121212] rounded-3xl border border-neutral-800 shadow-xs p-6 md:p-8 space-y-6 text-left">
            <div className="space-y-1">
              <span className="text-[9px] font-mono font-bold text-orange-450 uppercase tracking-widest block">
                Office &amp; Support
              </span>
              <h3 className="font-sans font-bold text-base text-white">
                Contact Details
              </h3>
            </div>

            <div className="space-y-4">
              {/* Detail item: Location */}
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-[#161616] text-neutral-350 border border-neutral-800">
                  <MapPin className="w-4 h-4 text-orange-500" />
                </div>
                <div className="space-y-1 font-sans">
                  <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block font-mono">Office Location</span>
                  <span className="text-xs font-semibold text-neutral-200 block leading-tight">Business Bay, Dubai, United Arab Emirates</span>
                </div>
              </div>

              {/* Detail item: Phone */}
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-[#161616] text-neutral-350 border border-neutral-800">
                  <Phone className="w-4 h-4 text-orange-500" />
                </div>
                <div className="space-y-1 font-sans">
                  <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block font-mono">Direct Technical Line</span>
                  <a href="tel:+971542112891" className="text-xs font-semibold text-neutral-200 hover:text-orange-400 block leading-tight">
                    +971 54 211 2891
                  </a>
                </div>
              </div>

              {/* Detail item: Email */}
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-[#161616] text-neutral-355 border border-neutral-800">
                  <Mail className="w-4 h-4 text-orange-500" />
                </div>
                <div className="space-y-1 font-sans">
                  <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block font-mono">Enquiries Email</span>
                  <a href="mailto:info@flamesfireplace.com" className="text-xs font-semibold text-neutral-200 hover:text-orange-400 block leading-tight">
                    info@flamesfireplace.com
                  </a>
                </div>
              </div>

              {/* Business Hours removed per request */}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
