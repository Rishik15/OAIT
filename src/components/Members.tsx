import { useState, type FC } from "react";

interface Member {
  name: string;
  role: string;
}

type SectionKey = "founding" | "collaborating" | "supporting" | "advisory";

const MembersSection: FC = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>("founding");

  const members: Record<SectionKey, Member[]> = {
    founding: [
      { name: "Chengjun Liu", role: "Professor of Computer Science, NJIT" },
      { name: "TBA", role: "To be announced" }
    ],
    collaborating: [{ name: "TBA", role: "To be announced" }],
    supporting: [
      { name: "Chengyu Yang [1]", role: "Phd in computer science, NJIT" },
      { name: "Zhou Yu", role: "Phd in computer science, NJIT" },
      {
        name: "Krishna Sathvika Ganni",
        role: "Master Student, NJIT",
      },
      { name: "Jai Bharath Reddy Kallam", role: "Master Student, NJIT" },
      { name: "Anagha Bharadwaj", role: "Master Student, NJIT" },
      { name: "Punith Pechetti", role: "Master Student, NJIT" },
      { name: "Nikunj Nileshkumar Kantaria", role: "Master Student, NJIT" },
      { name: "Jay Ashokkumar Mehta", role: "Master Student, NJIT" },
      { name: "Sai Mahathma Reddy Bokka", role: "Master Student, NJIT" },
      { name: "Chirag Sharma", role: "Master Student, NJIT" },
      {
        name: "Rishik Reddy Yesgari [1]",
        role: "Bachelor's in Computer Science, NJIT",
      },
      { name: "Karan Kanda", role: "Bachelor's in Computer Science, NJIT" },
      { name: "TBA", role: "To be announced" }
    ],
    advisory: [
      { name: "Michael Recce", role: "CEO, AlphaROC" },
      { name: "Guopei Qiao", role: "AMD" },
      { name: "TBA", role: "To be announced" }
    ],
  };

  return (
    <section
      id="members"
      className="bg-white py-12 px-6 sm:px-6 md:px-12 flex flex-col items-center"
      aria-labelledby="members-heading"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <h2
        id="members-heading"
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black mb-2 text-center"
        itemProp="name"
      >
        Meet Our Team
      </h2>
      <div
        className="w-16 sm:w-20 h-[3px] bg-black mb-10 sm:mb-12 rounded"
        role="presentation"
      ></div>

      <div
        className="max-w-7xl w-full bg-[#E8E8E8] rounded-2xl shadow-md border border-gray-200 p-6 sm:p-8 md:p-10"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <div className="flex md:hidden overflow-x-auto border-b border-gray-300 mb-8 no-scrollbar px-4">
          <div className="flex space-x-6 sm:space-x-8 min-w-max">
            {(["founding", "collaborating", "supporting", "advisory"] as SectionKey[]).map(
              (key) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`relative pb-2 text-base sm:text-lg font-medium whitespace-nowrap ${
                    activeSection === key
                      ? "text-[#E53935] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#E53935] after:rounded-full"
                      : "text-gray-800 hover:text-[#E53935]"
                  }`}
                  aria-current={activeSection === key ? "true" : "false"}
                >
                  {key === "founding"
                    ? "Founding"
                    : key === "collaborating"
                    ? "Collaborating"
                    : key === "supporting"
                    ? "Supporting"
                    : "Advisory"}
                </button>
              )
            )}
          </div>
        </div>

        <div className="hidden md:flex flex-row">
          <aside
            className="w-1/4 border-r border-gray-300 pr-8 space-y-4"
            aria-label="Team Categories"
          >
            {(["founding", "collaborating", "supporting", "advisory"] as SectionKey[]).map(
              (key) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`w-full text-left px-4 py-3 rounded-md font-medium transition-all duration-200 cursor-pointer ${
                    activeSection === key
                      ? "text-[#E53935] font-semibold"
                      : "text-gray-800 hover:text-[#E53935]"
                  }`}
                  aria-current={activeSection === key ? "true" : "false"}
                >
                  {key === "founding"
                    ? "Founding Members"
                    : key === "collaborating"
                    ? "Collaborating Members"
                    : key === "supporting"
                    ? "Supporting Students"
                    : "Advisory Board"}
                </button>
              )
            )}
          </aside>

          <div
            className="w-3/4 pl-8"
            itemScope
            itemType="https://schema.org/ItemList"
          >
            <div className="flex flex-wrap gap-10 justify-start">
              {members[activeSection].map((person, idx) => (
                <article
                  key={idx}
                  className="flex flex-col items-start text-left space-y-1 min-w-[220px] transition-all"
                  itemProp="member"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <meta itemProp="position" content={(idx + 1).toString()} />
                  <h3
                    className="text-[16px] font-semibold text-gray-900 transition-colors duration-300 hover:text-[#E53935]"
                    itemProp="name"
                  >
                    {person.name}
                  </h3>
                  <p className="text-[14px] text-gray-600" itemProp="jobTitle">
                    {person.role}
                  </p>
                </article>
              ))}
            </div>

            {activeSection === "supporting" && (
              <p
                className="text-sm italic text-gray-600 text-center mt-8"
                itemProp="description"
              >
                [1] NJIT Grace Hopper Artificial Intelligence Research Institute
                seed grant, NJIT, 2025–2026.
              </p>
            )}
          </div>
        </div>

        <div className="md:hidden">
          <div
            className="grid grid-cols-1 gap-4 justify-items-start"
            itemScope
            itemType="https://schema.org/ItemList"
          >
            {members[activeSection].map((person, idx) => (
              <article
                key={idx}
                className="text-left"
                itemProp="member"
                itemScope
                itemType="https://schema.org/Person"
              >
                <meta itemProp="position" content={(idx + 1).toString()} />
                <h3
                  className="text-[14px] font-semibold text-gray-900 hover:text-[#E53935] transition-colors duration-300"
                  itemProp="name"
                >
                  {person.name}
                </h3>
                <p className="text-[12px] text-gray-600" itemProp="jobTitle">
                  {person.role}
                </p>
              </article>
            ))}
          </div>

          {activeSection === "supporting" && (
            <p
              className="text-xs italic text-gray-600 text-center mt-6"
              itemProp="description"
            >
              [1] NJIT Grace Hopper Artificial Intelligence Research Institute
              seed grant, NJIT, 2025–2026.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default MembersSection;
