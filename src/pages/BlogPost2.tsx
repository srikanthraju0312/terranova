import { useEffect, useState, useRef } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Calendar } from 'lucide-react';
import BlogFAQAccordion from '@/components/BlogFAQAccordion';
import { motion, AnimatePresence } from 'framer-motion';

const BlogPost2 = () => {
  const [showShadow, setShowShadow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Show shadow when at top, hide when scrolled down more than 50px
      setShowShadow(window.scrollY <= 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqs = [
    {
      question: "What is the average price of a luxury farmhouse on the outskirts of Hyderabad?",
      answer: "Prices vary significantly based on location, land size, and the level of customization..."
    },
    {
      question: "How does RERA protect buyers of farmhouse plots?",
      answer: "The Telangana Real Estate Regulatory Authority (RERA) mandates registration..."
    },
    {
      question: "What are the ongoing costs associated with owning a farmhouse?",
      answer: "Beyond the initial investment, owners should budget for taxes, maintenance, and utilities."
    },
    {
      question: "Can I get a home loan for buying land and constructing a farmhouse?",
      answer: "Yes, most banks offer loans for the purchase of land and separate construction loans."
    },
    {
      question: "Why should I choose a builder like Terranova over a local contractor?",
      answer: "A specialized builder brings expertise in design, quality, and project management."
    },
  ];

  const sections = [
    "Decoding the Hyderabad Luxury Landscape: What Defines Luxury Today?",
    "The Evolution from Opulence to Experience",
    "Emerging Hotspots for Luxury Properties in Hyderabad",
    "The Nitty-Gritty: Your Step-by-Step Buying Process",
    "The Future-Proof Investment",
    "FAQs",
  ];

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [activeSection, setActiveSection] = useState<string>(sections[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      let currentSection = sections[0];
      sections.forEach((title) => {
        const ref = sectionRefs.current[title];
        if (ref && ref.offsetTop <= scrollPosition) {
          currentSection = title;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (title: string) => {
    const ref = sectionRefs.current[title];
    if (ref) {
      window.scrollTo({
        top: ref.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Dark background section for header visibility - only shows when scrolling */}
      <AnimatePresence>
        {showShadow && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-neutral-800 to-transparent z-0"
          />
        )}
      </AnimatePresence>

      <Header />

      <main className="max-w-[1200px] mx-auto px-4 md:px-8 flex relative pt-32 md:pt-36 z-10">
        {/* Table of Contents */}
        <aside className="hidden lg:block w-64 sticky top-28 self-start h-fit pr-8 border-r border-neutral-200">
          <h3 className="text-lg font-semibold mb-4 text-neutral-800">Table of Contents</h3>
          <ul className="space-y-3 text-sm">
            {sections.map((title) => (
              <li key={title}>
                <button
                  onClick={() => scrollToSection(title)}
                  className={`text-left transition-colors duration-200 ${activeSection === title
                      ? 'text-primary-600 font-semibold'
                      : 'text-neutral-600 hover:text-primary-600'
                    }`}
                >
                  {title}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <div className="flex-1 lg:pl-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-10"
          >
            <div className="text-primary-600 uppercase text-sm font-semibold tracking-wider mb-3">
              Buyer’s Guide
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-neutral-900 mb-4">
              Navigating the Luxury Real Estate Market in Hyderabad: A Smart Buyer's Guide
            </h1>
            <div className="flex items-center gap-3 text-neutral-500 mb-6">
              <Calendar className="w-5 h-5" />
              <span className="text-sm">Dec 3, 2024</span>
            </div>
            <div className="rounded-lg overflow-hidden mb-10">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop"
                alt="Luxury Real Estate Market"
                className="w-full h-auto rounded-md"
              />
              <p className="text-xs text-neutral-500 mt-2 text-center">
                A guide to understanding Hyderabad’s evolving luxury real estate landscape.
              </p>
            </div>
          </motion.div>

          <motion.article
            className="prose max-w-none prose-neutral prose-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              Hyderabad’s skyline is a testament to its growth. But with choice comes complexity.
              This guide simplifies luxury property buying — from decoding modern luxury to navigating RERA.
            </p>

            {sections.map((title, idx) => (
              <section
                key={title}
                ref={(el) => (sectionRefs.current[title] = el)}
                className="scroll-mt-24 mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">{title}</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  This section elaborates on the topic "{title}" from the article,
                  offering insights into Hyderabad’s real estate, emerging hotspots,
                  and what defines modern luxury living today.
                </p>
                {idx === 3 && (
                  <>
                    <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                      Key Steps to Follow
                    </h3>
                    <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                      <li>Assemble a reliable team: agent, lawyer, financial advisor.</li>
                      <li>Verify RERA registration and legal documentation.</li>
                      <li>Visit the property and assess total cost before purchase.</li>
                    </ul>
                  </>
                )}
              </section>
            ))}

            {/* Key Takeaways */}
            <div className="border border-primary-200 rounded-lg p-6 bg-primary-50 mb-12">
              <h3 className="text-lg font-semibold text-primary-700 mb-3">Key Takeaways</h3>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                <li>Hyderabad’s luxury real estate is experience-driven, not status-based.</li>
                <li>Emerging areas like Kokapet and Narsingi offer excellent investment value.</li>
                <li>Due diligence with RERA and trusted builders is essential.</li>
              </ul>
            </div>

            {/* FAQs */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Frequently Asked Questions</h2>
              <section ref={(el) => (sectionRefs.current["FAQs"] = el)} className="scroll-mt-24 mb-16">
                <BlogFAQAccordion faqs={faqs} />
              </section>

            </div>
          </motion.article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost2;
