import { motion } from "framer-motion";
import { FaApple, FaCode, FaGoogle, FaHtml5, FaJsSquare, FaReact } from "react-icons/fa";
import { SiFlutter, SiFirebase, SiGoogleads, SiSwift, SiTailwindcss } from "react-icons/si";

const Skill = () => {
    const services = [
        { icon: <SiFlutter className="text-sky-400" />, label: "Mobil Uygulama" },
        { icon: <FaReact className="text-cyan-300" />, label: "Web Geliştirme" },
        { icon: <FaGoogle className="text-blue-400" />, label: "Google Maps" },
        { icon: <SiGoogleads className="text-yellow-400" />, label: "Ads Yönetimi" },
    ];

    const mobileTechnologies = [
        { icon: <SiFlutter className="text-sky-400 text-5xl" />, label: "Flutter" },
        { icon: <FaApple className="text-slate-200 text-5xl" />, label: "Native iOS" },
        { icon: <SiSwift className="text-orange-400 text-5xl" />, label: "Swift" },
        { icon: <SiFirebase className="text-amber-300 text-5xl" />, label: "Firebase" },
    ];

    const webTechnologies = [
        { icon: <FaReact className="text-cyan-300 text-5xl" />, label: "React" },
        { icon: <FaJsSquare className="text-yellow-300 text-5xl" />, label: "JavaScript" },
        { icon: <FaHtml5 className="text-orange-400 text-5xl" />, label: "HTML" },
        { icon: <SiTailwindcss className="text-cyan-400 text-5xl" />, label: "Tailwind" },
        { icon: <FaCode className="text-fuchsia-300 text-5xl" />, label: "Web Arayüzleri" },
    ];

    const containerVariants = {
        animate: {
            rotate: [0, 360],
            transition: {
                duration: 10,
                repeat: Infinity,
                ease: "linear",
            },
        },
    };

    return (
        <section>
            <div className="max-w-[90%] xl:max-w-[1160px] mx-auto flex flex-col xl:flex-row justify-between items-start text-center space-y-8">
                <motion.div
                    className="relative sm:flex items-center justify-center w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] rounded-full border-4 border-dashed border-gray-300 overflow-hidden hidden"
                    variants={containerVariants}
                    animate="animate"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="absolute w-16 h-16 flex items-center justify-center rounded-full border border-gray-300 bg-white shadow-lg text-3xl"
                            style={{
                                transform: `rotate(${(360 / services.length) * index}deg) translate(150px) rotate(-${(360 / services.length) * index}deg)`,
                            }}
                            whileHover={{
                                scale: 1.15,
                                rotate: [0, 15, -15, 0],
                                transition: { duration: 0.3 },
                            }}
                        >
                            {service.icon}
                        </motion.div>
                    ))}
                </motion.div>

                <div className="text-start">
                    <h1 className="sm:text-5xl text-3xl flex gap-2 font-bold">
                        <span className="text-sky-500">Hizmet</span>
                        <span className="bg-gradient-to-r text-transparent bg-clip-text from-sky-400 via-pink-400 to-pink-500">
                            Alanlarım
                        </span>
                    </h1>
                    <p className="max-w-2xl text-lg mt-4">
                        Mobil uygulama, web sitesi, Google Maps kurulumu ve reklam yönetimi alanlarında markalara ve
                        işletmelere dijital çözümler sunuyorum. Amacım hem teknik olarak güçlü hem de kullanıcıya net
                        fayda sağlayan ürünler ortaya çıkarmak.
                    </p>

                    <p className="text-5xl font-bold mt-8">
                        <span className="text-sky-400">Kullandığım</span>
                        {" "}
                        <span className="bg-gradient-to-r text-transparent bg-clip-text from-sky-400 via-pink-400 to-pink-500">
                            Teknolojiler
                        </span>
                    </p>

                    <div className="sm:mt-10 mt-8 space-y-10">
                        <div>
                            <h2 className="mb-5 text-2xl font-bold text-cyan-200">Mobil Teknolojiler</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {mobileTechnologies.map((tech) => (
                                    <div
                                        key={tech.label}
                                        className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-4 py-6 text-center"
                                    >
                                        <div className="mb-4 rounded-full border border-cyan-400/30 bg-cyan-400/10 p-5">
                                            {tech.icon}
                                        </div>
                                        <h3 className="text-lg font-semibold">{tech.label}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="mb-5 text-2xl font-bold text-fuchsia-200">Web Teknolojileri</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {webTechnologies.map((tech) => (
                                    <div
                                        key={tech.label}
                                        className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-4 py-6 text-center"
                                    >
                                        <div className="mb-4 rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 p-5">
                                            {tech.icon}
                                        </div>
                                        <h3 className="text-lg font-semibold">{tech.label}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;
