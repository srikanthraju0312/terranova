import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="min-h-screen">
      <Header  />
      
      <main >
        {/* Hero Section */}
        <section className="relative min-h-[100svh] md:min-h-[100dvh]  flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop&crop=center"
              alt="Professional real estate office environment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="heading-display text-white mb-6">
                About Terranova
              </h1>
              <p className="text-body-lg text-white/90 max-w-2xl mx-auto">
                Luxury redefined. Quality redefined.
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="https://framerusercontent.com/images/1DvKVpy6gPlZtL3SpcE6uWTvxA.jpg"
                  alt="Terranova - Real Estate Professional"
                  className="w-full h-[600px] object-cover rounded-2xl shadow-lg"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="heading-lg text-text-primary mb-6">
                  Luxury that feels personal
                </h2>
                
                <div className="space-y-6 text-body text-text-secondary">
                  <p>
                    Terranova creates luxury farms and houses that are complete in every sense, from the land they stand on to the final detail that shapes the experience of living in them. Every project is managed in-house, bringing together architecture, interiors, landscaping, design, and branding under a single vision.
                  </p>
                  
                  <p>
                    The vision extends beyond individual farms and houses; Terranova is also shaping boutique resorts, retreat centers, and large-scale estates with the same philosophy of thoughtful design and flawless delivery. Whether you seek a <b>luxury farmhouse in Hyderabad</b> or a private estate for family weekends, we aim to create something deeply personal and enduring.
                  </p>
                  
                  <p>
                    What makes Terranova stand apart in <b>estate development</b> is our commitment to quality at every stage. From the choice of materials to the precision of construction and the refinement of interiors, each stage is carried out with the greatest attention to detail. Every element, no matter how small, is considered an essential part of the whole, regardless of a <b>premium farmhouse</b> or a large <b>estate development</b> project.
                  </p>
                  
                  {/* <p>
                    Her commitment to excellence, attention to detail, and deep understanding of the 
                    luxury market make her the ideal partner for your real estate journey.
                  </p> */}
                </div>

                <div className="mt-8">
                  <motion.a
                    href="/contact"
                    className="btn-primary"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    Let's Connect
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default About