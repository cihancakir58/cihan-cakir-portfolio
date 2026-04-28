import { Link } from "react-router"
import GradientText from "../shared/GradientText"
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import pdf from '../../public/cihan-cakir-ozgecmis.pdf'


const Navbar = () => {

    const [open, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 border-b border-cyan-400/10 bg-[#07131dcc]/90 shadow-[0_10px_40px_rgba(0,0,0,0.22)] backdrop-blur-md">
            
            <div className="max-w-[90%] xl:max-w-[1200px] mx-auto flex justify-between items-center py-4">

                <Link>
                    <div>
                        <h1 className="text-4xl font-bold font-Great-Vibes bg-gradient-to-r from-cyan-300 via-sky-400 to-white bg-clip-text text-transparent drop-shadow-[0_1px_8px_rgba(45,212,191,0.28)]">
                        cbilgin
                        </h1>
                    </div>
                </Link>

                <div className="hidden lg:block">
                    <nav>
                        <ul className="flex items-center space-x-4 font-semibold text-slate-200">
                            <li className="hover:text-cyan-300 transition-[0.5s]">
                                <a href="#home">Ana Sayfa</a>
                            </li>

                            <li className="hover:text-cyan-300 transition-[0.5s]">
                                <a href='#about'>Hakkımda</a>
                            </li>

                            <li className="hover:text-cyan-300 transition-[0.5s]">
                                <a href="#projects">Projeler</a>
                            </li>

                            <li className="hover:text-cyan-300 transition-[0.5s]">
                                <a href="#contactMe">İletişim</a>
                            </li>

                            <a href={pdf} download>
                                <GradientText
                                    colors={["#2dd4bf", "#38bdf8", "#2dd4bf", "#38bdf8", "#2dd4bf"]}
                                    animationSpeed={3}
                                    showBorder={true}
                                    className="custom-class py-2 px-4"
                                    >
                                    <button>
                                        Özgeçmiş
                                    </button>
                                </GradientText>
                            </a>

                        </ul>
                    </nav>
                </div>

                <div className='lg:hidden'>
                    <button className='text-2xl font-bold' onClick={() => setIsOpen(!open)}>
                        { open ?
                                <GradientText
                                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                animationSpeed={3}
                                showBorder={true}
                                className="custom-class py-2 px-4"
                                >
                                    <RxCross2 />
                                </GradientText>
                            :
                                <GradientText
                                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                animationSpeed={3}
                                showBorder={true}
                                className="custom-class py-2 px-4"
                                >
                                    <RiMenu3Fill/>
                                </GradientText>
                        }
                    </button>
                </div>

                { open && 
                    <div className='lg:hidden absolute top-16 left-0 w-full border-b border-cyan-400/10 bg-[#07131df2] p-4 rounded-b-lg shadow-[0_18px_40px_rgba(0,0,0,0.32)] z-50 text-center text-white font-semibold'> 
                        <nav>
                            <ul className="flex flex-col items-center space-y-4 font-semibold">
                                <li className="hover:text-cyan-300 transition-[0.5s]">
                                    <a href="#home">Ana Sayfa</a>
                                </li>

                                <li className="hover:text-cyan-300 transition-[0.5s]">
                                    <a href='#about'>Hakkımda</a>
                                </li>

                                <li className="hover:text-cyan-300 transition-[0.5s]">
                                    <a href="#projects">Projeler</a>
                                </li>

                                <li className="hover:text-cyan-300 transition-[0.5s]">
                                    <a href="#contactMe">İletişim</a>
                                </li>

                                <a href={pdf} download>
                                    <GradientText
                                        colors={["#2dd4bf", "#38bdf8", "#2dd4bf", "#38bdf8", "#2dd4bf"]}
                                        animationSpeed={3}
                                        showBorder={true}
                                        className="custom-class py-2 px-4"
                                        >
                                        <button>
                                            Özgeçmiş
                                        </button>
                                    </GradientText>
                                </a>

                            </ul>
                        </nav>
                    </div>
                }

            </div>

        </header>
    )
}

export default Navbar
