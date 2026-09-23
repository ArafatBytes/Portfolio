import "../index.css";
import Data from "./Data";
import Social from "./Social";
import image from "../assets/profile.jpg";
import ScrollDown from "./ScrollDown";
import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="home section md:pt-24" 
      id="home"
    >
      <div className="home_container container1 grid gap-y-20">
        <div className="home_content grid grid-cols-[116px_1fr_1fr] pt-24 gap-x-10 items-center lg:gap-x-5 md:grid-cols-1 md:gap-y-12 md:pt-8 md:justify-items-center">
          <motion.div variants={itemVariants} className="md:order-1"><Social /></motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-no-repeat bg-center w-[300px] h-[300px] bg-cover shadow-[inset_0_0_0_9px_rgb(255_255_255/30%)] order-1 justify-self-center animate-profile_animate lg:h-64 lg:w-64 md:h-[200px] md:w-[200px] md:shadow-[inset_0_0_0_6px_rgb(255_255_255/30%)] md:order-0"
            style={{ backgroundImage: `url(${image})` }}
          ></motion.div>
          <motion.div variants={itemVariants} className="md:order-2"><Data /></motion.div>
        </div>
        <motion.div variants={itemVariants}><ScrollDown /></motion.div>
      </div>
    </motion.section>
  );
}
