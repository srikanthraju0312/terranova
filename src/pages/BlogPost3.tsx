import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import BlogFAQAccordion from '@/components/BlogFAQAccordion';

const BlogPost3 = () => {
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

  // Related blog posts (the other 2 blogs)
  const relatedPosts = [
    {
      id: 1,
      title: "The Allure of Luxury Farmhouses in Hyderabad",
      date: "Feb 26, 2025",
      excerpt: "Explore the rising trend of luxury farmhouses in Hyderabad. Discover why these sprawling properties are becoming the ultimate symbol of luxury, privacy, and a connection to nature.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
      category: "Luxury Living",
      slug: "luxury-farmhouses-hyderabad"
    },
    {
      id: 2,
      title: "Navigating the Luxury Real Estate Market in Hyderabad: A Smart Buyer's Guide",
      date: "Dec 3, 2024",
      excerpt: "Thinking of investing in a luxury home in Hyderabad? Our guide covers everything from emerging hotspots and RERA to choosing the right builder.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      category: "Buyer's Guide",
      slug: "navigating-luxury-real-estate-hyderabad"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[100svh] md:min-h-[100dvh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop"
              alt="Terranova Legacy Farmhouses"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/70 via-neutral-900/50 to-neutral-900/70"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-primary-600/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-sm text-text-inverse tracking-widest uppercase">Our Projects</span>
              </div>
              <h1 className="heading-display text-text-inverse mb-6">
                The Terranova Difference: Crafting Legacy Farmhouses on the Outskirts of Hyderabad
              </h1>
              <div className="flex items-center justify-center gap-4 text-text-inverse/80">
                <Calendar className="w-5 h-5" />
                <span className="text-body">Jan 28, 2025</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-24 section-elevated">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <motion.article
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-xl text-text-secondary leading-relaxed">
                  At Terranova, we believe a farmhouse should be a mirror of your soul, not just a copy of a blueprint. While many real estate builders offer plots or pre-designed structures, we see ourselves as legacy creators. We don't just sell land and a house; we co-create a deeply personal haven that reflects your dreams, your family's needs, and your unique connection to the land. This is the Terranova promise.
                </p>
              </div>

              {/* Section 1 */}
              <div className="mb-12">
                <h2 className="heading-lg text-text-primary mb-6">The Deep-Dive Discovery Session</h2>
                <p className="text-body text-text-secondary leading-relaxed mb-4">
                  Before we draw a single line, we invest time in understanding you.
                </p>
                <ul className="space-y-3 text-body text-text-secondary">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span>How does your family spend their weekends?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span>Do you dream of hosting large gatherings or seeking a quiet retreat?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span>Are you a gardening enthusiast, a wellness seeker, or an art lover?</span>
                  </li>
                </ul>
                <p className="text-body text-text-secondary leading-relaxed mt-4">
                  This collaborative approach ensures the final design is intrinsically yours. This is a key differentiator in the real estate companies in Hyderabad landscape.
                </p>
              </div>

              {/* Section 2 */}
              <div className="mb-12">
                <h2 className="heading-lg text-text-primary mb-6">Curated Land Selection: Finding the Perfect Canvas</h2>
                <p className="text-body text-text-secondary leading-relaxed mb-6">
                  Not all land is created equal. Our team uses local expertise to source parcels that offer more than just a good price.
                </p>
                <ul className="space-y-3 text-body text-text-secondary">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>Soil Quality:</strong> We assess the land for its agricultural potential.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>Topography:</strong> We look for natural gradients that can create stunning architectural interest.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>Views and Vistas:</strong> We find plots that capture the best of the Telangana countryside.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>Secure Title:</strong> Our in-house legal team performs rigorous checks, giving you complete peace of mind.</span>
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="mb-12">
                <h2 className="heading-lg text-text-primary mb-6">The Terranova Craftsmanship Promise</h2>
                <p className="text-body text-text-secondary leading-relaxed mb-4">
                  We are obsessed with the details that most people never see but everyone experiences.
                </p>
              </div>

              {/* Section 4 */}
              <div className="mb-12">
                <h2 className="heading-lg text-text-primary mb-6">Architecture in Harmony with Nature</h2>
                <p className="text-body text-text-secondary leading-relaxed mb-6">
                  Our designs follow a core principle: minimize the footprint, maximize the experience.
                </p>
                <ul className="space-y-3 text-body text-text-secondary">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span>We orient homes to maximize natural light and ventilation, reducing energy costs.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span>We use large overhangs, verandahs, and courtyards to blend indoor and outdoor spaces seamlessly.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span>We preserve mature trees and integrate the natural landscape into the overall design.</span>
                  </li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="mb-12">
                <h2 className="heading-lg text-text-primary mb-6">Built to Last for Generations</h2>
                <p className="text-body text-text-secondary leading-relaxed mb-6">
                  The quality of construction in a farmhouse is non-negotiable.
                </p>
                <ul className="space-y-3 text-body text-text-secondary">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span>We use high-grade materials capable of withstanding the elements.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span>Our focus is on structural integrity, water-proofing, and termite-proofing from the ground up.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span>We implement modern real estate building techniques while respecting traditional methods that work.</span>
                  </li>
                </ul>
              </div>

              {/* Section 6 */}
              <div className="mb-12">
                <h2 className="heading-lg text-text-primary mb-6">Sustainable and Self-Sufficient Living</h2>
                <p className="text-body text-text-secondary leading-relaxed mb-6">
                  A Terranova farmhouse is designed to be a responsible ecosystem.
                </p>
                <ul className="space-y-3 text-body text-text-secondary">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>Water Management:</strong> Mandatory rainwater harvesting systems and plans for groundwater recharge.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>Energy Efficiency:</strong> Provision for solar panel installation and energy-efficient lighting and appliances.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>Waste Management:</strong> Solutions for organic waste composting and sewage treatment plants.</span>
                  </li>
                </ul>
              </div>

              {/* Section 7 */}
              <div className="mb-12">
                <h2 className="heading-lg text-text-primary mb-6">A Partnership That Extends Beyond Possession</h2>
                <p className="text-body text-text-secondary leading-relaxed mb-6">
                  Our relationship doesn't end when you get the keys.
                </p>

                <h3 className="text-2xl font-semibold text-text-primary mb-4">End-to-End Project Management</h3>
                <p className="text-body text-text-secondary leading-relaxed mb-6">
                  We handle everything—from land acquisition and architectural design to construction and interior landscaping. You have a single point of contact, making the process transparent and stress-free.
                </p>

                <h3 className="text-2xl font-semibold text-text-primary mb-4">Post-Possession Support and Community</h3>
                <p className="text-body text-text-secondary leading-relaxed">
                  We help you connect with trusted partners for property management in Hyderabad if you need it. For our clients, we create a small community network, sharing best practices for farming, security, and local resources.
                </p>
              </div>

              {/* Final Words */}
              <div className="mb-12 p-8 bg-neutral-50 rounded-2xl border border-neutral-200">
                <h2 className="heading-lg text-text-primary mb-4">Final Words</h2>
                <p className="text-body text-text-secondary leading-relaxed">
                  In a market filled with options, TerraNova stands for something different. We are not just another name among real estate companies in India. We are curators of a lifestyle, builders of legacies, and partners in bringing your most cherished dream of a countryside home to life. If you're ready to build not just a house, but a story, let's begin the conversation.
                </p>
              </div>

              {/* FAQs */}
              <div className="mb-16">
                <h2 className="heading-lg text-text-primary mb-8">Frequently Asked Questions</h2>
                <BlogFAQAccordion faqs={faqs} />
              </div>
            </motion.article>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-neutral-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-lg text-text-primary">More Insights</h2>
              <p className="text-body text-text-secondary mt-4">Continue exploring our expert real estate advice</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link to={`/blog/${post.slug}`} className="group block">
                    <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-4 text-sm text-text-muted">
                        <span className="bg-white px-3 py-1 rounded-full border border-neutral-200">
                          {post.category}
                        </span>
                        <span>{post.date}</span>
                      </div>

                      <h3 className="text-xl font-semibold text-text-primary group-hover:text-primary-600 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-text-secondary leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="pt-2">
                        <span className="text-primary-600 font-medium group-hover:underline inline-flex items-center gap-1">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost3;

