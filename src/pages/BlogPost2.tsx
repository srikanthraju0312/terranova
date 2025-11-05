import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const BlogPost2 = () => {
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
      id: 3,
      title: "The Terranova Difference: Crafting Legacy Farmhouses on the Outskirts of Hyderabad",
      date: "Jan 28, 2025",
      excerpt: "Terranova builds more than farmhouses; we craft personal legacies. Discover our unique approach to designing and building bespoke luxury farmhouses.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
      category: "Our Projects",
      slug: "terranova-difference-legacy-farmhouses"
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
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop"
              alt="Luxury Real Estate Market in Hyderabad"
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
                <span className="text-sm text-text-inverse tracking-widest uppercase">Buyer's Guide</span>
              </div>
              <h1 className="heading-display text-text-inverse mb-6">
                Navigating the Luxury Real Estate Market in Hyderabad: A Smart Buyer's Guide
              </h1>
              <div className="flex items-center justify-center gap-4 text-text-inverse/80">
                <Calendar className="w-5 h-5" />
                <span className="text-body">Dec 3, 2024</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-24 section-elevated">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
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
                  Hyderabad's skyline is a testament to its explosive growth. From iconic skyscrapers to sprawling gated communities, the options for luxury living have never been more diverse. But with great choice comes the need for great clarity. Navigating the real estate market in India, especially the high-end segment in a city like Hyderabad, requires a strategic approach. This guide cuts through the noise, giving you the key insights to make a confident purchase.
                </p>
              </div>

              {/* Section 1 */}
              <div className="mb-12">
                <h2 className="heading-lg text-text-primary mb-6">Decoding the Hyderabad Luxury Landscape: What Defines Luxury Today?</h2>
                <p className="text-body text-text-secondary leading-relaxed mb-4">
                  Luxury is no longer just about marble floors and a fancy address. It's an experience.
                </p>
              </div>

              {/* Section 2 */}
              <div className="mb-12">
                <h2 className="heading-lg text-text-primary mb-6">The Evolution from Opulence to Experience</h2>
                <p className="text-body text-text-secondary leading-relaxed mb-6">
                  Modern luxury buyers in Hyderabad are looking for:
                </p>
                <ul className="space-y-3 text-body text-text-secondary">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>Wellness-Centric Design:</strong> Homes with dedicated spaces for yoga, meditation, and air-purifying gardens.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>Smart Integration:</strong> Homes that learn your habits, from lighting and temperature to security.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>Community and Exclusivity:</strong> Gated communities with world-class clubs, sports facilities, and curated social events.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>Sustainability:</strong> Energy-efficient designs, water recycling plants, and use of eco-friendly materials.</span>
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="mb-12">
                <h2 className="heading-lg text-text-primary mb-6">Emerging Hotspots for Luxury Properties in Hyderabad</h2>
                <p className="text-body text-text-secondary leading-relaxed mb-6">
                  While traditional areas like Banjara Hills and Jubilee Hills remain prime, new corridors are emerging:
                </p>
                <ul className="space-y-3 text-body text-text-secondary">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>Gachibowli & Financial District:</strong> The epicenter for corporate luxury, with high-rises offering stunning city views.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>Kokapet (Neopolis):</strong> Touted as the next big thing, with massive integrated townships and ultra-luxury villas.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>The Outer Ring Road (ORR) Corridor:</strong> Areas like Narsingi and Tellapur offer a blend of spacious villas and modern apartments with easier access to the city's tech hubs.</span>
                  </li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="mb-12">
                <h2 className="heading-lg text-text-primary mb-6">The Nitty-Gritty: Your Step-by-Step Buying Process</h2>
                <p className="text-body text-text-secondary leading-relaxed mb-6">
                  A structured approach separates a wise investment from a costly mistake.
                </p>

                <h3 className="text-2xl font-semibold text-text-primary mb-4">Step 1: Assemble Your Expert Team</h3>
                <p className="text-body text-text-secondary leading-relaxed mb-4">
                  Do not go it alone. Your team should include:
                </p>
                <ul className="space-y-3 text-body text-text-secondary mb-6">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span>A specialized real estate agent or consultant with a proven track record in the luxury segment.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span>A reputable property lawyer in Hyderabad to handle the legal due diligence.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span>A financial advisor to help you structure the investment.</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold text-text-primary mb-4">Step 2: The Power of RERA</h3>
                <p className="text-body text-text-secondary leading-relaxed mb-4">
                  The Real Estate Regulatory Authority (RERA) is your shield. Always:
                </p>
                <ul className="space-y-3 text-body text-text-secondary mb-6">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span>Check if the project is registered with Telangana RERA.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span>Verify all promises made by the builder against the legal agreement.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span>Use the RERA website to track the project's progress and any complaints.</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold text-text-primary mb-4">Step 3: Beyond the Brochure - The Art of Due Diligence</h3>
                <ul className="space-y-3 text-body text-text-secondary">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>Builder Reputation:</strong> Research the real estate developer's past projects. Talk to existing residents.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>Site Visits:</strong> Visit the site at different times of the day to check for noise, traffic, and water availability.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span><strong>Total Cost:</strong> Understand all costs, including registration, property tax in Hyderabad, GST, and maintenance charges.</span>
                  </li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="mb-12">
                <h2 className="heading-lg text-text-primary mb-6">The Future-Proof Investment</h2>
                <p className="text-body text-text-secondary leading-relaxed mb-6">
                  When you buy a luxury property, you're also buying into its future value.
                </p>

                <h3 className="text-2xl font-semibold text-text-primary mb-4">The Resale and Rental Potential</h3>
                <p className="text-body text-text-secondary leading-relaxed mb-6">
                  A well-located property from a trusted builder like Godrej Properties in Hyderabad or other top-tier developers will always hold its value. Consider the potential for rental income, especially in areas popular with expatriates and senior corporate professionals.
                </p>

                <h3 className="text-2xl font-semibold text-text-primary mb-4">The Intangible Return on Investment</h3>
                <p className="text-body text-text-secondary leading-relaxed">
                  The true value of a luxury home is often measured in quality of life—the peace of mind, the comfort, and the joy of living in a space that is uniquely yours.
                </p>
              </div>

              {/* Final Words */}
              <div className="mb-12 p-8 bg-neutral-50 rounded-2xl border border-neutral-200">
                <h2 className="heading-lg text-text-primary mb-4">Final Words</h2>
                <p className="text-body text-text-secondary leading-relaxed">
                  The journey to owning a luxury property in Hyderabad should be as exceptional as the home itself. By focusing on experience-driven features, understanding the legal framework, and conducting thorough research, you can secure more than just a piece of real estate in India—you can secure a lifestyle that appreciates in value every single day.
                </p>
              </div>

              {/* FAQs */}
              <div className="mb-16">
                <h2 className="heading-lg text-text-primary mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="p-6 bg-white rounded-xl border border-neutral-200 shadow-sm">
                    <h3 className="text-lg font-semibold text-text-primary mb-3">What is the average price of a luxury farmhouse on the outskirts of Hyderabad?</h3>
                    <p className="text-body text-text-secondary leading-relaxed">
                      Prices vary significantly based on location, land size, and the level of customization. It's best to contact a specialized real estate agent in Hyderabad for current market rates. As a starting point, consider the cost of land per acre and the construction cost for a high-end, customized home.
                    </p>
                  </div>

                  <div className="p-6 bg-white rounded-xl border border-neutral-200 shadow-sm">
                    <h3 className="text-lg font-semibold text-text-primary mb-3">How does RERA protect buyers of farmhouse plots?</h3>
                    <p className="text-body text-text-secondary leading-relaxed">
                      The Telangana Real Estate Regulatory Authority (RERA) mandates that any plotted development over a certain size must be registered. This ensures transparency in land titles, prevents fraudulent selling, and holds the developer accountable for delivering promised infrastructure.
                    </p>
                  </div>

                  <div className="p-6 bg-white rounded-xl border border-neutral-200 shadow-sm">
                    <h3 className="text-lg font-semibold text-text-primary mb-3">What are the ongoing costs associated with owning a farmhouse?</h3>
                    <p className="text-body text-text-secondary leading-relaxed">
                      Beyond the initial investment, owners should budget for property tax in Hyderabad (GHMC), annual maintenance for landscaping and security, utilities (which can be higher for larger properties), and potential repairs.
                    </p>
                  </div>

                  <div className="p-6 bg-white rounded-xl border border-neutral-200 shadow-sm">
                    <h3 className="text-lg font-semibold text-text-primary mb-3">Can I get a home loan for buying land and constructing a farmhouse?</h3>
                    <p className="text-body text-text-secondary leading-relaxed">
                      Yes, most banks offer loans for the purchase of land and separate construction loans. However, the terms and Loan-to-Value (LTV) ratio are often stricter than for ready-to-move-in apartments. A strong financial profile is typically required.
                    </p>
                  </div>

                  <div className="p-6 bg-white rounded-xl border border-neutral-200 shadow-sm">
                    <h3 className="text-lg font-semibold text-text-primary mb-3">Why should I choose a builder like Terranova over a local contractor?</h3>
                    <p className="text-body text-text-secondary leading-relaxed">
                      A specialized builder brings expertise in design, legal due diligence, quality control, and project management. They mitigate the immense risk and stress of managing multiple vendors and ensure the final product is safe, legal, and built to the highest standards, protecting your long-term investment.
                    </p>
                  </div>
                </div>
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

export default BlogPost2;

