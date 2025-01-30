import React from "react";
import per1 from "../../../assets/per1.webp";
import per2 from "../../../assets/per2.webp";
import per3 from "../../../assets/per3.webp";
import per4 from "../../../assets/per4.webp";
import per5 from "../../../assets/per5.webp";
import per6 from "../../../assets/per6.webp";
import per7 from "../../../assets/per7.webp";
import per8 from "../../../assets/per8.webp";
import per9 from "../../../assets/per9.webp";
import per10 from "../../../assets/per10.webp";
import per11 from "../../../assets/per11.webp";
import per12 from "../../../assets/per12.webp";
import per13 from "../../../assets/per13.webp";
import per14 from "../../../assets/per14.webp";
import per15 from "../../../assets/per15.webp";
import per16 from "../../../assets/per16.webp";
import per17 from "../../../assets/per17.webp";
import per18 from "../../../assets/per18.webp";
import per19 from "../../../assets/per19.webp";
import per20 from "../../../assets/per20.webp";
import { mailicon } from "../../../assets/svg";
import { Link } from "react-router-dom";

const PersonContact = () => {
  const person = [
    {
      image: per1,
      name: "Lars",
      surname: "Malter",
      job: "Corporate Head of Sales",
      function: "",
      email: "lars.malter@dendrites.com",
    },
    {
      image: per2,
      name: "Alexander",
      surname: "Lausecker",
      job: "Head of Sales",
      function: "Eastern Europe, Africa, Japan",
      email: "alexander.lausecker@zeta.com",
    },
    {
      image: per3,
      name: "Steffen",
      surname: "Ostermann",
      job: "Head of Sales",
      function: "Northern Europe",
      email: " steffen.ostermann@zeta.com",
    },
    {
      image: per4,
      name: "Maximilian",
      surname: "van de Graaf",
      job: "Head of Sales",
      function: "Automation",
      email: "maximilian.vandegraaf@zeta.com",
    },
    {
      image: per5,
      name: "Manfred",
      surname: "Seifert",
      job: "Head of Sales",
      function: "Western Europe",
      email: "manfred.seifert@zeta.com",
    },
    {
      image: per6,
      name: "Osman",
      surname: "Ahmad",
      job: "Sales Manager",
      function: "Digital Solutions",
      email: " osman.ahmad@zeta.com",
    },
    {
      image: per7,
      name: "Markus",
      surname: "Siebenhaar",
      job: "Sales Manager",
      function: "Switzerland",
      email: "markus.siebenhaar@zeta.com",
    },
    {
      image: per8,
      name: "Nicole",
      surname: "Zangl",
      job: "Head of Business Development",
      function: "Mixing Technology and Products",
      email: "nicole.zangl@zeta.com",
    },
    {
      image: per9,
      name: "Tobias",
      surname: "Heim",
      job: "Business Development Manager",
      function: "Automation",
      email: "tobias.heim@zeta.com",
    },
    {
      image: per10,
      name: "Christine",
      surname: "Kolland",
      job: "Business Development",
      function: "Spain & Latin America",
      email: "christine.kolland@zeta.com",
    },
    {
      image: per11,
      name: "Alma",
      surname: "Pisapia",
      job: "Business Development",
      function: "Eastern Europe, Africa, Japan",
      email: "lars.malter@dendrites.com",
    },
    {
      image: per12,
      name: "Michael",
      surname: "Ziemann",
      job: "Business Development Manager",
      function: "Automation",
      email: "michael.ziemann@zeta.com",
    },
    {
      image: per13,
      name: "Hans",
      surname: "Eder",
      job: "Associate Director Business Line",
      function: "Sustainable Energy Solutions",
      email: "hans.eder@zeta.com",
    },
    {
      image: per14,
      name: "Sushaant",
      surname: "Bakhru",
      job: "CEO Dendrits Singapore",
      function: "",
      email: "sushaant.bakhru@zeta.com",
    },
    {
      image: per15,
      name: "Lindsay",
      surname: "Smart",
      job: "CEO Dendrits USA",
      function: "",
      email: "lindsay.smart@zeta.com",
    },
    {
      image: per16,
      name: "Viktor",
      surname: "Charkov",
      job: "CEO Dendrits Ukraine",
      function: "",
      email: "viktor.charkov@zeta.com",
    },
    {
      image: per17,
      name: "Dr. Anil Paul",
      surname: "Kariath",
      job: "CEO",
      function: "Biosystem",
      email: " info@zetabiosystem.com",
    },
    {
      image: per18,
      name: "Nadezhda",
      surname: "Brezhneva",
      job: "Assistant to CIS Regional Manager",
      function: "",
      email: "nadezhda.brezhneva@zeta.com",
    },
    {
      image: per19,
      name: "Claudia",
      surname: "Neuhold",
      job: "Managing Director ERIDIA",
      function: "",
      email: "claudia.neuhold@eridiabio.com",
    },
    {
      image: per20,
      name: "Jochen",
      surname: "Hasselbach",
      job: "Managing Director",
      function: "SIGMA Process & Automation - Member of ZETA Group",
      email: "j.hasselbach@sigma-pa.de",
    },
  ];

  return (
    <>
      <div className="bg-[#00223E] overflow-hidden">
        <div className="lg:max-w-[1400px] 2xl:max-w-[1400px] w-full mx-0 overflow-hidden lg:mx-auto 2xl:mx-auto max-w-full h-full lg:py-24 2xl:py-24 py-16 lg:px-5 2xl:px-5 px-4 bg-[#00223E]">
          <h1 className="text-shadow-glow text-white font-light lg:text-4xl 2xl:text-4xl md:text-4xl text-2xl leading-[1.15] tracking-[0.025em] text-center uppercase m-0">
            WE ARE <br />
            <strong className="font-bold">THERE FOR YOU AT ANY TIME</strong>
          </h1>
          <div className="font-normal text-white lg:text-[30px] md:text-[24px] text-[18px] leading-[1.333] mt-[35px] text-center">
            Contact persons in{" "}
            <strong className="font-bold text-[#80acd3]">
              Sales und Business Development
            </strong>
          </div>

          <div className="md:hidden block 2xl:block max-w-[1210px] w-full mt-[50px] mx-auto">
            <div class="w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-6 bg-transparent">
              {person.map((data, index) => (
                <div
                  key={index}
                  className="lg:flex inline-block w-full bg-[#022e55] p-7 rounded-lg shadow-lg"
                >
                  {/* Image Section */}
                  <div className="flex justify-center sm:w-full lg:w-auto">
                    <div className="flex items-center justify-center w-[180px] h-[180px] rounded-full border border-white flex-shrink-0 overflow-hidden">
                      <div className="flex items-center justify-center w-[157px] h-[157px] rounded-full border border-white flex-shrink-0 overflow-hidden">
                        <img
                          src={data.image}
                          alt={data.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="lg:pl-10 pl-0 lg:pt-0 pt-5">
                    <h3 className="lg:text-3xl text-[18px] font-bold text-white lg:block inline-block">
                      {data.name}
                    </h3>
                    <h3 className="lg:text-3xl text-[18px] font-bold text-white lg:block inline-block lg:ml-0 ml-2">
                      {data.surname}
                    </h3>
                    <div className="mt-1 lg:h-[70px] pb-5">
                      <div className="text-[13px] text-white pb-1">
                        {data.job}
                      </div>
                      <div className="text-[#80acd3] text-[13px]">
                        {data.function}
                      </div>
                    </div>
                    <Link
                      to="#"
                      className="flex items-center gap-2 text-[#80acd3] mt-2"
                    >
                      <div>{mailicon}</div>
                      <div className="lg:text-[16px] text-[13px]">
                        {data.email}
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:block hidden 2xl:hidden max-w-[1210px] w-full mt-[50px] mx-auto">
            <div class="w-full hidden md:grid md:grid-cols-1 gap-6 bg-transparent">
              {person.map((data, index) => (
                <div
                  key={index}
                  className="flex w-full bg-[#022e55] p-7 rounded-lg shadow-lg"
                >
                  <div className="flex justify-center w-auto">
                    <div className="flex items-center justify-center w-[180px] h-[180px] rounded-full border border-white flex-shrink-0 overflow-hidden">
                      <div className="flex items-center justify-center w-[157px] h-[157px] rounded-full border border-white flex-shrink-0 overflow-hidden">
                        <img
                          src={data.image}
                          alt={data.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pl-10 pt-0">
                    <h3 className="text-2xl font-bold text-white block">
                      {data.name}
                    </h3>
                    <h3 className="text-2xl font-bold text-white block ml-0">
                      {data.surname}
                    </h3>
                    <div className="mt-1 h-[70px] pb-5">
                      <div className="text-[13px] text-white pb-1">
                        {data.job}
                      </div>
                      <div className="text-[#80acd3] text-[13px]">
                        {data.function}
                      </div>
                    </div>
                    <Link
                      to="#"
                      className="flex items-start gap-2 text-[#80acd3] mt-2 h-[80px]"
                    >
                      <div>{mailicon}</div>
                      <div className="text-[16px]">{data.email}</div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonContact;
