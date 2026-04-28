import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa6";

const AboutMe = () => {
    const glowEffect = {
        animate: {
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    return (
        <section id="about" className="relative pt-16">
            {/* Background Glow */}
            <motion.div
                className="absolute inset-0 mx-auto top-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-pink-500 to-purple-600 -z-10 hidden sm:block"
                variants={glowEffect}
                animate="animate"
                style={{
                    filter: "blur(150px)",
                }}
            ></motion.div>

            {/* Section Content */}
            <h1 className="text-center text-4xl sm:text-6xl mb-5 font-bold">
                Hakkımda <span className="text-pink-700">!</span>
            </h1>
            <div className="max-w-[90%] sm:max-w-2xl mx-auto tracking-widest text-center">
                <p>
                    Ben <span className="text-pink-600">Cihan ÇAKIR</span>. Mobil uygulama geliştirme, web geliştirme,
                    <span className="text-sky-500"> Google Maps kurulumu</span> ve <span className="text-emerald-400">Ads yönetimi</span>
                    alanlarında çözüm üreten bir geliştiriciyim.
                </p>

                <p className="mt-3">
                    İşletmelerin ve markaların dijitalde daha görünür, daha güçlü ve daha profesyonel bir yapıya kavuşması için
                    kullanıcı odaklı projeler geliştiriyorum. iOS ve Android uygulamalar, modern web siteleri ve dijital görünürlük
                    çözümleri üzerine çalışıyorum.
                </p>

                <p className="mt-3">
                    Yazılım tarafında sadece kod yazmaya değil, aynı zamanda ihtiyacı doğru anlamaya ve işe değer katan çözümler
                    oluşturmaya odaklanıyorum. Geliştirdiğim projelerde sade tasarım, performans ve kullanılabilirlik benim için öncelikli.
                </p>

                <p className="mt-3">
                    Yeni projelerde yer almaya, iş birliklerine ve dijital çözüm ihtiyacı olan markalarla çalışmaya açığım.
                    Birlikte etkili ve güven veren dijital ürünler ortaya çıkarabiliriz.
                </p>
            </div>

            <div className="text-center mt-5">
                <button>
                    <FaArrowDown className="animate-bounce text-4xl text-pink-700 mx-auto mt-5" />
                </button>
            </div>
        </section>
    );
};

export default AboutMe;
