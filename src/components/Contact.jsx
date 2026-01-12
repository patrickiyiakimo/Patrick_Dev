'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FiMail, FiUser, FiMessageSquare, FiSend, FiCheck, FiLinkedin, FiGithub, FiMapPin, FiPhone } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail className="w-5 h-5" />,
      title: 'Email',
      value: 'iyiakimopatrick2002@gmail.com',
      link: 'mailto:iyiakimopatrick2002@gmail.com'
    },
    {
      icon: <FiPhone className="w-5 h-5" />,
      title: 'Phone',
      value: '+234 814 364 3066',
      link: 'tel:+2348143643066'
    },
    {
      icon: <FiMapPin className="w-5 h-5" />,
      title: 'Location',
      value: 'Abuja, Nigeria',
      link: 'https://maps.google.com/?q=Abuja,Nigeria'
    }
  ];

  const socialLinks = [
    {
      icon: <FiGithub className="w-5 h-5" />,
      name: 'GitHub',
      url: 'https://github.com/patrickiyiakimo',
      color: 'hover:bg-gray-900 hover:text-white'
    },
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/patrick-iyiakimo-6a15a226a/',
      color: 'hover:bg-blue-700 hover:text-white'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-emerald-100 dark:from-blue-900/30 dark:to-emerald-900/30 mb-6">
            <FiMail className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              Let's Build Something Amazing
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you. 
            Let's create something exceptional together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info & Picture */}
          <div className="space-y-8">
            {/* Professional Picture */}
           <div className="relative">
                <Image 
                src="/images/IMG_E3124.JPG"
                alt="Patrick Iyiakimo"
                width={300}
                height={300}
                className="rounded-xl"
                />
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                  >
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg">
                      <span className="text-white">
                        {info.icon}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {info.title}
                      </div>
                      <div className="text-gray-900 dark:text-white font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Connect With Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-700 dark:text-gray-300 ${social.color} transition-all duration-300 transform hover:scale-110`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800/30">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Currently Available
                </h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Open to new opportunities, collaborations, and interesting projects. 
                Typically respond within 24 hours.
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send Me a Message
            </h3>

            {/* Success Message */}
            {isSubmitted && (
              <div className="mb-6 p-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl">
                <div className="flex items-center space-x-3">
                  <FiCheck className="w-5 h-5" />
                  <div>
                    <div className="font-semibold">Message Sent Successfully!</div>
                    <div className="text-sm opacity-90">
                      Thank you for reaching out. I'll get back to you soon.
                    </div>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <div className="flex items-center space-x-2">
                    <FiUser className="w-4 h-4" />
                    <span>Full Name</span>
                  </div>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 ${
                    errors.name 
                      ? 'border-red-500 focus:ring-red-500/30 focus:border-red-500' 
                      : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500/30 focus:border-blue-500'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center space-x-1">
                    <span>⚠</span>
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <div className="flex items-center space-x-2">
                    <FiMail className="w-4 h-4" />
                    <span>Email Address</span>
                  </div>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 ${
                    errors.email 
                      ? 'border-red-500 focus:ring-red-500/30 focus:border-red-500' 
                      : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500/30 focus:border-blue-500'
                  }`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center space-x-1">
                    <span>⚠</span>
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <div className="flex items-center space-x-2">
                    <FiMessageSquare className="w-4 h-4" />
                    <span>Subject</span>
                  </div>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 ${
                    errors.subject 
                      ? 'border-red-500 focus:ring-red-500/30 focus:border-red-500' 
                      : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500/30 focus:border-blue-500'
                  }`}
                  placeholder="What is this regarding?"
                />
                {errors.subject && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center space-x-1">
                    <span>⚠</span>
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <div className="flex items-center space-x-2">
                    <FiMessageSquare className="w-4 h-4" />
                    <span>Message</span>
                  </div>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 bg-white dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 resize-none ${
                    errors.message 
                      ? 'border-red-500 focus:ring-red-500/30 focus:border-red-500' 
                      : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500/30 focus:border-blue-500'
                  }`}
                  placeholder="Tell me about your project or inquiry..."
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center space-x-1">
                    <span>⚠</span>
                    <span>{errors.message}</span>
                  </p>
                )}
                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  {formData.message.length}/1000 characters
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-3 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Form Note */}
              <div className="text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  I typically respond within 24 hours. Looking forward to connecting with you!
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;