import { useEffect, useState, useRef } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Calendar } from 'lucide-react';
import BlogFAQAccordion from '@/components/BlogFAQAccordion';
import { motion } from 'framer-motion';

const BlogPost3 = () => {
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
    "The Deep-Dive Discovery Session",
    "Curated Land Selection: Finding the Perfect Canvas",
    "The Terranova Craftsmanship Promise",
    "Architecture in Harmony with Nature",
    "Built to Last for Generations",
    "Sustainable and Self-Sufficient Living",
    "A Partnership That Extends Beyond Possession",
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
      <Header />

      <main className="max-w-[1200px] mx-auto px-4 md:px-8 flex relative pt-32 md:pt-36">
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
              Our Projects
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-neutral-900 mb-4">
              The Terranova Difference: Crafting Legacy Farmhouses on the Outskirts of Hyderabad
            </h1>
            <div className="flex items-center gap-3 text-neutral-500 mb-6">
              <Calendar className="w-5 h-5" />
              <span className="text-sm">Jan 28, 2025</span>
            </div>
            <div className="rounded-lg overflow-hidden mb-10">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=600&fit=crop"
                alt="Terranova Legacy Farmhouses"
                className="w-full h-auto rounded-md"
              />
              <p className="text-xs text-neutral-500 mt-2 text-center">
                Discover how Terranova designs legacy farmhouses that balance nature, luxury, and purpose.
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
              At Terranova, every farmhouse begins with a story — yours. This blog explores our design philosophy,
              attention to craftsmanship, and commitment to sustainable, generational living.
            </p>

            {sections.map((title, idx) => (
              <section
                key={title}
                ref={(el) => (sectionRefs.current[title] = el)}
                className="scroll-mt-24 mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">{title}</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  The section "{title}" highlights Terranova’s dedication to bespoke architecture,
                  from land curation and design harmony to post-possession support for clients.
                </p>
                {idx === 6 && (
                  <>
                    <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                      Ongoing Commitment
                    </h3>
                    <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                      <li>Transparent, end-to-end project management.</li>
                      <li>Post-possession support and local community connections.</li>
                      <li>Continued assistance with maintenance and sustainability.</li>
                    </ul>
                  </>
                )}
              </section>
            ))}

            {/* Key Takeaways */}
            <div className="border border-primary-200 rounded-lg p-6 bg-primary-50 mb-12">
              <h3 className="text-lg font-semibold text-primary-700 mb-3">Key Takeaways</h3>
              <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                <li>Terranova builds more than homes — we craft long-lasting family legacies.</li>
                <li>Each project reflects deep personalization and sustainable design principles.</li>
                <li>Our partnership extends from design to post-possession support.</li>
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

export default BlogPost3;
