import visionImage from "../assets/neural-network.png"; 

const VisionSection = () => {
  return (
    <section
      id="vision"
      className="bg-white py-12 px-4 sm:px-6 flex flex-col items-center text-center md:text-left"
    >
      <h2 className="text-2xl md:text-3xl font-extrabold text-black tracking-wide mb-2">
        Our Vision
      </h2>
      <div className="w-16 h-[3px] bg-black mb-10 rounded"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="flex justify-center md:justify-start w-full md:w-1/2">
          <img
            src={visionImage}
            alt="AI Network Illustration"
            className="w-[260px] sm:w-[320px] md:w-[400px] h-auto"
            loading="lazy"
          />
        </div>

        <div className="w-full md:w-1/2 text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed text-gray-900">
          <p className="border-l-4 border-black pl-3 sm:pl-4 mb-4">
            The Open AI Team (OAIT) is pioneering the next generation of
            intelligence systems — moving beyond language models to create
            powerful multimodal AI foundations.
          </p>

          <div className="space-y-1 mb-6">
            <p>
              <span className="text-[#E53935] font-semibold">LIMs</span> – Large
              Image Models (LIMs)
            </p>
            <p>
              <span className="text-[#E53935] font-semibold">LVMs</span> – Large
              Video Models (LVMs)
            </p>
            <p>
              <span className="text-[#E53935] font-semibold">LXMs</span> – Large
              X-ray Models (LXMs)
            </p>
            <p>
              <span className="text-[#E53935] font-semibold">LMMs</span> – Large
              MRI Models (LMMs)
            </p>
            <p>
              <span className="text-[#E53935] font-semibold">LOMs</span> – Large
              Omics Models (LOMs)
            </p>
          </div>

          <p>
            Our goals are going to be achieved by leveraging our critical
            expertise in advanced statistical learning, image/video analytics,
            computer vision, pattern recognition, learning, and AI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
