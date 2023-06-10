import React from "react";
import { motion } from "framer-motion";

const Heading = ({ title }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
        viewport={{ once: true }}
      >
        <p className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-3xl lg:text-5xl font-bold text-transparent">
          {title}
        </p>
      </motion.div>
    </>
  );
};

export default Heading;
