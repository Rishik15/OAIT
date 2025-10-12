import type { FC } from "react";

const LecturesSection: FC = () => {
  const lectures = [
    { title: "Bayes Classifier Design", lecturer: "Prof. Liu" },
    { title: "Kernel Methods", lecturer: "Prof. Liu" },
    {
      title: "Principal Component Analysis and Applications",
      lecturer: "Prof. Liu",
    },
    { title: "Discriminant Analysis and Applications", lecturer: "Prof. Liu" },
    { title: "Smart Health", lecturer: "Dr. Ghahremannezhad" },
    { title: "Video Analytics", lecturer: "Dr. Shi" },
  ];

  return (
    <section
      id="lectures"
      className="bg-white py-12 pb-24 px-6 sm:px-6 flex flex-col items-center"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black tracking-wide mb-2 text-center">
        AI/ML Lectures
      </h2>
      <div className="w-16 sm:w-20 h-[3px] bg-black mb-6 rounded"></div>

      <div className="max-w-3xl w-full bg-[#E8E8E8] rounded-xl p-4 shadow-md">
        {/* Desktop Table */}
        <table className="hidden sm:table w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-400">
              <th className="py-2 text-lg font-semibold text-[#E53935]">
                Lecture Title
              </th>
              <th className="py-2 text-lg font-semibold text-[#E53935]">
                Lecturer
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300 text-gray-800">
            {lectures.map((lec, i) => (
              <tr key={i}>
                <td className="py-3 text-[16px]">{lec.title}</td>
                <td className="py-3 text-[16px]">{lec.lecturer}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile Card Layout */}
        <div className="sm:hidden flex flex-col gap-4 text-gray-800">
          {lectures.map((lec, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-sm px-4 py-3 text-center border border-gray-300"
            >
              <p className="text-[#E53935] font-semibold text-[16px] mb-1">
                {lec.title}
              </p>
              <p className="text-[14px]">{lec.lecturer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LecturesSection;
