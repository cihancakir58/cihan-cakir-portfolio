import AboutMe from "../components/home/AboutMe"
import Banner from "../components/home/Banner"
import Contact from "../components/home/Contact"
import Projects from "../components/home/Projects"
import Skill from "../components/home/Skill"

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skill></Skill>
            <Projects></Projects>
            <Contact></Contact>
        </main>
    )
}

export default Home
