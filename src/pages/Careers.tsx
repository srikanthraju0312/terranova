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
              src="../terranova/docs/images/careers/hero.png"
              alt="Team working together"
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
              <h1 className="heading-display text-text-inverse mb-6">
                Careers at Terranova
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Careers Content */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-lg text-text-secondary">
                  At Terranova, we are creating legacies by redefining design and craftsmanship. Every project begins with a vision and grows through the passion of our people. If you’re someone who believes in doing things the right way, not the easy way, you’ll fit right in.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1677087121017-b779a16ff921?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwd29ya2luZyUyMHRvZ2V0aGVyfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
                  alt="Terranova Team"
                  className="w-full h-40 object-cover rounded-xl"
                />
              </motion.div>
            </div>

            <h2 className="heading-lg text-text-primary mt-12 mb-8 font-semibold text-2xl">
              Why Work With Us
            </h2>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-xl font-semibold text-text-primary">1. Purpose in every detail</h3>
                <p>
                  Every project at Terranova begins with intent, not templates. We take pride in thoughtful design, patient craftsmanship, and doing things right, not fast. Here, you’ll find work that challenges your creativity and rewards your attention to detail in ways that truly matter.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img
                  src="https://www.shutterstock.com/image-photo/panoramic-view-motivated-team-intensely-260nw-2420665069.jpg"
                  alt="Creative work environment"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </motion.div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mt-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-xl font-semibold text-text-primary">2. People first, always</h3>
                <p>
                  We’re a team that listens, supports, and grows together. Your ideas will shape real homes and real experiences. At Terranova, we believe great work happens when everyone feels seen, valued, and inspired to bring their best self forward.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img
                  src="https://t3.ftcdn.net/jpg/03/62/30/62/360_F_362306286_C4GzleFA9xXaHe57uk45aqTll0bGSYuU.jpg"
                  alt="Team collaboration"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </motion.div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mt-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-xl font-semibold text-text-primary">3. Integrity as our foundation</h3>
                <p>
                  We hold ourselves to the same standards we promise our clients: honesty, transparency, and excellence. You’ll never be asked to cut corners or compromise on quality. It’s a place where your principles have room to breathe and your work earns genuine respect.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img
                  src="https://blog.culturewise.com/hubfs/Imported_Blog_Media/quality-lg-cropped.jpg"
                  alt="Quality craftsmanship"
                  className="w-45 h-auto object-cover rounded-xl"
                />
              </motion.div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mt-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-xl font-semibold text-text-primary">4. Evolving together</h3>
                <p>
                  At Terranova, we emphasize a culture of growth. From hands-on learning to cross-functional exposure, Terranova gives you the space to expand your skills and grow with every project. Change here is not a disruption; it’s a doorway to what’s next.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img
                  src="https://cfw.paymoapp.com/wp-content/uploads/2023/06/professional-growth-hero@2x.jpg"
                  alt="Growth and development"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </motion.div>
            </div>

            <h3 className="heading-lg text-text-primary mt-12 mb-8 font-semibold text-2xl">
              Perks of Being Part of the Terranova Family
            </h3>
            <ul className='list-disc list-inside pl-6'>
              <li>Above-industry-standard pay scales</li>
              <li>A team that supports and inspires you</li>
              <li>Freedom to create and own your ideas</li>
              <li>Flexible working environment</li>
              <li>Opportunities to learn directly from industry experts</li>
              <li>Work that makes a visible impact</li>
            </ul>
            <p>If you’re ready to build something meaningful, with purpose, precision, and passion, <a href="">click here to see all openings.</a></p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Careers
