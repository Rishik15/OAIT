import patentIcon from "../assets/certificate.png";
import analysisIcon from "../assets/analytics.png";

const highlights = [
  {
    icon: patentIcon,
    title: "Bayesian Discriminating Features (BDF)",
    text: "The Bayes classifier yields the minimum classification error, and OAIT’s research on Bayes classifier design led to the development of the Bayesian Discriminating Features (BDF) method — awarded a patent on face detection.",
  },
  {
    icon: analysisIcon,
    title: "Kernel Fisher Analysis (KFA)",
    text: "According to statistical learning theory, minimizing both empirical and structural risk led OAIT to develop the multiclass Kernel Fisher Analysis (KFA) method, which achieved top performance in the FRGC competition. The convolution concept was later used in CNNs that power modern deep learning.",
  },
];

const HighlightsSection = () => {
  return (
    <section
      id="research"
      className="py-12 px-6 flex flex-col items-center text-center"
    >
      <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-2">
        Research Highlights
      </h2>
      <div className="w-20 h-[3px] bg-black mb-12 rounded"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="bg-[#E8E8E8] rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-8 text-left flex flex-col items-start"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-10 h-10 mb-4 opacity-80"
            />
            <h3 className="text-xl font-bold mb-3 text-[#E53935]">
              {item.title}
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection;
