import { motion } from 'framer-motion';

const TestimonialSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop&crop=center"
          alt="Luxury real estate testimonial background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        {/* Client Photo */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-6">
            <img
              src="https://images.forbesindia.com/blog/wp-content/uploads/media/images/2025/Jun/img_246272_srinivasn_final-21_bg.jpg?im=Resize,width=500,aspect=fit,type=normal"
              alt="Srinivas M - Client"
              className="w-full h-full object-cover rounded-full shadow-xl border-4 border-white/90"
            />
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-2xl lg:text-3xl font-light leading-relaxed text-white mb-8 italic font-serif">
            `Terranova didn't just build a house, they brought my dream to life. From the first conversation to the finishing touches, their attention to detail and care made all difference. Walking in feels like walking into my imagination! Couldn't be happier with the quality and experience delivered.`
          </p>
        </motion.blockquote>

        {/* Client Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <cite className="not-italic">
            <p className="font-semibold text-white text-lg">- Srinivas M</p>
            <p className="text-white/80">Buyer</p>
          </cite>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;