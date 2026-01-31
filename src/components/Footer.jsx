import React from 'react';
import { Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20 animate-fade-in-up">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">Swastik Onix</h2>
            <p className="text-gray-400 max-w-sm mb-8">
              Crafting the digital future with code and creativity. We build experiences that matter.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-web-purple transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-web-purple transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-web-purple transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Work</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:swastikonix@gmail.com" className="hover:text-white transition-colors">swastikonix@gmail.com</a>
              </li>
              <li>
                  <a href="tel:+918919753219" className="hover:text-white transition-colors">+91 891 975 3219</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 pt-8 border-t border-white/5">
          <p>&copy; {new Date().getFullYear()} Swastik Onix. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
