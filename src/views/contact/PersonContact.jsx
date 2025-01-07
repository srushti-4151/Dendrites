import React from "react";
import per1 from "../../assets/per1.webp";
import per2 from "../../assets/per2.webp";
import per3 from "../../assets/per3.webp";
import per4 from "../../assets/per4.webp";
import { mailicon } from "../../assets/svg";
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
      email: "lars.malter@dendrites.com",
    },
    {
      image: per3,
      name: "Lars",
      surname: "Malter",
      job: "Corporate Head of Sales",
      function: "Eastern Europe, Africa, Japan",
      email: "lars.malter@dendrites.com",
    },
    {
      image: per4,
      name: "Lars",
      surname: "Malter",
      job: "Corporate Head of Sales",
      function: "Eastern Europe, Africa, Japan",
      email: "lars.malter@dendrites.com",
    },
    {
      image: per1,
      name: "Lars",
      surname: "Malter",
      job: "Corporate Head of Sales",
      function: "Eastern Europe, Africa, Japan",
      email: "lars.malter@dendrites.com",
    },
    {
      image: per2,
      name: "Lars",
      surname: "Malter",
      job: "Corporate Head of Sales",
      function: "Eastern Europe, Africa, Japan",
      email: "lars.malter@dendrites.com",
    },
    {
      image: per3,
      name: "Lars",
      surname: "Malter",
      job: "Corporate Head of Sales",
      function: "Eastern Europe, Africa, Japan",
      email: "lars.malter@dendrites.com",
    },
    {
      image: per4,
      name: "Lars",
      surname: "Malter",
      job: "Corporate Head of Sales",
      function: "Eastern Europe, Africa, Japan",
      email: "lars.malter@dendrites.com",
    },
    {
      image: per1,
      name: "Lars",
      surname: "Malter",
      job: "Corporate Head of Sales",
      function: "Eastern Europe, Africa, Japan",
      email: "lars.malter@dendrites.com",
    },
    {
      image: per2,
      name: "Lars",
      surname: "Malter",
      job: "Corporate Head of Sales",
      function: "Eastern Europe, Africa, Japan",
      email: "lars.malter@dendrites.com",
    },
    {
      image: per3,
      name: "Lars",
      surname: "Malter",
      job: "Corporate Head of Sales",
      function: "Eastern Europe, Africa, Japan",
      email: "lars.malter@dendrites.com",
    },
    {
      image: per4,
      name: "Lars",
      surname: "Malter",
      job: "Corporate Head of Sales",
      function: "Eastern Europe, Africa, Japan",
      email: "lars.malter@dendrites.com",
    },
    {
      image: per1,
      name: "Lars",
      surname: "Malter",
      job: "Corporate Head of Sales",
      function: "Eastern Europe, Africa, Japan",
      email: "lars.malter@dendrites.com",
    },
    {
      image: per2,
      name: "Lars",
      surname: "Malter",
      job: "Corporate Head of Sales",
      function: "Eastern Europe, Africa, Japan",
      email: "lars.malter@dendrites.com",
    },
    {
      image: per3,
      name: "Lars",
      surname: "Malter",
      job: "Corporate Head of Sales",
      function: "Eastern Europe, Africa, Japan",
      email: "lars.malter@dendrites.com",
    },
    {
      image: per4,
      name: "Lars",
      surname: "Malter",
      job: "Corporate Head of Sales",
      function: "Eastern Europe, Africa, Japan",
      email: "lars.malter@dendrites.com",
    },
    {
      image: per1,
      name: "Lars",
      surname: "Malter",
      job: "Corporate Head of Sales",
      function: "Eastern Europe, Africa, Japan",
      email: "lars.malter@dendrites.com",
    },
    {
      image: per2,
      name: "Lars",
      surname: "Malter",
      job: "Corporate Head of Sales",
      function: "Eastern Europe, Africa, Japan",
      email: "lars.malter@dendrites.com",
    },
    {
      image: per3,
      name: "Lars",
      surname: "Malter",
      job: "Corporate Head of Sales",
      function: "Eastern Europe, Africa, Japan",
      email: "lars.malter@dendrites.com",
    },
    {
      image: per4,
      name: "Lars",
      surname: "Malter",
      job: "Corporate Head of Sales",
      function: "Eastern Europe, Africa, Japan",
      email: "lars.malter@dendrites.com",
    },
  ];

  return (
    <>
      <div className="bg-[#00223E]">
        <div className="lg:max-w-[1400px] 2xl:max-w-[1400px] w-full mx-0 overflow-hidden lg:mx-auto 2xl:mx-auto max-w-full h-full lg:py-24 2xl:py-24 py-16 lg:px-5 2xl:px-5 px-4 bg-[#00223E]">
          <h1 className="text-shadow-glow text-white font-light lg:text-4xl 2xl:text-4xl text-2xl leading-[1.15] tracking-[0.025em] text-center uppercase m-0">
            WE ARE <br />
            <strong className="font-bold">THERE FOR YOU AT ANY TIME</strong>
          </h1>
          <div className="font-normal text-white text-[30px] leading-[1.333] mt-[35px] text-center">
            Contact persons in{" "}
            <strong className="font-bold text-[#80acd3]">
              Sales und Business Development
            </strong>
          </div>

          <div className="max-w-[1210px] w-full mt-[50px] mx-auto">
            <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 bg-transparent">
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
        </div>
      </div>
    </>
  );
};

export default PersonContact;
