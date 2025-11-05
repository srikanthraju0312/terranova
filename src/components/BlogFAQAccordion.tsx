import { useState } from 'react';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';

interface FAQ {
  question: string;
  answer: string;
}

interface BlogFAQAccordionProps {
  faqs: FAQ[];
}

const BlogFAQAccordion = ({ faqs }: BlogFAQAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-2">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          className="border-b border-neutral-200 last:border-b-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full py-5 text-left flex items-center justify-between hover:opacity-70 transition-opacity"
          >
            <h3 className="text-lg font-semibold text-text-primary pr-4">
              {faq.question}
            </h3>
            <div className="flex-shrink-0">
              <motion.div
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <Plus className="h-5 w-5 text-text-secondary" />
              </motion.div>
            </div>
          </button>

          <motion.div
            initial={false}
            animate={{
              height: openIndex === index ? "auto" : 0,
              opacity: openIndex === index ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-5">
              <p className="text-body text-text-secondary leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default BlogFAQAccordion;

