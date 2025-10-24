import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const AboutSection = () => {
  return (
    <section id="about" className="section-padding section-elevated">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-overline text-text-muted content-spacing tracking-widest">
              About me
            </p>
            <h2 className="heading-section content-spacing">
              About Terranova
            </h2>
            <div className="space-y-4 lg:space-y-6">
              <p className="text-body">
                Terranova creates luxury farms and houses that are complete in every sense, from the land they stand on to the final detail that shapes the experience of living in them. Every project is managed in-house, bringing together architecture, interiors, landscaping, design, and branding under a single vision.
              </p>
              <p className="text-body">
                The vision extends beyond individual farms and houses; Terranova is also shaping boutique resorts, retreat centers, and large-scale estates with the same philosophy of thoughtful design and flawless delivery. Whether you seek a luxury farmhouse in Hyderabad or a private estate for family weekends, we aim to create something deeply personal and enduring.
              </p>
            </div>
            <div className="mt-6 lg:mt-8">
              <Link to="/about" className="btn-primary">
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <img
                src="https://framerusercontent.com/images/qyrHS8yHxWjbGejCnaNbfZZL9w.jpg"
                alt="Terranova - Real Estate Professional"
                className="w-full h-[600px] object-cover rounded-2xl shadow-elevated"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;