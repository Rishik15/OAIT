import type { FC } from "react";

const LecturesSection: FC = () => {
  return (
    <section
      id="lectures"
      className="bg-white py-12 pb-18 px-6 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-wide mb-2 text-center">
        AI/ML Lectures
      </h2>
      <div className="w-20 h-[3px] bg-black mb-6 rounded"></div>

      <div className="max-w-3xl w-full bg-[#E8E8E8] rounded-xl p-4 shadow-md">
        <table className="w-full text-left border-collapse">
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
            <tr>
              <td className="py-3">Bayes Classifier Design</td>
              <td className="py-3">Prof. Liu</td>
            </tr>
            <tr>
              <td className="py-3">Kernel Methods</td>
              <td className="py-3">Prof. Liu</td>
            </tr>
            <tr>
              <td className="py-3">
                Principal Component Analysis and Applications
              </td>
              <td className="py-3">Prof. Liu</td>
            </tr>
            <tr>
              <td className="py-3">Discriminant Analysis and Applications</td>
              <td className="py-3">Prof. Liu</td>
            </tr>
            <tr>
              <td className="py-3">Smart Health</td>
              <td className="py-3">Dr. Ghahremannezhad</td>
            </tr>
            <tr>
              <td className="py-3">Video Analytics</td>
              <td className="py-3">Dr. Shi</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default LecturesSection;
