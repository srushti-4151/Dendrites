import React from "react";

const ProductsSignup = () => {
  return (
    <>
      <div className="bg-[rgb(128,172,211)] w-full h-full overflow-hidden">
        <div className="relative block h-full w-full bg-[rgb(128,172,211)] py-[60px] lg:py[80px] 2xl:py-[80px] overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full z-1">
            <svg
              class="kreis-links-responsive"
              xmlns="http://www.w3.org/2000/svg"
              data-width="1440"
              data-height="900"
              width="1440"
              height="900"
              viewBox="0 0 1440 900"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <rect
                data-width="1440"
                data-height="900"
                width="1440"
                height="900"
                fill="#80acd3"
              ></rect>
              <g class="circle" transform="translate(0.386)">
                <path
                  d="M830.82-16.012C819.851-3.54,0,1068.694,0,1527.543c0,362.488,232.143,670.756,556.3,784.4a828.9,828.9,0,0,0,274.521,46.425c458.849,0,830.82-371.971,830.82-830.82S841.789-28.484,830.82-16.012Z"
                  transform="translate(-673.181 -1217.519)"
                  fill="#709eca"
                ></path>
              </g>
            </svg>
          </div>
          <div className="relative z-3 bg-transparent text-center overflow-hidden">
            <div class="text-[15px] md:text-[18px] lg:text-[23px] 2xl:text-[23px] font-medium text-[#00223E] mb-10">
              Products - Quality by design
            </div>
            <h2 class="font-light md:text-[50px] lg:text-[57px] 2xl:text-[57px] text-[30px] lg:px-0 px-4 leading-[1.15789474] tracking-[0.025em] uppercase text-white m-0">
              Sign up
              <br />
              for the
              <strong className="font-bold text-[#96e8ca]"> newsletter!</strong>
            </h2>
            <div className="mt-10 h-full w-full overflow-hidden flex justify-center">
              <form className="text-[#fff] mx-auto w-full px-3 lg:max-w-[515px] 2xl:max-w-[515px] md:max-w-[580px]">
                <div>
                <label className="block text-left text-[#BAD0E5] text-lg font-normal">E-mail*</label>
                <input
                  type="email"
                  className="w-full bg-transparent border border-white rounded p-2 focus:outline-none mb-4"
                  required
                />
                </div>
                <div>
                <label className="block text-left text-[#BAD0E5] text-lg font-normal">Company</label>
                <input
                  type="text"
                  className="w-full bg-transparent border border-white rounded p-2 focus:outline-none mb-4"
                />
                </div>
                <div>
                <label className="block text-left text-[#BAD0E5] text-lg font-normal">First Name*</label>
                <input
                  type="text"
                  className="w-full bg-transparent border border-white rounded p-2 focus:outline-none mb-4"
                  required
                />
                </div>
                <div>
                <label className="block text-left text-[#BAD0E5] text-lg font-normal">Last Name*</label>
                <input
                  type="text"
                  className="w-full bg-transparent border border-white rounded p-2 focus:outline-none mb-4"
                  required
                />
                </div>

                <select
                  className="w-full bg-transparent border border-white rounded p-2 focus:outline-none mb-4"
                  required
                >
                  <option value="" disabled selected>
                    Country*
                  </option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                  <option value="UK">UK</option>
                  <option value="Germany">Germany</option>
                </select>

                <div className="flex items-start gap-3 text-left text-sm mb-8">
                  <input
                    type="checkbox"
                    id="consent"
                    className="w-4 h-4 text-[#96e8ca] focus:outline-none"
                    required
                  />
                  <label htmlFor="consent">
                    We use your data in accordance with our{" "}
                    <a href="#" className="underline text-[#96e8ca]">
                      data protection guidelines
                    </a>
                    . By subscribing to the newsletter, I expressly consent to
                    the processing of my provided data for the purpose of
                    receiving electronic advertisements.
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-fit px-8 text-lg text-center bg-white text-[#103758] font-bold py-2 rounded shadow hover:bg-transparent hover:text-white border hover:border-white transition"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsSignup;
