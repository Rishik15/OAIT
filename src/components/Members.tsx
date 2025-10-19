import { useState, type FC } from "react";
import chengjun from "../assets/chengjun.webp";
import chengyu from "../assets/chengyu.webp";
import rishik from "../assets/rishik.webp";
import michael from "../assets/michael.webp";
import jensen from "../assets/JensenHuang.png";
import qiao from "../assets/qiao.webp";
import zhou from "../assets/zhou.jpg";
import mehta from "../assets/MehtaJayAshokkumar.jpeg";
import jai from "../assets/KallamJaiBharathReddy.jpeg";
import sathvika from "../assets/GanniKrishnaSathvika.jpeg";
import nikunj from "../assets/Nikunj.jpg";
import chirag from "../assets/chirag.jpeg";
import punith from "../assets/punith.jpeg";
import chen from "../assets/chen.jpg";
import karan from "../assets/karan.jpg";
import andrew from "../assets/andrew.jpg";
import vora from "../assets/vora.jpg";

interface Member {
  name: string;
  role?: string;
  image?: string;
}

type SectionKey = "core" | "collaborating" | "advisory" | "founding";

const MembersSection: FC = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>("core");

  const members = {
    core: {
      faculty: [
        {
          name: "Chengjun Liu",
          role: "Professor of Computer Science, NJIT",
          image: chengjun,
        },
      ],
      doctoral: [
        { name: "Chen, Sijin (Advisor: Prof. Perl)", image: chen },
        { name: "Yang, Chengyu [1]", image: chengyu },
        { name: "Yu, Zhou", image: zhou },
      ],
      masters: [
        { name: "Ganni, Krishna Sathvika", image: sathvika },
        { name: "Kallam, Jai Bharath Reddy", image: jai },
        { name: "Kantaria, Nikunj Nileshkumar", image: nikunj },
        { name: "Mehta, Jay Ashokkumar", image: mehta },
        { name: "Pechetti, Punith", image: punith },
        { name: "Sharma, Chirag", image: chirag },
        { name: "Vora, Vineet", image: vora},
      ],
      undergrad: [
        { name: "Kanda, Karan", image: karan },
        { name: "Yesgari, Rishik Reddy [1]", image: rishik },
      ],
    },
    collaborating: [
      {
        name: "Andrew Sohn",
        role: "Associate Professor of Computer Science, SAE: GPU Expert",
        image: andrew,
      },
    ],
    advisory: [
      { name: "Guopei Qiao", role: "SMTS, AMD", image: qiao },
      { name: "Michael Recce", role: "CEO, AlphaROC", image: michael },
      { name: "TBA", role: "To be announced" },
    ],
    founding: [
      {
        name: "Chengjun Liu",
        role: "Professor of Computer Science, NJIT",
        image: chengjun,
      },
      { name: "I'm coming", image: jensen },
      { name: "TBA", role: "To be announced" },
    ],
  };

  const renderAvatar = (person: Member) => {
    if (person.name.toLowerCase().includes("tba")) {
      return (
        <div className="w-15 h-15 rounded-full bg-gray-400 text-white flex items-center justify-center font-bold shadow-sm flex-shrink-0">
          ?
        </div>
      );
    }

    if (person.name.includes("I'm coming") && person.image) {
      return (
        <div className="relative bg-black w-15 h-15 rounded-full overflow-hidden flex-shrink-0 shadow-sm">
          <img
            src={person.image}
            alt={person.name}
            className="absolute inset-0 w-full h-full scale-65"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white/70 font-bold text-lg">
            ?
          </div>
        </div>
      );
    }

    if (person.image) {
      return (
        <div className="relative w-15 h-15 rounded-full overflow-hidden flex-shrink-0 shadow-sm">
          <img
            src={person.image}
            alt={person.name}
            className={`absolute inset-0 w-full h-full`}
          />
        </div>
      );
    }

    return (
      <div className="w-15 h-15 rounded-full bg-gray-300 flex items-center justify-center shadow-sm flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-7 h-7"
        >
          <path
            fillRule="evenodd"
            d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4Zm-7 8c0-2.21 3.58-4 7-4s7 1.79 7 4v1H5v-1Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    );
  };

  const renderMemberGrid = (list: Member[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 mt-4">
      {list.map((person, idx) => (
        <article
          key={idx}
          className="flex items-center space-x-3 min-h-[64px]"
          itemProp="member"
          itemScope
          itemType="https://schema.org/Person"
        >
          {renderAvatar(person)}
          <div className="flex flex-col justify-center">
            <h3 className="text-[15px] font-semibold text-gray-900 hover:text-[#E53935] transition-colors duration-300">
              {person.name}
            </h3>
            <p className="text-[13px] text-gray-600 leading-tight">
              {person.role}
            </p>
          </div>
        </article>
      ))}
    </div>
  );

  const renderCoreSection = () => (
    <div className="space-y-10">
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Faculty:</h3>
        {renderMemberGrid(members.core.faculty)}
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          Doctoral Students:
        </h3>
        {renderMemberGrid(members.core.doctoral)}
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          Master’s Students:
        </h3>
        {renderMemberGrid(members.core.masters)}
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          Undergraduate Students:
        </h3>
        {renderMemberGrid(members.core.undergrad)}
      </div>
      <p className="text-sm italic text-gray-600 text-center mt-6">
        [1] NJIT Grace Hopper Artificial Intelligence Research Institute seed
        grant, NJIT, 2025–2026.
      </p>
    </div>
  );

  return (
    <section
      id="members"
      className="bg-white py-12 px-6 sm:px-6 md:px-12 flex flex-col items-center"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black mb-2 text-center">
        Meet Our Team
      </h2>
      <div className="w-16 sm:w-20 h-[3px] bg-black mb-10 sm:mb-12 rounded"></div>

      <div className="max-w-7xl w-full bg-[#E8E8E8] rounded-2xl shadow-md border border-gray-200 p-6 sm:p-8 md:p-10">
        <div className="flex md:hidden overflow-x-auto border-b border-gray-300 mb-8 no-scrollbar px-4">
          <div className="flex space-x-6 sm:space-x-8 min-w-max">
            {(
              ["core", "collaborating", "advisory", "founding"] as SectionKey[]
            ).map((key) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`relative pb-2 text-base sm:text-lg font-medium whitespace-nowrap ${
                  activeSection === key
                    ? "text-[#E53935] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#E53935]"
                    : "text-gray-800 hover:text-[#E53935]"
                }`}
              >
                {key === "core"
                  ? "Core Members"
                  : key === "collaborating"
                  ? "Collaborating Members"
                  : key === "advisory"
                  ? "Advisory Board"
                  : "Founding Members"}
              </button>
            ))}
          </div>
        </div>

        <div className="hidden md:flex flex-row">
          <aside className="w-1/4 border-r border-gray-300 pr-8 space-y-4">
            {(
              ["core", "collaborating", "advisory", "founding"] as SectionKey[]
            ).map((key) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`w-full text-left px-4 py-3 rounded-md font-medium transition-all duration-200 cursor-pointer ${
                  activeSection === key
                    ? "text-[#E53935] font-semibold"
                    : "text-gray-800 hover:text-[#E53935]"
                }`}
              >
                {key === "core"
                  ? "Core Members"
                  : key === "collaborating"
                  ? "Collaborating Members"
                  : key === "advisory"
                  ? "Advisory Board"
                  : "Founding Members"}
              </button>
            ))}
          </aside>

          <div className="w-3/4 pl-8">
            {activeSection === "core"
              ? renderCoreSection()
              : renderMemberGrid(members[activeSection] as Member[])}
          </div>
        </div>

        <div className="md:hidden mt-4">
          {activeSection === "core"
            ? renderCoreSection()
            : renderMemberGrid(members[activeSection] as Member[])}
        </div>
      </div>
    </section>
  );
};

export default MembersSection;
