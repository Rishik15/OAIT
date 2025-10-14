import patentIcon from "../assets/certificate.png";
import analysisIcon from "../assets/analytics.png";

const highlights = [
  {
    icon: patentIcon,
    title: "Bayesian Discriminating Features (BDF)",
    text: (
      <>
        The Bayes classifier yields the minimum classification error, and
        OAIT's research on Bayes classifier design has led to the development
        of the Bayesian Discriminating Features (BDF) method that was awarded a
        patent on face detection.
      </>
    ),
  },
  {
    icon: analysisIcon,
    title: "Kernel Fisher Analysis (KFA)",
    text: (
      <>
        Statistical learning theory indicates that the risk functional consists
        of two terms: the empirical risk and the structural risk defined by the
        VC dimension. To minimize the overall risk, the OAIT developed the
        multiclass Kernel Fisher Analysis (KFA) method, which achieved the best
        performance in the government-organized large-scale Face Recognition
        Grand Challenge (FRGC) competition{" "}
        <a
          href="https://ieeexplore.ieee.org/document/4288163"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline"
        >
          [1]
        </a>
        . Notably, the CMU team proposed a filtering approach based on the
        convolution operation — an idea that was later incorporated into the
        Convolutional Neural Network (CNN) architecture underlying much of
        modern deep learning{" "}
        <a
          href="https://ieeexplore.ieee.org/document/5537907"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline"
        >
          [2]
        </a>
        .
      </>
    ),
  },
];

const HighlightsSection = () => {
  return (
    <section
      id="highlights"
      className="pt-2 md:pt-6 pb-12 px-6 flex flex-col items-center text-center"
      aria-labelledby="highlights-heading"
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      <h2
        id="highlights-heading"
        className="sr-only"
      >
        Highlights of Research Contributions
      </h2>

      <p
        className="max-w-3xl text-[16px] md:text-[18px] leading-relaxed mb-10 px-2"
        itemProp="description"
      >
        Our expertise has already led to pioneering contributions such as:
      </p>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl w-full"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        {highlights.map((item, index) => (
          <article
            key={index}
            className="bg-[#E8E8E8] rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 sm:p-8 text-left flex flex-col items-start"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <meta itemProp="position" content={(index + 1).toString()} />
            <img
              src={item.icon}
              alt={`${item.title} icon`}
              className="w-9 h-9 sm:w-10 sm:h-10 mb-4 opacity-80"
              loading="lazy"
              decoding="async"
              itemProp="image"
            />
            <h3
              className="text-lg sm:text-xl font-bold mb-3 text-[#E53935]"
              itemProp="name"
            >
              {item.title}
            </h3>
            <p
              className="text-[15px] sm:text-[16px] text-gray-700 leading-relaxed"
              itemProp="text"
            >
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection;
