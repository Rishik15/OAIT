import chengjun from "../assets/chengjun.webp";
import chengyu from "../assets/chengyu.webp";
import rishik from "../assets/rishik.webp";
import michael from "../assets/michael.webp";

interface Member {
  name: string;
  role: string;
  image?: string;
}

const SingleMembersSection = () => {
  const members = {
    founding: [
      {
        name: "Chengjun Liu",
        role: "Professor of Computer Science, NJIT",
        image: chengjun,
      },
      { name: "TBA", role: "To be announced" },
    ],
    collaborating: [{ name: "TBA", role: "To be announced" }],
    supporting: [
      {
        name: "Chengyu Yang [1]",
        role: "Doctoral Student of CS, NJIT",
        image: chengyu,
      },
      {
        name: "Rishik Reddy Yesgari [1]",
        role: "Undergraduate Student of CS, NJIT",
        image: rishik,
      },
      { name: "TBA", role: "To be announced" },
    ],
    advisory: [
      { name: "Michael Recce", role: "CEO, AlphaROC", image: michael },
      { name: "TBA", role: "To be announced" },
    ],
  };

  return (
    <section
      id="members"
      className="bg-white py-12 px-6 md:px-12 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-2 text-center">
        Meet Our Team
      </h2>
      <div className="w-20 h-[3px] bg-black mb-10 rounded"></div>

      <div className="max-w-7xl w-full bg-[#E8E8E8] rounded-2xl shadow-md border border-gray-200 p-8 flex flex-col">
        {/* Section Titles Row */}
        <div className="flex justify-around border-b border-gray-300 pb-4 mb-8 text-center flex-wrap">
          <h3 className="text-lg font-semibold text-[#E53935]">
            Founding Members
          </h3>
          <h3 className="text-lg font-semibold text-[#E53935]">
            Collaborating Members
          </h3>
          <h3 className="text-lg font-semibold text-[#E53935]">
            Supporting Students
          </h3>
          <h3 className="text-lg font-semibold text-[#E53935]">
            Advisory Board
          </h3>
        </div>

        {/* Members Row */}
        <div className="flex flex-wrap justify-between gap-6">
          {/* Founding */}
          <div className="flex flex-col items-center w-full sm:w-[45%] md:w-[22%] border-r border-gray-300 pr-4 last:border-none">
            {members.founding.map((person, idx) => (
              <MemberCard key={idx} {...person} />
            ))}
          </div>

          {/* Collaborating */}
          <div className="flex flex-col items-center w-full sm:w-[45%] md:w-[22%] border-r border-gray-300 pr-4 last:border-none">
            {members.collaborating.map((person, idx) => (
              <MemberCard key={idx} {...person} />
            ))}
          </div>

          {/* Supporting */}
          <div className="flex flex-col items-center w-full sm:w-[45%] md:w-[22%] border-r border-gray-300 pr-4 last:border-none">
            {members.supporting.map((person, idx) => (
              <MemberCard key={idx} {...person} />
            ))}
            <p className="text-xs italic text-gray-600 mt-2 text-center">
              [1] NJIT Grace Hopper Artificial Intelligence Research Institute
              seed grant, NJIT, 2025–2026.
            </p>
          </div>

          {/* Advisory */}
          <div className="flex flex-col items-center w-full sm:w-[45%] md:w-[22%]">
            {members.advisory.map((person, idx) => (
              <MemberCard key={idx} {...person} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const MemberCard = ({ name, role, image }: Member) => (
  <div className="group flex flex-col items-center text-center space-y-2 mb-6 transition-all">
    <div className="w-20 h-20 rounded-xl overflow-hidden shadow-sm border border-gray-300 transition-transform duration-300 group-hover:scale-105">
      {image ? (
        <img src={image} alt={name} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-600 text-3xl font-bold">
          ?
        </div>
      )}
    </div>
    <h4 className="text-[16px] font-semibold text-gray-900 group-hover:text-[#E53935] transition-colors duration-300">
      {name}
    </h4>
    <p className="text-[14px] text-gray-600">{role}</p>
  </div>
);

export default SingleMembersSection;
