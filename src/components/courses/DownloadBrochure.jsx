import React from "react";
import { HiOutlineDownload } from "react-icons/hi";

export default function DownloadBrochure({ theme }) {
  function download(dataurl, filename) {
    const link = document.createElement("a");
    link.href = dataurl;
    link.target = "_blank";
    link.rel = "noreferer";
    if (!!filename) link.download = filename;
    link.click();
    link.remove();
  }
  return (
    <div className="px-8 py-8 md:py-9 md:px-12 rounded-2xl w-full bg-[#00253A] flex flex-col md:flex-row items-center justify-center md:justify-between gap-5 md:gap-8">
      <p className="text-center md:text-left md:max-w-md text-white text-sm font-light">{`Learning is powered with the right ecosystem and projects that make you Industry Capabl. Download the Brochure for details!`}</p>
      <button
        onClick={() => download("/pdfs/Capabl-Brochure.pdf", "Capabl Brochure")}
        style={{ background: theme.primary, color: theme.text }}
        className="flex-shrink-0 flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm border border-transparent hover_animation"
      >
        <HiOutlineDownload className="text-xl" />
        Download Brochure
      </button>
    </div>
  );
}
