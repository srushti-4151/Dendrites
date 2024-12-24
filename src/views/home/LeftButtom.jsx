import React from "react";
import brainimg from "../../assets/brain-new.webp";
import pointimg from "../../assets/point1.webp";

const LeftButtom = () => {
  return (
    <div className="bottom-left-div">
      <div className="group border border-[#fff] w-[80px] h-[80px] lg:w-[110px] lg:h-[110px] rounded-full flex justify-center items-center cursor-pointer">
        <div className="bg-[#00223e] group-hover:bg-white duration-1000 w-[60px] h-[60px] lg:w-[90px] lg:h-[90px] rounded-full flex justify-center items-center shadow">
          <div className="relative w-full h-full flex justify-center items-center">
            <img src={brainimg} alt="brain" className="absolute" />
            <img
              src={pointimg}
              alt="point"
              className="absolute -top-4 -right-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftButtom;
