import { useState, type FC } from "react";
import chengjun from "../assets/chengjun.webp";
import chengyu from "../assets/chengyu.webp";
import rishik from "../assets/rishik.webp";
import michael from "../assets/michael.webp";

interface Member {
  name: string;
  role: string;
  image?: string;
}

type SectionKey = "founding" | "collaborating" | "supporting" | "advisory";

const MembersSection: FC = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>("founding");

  const members: Record<SectionKey, Member[]> = {
    founding: [
      { name: "Chengjun Liu", role: "Professor of Computer Science, NJIT", image: chengjun },
      { name: "TBA", role: "To be announced" },
    ],
    collaborating: [{ name: "TBA", role: "To be announced" }],
    supporting: [
      { name: "Chengyu Yang [1]", role: "Doctoral Student of CS, NJIT", image: chengyu },
      { name: "Rishik Reddy Yesgari [1]", role: "Undergraduate Student of CS, NJIT", image: rishik },
      { name: "TBA", role: "To be announced" },
    ],
    advisory: [
      { name: "Michael Recce", role: "CEO, AlphaROC", image: michael },
      { name: "TBA", role: "To be announced" },
    ],
  };

  const getButtonClass = (key: SectionKey): string =>
    `w-full text-left px-4 py-3 rounded-md font-medium transition-all duration-200 cursor-pointer ${
      activeSection === key
        ? "text-[#E53935] font-semibold"
        : "text-gray-800 hover:text-[#E53935]"
    }`;

  return (
    <section
      id="members"
      className="bg-white py-20 px-6 md:px-12 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-2 text-center">
        Meet Our Team
      </h2>
      <div className="w-20 h-[3px] bg-black mb-12 rounded"></div>


      <div className="max-w-7xl w-full bg-[#E8E8E8] rounded-2xl shadow-md border border-gray-200 flex flex-col md:flex-row overflow-hidden p-8 md:p-10">

        <aside className="w-full md:w-1/4 border-b md:border-b-0 md:border-r border-gray-300 pr-6 md:pr-8 space-y-4">
          {["founding", "collaborating", "supporting", "advisory"].map((key) => (
            <button
              key={key}
              onClick={() => setActiveSection(key as SectionKey)}
              className={getButtonClass(key as SectionKey)}
            >
              {key === "founding"
                ? "Founding Members"
                : key === "collaborating"
                ? "Collaborating Members"
                : key === "supporting"
                ? "Supporting Students"
                : "Advisory Board"}
            </button>
          ))}
        </aside>

        <div className="w-full md:w-3/4 flex flex-col justify-between">
          <div className="flex justify-left gap-10 flex-wrap md:flex-nowrap overflow-x-auto pb-6 px-4 md:px-8">
            {members[activeSection].map((person, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center text-center space-y-2 min-w-[180px] transition-all"
              >
                <div className="w-18 h-18 rounded-xl overflow-hidden shadow-sm border border-gray-300 transition-transform duration-300 group-hover:scale-105">
                  {person.image ? (
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-600 text-3xl font-bold">
                      ?
                    </div>
                  )}
                </div>
                <h3 className="text-[16px] font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#E53935]">
                  {person.name}
                </h3>
                <p className="text-[14px] text-gray-600">{person.role}</p>
              </div>
            ))}
          </div>

          {activeSection === "supporting" && (
            <p className="text-sm italic text-gray-600 text-center mt-6">
              [1] NJIT Grace Hopper Artificial Intelligence Research Institute seed
              grant, NJIT, 2025–2026.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default MembersSection;
