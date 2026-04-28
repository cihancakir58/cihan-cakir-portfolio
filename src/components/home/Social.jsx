import {
    FaEnvelope,
    FaGithub,
    FaGlobe,
    FaLinkedinIn,
    FaTwitter,
} from "react-icons/fa";

const Social = () => {
    return (
        <div className="flex gap-4 *:border *:border-[#315779] *:cursor-pointer *:size-[40px] *:rounded-full *:bg-[#0E161E] *:text-white *:flex *:justify-center *:items-center ">
            <a
                className="hover:bg-[#32116d] transition duration-300 hover:rotate-360 hover:scale-110"
                href="https://cbilgin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="cbilgin.com"
            >
                <FaGlobe />
            </a>

            <a
                className="hover:bg-[#32116d] transition duration-300 hover:rotate-360 hover:scale-110"
                href="http://sivascu.com"
                target="_blank"
                rel="noreferrer"
                aria-label="sivascu.com"
            >
                <FaLinkedinIn />
            </a>

            <a
                className="hover:bg-[#32116d] transition duration-300 hover:rotate-360 hover:scale-110"
                href="https://jspsinav.com"
                target="_blank"
                rel="noreferrer"
                aria-label="jspsinav.com"
            >
                <FaTwitter />
            </a>

            <a
                className="hover:bg-[#32116d] transition duration-300 hover:rotate-360 hover:scale-110"
                href="mailto:cbilginpoh@gmail.com"
                aria-label="E-posta"
            >
                <FaEnvelope />
            </a>

            <a
                className="hover:bg-[#32116d] transition duration-300 hover:rotate-360 hover:scale-110"
                href="tel:+905318743367"
                aria-label="Telefon"
            >
                <FaGithub />
            </a>
        </div>
    );
};

export default Social;
