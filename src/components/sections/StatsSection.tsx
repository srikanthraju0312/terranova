import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CounterProps {
  end: number;
  suffix: string;
  duration?: number;
}

const Counter = ({ end, suffix, duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      setCount(prev => {
        const next = prev + increment;
        if (next >= end) {
          clearInterval(timer);
          return end;
        }
        return next;
      });
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, hasStarted]);

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      onViewportEnter={() => setHasStarted(true)}
    >
      <div className="text-5xl lg:text-6xl font-light text-white mb-2 font-serif">
        {Math.floor(count)}{suffix}
      </div>
    </motion.div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      value: 10,
      suffix: '+',
      label: 'Properties Delivered'
    },
    {
      value: 11,
      // suffix: '+',
      label: 'Average Project Completion(in months)'
    },
    {
      value: 97,
      suffix: '%',
      label: 'Client Retention Rate'
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://framerusercontent.com/images/V7bxnKBJLKWLeFJJsbtEAYNbc8.jpg"
          alt="Luxury real estate background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm text-white/80 mb-3 tracking-widest uppercase">
            Why Choose Us?
          </p>
          <h2 className="text-3xl md:text-4xl text-white font-serif mb-4">
            We create turnkey luxury spaces with the highest emphasis on quality.
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-4xl mx-auto leading-relaxed">
            At Terranova, we craft ready-to-live luxury spaces, farms, estates, and more, where all every small and large element is thoughtfully planned. From the foundation to the final décor, our in-house team ensures every detail reflects your taste and our promise of quality. Step into a finished dream built for a lifetime.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Counter end={stat.value} suffix={stat.suffix} />
              <p className="text-lg text-white/90 font-medium mt-4">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;