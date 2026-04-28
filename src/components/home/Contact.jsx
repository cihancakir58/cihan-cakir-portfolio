import { FaLocationDot } from "react-icons/fa6";
import {
    FaFacebook,
    FaGithub,
    FaLinkedinIn,
} from "react-icons/fa";
import { FaBuildingCircleArrowRight } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from 'react-hot-toast';

const Contact = () => {

    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_fefz9ps", // Service ID
            "template_8dg1gd9", // Template ID
            form.current,
            "Vdm-CQocif4qr6r-1"
        )
        .then(() => {
            toast.success("Mesaj başarıyla gönderildi!");
        })
        .catch((error) => {
            console.log("Email sending failed!", error.text);
            toast.error("Mesaj gönderilemedi.");
        });

        e.target.reset();
    };
    
    return (
        <section id="contactMe" className="pb-16 -mt-10 max-w-[90%] xl:max-w-[1200px] mx-auto">
            
            <div>
                <h1 className="text-center text-5xl font-bold">İletişim<span className="text-cyan-300"> Bilgileri</span></h1>
                <p className="text-center mt-4 text-lg text-gray-300 max-w-[90%] sm:max-w-xl mx-auto">Proje, iş birliği veya hizmet talepleriniz için benimle iletişime geçebilirsiniz.</p>
            </div>

            <div className="flex lg:flex-row flex-col gap-10 mt-10">

                <div className="lg:w-[48%] w-[90%]">
                    
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="flex sm:flex-row flex-col gap-8 mb-5">
                            <div className="sm:w-[50%]">
                                <input 
                                className="w-full rounded-xl border border-cyan-300/15 bg-[#0b2333]/70 p-3 text-white placeholder:text-slate-400" 
                                type="text"
                                 placeholder="Adınızı yazın" 
                                 name="user_name"
                                 onChange={handleChange}
                                 required
                                 />
                            </div>

                            <div className="sm:w-[50%]">
                                <input 
                                className="w-full rounded-xl border border-cyan-300/15 bg-[#0b2333]/70 p-3 text-white placeholder:text-slate-400" 
                                type="email" 
                                placeholder="E-posta adresinizi yazın" 
                                name="user_email"
                                onChange={handleChange}
                                required
                                />
                            </div>
                        </div>

                        <div>
                            <textarea 
                            className="h-40 w-full rounded-xl border border-cyan-300/15 bg-[#0b2333]/70 p-3 text-white placeholder:text-slate-400" 
                            placeholder="Mesajınızı yazın..."
                            name="message"
                            onChange={handleChange}
                            required
                            ></textarea>
                        </div>

                        <div>
                            <button 
                            type="submit"
                            className="mt-4 w-full rounded-xl border border-cyan-300/25 bg-gradient-to-r from-[#0f2234] via-[#12324a] to-[#15546b] p-3 text-white transition hover:from-[#12324a] hover:via-[#15546b] hover:to-[#177b8b]" >Mesaj Gönder</button>
                        </div>
                    </form>

                </div>

                <div className="lg:w-[48%] w-[90%] flex flex-col gap-5">
                    
                    <div className="h-[50%] rounded-2xl border border-cyan-300/10 bg-[#0b2232]/72 p-4 lg:p-0 flex flex-col justify-center items-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-cyan-300/45 p-5">
                            <div>
                                <FaLocationDot className="mx-auto text-2xl"></FaLocationDot>
                            </div>
                        </div>

                        <h1 className="text-center text-lg mt-2">Türkiye</h1>
                    </div>


                    <div className="h-[50%] flex sm:flex-row flex-col gap-5">

                        <div className="lg:w-[50%] h-full flex flex-col items-center justify-center rounded-2xl border border-cyan-300/10 bg-[#0b2232]/72 p-3">
                            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-cyan-300/45 p-5">
                                <div>
                                    <FaBuildingCircleArrowRight className="mx-auto text-2xl"></FaBuildingCircleArrowRight>
                                </div>
                            </div>

                            <div className="flex gap-5 items-center">
                                <a href="https://cbilgin.com" target="_blank" rel="noreferrer">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-300/25 text-cyan-200">
                                        <FaFacebook className="text-2xl"></FaFacebook>
                                    </div>
                                </a>
                                <a href="https://cbilgin.com" target="_blank" rel="noreferrer">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-300/25 text-cyan-200">
                                        <FaLinkedinIn className="text-2xl"></FaLinkedinIn>
                                    </div>
                                </a>
                                <a href="https://cbilgin.com" target="_blank" rel="noreferrer">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-300/25 text-cyan-200">
                                        <FaGithub className="text-2xl"></FaGithub>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="lg:w-[50%] lg:h-full flex flex-col items-center justify-center rounded-2xl border border-cyan-300/10 bg-[#0b2232]/72 p-3">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-cyan-300/45 p-5">
                                <div>
                                    <MdOutlineMail className="mx-auto text-2xl"></MdOutlineMail>
                                </div>
                            </div>
                            
                            <h1 className="text-center text-sm mt-2">cbilginpoh@gmail.com</h1>
                        </div>

                    </div>


                </div>

            </div>

        </section>
    )
}

export default Contact
