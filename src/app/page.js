import Image from "next/image";
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import AboutSection from './components/AboutSection'
import AchievementsSection from "./components/AchievementsSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
        <NavBar></NavBar>
        <div className="container mt-24 mx-auto px-12 py-4">
            <HeroSection/>
            <AchievementsSection/>
            <AboutSection/>
        </div>
    </main>
  );
}
