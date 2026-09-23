import Backend from "./Backend";
import Frontend from "./Frontend";
import Database from "./Database";
import { motion } from "framer-motion";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="skills section" 
      id="skills"
    >
      <motion.h2 variants={itemVariants} className="section__title font-[var(--font-semi-bold)]">Skills</motion.h2>
      <motion.span variants={itemVariants} className="section__subtitle">My technical level</motion.span>

      <motion.div variants={itemVariants} className="skills__container container1 grid gap-6 grid-cols-[23.5rem_23.5rem] gap-x-12 justify-center lg:grid-cols-[max-content] lg:gap-y-8 md:grid-cols-1 md:gap-x-0 md:px-4">
        <Frontend />
        <Backend />
        <div className="col-span-2 lg:col-span-1 md:col-span-1 flex justify-center w-full">
          <Database />
        </div>
      </motion.div>
    </motion.section>
  );
}
