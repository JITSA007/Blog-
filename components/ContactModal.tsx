
import React, { useState } from 'react';
import { ModalShell } from './ModalShell';

interface ContactModalProps {
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [inquiryType, setInquiryType] = useState('collaboration');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you shortly.');
    onClose();
  };

  return (
    <ModalShell title="Let's Connect" onClose={onClose}>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-light-slate">I'm interested in...</label>
                <select id="inquiryType" value={inquiryType} onChange={e => setInquiryType(e.target.value)} className="mt-1 block w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-earthy-green focus:border-earthy-green">
                    <option value="collaboration">Research Collaborations</option>
                    <option value="speaking">Speaking Invites</option>
                    <option value="other">Other</option>
                </select>
            </div>
             <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-light-slate">
                Your Name
              </label>
              <input
                type="text"
                id="contact-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-earthy-green focus:border-earthy-green"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-light-slate">
                Your Email
              </label>
              <input
                type="email"
                id="contact-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-earthy-green focus:border-earthy-green"
              />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-light-slate">Message</label>
                <textarea id="message" rows={4} value={message} onChange={e => setMessage(e.target.value)} required className="mt-1 block w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-earthy-green focus:border-earthy-green"></textarea>
            </div>
            <button type="submit" className="w-full bg-earthy-green text-deep-blue font-bold py-3 px-4 rounded-lg hover:bg-opacity-80 transition-transform transform hover:scale-105">
                Send Message
            </button>
        </form>
    </ModalShell>
  );
};
