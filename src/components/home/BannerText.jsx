import { MdWavingHand } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { Typewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion";
import Social from "./Social";
import pdf from '../../../public/cihan-cakir-ozgecmis.pdf'

const BannerText = () => {
    return (
        <div>
                <h1 className="flex items-center space-x-2 text-xl mb-3">
                    <span className="text-cyan-300">Merhaba, </span>
                    <span>
                        <motion.div
                            animate={{
                            rotate: [0, 15, -15, 0], // Rotate back and forth
                            }}
                            transition={{
                            duration: 2, // Animation duration
                            repeat: Infinity, // Repeat animation infinitely
                            ease: "easeInOut", // Smooth easing
                            }}
                        >
                            <MdWavingHand className="text-sky-200 text-2xl" />
                        </motion.div>
                    </span> 
                </h1>

            <div className="text-5xl font-russo">
                
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h1 className="mb-3">Ben Cihan ÇAKIR</h1>

                <Typewriter
                        words={['Mobil Geliştirici', 'Web Geliştirici', 'Google Maps Kurulum', 'Ads Yönetimi']}
                        loop={true}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                />

            </div>

            <div className="mt-5 mb-2">
                <Social></Social>
            </div>

            <div className="flex items-center space-x-4 mt-5">
                <a href="#contactMe">
                    <button className="flex items-center space-x-2 rounded-xl border border-cyan-300/25 bg-gradient-to-r from-[#0f2234] via-[#12324a] to-[#15546b] px-5 py-3 text-white font-semibold shadow-[0_12px_30px_rgba(0,0,0,0.22)]">
                        <span>İletişime Geç</span>
                        <span><RiContactsFill></RiContactsFill></span>
                    </button>
                </a>

                <div>
                    <a href={pdf} download>
                        <button className="flex items-center space-x-2 rounded-xl border border-cyan-300/25 bg-gradient-to-r from-[#0c2838] via-[#13465d] to-[#1d7186] px-5 py-3 text-white font-semibold shadow-[0_12px_30px_rgba(0,0,0,0.22)]">
                            <span>Özgeçmişi İndir</span>
                            <span><FaDownload></FaDownload></span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BannerText
