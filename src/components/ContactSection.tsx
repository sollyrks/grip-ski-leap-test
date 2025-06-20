
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { MessageSquare, MessageSquareCode, MessageSquareHeart } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'general',
    message: ''
  });
  const { toast } = useToast();

  const supportCategories = [
    { id: 'technical', label: 'Technical Support', icon: MessageSquareCode },
    { id: 'billing', label: 'Billing & Orders', icon: MessageSquare },
    { id: 'general', label: 'General Inquiry', icon: MessageSquareHeart }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Our support team will get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', category: 'general', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Contact Support</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-gray-300">Need help? We're here for you 24/7</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Support Categories */}
          <div className="space-y-6">
            <h3 className="text-2xl font-light mb-8">How can we help?</h3>
            {supportCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.id}
                  className={`p-6 rounded-lg border-2 transition-all cursor-pointer ${
                    formData.category === category.id
                      ? 'border-white bg-white/10'
                      : 'border-gray-600 hover:border-gray-400'
                  }`}
                  onClick={() => setFormData({ ...formData, category: category.id })}
                >
                  <div className="flex items-center gap-4">
                    <IconComponent className="w-8 h-8" />
                    <span className="text-lg">{category.label}</span>
                  </div>
                </div>
              );
            })}

            <div className="mt-12 p-6 bg-gray-900/50 rounded-lg">
              <h4 className="text-lg font-medium mb-4">Quick Support</h4>
              <p className="text-gray-400 mb-4">
                For urgent technical issues, reach out directly:
              </p>
              <div className="space-y-2 text-sm">
                <p>📧 support@grippytech.com</p>
                <p>📱 1-800-GRIPPY-1</p>
                <p>💬 Live chat available 9 AM - 6 PM PST</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Full Name*"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-gray-600 border-2 text-white placeholder:text-gray-400 focus:border-white transition-colors h-14 text-lg"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-gray-600 border-2 text-white placeholder:text-gray-400 focus:border-white transition-colors h-14 text-lg"
                />
              </div>

              <div>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full h-14 px-4 bg-transparent border-gray-600 border-2 text-white focus:border-white transition-colors text-lg rounded-md"
                >
                  {supportCategories.map((category) => (
                    <option key={category.id} value={category.id} className="bg-black">
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Describe your issue or question..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-transparent border-gray-600 border-2 text-white placeholder:text-gray-400 focus:border-white transition-colors resize-none text-lg"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-gray-200 py-6 text-lg font-medium transition-all duration-300 hover:scale-105"
              >
                Send Support Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
