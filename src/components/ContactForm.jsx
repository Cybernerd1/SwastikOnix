import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Web',
    requirements: '',
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      if (!supabase) {
        throw new Error('Supabase client not initialized. Please check your .env file.');
      }

      const { data, error } = await supabase
        .from('submissions')
        .insert([
          { 
            full_name: formData.name, 
            email: formData.email,
            phone: formData.phone, 
            project_type: formData.projectType, 
            requirements: formData.requirements 
          }
        ])
        .select();

      if (error) {
        console.error('Supabase error details:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        });
        throw error;
      }

      console.log('Form submitted successfully:', data);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', projectType: 'Web', requirements: '' });
    } catch (error) {
      console.error('Error submitting form:', {
        message: error.message,
        error: error
      });
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-web-purple/10 rounded-full blur-[120px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-web-blue/10 rounded-full blur-[120px] -ml-48 -mb-48" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold tracking-tighter mb-4"
            >
              Let's build something <span className="text-web-purple">extraordinary.</span>
            </motion.h2>
            <p className="text-gray-400 text-xl">Tell us about your project and we'll get back to you within 24 hours.</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl"
          >
            {status === 'success' ? (
              <div className="text-center py-12">
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-4">Message Received!</h3>
                <p className="text-gray-400 text-lg mb-8">Thank you for reaching out. Our team will review your requirements and contact you shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-8 py-3 bg-web-purple hover:bg-web-purple/80 rounded-full font-bold transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-web-purple transition-colors text-white"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-web-purple transition-colors text-white"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="10 digit mobile number"
                      pattern="^(?:\+91|0)?[6-9]\d{9}$"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-web-purple transition-colors text-white"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Project Type</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Web', 'App', 'Web3', 'AI/ML'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({...formData, projectType: type})}
                        className={`py-3 rounded-xl border transition-all font-medium ${
                          formData.projectType === type 
                          ? 'bg-web-purple border-web-purple text-white' 
                          : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Project Requirements</label>
                  <textarea 
                    required
                    rows="5"
                    placeholder="Tell us about your vision, goals, and any specific features you need..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-web-purple transition-colors text-white resize-none"
                    value={formData.requirements}
                    onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                  />
                </div>

                {/* {status === 'error' && (
                  <div className="flex items-start gap-3 text-red-400 bg-red-400/10 p-4 rounded-xl border border-red-400/20">
                    <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Something went wrong</p>
                      <p className="text-sm text-red-300">
                        Please check the browser console for details. Common issues:
                      </p>
                      <ul className="text-sm text-red-300 mt-2 ml-4 list-disc space-y-1">
                        <li>Invalid Supabase credentials (check your .env file)</li>
                        <li>Database table not created or incorrect permissions</li>
                        <li>Network connectivity issues</li>
                      </ul>
                    </div>
                  </div>
                )} */}

                <button 
                  disabled={status === 'loading'}
                  type="submit"
                  className="w-full bg-gradient-to-r from-web-purple to-web-blue py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Proposal <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
