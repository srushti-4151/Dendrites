import React from "react";
import projimage from "../../../assets/Projectphasen_new.webp";
import { Link } from "react-router-dom";

const ProjectRec = () => {
  return (
    <>
      <div className="bg-[#00223E] text-white">
        <div className="max-w-[1410px] w-full mx-auto lg:px-[15px] lg:py-[100px]">
          {/* Header */}
          <div className="text-center py-5 px-1 md:px-2 md:py-5">
            <h2 className="text-center text-white font-bold text-[34px] md:text-3xl lg:text-[40px] lg:py-7 lg:pb-5 uppercase">
              Projects in record time
            </h2>
            <div class="font-normal text-[20px] md:text-[25px] lg:text-[30px] text-center">
              <p>
                Time to market: With ZETA's project management <br />
                <strong>up to 50 % faster to market.</strong>
              </p>
            </div>
          </div>

          {/* Project image */}
          <div className="w-full h-full p-5">
            <img
              src={projimage}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          {/* button  */}
          <div className="w-full h-full mt-[20px] flex justify-center">
            <Link
              to="#"
              className="group btn px-6 py-2 border-2 bg-[#96E8CA] border-[#96E8CA] text-[#00223E] rounded-md hover:bg-transparent hover:text-[#96E8CA] transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.571"
                height="14.387"
                viewBox="0 0 21.571 14.387"
                className="group-hover:fill-[#96E8CA] fill-[#00223e] transition duration-300"
              >
                <path
                  d="M21.632,11.527a.979.979,0,0,0-.007,1.379l4.556,4.563H8.842a.974.974,0,0,0,0,1.948H26.172L21.617,23.98a.986.986,0,0,0,.007,1.379A.97.97,0,0,0,23,25.351l6.174-6.219h0a1.094,1.094,0,0,0,.2-.307.93.93,0,0,0,.075-.375.977.977,0,0,0-.277-.682L23,11.55A.954.954,0,0,0,21.632,11.527Z"
                  transform="translate(-7.875 -11.252)"
                ></path>
              </svg>
              <span>View all Phases!</span>
            </Link>
          </div>

          {/* header-2 */}
          <div
            class="max-w-[800px] w-full mx-auto pt-[140px]"
          >
            <h3 class="pb-5 font-bold text-4xl leading-[1.15] uppercase text-center">Interdisciplinary Project Team</h3>
            <div class="font-light leading-[1.33333333] text-center">
              <p className="lg:text-[30px]">
                Different teams work with you on an
                <span className="text-[#c2e0f4]">
                  {" "}
                  <span className="text-[#80acd3]">
                    <strong className="font-bold tracking-wide">interdisciplinary basis</strong>
                  </span>
                </span>{" "}
                in every phase of the process!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectRec;
