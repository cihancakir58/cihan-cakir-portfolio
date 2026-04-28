
const SkillCard = ({icon, style}) => {
    return (
        <div>
            
            <div className="h-24 w-24 flex items-center justify-center rounded-full border-4 border-sky-500 bg-[#00bfff41]">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-sky-300">
                    <FaReact className="text-sky-700 text-5xl font-bold" />
                </div>
            </div>

            <h1 className="text-center h-24 w-24 font-semibold mt-2 text-xl">React</h1>

        </div>
    )
}

export default SkillCard
