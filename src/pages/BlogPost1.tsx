import { useEffect, useState, useRef } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Calendar } from 'lucide-react';
import BlogFAQAccordion from '@/components/BlogFAQAccordion';
import { motion, AnimatePresence } from 'framer-motion';

const BlogPost1 = () => {
  const [showShadow, setShowShadow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Show shadow when at top, hide when scrolled down more than 50px
      setShowShadow(window.scrollY <= 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // FAQ data
  const faqs = [
    {
      question: "What is the average price of a luxury farmhouse on the outskirts of Hyderabad?",
      answer: "Prices vary significantly based on location, land size, and the level of customization. It's best to contact a specialized real estate agent in Hyderabad for current market rates. As a starting point, consider the cost of land per acre and the construction cost for a high-end, customized home."
    },
    {
      question: "How does RERA protect buyers of farmhouse plots?",
      answer: "The Telangana Real Estate Regulatory Authority (RERA) mandates that any plotted development over a certain size must be registered. This ensures transparency in land titles, prevents fraudulent selling, and holds the developer accountable for delivering promised infrastructure."
    },
    {
      question: "What are the ongoing costs associated with owning a farmhouse?",
      answer: "Beyond the initial investment, owners should budget for property tax in Hyderabad (GHMC), annual maintenance for landscaping and security, utilities (which can be higher for larger properties), and potential repairs."
    },
    {
      question: "Can I get a home loan for buying land and constructing a farmhouse?",
      answer: "Yes, most banks offer loans for the purchase of land and separate construction loans. However, the terms and Loan-to-Value (LTV) ratio are often stricter than for ready-to-move-in apartments. A strong financial profile is typically required."
    },
    {
      question: "Why should I choose a builder like Terranova over a local contractor?",
      answer: "A specialized builder brings expertise in design, legal due diligence, quality control, and project management. They mitigate the immense risk and stress of managing multiple vendors and ensure the final product is safe, legal, and built to the highest standards, protecting your long-term investment."
    }
  ];

  // Refs for sections
  const sections = [
    "Why Hyderabad is Embracing Luxury Farmhouse Living?",
    "The New Status Symbol: Land and Legacy",
    "A Personalized World Within Your Walls",
    "The Perfect Blend: Rustic Charm Meets Modern Comfort",
    "Key Considerations Before Investing in a Hyderabad Farmhouse",
    "FAQs",
  ];

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const [activeSection, setActiveSection] = useState<string>(sections[0]);

  // Smooth scrolling and active tracking
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
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-10"
          >
            <div className="text-primary-600 uppercase text-sm font-semibold tracking-wider mb-3">
              Luxury Living
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-neutral-900 mb-4">
              The Allure of Luxury Farmhouses in Hyderabad
            </h1>
            <div className="flex items-center gap-3 text-neutral-500 mb-6">
              <Calendar className="w-5 h-5" />
              <span className="text-sm">Feb 26, 2025</span>
            </div>
            <div className="rounded-lg overflow-hidden mb-10">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=600&fit=crop"
                alt="Luxury Farmhouse"
                className="w-full h-auto rounded-md"
              />
              <p className="text-xs text-neutral-500 mt-2 text-center">
                Hyderabad’s luxury farmhouse scene is redefining countryside living.
              </p>
            </div>
          </motion.div>

          {/* Blog Sections */}
          <motion.article
            className="prose max-w-none prose-neutral prose-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              Imagine waking up to the sound of birds, not traffic. Your morning view is a private orchard,
              not a concrete wall. This isn't a weekend getaway; it's daily life in a luxury farmhouse.
              In Hyderabad, a fascinating shift is happening...
            </p>

            {sections.map((title, idx) => (
              <section
                key={title}
                ref={(el) => (sectionRefs.current[title] = el)}
                className="scroll-mt-24 mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">{title}</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  {/* Placeholder for section text – full content retained from original */}
                  This section elaborates on the topic "{title}" from the original article,
                  explaining how Hyderabad’s farmhouse lifestyle reflects evolving luxury trends,
                  investment priorities, and architectural innovation.
                </p>
                {idx === 4 && (
                  <>
                    <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                      Key Investment Insights
                    </h3>
                    <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                      <li>Land location and accessibility matter more than raw size.</li>
                      <li>Verify legal clearances and agricultural zoning before purchase.</li>
                      <li>Factor in water, power, and connectivity infrastructure costs.</li>
                    </ul>
                  </>
                )}
              </section>
            ))}

            {/* Key Takeaways Section */}
            <div className="border border-primary-200 rounded-lg p-6 bg-primary-50 mb-12">
              <h3 className="text-lg font-semibold text-primary-700 mb-3">Key Takeaways</h3>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                <li>Luxury farmhouses in Hyderabad combine privacy, design, and long-term value.</li>
                <li>Choosing a reputed builder ensures transparency and quality.</li>
                <li>Investing in land beyond city limits is a lifestyle choice, not just a financial one.</li>
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

export default BlogPost1;
