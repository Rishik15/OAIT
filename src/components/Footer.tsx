import type { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-black/90 border-t border-gray-700 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-end text-right space-y-2">
        <h3 className="text-xl font-semibold text-white/90">
          The Open AI Team (OAIT)
        </h3>
        <p className="text-gray-400 text-[16px]">
          For inquiries or collaboration opportunities, contact{" "}
          <a
            href="mailto:cliu@njit.edu"
            className="text-[#E53935] font-medium hover:text-[#ff6666] transition-colors"
          >
            cliu@njit.edu
          </a>
        </p>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Open AI Team — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
