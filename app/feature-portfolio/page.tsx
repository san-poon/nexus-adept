import ContactSquare from "./components/contact-square"
import HeroSection from "./components/hero-section"
import ProjectsBoulevard from "./components/projects-boulevard"
import SkillsMeadow from "./components/skills-meadow"
export default function PortfolioPage() {
    return (
        <main className=" bg-cyan-50 dark:bg-cyan-900/30">
            <HeroSection />
            <SkillsMeadow />
            <ProjectsBoulevard />
            {/* <ContactSquare /> */}
        </main>
    )
}