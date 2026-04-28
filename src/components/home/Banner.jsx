import { motion } from "framer-motion";
import BannerText from "./BannerText";
import CihanCakir from "../../assets/cihan-cakir.jpg";

const Banner = () => {

    const containerVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 1 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeInOut" } },
        hover: {
            scale: 1.2,
            rotate: 10,
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)",
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
            borderRadius: "15px",
        },
    };

    const borderAnimation = {
        hidden: { width: "0%", height: "0%" },
        visible: {
            width: "100%",
            height: "100%",
            transition: { duration: 1, ease: "easeInOut" },
        },
    };

    const backgroundVariants = {
        animate: {
            scale: [1, 1.3, 1],
            rotate: [0, 120, 360],
            opacity: [0.5, 0.7, 0.5],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    return (
        <section id="home" className="relative overflow-hidden mt-20 sm:mt-14 lg:mt-5">
            
            <div className="min-h-screen flex flex-col md:flex-row justify-between items-center max-w-[90%] xl:max-w-[1050px] mx-auto">
                
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center md:text-left"
                >
                    <BannerText />
                </motion.div>

                <div className="relative flex items-center justify-center mt-10 md:mt-0">
                    
                    <motion.div
                        className="absolute w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-teal-400"
                        variants={backgroundVariants}
                        animate="animate"
                        style={{
                            zIndex: -1,
                            filter: "blur(100px)",
                        }}
                    ></motion.div>

                    {/* Border Animation */}
                    <motion.div
                        className="absolute top-0 left-0 h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] border-4 border-cyan-400/70 rounded-full"
                        variants={borderAnimation}
                        initial="hidden"
                        animate="visible"
                        style={{
                            zIndex: 0,
                            pointerEvents: "none", 
                        }}
                    ></motion.div>

                    {/* Foreground Image */}
                    <motion.div
                        className="relative border border-cyan-300/70 rounded-full h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] overflow-hidden shadow-[0_24px_60px_rgba(8,23,38,0.5)] transition-all duration-500 cursor-pointer"
                        variants={imageVariants}
                        initial="visible" 
                        animate="visible"
                        whileHover="hover" 
                        style={{
                            zIndex: 1,
                        }}
                    >
                        
                        <motion.img
                            className="lg:h-[510px] w-[100%] object-cover object-center transition-all duration-500 mx-auto"
                            src={CihanCakir}
                            alt="Cihan ÇAKIR"
                            drag
                            dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
