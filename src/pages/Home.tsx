import Footer from "../components/Footer";
import HeroSection from "../components/Herosection";
import HighlightsSection from "../components/Highlight";
import LecturesSection from "../components/Lectures";
import MembersSection from "../components/Members";
import Navbar from "../components/Navbar";
import ObjectiveSection from "../components/Objective";
import VisionSection from "../components/Vision";


export const Home = () =>{
    return(
        <>
            <Navbar />
            <HeroSection />
            <ObjectiveSection />
            <VisionSection />
            <HighlightsSection />
            <MembersSection />
            <LecturesSection />
            <Footer />
        </>
    );
}