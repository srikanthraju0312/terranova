import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Allure of Luxury Farmhouses in Hyderabad",
      date: "Feb 26, 2025",
      excerpt: "Explore the rising trend of luxury farmhouses in Hyderabad. Discover why these sprawling properties are becoming the ultimate symbol of luxury, privacy, and a connection to nature for the city's elite.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      category: "Luxury Living",
      slug: "luxury-farmhouses-hyderabad"
    },
    {
      id: 2,
      title: "Navigating the Luxury Real Estate Market in Hyderabad: A Smart Buyer's Guide",
      date: "Dec 3, 2024",
      excerpt: "Thinking of investing in a luxury home in Hyderabad? Our guide covers everything from emerging hotspots and RERA to choosing the right builder. Make an informed decision with Terranova.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      category: "Buyer's Guide",
      slug: "navigating-luxury-real-estate-hyderabad"
    },
    {
      id: 3,
      title: "The Terranova Difference: Crafting Legacy Farmhouses on the Outskirts of Hyderabad",
      date: "Jan 28, 2025",
      excerpt: "Terranova builds more than farmhouses; we craft personal legacies. Discover our unique approach to designing and building bespoke luxury farmhouses in Hyderabad's most serene locations.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
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
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
              alt="Real estate market insights and trends"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/60 via-neutral-900/40 to-neutral-900/60"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-overline text-text-inverse/80 mb-4 tracking-widest">
                Latest Insights & Market Trends
              </p>
              <h1 className="heading-section text-text-inverse mb-6">
                Real Estate Tips & Expert Advice
              </h1>
              <p className="text-subtitle text-text-inverse/90 max-w-2xl mx-auto">
                Discover expert insights, market trends, and valuable tips for your real estate journey
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
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
                        <span className="bg-neutral-100 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span>{post.date}</span>
                      </div>

                      <h2 className="text-xl font-semibold text-text-primary group-hover:text-primary-600 transition-colors">
                        {post.title}
                      </h2>

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

        {/* Newsletter Section */}
        <section className="py-16 bg-neutral-50">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="heading-lg text-text-primary mb-4">
              Stay Updated on the Market
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Get exclusive real estate insights, market trends, and property updates straight to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-text-primary text-white rounded-lg hover:bg-opacity-90 transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
