import { useState, type FC } from "react";
import chengjun from "../assets/chengjun.webp";
import chengyu from "../assets/chengyu.webp";
import rishik from "../assets/rishik.webp";
import michael from "../assets/michael.webp";
import jensen from "../assets/jensenhuang.webp";
import qiao from "../assets/qiao.webp";

interface Member {
  name: string;
  role: string;
  image?: string;
}

type SectionKey = "founding" | "collaborating" | "supporting" | "advisory";
type SubSectionKey = "phd" | "masters" | "undergrad";

const MembersSection: FC = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>("founding");
  const [activeSubSection, setActiveSubSection] =
    useState<SubSectionKey>("phd");

  const members = {
    founding: [
      {
        name: "Chengjun Liu",
        role: "Professor of Computer Science, NJIT",
        image: chengjun,
      },
      { name: "I'm coming" },
      { name: "TBA", role: "To be announced" },
    ],
    collaborating: [{ name: "TBA", role: "To be announced" }],
    supporting: {
      phd: [{ name: "Chengyu Yang [1]", image: chengyu }, { name: "Zhou Yu" }],
      masters: [
        { name: "Krishna Sathvika Ganni" },
        { name: "Jai Bharath Reddy Kallam" },
        { name: "Anagha Bharadwaj" },
        { name: "Punith Pechetti" },
        { name: "Nikunj Nileshkumar Kantaria" },
        { name: "Jay Ashokkumar Mehta" },
        { name: "Sai Mahathma Reddy Bokka" },
        { name: "Chirag Sharma" },
      ],
      undergrad: [
        {
          name: "Rishik Reddy Yesgari [1]",
          image: rishik,
        },
        { name: "Karan Kanda" },
      ],
    },
    advisory: [
      { name: "Michael Recce", role: "CEO, AlphaROC", image: michael },
      { name: "Guopei Qiao", role: "AMD", image: qiao },
      { name: "TBA", role: "To be announced" },
    ],
  };

  const renderAvatar = (person: Member, section?: SectionKey) => {
    if (
      section === "founding" &&
      person.name.toLowerCase().includes("coming")
    ) {
      return (
        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 shadow-sm">
          <img
            src={jensen}
            alt="Jensen Huang"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gray-500/70 flex items-center justify-center text-white font-bold text-lg">
            ?
          </div>
        </div>
      );
    }

    if (person.name.toLowerCase().includes("tba")) {
      return (
        <div className="w-12 h-12 rounded-full bg-gray-400 text-white flex items-center justify-center font-bold shadow-sm flex-shrink-0">
          ?
        </div>
      );
    }

    if (person.image) {
      return (
        <img
          src={person.image}
          alt={person.name}
          className="w-12 h-12 rounded-full object-cover shadow-sm flex-shrink-0"
        />
      );
    }

    return (
      <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center shadow-sm flex-shrink-0">
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 mt-6">
      {list.map((person, idx) => (
        <article
          key={idx}
          className="flex items-center space-x-3 min-h-[64px]"
          itemProp="member"
          itemScope
          itemType="https://schema.org/Person"
        >
          {renderAvatar(person, activeSection)}
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
              [
                "founding",
                "collaborating",
                "supporting",
                "advisory",
              ] as SectionKey[]
            ).map((key) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`relative pb-2 text-base sm:text-lg font-medium whitespace-nowrap ${
                  activeSection === key
                    ? "text-[#E53935] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#E53935] after:rounded-full"
                    : "text-gray-800 hover:text-[#E53935]"
                }`}
              >
                {key === "founding"
                  ? "Founding"
                  : key === "collaborating"
                  ? "Collaborating"
                  : key === "supporting"
                  ? "Supporting"
                  : "Advisory"}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex flex-row">
          {/* Sidebar */}
          <aside className="w-1/4 border-r border-gray-300 pr-8 space-y-4">
            {(
              [
                "founding",
                "collaborating",
                "supporting",
                "advisory",
              ] as SectionKey[]
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

          {/* Main Content */}
          <div className="w-3/4 pl-8">
            {/* Normal sections */}
            {activeSection !== "supporting" && (
              <>{renderMemberGrid(members[activeSection] as Member[])}</>
            )}

            {/* Supporting section with sub-tabs */}
            {activeSection === "supporting" && (
              <>
                {/* Subsection Tabs */}
                <div className="flex flex-wrap gap-4 border-b border-gray-300 pb-3 mb-4">
                  {(["phd", "masters", "undergrad"] as SubSectionKey[]).map(
                    (sub) => (
                      <button
                        key={sub}
                        onClick={() => setActiveSubSection(sub)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          activeSubSection === sub
                            ? "bg-[#E53935] text-white shadow"
                            : "bg-white text-gray-800 hover:bg-gray-100"
                        }`}
                      >
                        {sub === "phd"
                          ? "PhD Students"
                          : sub === "masters"
                          ? "Master Students"
                          : "Undergraduate Students"}
                      </button>
                    )
                  )}
                </div>

                {renderMemberGrid(
                  members.supporting[activeSubSection] as Member[]
                )}

                <p className="text-sm italic text-gray-600 text-center mt-8">
                  [1] NJIT Grace Hopper Artificial Intelligence Research
                  Institute seed grant, NJIT, 2025–2026.
                </p>
              </>
            )}
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden mt-2">
          {activeSection !== "supporting" && (
            <>{renderMemberGrid(members[activeSection] as Member[])}</>
          )}

          {activeSection === "supporting" && (
            <>
              {/* Subsection Tabs for Mobile */}
              <div className="flex justify-center flex-wrap gap-2 mb-3">
                {(["phd", "masters", "undergrad"] as SubSectionKey[]).map(
                  (sub) => (
                    <button
                      key={sub}
                      onClick={() => setActiveSubSection(sub)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        activeSubSection === sub
                          ? "bg-[#E53935] text-white shadow-sm"
                          : "bg-white text-gray-800 hover:bg-gray-100"
                      }`}
                    >
                      {sub === "phd"
                        ? "PhD"
                        : sub === "masters"
                        ? "Masters"
                        : "Undergrad"}
                    </button>
                  )
                )}
              </div>

              {renderMemberGrid(
                members.supporting[activeSubSection] as Member[]
              )}

              <p className="text-xs italic text-gray-600 text-center mt-6">
                [1] NJIT Grace Hopper Artificial Intelligence Research Institute
                seed grant, NJIT, 2025–2026.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default MembersSection;
