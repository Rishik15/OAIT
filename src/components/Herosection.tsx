import heroImage from "../assets/HeroSection.webp";

const HeroSection = () => {
  return (
    <section
      id = "Hero"
      className="relative w-full h-[400px] flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.70), rgba(0,0,0,0.60)), url(${heroImage})`,
        backgroundSize: "cover",        
        backgroundPosition: "center",   
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="z-10 pt-20 px-4 flex flex-col items-center">
        <h1 className="hero-txt font-extrabold text-[54px] leading-[77px] tracking-wide">
          THE OPEN AI TEAM
        </h1>
        <p className="mt-[20px] text-[32px] font-light drop-shadow-md text-[#FFFFFF]">
          AI for a Better Tomorrow
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
