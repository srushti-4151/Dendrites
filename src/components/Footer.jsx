import React, { useState } from "react";
import logo from "../assets/dendrites-Trimmed-removebg-preview.png";
import { FaAngleDown, FaArrowRightLong } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const sections = [
    {
      title: "ZETA Holding Headquarter",
      content: (
        <>
          <p className="text-white pt-3">
            Zetaplatz 1, 8501 Graz/Lieboch <br /> Austria
          </p>
          <Link className="group flex gap-2 items-center pt-3 font-medium">
            <div className="border border-[#80acd3] p-2 rounded-full group-hover:bg-[#80acd3] duration-300">
              <IoCallOutline className="text-white group-hover:text-white transition duration-300 text-xl" />
            </div>
            <div className="text-white group relative">
              <span className="group-hover:text-[#80acd3]">
                +43 3136 9010 1000
              </span>
              <div className="absolute bottom-[-4px] left-1/2 w-0 h-[1px] bg-[#80acd3] group-hover:w-[calc(100%)] transition-all duration-300 transform -translate-x-1/2"></div>
            </div>
          </Link>
          <Link className="group flex gap-2 items-center pt-3 font-medium">
            <div className="border border-[#80acd3] p-2 rounded-full group-hover:bg-[#80acd3] duration-300">
              <AiOutlineMail className="text-white group-hover:text-white transition duration-300 text-xl" />
            </div>
            <div className="text-white group relative">
              <span className="group-hover:text-[#80acd3]">
                office@zeta.com
              </span>
              <div className="absolute bottom-[-4px] left-1/2 w-0 h-[1px] bg-[#80acd3] group-hover:w-[calc(100%)] transition-all duration-300 transform -translate-x-1/2"></div>
            </div>
          </Link>
        </>
      ),
    },
    {
      title: "Company",
      content: (
        <>
          {["About", "Locations", "Contact", "Career", "Vacancies"].map(
            (item) => (
              <div className="pt-3" key={item}>
                <Link className="text-white group hover:text-[#80acd3] relative">
                  {item}
                  <div className="absolute bottom-[-4px] left-1/2 w-0 h-[1px] bg-[#80acd3] group-hover:w-[calc(100%)] transition-all duration-300 transform -translate-x-1/2"></div>
                </Link>
              </div>
            )
          )}
        </>
      ),
    },
    {
      title: "Infos & Essentials",
      content: (
        <>
          {[
            "Success Stories",
            "ZETA Videos",
            "Events",
            "Media Relations",
            "Downloads",
            "FAQs",
          ].map((item) => (
            <div className="pt-3 " key={item}>
              <Link className="text-white group hover:text-[#80acd3]  relative">
                {item}{" "}
                <div className="absolute bottom-[-4px] left-1/2 w-0 h-[1px] bg-[#80acd3] group-hover:w-[calc(100%)] transition-all duration-300 transform -translate-x-1/2"></div>
              </Link>
            </div>
          ))}
        </>
      ),
    },
    {
      title: "Legal",
      content: (
        <>
          {[
            "Data protection",
            "Legal notice",
            "General terms and conditions",
            "Compliance",
            "Cookies",
          ].map((item) => (
            <div className="pt-3" key={item}>
              <Link className="text-white group hover:text-[#80acd3]  relative">
                {item}{" "}
                <div className="absolute bottom-[-4px] left-1/2 w-0 h-[1px] bg-[#80acd3] group-hover:w-[calc(100%)] transition-all duration-300 transform -translate-x-1/2"></div>
              </Link>
            </div>
          ))}
        </>
      ),
    },
  ];

  return (
    <div className="bg-[#00223e]">
      <div className="max-w-[1410px] mx-auto px-4 py-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <img
              src={logo}
              className="w-64 h-6 cursor-pointer"
              alt="Zeta Logo"
            />
          </div>
          <div className="flex flex-wrap gap-4 justify-center sm:justify-end w-full lg:text-base text-sm">
            <button className="flex items-center justify-center gap-3 bg-[#005aa9] px-8 py-2 font-bold text-white rounded-md transition duration-300 hover:bg-white hover:text-[#005aa9] w-full sm:w-auto">
              <FaArrowRightLong size={22}/>
              Next Webinar
            </button>
            <button className="flex items-center justify-center gap-3 bg-[#80acd3] px-8 py-2 font-bold text-white rounded-md transition duration-300 hover:bg-white hover:text-[#80acd3] w-full sm:w-auto">
              <FaArrowRightLong size={22}/>
              Subscribe to the newsletter
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 py-9 pt-28">
          {sections.map((section, index) => (
            <div key={index} className={index === 1 ? "pl-20" : ""}>
              <p className="uppercase font-bold w-[60%] text-white text-lg pb-4">
                {section.title}
              </p>
              {section.content}
            </div>
          ))}
        </div>

        {/* Mobile Accordion using Material-UI */}
        <div className="block sm:hidden mt-4">
          {sections.map((section, index) => (
            <Accordion
              key={index}
              sx={{
                backgroundColor: "#022e55",
                borderRadius: 2,
                marginBottom: "1rem",
              }}
              expanded={openSection === index}
              onChange={() => toggleSection(index)}
            >

              <AccordionSummary
                // expandIcon={<FaAngleDown sx={{ color: "white" }} />}
                expandIcon={<FaAngleDown className="text-white text-2xl transform duration-700" />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  "& .MuiAccordionSummary-content": {
                    margin: 0,
                    justifyContent: "center",
                    alignItems: "center",
                  },
                }}
              >
                <p className="lg:text-white text-gray-400 font-bold text-[13px] w-[50%]">{section.title}</p>
              </AccordionSummary>
              <AccordionDetails>
               <hr className="border-t border-[#507292] scale-y-[0.45] mt-2" />
                <div className="text-white text-[13px]">{section.content}</div>
              </AccordionDetails>

            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;


