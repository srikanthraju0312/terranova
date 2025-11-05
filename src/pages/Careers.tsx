import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { motion } from 'framer-motion'

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[100svh] md:min-h-[100dvh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop"
              alt="Modern professional workspace"
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
              <p className="text-overline text-text-inverse/80 mb-4 tracking-widest">
                Join Our Team
              </p>
              <h1 className="heading-hero text-text-inverse mb-6">
                Careers at Terranova
              </h1>
              <p className="text-subtitle text-text-inverse/90 max-w-2xl mx-auto">
                Build something meaningful with purpose, precision, and passion
              </p>
            </motion.div>
          </div>
        </section>

        {/* Careers Content */}
        <section className="section-padding section-elevated">
          <div className="mx-auto max-w-7xl">
            {/* Introduction */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-overline text-text-muted mb-4">
                Our Culture
              </p>
              <h2 className="heading-section mb-6">
                Building Legacies Together
              </h2>
              <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
                At Terranova, we are creating legacies by redefining design and craftsmanship. Every project begins with a vision and grows through the passion of our people. If you're someone who believes in doing things the right way, not the easy way, you'll fit right in.
              </p>
            </motion.div>

            <h3 className="heading-lg text-text-primary mb-12 text-center">
              Why Work With Us
            </h3>

            {/* Values Grid */}
            <div className="space-y-12">
              {/* Value 1 */}
              <motion.div
                className="grid lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div>
                  <h4 className="text-2xl font-semibold text-text-primary mb-4">1. Purpose in every detail</h4>
                  <p className="text-body text-text-secondary">
                    Every project at Terranova begins with intent, not templates. We take pride in thoughtful design, patient craftsmanship, and doing things right, not fast. Here, you'll find work that challenges your creativity and rewards your attention to detail in ways that truly matter.
                  </p>
                </div>
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                    alt="Creative work environment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Value 2 */}
              <motion.div
                className="grid lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="order-2 lg:order-1 relative h-[400px] rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h4 className="text-2xl font-semibold text-text-primary mb-4">2. People first, always</h4>
                  <p className="text-body text-text-secondary">
                    We're a team that listens, supports, and grows together. Your ideas will shape real homes and real experiences. At Terranova, we believe great work happens when everyone feels seen, valued, and inspired to bring their best self forward.
                  </p>
                </div>
              </motion.div>

              {/* Value 3 */}
              <motion.div
                className="grid lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div>
                  <h4 className="text-2xl font-semibold text-text-primary mb-4">3. Integrity as our foundation</h4>
                  <p className="text-body text-text-secondary">
                    We hold ourselves to the same standards we promise our clients: honesty, transparency, and excellence. You'll never be asked to cut corners or compromise on quality. It's a place where your principles have room to breathe and your work earns genuine respect.
                  </p>
                </div>
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop"
                    alt="Quality craftsmanship"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Value 4 */}
              <motion.div
                className="grid lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="order-2 lg:order-1 relative h-[400px] rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                    alt="Growth and development"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h4 className="text-2xl font-semibold text-text-primary mb-4">4. Evolving together</h4>
                  <p className="text-body text-text-secondary">
                    At Terranova, we emphasize a culture of growth. From hands-on learning to cross-functional exposure, Terranova gives you the space to expand your skills and grow with every project. Change here is not a disruption; it's a doorway to what's next.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Perks Section */}
            <motion.div
              className="mt-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="heading-lg text-text-primary mb-8 text-center">
                Perks of Being Part of the Terranova Family
              </h3>
              <div className="bg-surface-elevated rounded-2xl p-8 lg:p-12 shadow-elevated">
                <ul className="grid md:grid-cols-2 gap-4 text-body text-text-secondary">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3">•</span>
                    <span>Above-industry-standard pay scales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3">•</span>
                    <span>A team that supports and inspires you</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3">•</span>
                    <span>Freedom to create and own your ideas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3">•</span>
                    <span>Flexible working environment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3">•</span>
                    <span>Opportunities to learn directly from industry experts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3">•</span>
                    <span>Work that makes a visible impact</span>
                  </li>
                </ul>
                <p className="text-body text-text-secondary mt-8 text-center">
                  If you're ready to build something meaningful, with purpose, precision, and passion,{' '}
                  <a href="#" className="text-primary-600 hover:text-primary-700 font-medium underline">
                    click here to see all openings
                  </a>
                  .
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Careers
