import starIcon from "../assets/quality.png"; 
import handshakeIcon from "../assets/collaborate.png";
import codeIcon from "../assets/open-source.png";

const ObjectiveSection = () => {
  const objectives = [
    {
      icon: starIcon,
      text: (
        <>
          <span className="text-[#E53935] font-semibold">OPEN</span> means an
          open platform that supports your success by offering our 30+ year’s
          AI/ML critical expertise & resources to anyone, anywhere, and anytime.
          Together we make the world better.
        </>
      ),
    },
    {
      icon: handshakeIcon,
      text: (
        <>
          <span className="text-[#E53935] font-semibold">OPEN</span> means
          collaboration, as it is self-evident that “The whole is greater than
          the sum of its parts”.
        </>
      ),
    },
    {
      icon: codeIcon,
      text: (
        <>
          <span className="text-[#E53935] font-semibold">OPEN</span> means
          fairness and sharing, and the OAIT supports the open-source ecosystem
          by offering free access to our papers, code, and data.
        </>
      ),
    },
  ];

  return (
    <section
      id="objective"
      className="bg-white py-12 px-6 flex flex-col items-center text-center"
    >
      <h2 className="text-2xl md:text-3xl font-extrabold text-black tracking-wide mb-2">
        OUR OBJECTIVE
      </h2>
      <div className="w-16 h-[3px] bg-black mb-10 rounded"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[900px]">
        {objectives.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#E8E8E8] p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
          >
            <img
              src={item.icon}
              alt="icon"
              className="w-14 h-14 sm:w-16 sm:h-16 mb-6"
              loading="lazy"
            />
            <p className="text-[15px] sm:text-[16px] text-black leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ObjectiveSection;
