import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What makes a Terranova different from others?',
      answer: 'At Terranova, we don’t just build structures; we craft spaces where every corner reflects care and imagination. Each luxury farmhouse in Hyderabad is shaped through an architect-led design process, ensuring every structure feels alive and personal. From handpicked materials to the smallest farmhouse design details, our team ensures that your home is as unique as your lifestyle and is designed exactly as you envisioned it.'
    },
    {
      question: 'How does Terranova handle the farmhouse design and furnishing process?',
      answer: 'Our approach is full-circle. Architects, designers, and interior specialists collaborate to ensure that every element aligns perfectly and harmoniously. Every detail is thoughtfully planned, focusing on creating comfort without compromising style. Lighting, textures, and spatial flow come together organically, resulting in a bespoke agricultural estate that feels effortless yet deeply refined.'
    },
    {
      question: 'Can Terranova help with creating a personalized farmhouse experience?',
      answer: 'Absolutely. All of Terranova’s farmhouses in India and abroad are tailored to the client’s tastes and lifestyle. Want a cozy reading nook, an outdoor lounge, or a terrace garden with specific views? We make it happen. Our goal is to turn visions and dreams into reality, with utmost attention to quality and experience.'
    },
    {
      question: 'Does Terranova provide 3D renders or use advanced technology in farmhouse design plans?',
      answer: 'Yes. Even before the first brick is laid, we create immersive 3D renders that allow you to walk through your luxury farmhouse in Hyderabad virtually. We are also exploring AI in real estate to fine-tune layouts, lighting, and interiors. This ensures what you imagine is exactly what you get, down to the smallest detail.'
    },
    {
      question: 'How long does it usually take to complete a project?',
      answer: 'The timeline depends on the size, scope, and level of personalization involved. What sets us apart is how we manage the journey. You’ll always know what stage your home is in, and we make sure every step is handled with precision so the final delivery feels worth the wait.'
    },
    {
      question: 'What kinds of projects does Terranova specialize in?',
      answer: 'Terranova focuses on more than just farmhouses; our expertise extends to luxury villas, private bungalows, retreat centers, and bespoke agricultural estates. Each project is approached as a signature creation, blending unique architecture, interiors, and farmhouse design.'
    },
    {
      question: 'What services does Terranova offer?',
      answer: 'Terranova offers end-to-end services across multiple lifestyle and real estate formats, from designing farmhouses, villas, bungalows, and retreat centers to executing complete furnishing and landscaping. Each project begins with an architect-led design process, where we understand your site, purpose, and aesthetic before crafting something that feels truly yours: no replicas, no compromises!'
    },
  ];

  return (
    <section className="py-16 section-neutral">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Animated Text */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              {/* FAQ's Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-5xl md:text-6xl font-bold text-primary-600 tracking-tight">
                  FAQ's
                </h3>
              </motion.div>

              {/* Frequently Asked Questions Text */}
              <motion.div
                className="space-y-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <p className="text-xl md:text-2xl font-light text-text-primary">
                    Frequently
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <p className="text-xl md:text-2xl font-light text-text-primary">
                    Asked Questions
                  </p>
                </motion.div>
              </motion.div>

              {/* Decorative Element */}
              <motion.div
                className="w-20 h-1 bg-primary-600 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 1.0 }}
              />
            </div>
          </motion.div>

          {/* Right Side - FAQ Content */}
          <div>
            {/* FAQ Items */}
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="border-b border-neutral-200 last:border-b-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full py-4 text-left flex items-center justify-between hover:opacity-70 transition-opacity"
                  >
                    <h3 className="text-lg font-medium text-text-primary pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <motion.div
                        animate={{ rotate: openIndex === index ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Plus className="h-5 w-5 text-text-secondary" />
                      </motion.div>
                    </div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? "auto" : 0,
                      opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-4">
                      <p className="text-text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>

              ))}
              
            </div>
            
          </div>
          
        </div>
<motion.div
  className="mt-12 border text-gray-500 border-neutral-300 rounded-2xl p-8 bg-white/80 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all text-center"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.8 }}
>
  <p className="text-lg text-text-primary leading-relaxed mb-4 hover:text-black font-medium">
    Got something specific in mind? Talk to our team for a one-on-one consultation to discover how
    <span className="font-semibold text-primary-600"> Terranova </span>
    can turn your land into a living masterpiece.
  </p>
  <p className="text-lg text-text-primary leading-relaxed">
    Write to{' '}
    <b><a
      href="mailto:contact@terranovadeveloper.in"
      className="text-primary-600 hover:underline"
    >
      contact@terranovadeveloper.in
    </a></b>
    , and our team will get back to you as soon as we can.
  </p>
</motion.div>


      </div>
    </section>
  );
};

export default FAQSection;