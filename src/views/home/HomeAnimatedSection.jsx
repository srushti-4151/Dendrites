import React, { useEffect, useState } from "react";
import { dropSVG, homeBackgroundSVG, zahnradSVG } from "../../assets/svg";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import MobileHomeAnimation from "./MobileHomeAnimation";
import dotanimation from "../../assets/dotanimation2.png";
import bottomanimation from "../../assets/bottonanimation.png"

// const useCountUp = (end, duration) => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     let start = 0;
//     const increment = end / (duration * 1000 / 10); // Adjust speed (10ms interval)
//     const timer = setInterval(() => {
//       start += increment;
//       if (start >= end) {
//         clearInterval(timer);
//         setCount(end);
//       } else {
//         setCount(Math.ceil(start));
//       }
//     }, 10);
//     return () => clearInterval(timer);
//   }, [end, duration]);

//   return count;
// };

const HomeAnimatedSection = () => {
  // const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.5 }); // Detect visibility
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.5 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.5 });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.5 });
  const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.5 });
  const { ref: ref5, inView: inView5 } = useInView({ threshold: 0.5 });
  const { ref: ref6, inView: inView6 } = useInView({ threshold: 0.5 });
  const { ref: ref7, inView: inView7 } = useInView({ threshold: 0.5 });
  const { ref: ref8, inView: inView8 } = useInView({ threshold: 0.5 });
  const { ref: ref9, inView: inView9 } = useInView({ threshold: 0.5 });

  // const customers = useCountUp(980, 0.9); // Count to 980 in 2 seconds
  // const employees = useCountUp(1400, 2.5); // Count to 1400 in 2.5 seconds

  useEffect(() => {
    const rsceSolutionPathMove = () => {
      const pathColor = document.querySelector(
        "#solution-bg #motionPathColored"
      );
      const svg = document.querySelector("#solution-bg");
      const animationElement = document.querySelector(
        ".waypoint-box .scroll-wave"
      );

      if (!animationElement) return;

      const _from =
        animationElement.getBoundingClientRect().top + window.scrollY;
      const _to = _from + animationElement.offsetHeight;
      const scrollPos = window.scrollY + window.innerHeight * 0.85;

      const path = document.querySelector("#solution-bg .main-path");
      if (!path) return;

      const pathLen = path.getTotalLength();

      // Mobile and desktop path handling
      const motionPath = document.querySelector("#solution-bg #motionPath");
      if (window.innerWidth <= 1024) {
        if (!motionPath.classList.contains("is_mobile")) {
          const mobilePath = motionPath.getAttribute("d-mobile");
          motionPath.setAttribute("d", mobilePath);
          pathColor.setAttribute("d", mobilePath);
          motionPath.classList.add("is_mobile");
        }
      } else {
        if (
          motionPath.classList.contains("is_mobile") ||
          !motionPath.getAttribute("d")
        ) {
          const desktopPath = motionPath.getAttribute("d-desktop");
          motionPath.setAttribute("d", desktopPath);
          pathColor.setAttribute("d", desktopPath);
          motionPath.classList.remove("is_mobile");
        }
      }

      // Calculate scroll percentage
      let scrollPercentage = (scrollPos - _from) / (_to - _from);
      scrollPercentage = Math.min(1, Math.max(0, scrollPercentage));
      scrollPercentage = 1 - scrollPercentage;

      // Animate path and cursor
      if (svg?.setCurrentTime) {
        //   svg.pauseAnimations();
        //   svg.setCurrentTime(Math.min(9.999, scrollPercentage * 10));
        // } else {
        const cursor = document.querySelector("#actioncursor");
        const pt = path.getPointAtLength(scrollPercentage * pathLen);
        const ptNext = path.getPointAtLength(scrollPercentage * pathLen + 0.01);
        const angleDeg =
          (Math.atan2(pt.y - ptNext.y, pt.x - ptNext.x) * 180) / Math.PI - 180;
        if (cursor) {
          cursor.style.left = `${pt.x}px`;
          cursor.style.top = `${pt.y}px`;
          // cursor.style.transform = `translate(${pt.x}px, ${pt.y}px) rotate(${(angleDeg == -180) ? -180 : angleDeg}deg)`;
          cursor.style.transform = `translate(${pt.x}px, ${pt.y}px) rotate(${
            angleDeg == -180 ? -90 : angleDeg
          }deg)`;
        }
      } else {
      }

      // Update path stroke
      pathColor.setAttribute("data-length", pathLen);
      pathColor.style.strokeDasharray = pathLen;
      pathColor.style.strokeDashoffset = `${pathLen * (1 - scrollPercentage)}`;
    };

    const rsceSolutionnumboxsToggle = () => {
      const svg = document.getElementById("solution-bg");
      if (!svg) return;

      const isFirefox = navigator.userAgent.toLowerCase().includes("firefox");
      const cursor =
        isFirefox ||
        !("setCurrentTime" in svg && typeof svg.setCurrentTime === "function")
          ? document.getElementById("actioncursor2")
          : document.getElementById("actioncursor");

      if (!cursor) return;

      const numboxs = svg.querySelectorAll(".point");

      numboxs.forEach((svgPoint) => {
        // const pointNo = Array.from(svgPoint.classList).find((cls) => cls.match(/\d+/));
        const tempPointNo = Array.from(svgPoint.classList).find((cls) =>
          cls.match(/\d+/)
        );
        const pointNo = tempPointNo.replace("point", "");

        if (!pointNo) return;

        const point = document.querySelector(
          `.waypoint-box .numboxs .point[data-point='${pointNo}']`
        );
        const counter = document.querySelector(
          `.waypoint-box .numdash .cnumdash[data-point='${pointNo}']`
        );

        if (!point || !counter) return;

        const cursorRect = cursor.getBoundingClientRect();
        const svgPointRect = svgPoint.getBoundingClientRect();

        if (cursorRect.top > svgPointRect.top) {
          point.classList.add("visible");
          counter.classList.add("visible");
        } else {
          point.classList.remove("visible");
          counter.classList.remove("visible");
        }
      });
    };

    const positionSolutionnumboxs = () => {
      const svg = document.querySelector("#solution-bg");
      const numboxs = document.querySelectorAll(
        ".waypoint-box .numboxs .point"
      );

      numboxs.forEach((point) => {
        const pointNo = point.getAttribute("data-point");
        const svgPoint = svg.querySelector(`.point${pointNo}`);
        const counterItem = document.querySelector(
          `.waypoint-box .numdash .point${pointNo}`
        );

        if (svgPoint) {
          const svgRect = svg.getBoundingClientRect();
          const rect = svgPoint.getBoundingClientRect();

          const topValue = rect.top - svgRect.top + rect.height / 2;
          const leftValue = rect.left - svgRect.left + rect.width;

          if (point.classList.contains("position_right")) {
            point.style.top = `${topValue}px`;
            point.style.left = `${leftValue + point.offsetWidth + 20}px`;
          } else {
            point.style.top = `${topValue}px`;
            point.style.left = `${leftValue}px`;
          }

          if (counterItem) {
            if (counterItem.classList.contains("position_right")) {
              counterItem.style.top = `${topValue}px`;
              counterItem.style.left = `${leftValue + point.offsetWidth}px`;
            } else {
              counterItem.style.top = `${topValue}px`;
              counterItem.style.left = `${leftValue}px`;
            }
          }
        }
      });
    };

    // Attach listeners
    document.addEventListener("scroll", rsceSolutionPathMove);
    window.addEventListener("resize", rsceSolutionPathMove);
    document.addEventListener("scroll", rsceSolutionnumboxsToggle);
    window.addEventListener("resize", positionSolutionnumboxs);

    // Initial calls
    rsceSolutionPathMove();
    rsceSolutionnumboxsToggle();
    positionSolutionnumboxs();

    // Cleanup on component unmount
    return () => {
      document.removeEventListener("scroll", rsceSolutionPathMove);
      window.removeEventListener("resize", rsceSolutionPathMove);
      document.removeEventListener("scroll", rsceSolutionnumboxsToggle);
      window.removeEventListener("resize", positionSolutionnumboxs);
    };
  }, []);

  return (
    <div className="">
      <div
        className="waypoint-box meta_waypoint-box lg:block hidden overflow-hidden"
        id="solutionpath"
      >
        <div className="corezone">
          <div className="roofdock">
            <h2 className="metatext">
              <strong>DENDRITES Solution Path</strong>
            </h2>
            <div className="basemeta-text">
              We have developed <strong> a unique solution </strong> for
              implementing your project efficiently and successfully!
            </div>
          </div>
          <div className="scroll-wave">
            <div className="background">
              <svg
                version="1.1"
                id="solution-bg"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 480 2898.1"
                width={480}
                height="2898.1"
                style={{ enableBackground: "new 0 0 480 2898.1" }}
                xmlSpace="preserve"
              >
                <path
                  id="motionPath"
                  className="main-path"
                  style={{
                    fill: "none",
                    stroke: "#80ACD3",
                    strokeMiterlimit: 10,
                  }}
                  d-desktop="M252,2898.1c0-222.6,121-210.3,121-432.9l0,0c0-405.8-349-401.4-349-807.1s455.5-405.8,455.5-811.5
S24,440.7,24,34.9"
                  d-mobile="M 0,2898.1 L0,24"
                  d="M252,2898.1c0-222.6,121-210.3,121-432.9l0,0c0-405.8-349-401.4-349-807.1s455.5-405.8,455.5-811.5
S24,440.7,24,34.9"
                />
                <path
                  id="motionPathColored"
                  style={{
                    fill: "none",
                    stroke: "rgb(255, 255, 255)",
                    strokeMiterlimit: 10,
                    strokeDasharray: "3292.85px",
                    strokeDashoffset: "96.3378px",
                  }}
                  d-desktop="M252,2898.1c0-222.6,121-210.3,121-432.9l0,0c0-405.8-349-401.4-349-807.1s455.5-405.8,455.5-811.5
S24,440.7,24,34.9"
                  d-mobile="M 0,2898.1 L0,24"
                  d="M252,2898.1c0-222.6,121-210.3,121-432.9l0,0c0-405.8-349-401.4-349-807.1s455.5-405.8,455.5-811.5
S24,440.7,24,34.9"
                  data-length="3292.853759765625"
                />
                <g
                  className="point point1"
                  transform="translate(1499.5 6338) rotate(180)"
                >
                  <g transform="translate(857.571 3725.071)">
                    <path
                      style={{ fill: "#80ACD3" }}
                      d="M617.9,2558.9c-5.5,0-10-4.5-10-10s4.5-10,10-10s10,4.5,10,10S623.4,2558.9,617.9,2558.9z"
                    ></path>
                    <path
                      style={{ fill: "#002A4D" }}
                      d="M617.9,2542.5c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5c3.6,0,6.5-2.9,6.5-6.5S621.4,2542.5,617.9,2542.5
M617.9,2535.5c7.4,0,13.5,6,13.5,13.5s-6,13.5-13.5,13.5s-13.5-6-13.5-13.5S610.4,2535.5,617.9,2535.5z"
                    />
                  </g>
                  <g transform="translate(849.5 3717)">
                    <circle
                      style={{ fill: "none" }}
                      cx="625.9"
                      cy={2557}
                      r="14.5"
                    />
                    <circle
                      style={{ fill: "none", stroke: "#80ACD3" }}
                      cx="625.9"
                      cy={2557}
                      r={14}
                    />
                  </g>
                </g>
                <g
                  className="point point2"
                  transform="translate(1499.5 6312) rotate(180)"
                >
                  <g transform="translate(857.571 3725.071)">
                    <path
                      style={{ fill: "#80ACD3" }}
                      d="M474.5,2235c-5.5,0-10-4.5-10-10s4.5-10,10-10s10,4.5,10,10S480,2235,474.5,2235z"
                    ></path>
                    <path
                      style={{ fill: "#002A4D" }}
                      d="M474.5,2218.6c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5s6.5-2.9,6.5-6.5S478,2218.6,474.5,2218.6
M474.5,2211.6c7.4,0,13.5,6,13.5,13.5s-6,13.5-13.5,13.5s-13.5-6-13.5-13.5S467,2211.6,474.5,2211.6z"
                    />
                  </g>
                  <g transform="translate(849.5 3717)">
                    <circle
                      style={{ fill: "none" }}
                      cx="482.5"
                      cy="2233.1"
                      r="14.5"
                    />
                    <circle
                      style={{ fill: "none", stroke: "#80ACD3" }}
                      cx="482.5"
                      cy="2233.1"
                      r={14}
                    />
                  </g>
                </g>
                <g className="point point3" transform="translate(82 564)">
                  <g transform="translate(-140 -1555)">
                    <g transform="translate(857.571 3725.071)">
                      <path
                        style={{ fill: "#80ACD3" }}
                        d="M-461.5-2201.7c-5.8,0-10.5-4.7-10.5-10.5s4.7-10.5,10.5-10.5s10.5,4.7,10.5,10.5
S-455.8-2201.7-461.5-2201.7z"
                      />
                      <path
                        style={{ fill: "#002A4D" }}
                        d="M-461.5-2218.6c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5s6.5-2.9,6.5-6.5S-458-2218.6-461.5-2218.6
M-461.5-2226.6c8,0,14.5,6.5,14.5,14.5s-6.5,14.5-14.5,14.5s-14.5-6.5-14.5-14.5S-469.5-2226.6-461.5-2226.6z"
                      />
                    </g>
                    <g transform="translate(849.5 3717)">
                      <circle
                        style={{ fill: "none" }}
                        cx="-453.5"
                        cy="-2204.1"
                        r="14.5"
                      ></circle>
                      <circle
                        style={{ fill: "none", stroke: "#80ACD3" }}
                        cx="-453.5"
                        cy="-2204.1"
                        r={14}
                      />
                    </g>
                  </g>
                </g>
                <g
                  className="point point4"
                  transform="translate(1790.5 6932) rotate(180)"
                >
                  <g transform="translate(857.571 3725.071)">
                    <path
                      style={{ fill: "#80ACD3" }}
                      d="M474.5,2235c-5.5,0-10-4.5-10-10s4.5-10,10-10s10,4.5,10,10S480,2235,474.5,2235z"
                    ></path>
                    <path
                      style={{ fill: "#002A4D" }}
                      d="M474.5,2218.6c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5s6.5-2.9,6.5-6.5S478,2218.6,474.5,2218.6
M474.5,2211.6c7.4,0,13.5,6,13.5,13.5s-6,13.5-13.5,13.5s-13.5-6-13.5-13.5S467,2211.6,474.5,2211.6z"
                    />
                  </g>
                  <g transform="translate(849.5 3717)">
                    <circle
                      style={{ fill: "none" }}
                      cx="482.5"
                      cy="2233.1"
                      r="14.5"
                    />
                    <circle
                      style={{ fill: "none", stroke: "#80ACD3" }}
                      cx="482.5"
                      cy="2233.1"
                      r={14}
                    />
                  </g>
                </g>
                <g className="point point5" transform="translate(-38 1324)">
                  <g transform="translate(-140 -1555)">
                    <g transform="translate(857.571 3725.071)">
                      <path
                        style={{ fill: "#80ACD3" }}
                        d="M-461.5-2201.7c-5.8,0-10.5-4.7-10.5-10.5s4.7-10.5,10.5-10.5s10.5,4.7,10.5,10.5
S-455.8-2201.7-461.5-2201.7z"
                      />
                      <path
                        style={{ fill: "#002A4D" }}
                        d="M-461.5-2218.6c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5s6.5-2.9,6.5-6.5S-458-2218.6-461.5-2218.6
M-461.5-2226.6c8,0,14.5,6.5,14.5,14.5s-6.5,14.5-14.5,14.5s-14.5-6.5-14.5-14.5S-469.5-2226.6-461.5-2226.6z"
                      />
                    </g>
                    <g transform="translate(849.5 3717)">
                      <circle
                        style={{ fill: "none" }}
                        cx="-453.5"
                        cy="-2204.1"
                        r="14.5"
                      ></circle>
                      <circle
                        style={{ fill: "none", stroke: "#80ACD3" }}
                        cx="-453.5"
                        cy="-2204.1"
                        r={14}
                      />
                    </g>
                  </g>
                </g>
                <g className="point point6" transform="translate(-232.5 1706)">
                  <g transform="translate(-140 -1555)">
                    <g transform="translate(857.571 3725.071)">
                      <path
                        style={{ fill: "#80ACD3" }}
                        d="M-461.5-2201.7c-5.8,0-10.5-4.7-10.5-10.5s4.7-10.5,10.5-10.5s10.5,4.7,10.5,10.5
S-455.8-2201.7-461.5-2201.7z"
                      />
                      <path
                        style={{ fill: "#002A4D" }}
                        d="M-461.5-2218.6c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5s6.5-2.9,6.5-6.5S-458-2218.6-461.5-2218.6
M-461.5-2226.6c8,0,14.5,6.5,14.5,14.5s-6.5,14.5-14.5,14.5s-14.5-6.5-14.5-14.5S-469.5-2226.6-461.5-2226.6z"
                      />
                    </g>
                    <g transform="translate(849.5 3717)">
                      <circle
                        style={{ fill: "none" }}
                        cx="-453.5"
                        cy="-2204.1"
                        r="14.5"
                      ></circle>
                      <circle
                        style={{ fill: "none", stroke: "#80ACD3" }}
                        cx="-453.5"
                        cy="-2204.1"
                        r={14}
                      />
                    </g>
                  </g>
                </g>
                <g
                  className="point point7"
                  transform="translate(1497.834 7973.382) rotate(180)"
                >
                  <g transform="translate(857.571 3725.071)">
                    <path
                      style={{ fill: "#80ACD3" }}
                      d="M474.5,2235c-5.5,0-10-4.5-10-10s4.5-10,10-10s10,4.5,10,10S480,2235,474.5,2235z"
                    ></path>
                    <path
                      style={{ fill: "#002A4D" }}
                      d="M474.5,2218.6c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5s6.5-2.9,6.5-6.5S478,2218.6,474.5,2218.6
M474.5,2211.6c7.4,0,13.5,6,13.5,13.5s-6,13.5-13.5,13.5s-13.5-6-13.5-13.5S467,2211.6,474.5,2211.6z"
                    />
                  </g>
                  <g transform="translate(849.5 3717)">
                    <circle
                      style={{ fill: "none" }}
                      cx="482.5"
                      cy="2233.1"
                      r="14.5"
                    />
                    <circle
                      style={{ fill: "none", stroke: "#80ACD3" }}
                      cx="482.5"
                      cy="2233.1"
                      r={14}
                    />
                  </g>
                </g>
                <g className="point point8" transform="translate(82 2304)">
                  <g transform="translate(-140 -1555)">
                    <g transform="translate(857.571 3725.071)">
                      <path
                        style={{ fill: "#80ACD3" }}
                        d="M-461.5-2201.7c-5.8,0-10.5-4.7-10.5-10.5s4.7-10.5,10.5-10.5s10.5,4.7,10.5,10.5
S-455.8-2201.7-461.5-2201.7z"
                      />
                      <path
                        style={{ fill: "#002A4D" }}
                        d="M-461.5-2218.6c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5s6.5-2.9,6.5-6.5S-458-2218.6-461.5-2218.6
M-461.5-2226.6c8,0,14.5,6.5,14.5,14.5s-6.5,14.5-14.5,14.5s-14.5-6.5-14.5-14.5S-469.5-2226.6-461.5-2226.6z"
                      />
                    </g>
                    <g transform="translate(849.5 3717)">
                      <circle
                        style={{ fill: "none" }}
                        cx="-453.5"
                        cy="-2204.1"
                        r="14.5"
                      ></circle>
                      <circle
                        style={{ fill: "none", stroke: "#80ACD3" }}
                        cx="-453.5"
                        cy="-2204.1"
                        r={14}
                      />
                    </g>
                  </g>
                </g>
                <g
                  className="point point9"
                  transform="translate(1688.836 8539) rotate(180)"
                >
                  <g transform="translate(857.571 3725.071)">
                    <path
                      style={{ fill: "#80ACD3" }}
                      d="M474.5,2235c-5.5,0-10-4.5-10-10s4.5-10,10-10s10,4.5,10,10S480,2235,474.5,2235z"
                    ></path>
                    <path
                      style={{ fill: "#002A4D" }}
                      d="M474.5,2218.6c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5s6.5-2.9,6.5-6.5S478,2218.6,474.5,2218.6
M474.5,2211.6c7.4,0,13.5,6,13.5,13.5s-6,13.5-13.5,13.5s-13.5-6-13.5-13.5S467,2211.6,474.5,2211.6z"
                    />
                  </g>
                  <g transform="translate(849.5 3717)">
                    <circle
                      style={{ fill: "none" }}
                      cx="482.5"
                      cy="2233.1"
                      r="14.5"
                    />
                    <circle
                      style={{ fill: "none", stroke: "#80ACD3" }}
                      cx="482.5"
                      cy="2233.1"
                      r={14}
                    />
                  </g>
                </g>
                {/* <g id="actioncursor">
                  <g>
                    <path
                      style={{ fill: "#80ACD3" }}
                      d="M24,57.8c-2.7,0-5.3-0.5-7.8-1.6c-2.4-1-4.5-2.5-6.4-4.3c-1.8-1.8-3.3-4-4.3-6.4c-1-2.5-1.6-5.1-1.6-7.8
c0-2.6,0.9-5.9,2.8-10c1.4-3,3.3-6.5,5.7-10.3c2.3-3.8,4.5-6.9,5.6-8.4c0.7-1,1.4-1.9,2-2.6c0.3-0.3,0.5-0.6,0.7-0.8
C21.1,5.2,22.2,4,24,4c1.2,0,2.2,0.5,3,1.4c0.4,0.4,4.5,5.9,8.5,12.2c2.4,3.8,4.3,7.2,5.7,10.2c1.9,4.1,2.8,7.4,2.8,10
c0,2.7-0.5,5.3-1.6,7.8c-1,2.4-2.5,4.5-4.3,6.4c-1.8,1.8-4,3.3-6.4,4.3C29.3,57.2,26.7,57.8,24,57.8z"
                    />
                    <path
                      style={{ fill: "#022E55" }}
                      d="M24,8C23.6,8,8,29,8,37.8s7.2,16,16,16s16-7.2,16-16C40,28.9,24.2,8.2,24,8L24,8 M24,0L24,0
c2.3,0,4.4,1,6,2.7l0,0c0.2,0.2,18,22.7,18,35.1c0,13.2-10.8,24-24,24S0,51,0,37.8C0,30.2,14.8,0,24,0z"
                    />
                  </g>
                </g> */}
                 <g id="actioncursor">
                    <g>
                      <image
                        href={dotanimation}
                        x="-48"
                        y="-58"
                        width="150"
                        height="150"
                      />                 
                    </g>
                  </g>
              </svg>
              <div id="actioncursor2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48.029"
                  height="61.77"
                  viewBox="0 0 48.029 61.77"
                >
                  <g transform="translate(8 24.117)" fill="#80acd3">
                    <path
                      d="M 16.01468849182129 33.65241622924805 C 13.31448841094971 33.65241622924805 10.69292831420898 33.12267684936523 8.222838401794434 32.07791519165039 C 5.839028358459473 31.06965637207031 3.698988437652588 29.6270751953125 1.862168550491333 27.79024505615234 C 0.02533849142491817 25.95342636108398 -1.417241454124451 23.81338500976563 -2.425501585006714 21.42957496643066 C -3.470261573791504 18.95948600769043 -4.000001430511475 16.33792495727539 -4.000001430511475 13.63772583007813 C -4.000001430511475 11.00896549224854 -3.080021619796753 7.728405952453613 -1.187501549720764 3.608575820922852 C 0.199148491024971 0.5899858474731445 2.1014084815979 -2.863094091415405 4.466448307037354 -6.654754161834717 C 6.811748504638672 -10.41476440429688 9.004758834838867 -13.52695369720459 10.10324859619141 -15.04743385314941 C 10.84473896026611 -16.07378387451172 11.52363872528076 -16.98129463195801 12.06653881072998 -17.67185401916504 C 12.34110832214355 -18.02110481262207 12.56472873687744 -18.29436492919922 12.750168800354 -18.50725364685059 C 13.09708881378174 -18.9055233001709 14.15280818939209 -20.11750411987305 16.00961875915527 -20.11750411987305 C 17.16134834289551 -20.11750411987305 18.25798797607422 -19.62164497375488 19.01834869384766 -18.75706481933594 C 19.40347862243652 -18.31917381286621 23.53097915649414 -12.86457443237305 27.48409843444824 -6.600144386291504 C 29.8779182434082 -2.806704044342041 31.7950382232666 0.6255158185958862 33.18222808837891 3.601165771484375 C 35.09806823730469 7.710835933685303 36.02937698364258 10.99382591247559 36.02937698364258 13.63772583007813 C 36.02937698364258 16.33792495727539 35.49963760375977 18.95948600769043 34.45487976074219 21.42957496643066 C 33.44661712646484 23.81338500976563 32.0040397644043 25.95342636108398 30.16720771789551 27.79024505615234 C 28.33038902282715 29.6270751953125 26.19034767150879 31.06965637207031 23.80653762817383 32.07791519165039 C 21.33644866943359 33.12267684936523 18.71488761901855 33.65241622924805 16.01468849182129 33.65241622924805 Z"
                      stroke="none"
                    />
                    <path
                      d="M 16.00962257385254 -16.11750793457031 C 15.62439918518066 -16.11750793457031 3.814697265625e-06 4.84327220916748 3.814697265625e-06 13.63772487640381 C 3.814697265625e-06 22.48239517211914 7.170017242431641 29.65241050720215 16.01468849182129 29.65241050720215 C 24.85935974121094 29.65241050720215 32.02937316894531 22.48239517211914 32.02937316894531 13.63772487640381 C 32.02937316894531 4.793067932128906 16.22611618041992 -15.87507438659668 16.01468849182129 -16.11547470092773 C 16.01348876953125 -16.11684036254883 16.01182174682617 -16.11750793457031 16.00962257385254 -16.11750793457031 M 16.00961685180664 -24.11750221252441 L 19.59101676940918 -24.11750221252441 L 21.97655868530273 -21.44626045227051 C 22.15708923339844 -21.24410438537598 40.02937316894531 1.283638954162598 40.02937316894531 13.63772487640381 C 40.02937316894531 26.87946701049805 29.25643157958984 37.65241241455078 16.01468849182129 37.65241241455078 C 2.772945404052734 37.65241241455078 -7.999996185302734 26.87946701049805 -7.999996185302734 13.63772487640381 C -7.999996185302734 6.900125026702881 6.80360221862793 -24.11750221252441 16.00961685180664 -24.11750221252441 Z"
                      stroke="none"
                      fill="#022e55"
                    />
                  </g>
                </svg>
              </div>
            </div>
            
            <div className="numboxs">
              <Link
                to=""
                className="point position_right point1 positioned visible"
                data-point={1}
                style={{ top: "63.9998px", left: "438.6px" }}
              >
                <span className="image_container">
                  <figure>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25.473"
                      height="34.645"
                      viewBox="0 0 25.473 34.645"
                    >
                      <path
                        d="M-110.779,34.837l-.749.04a2.811,2.811,0,0,0-2.807-2.659h0a2.879,2.879,0,0,0-1.909.727l-.335.3-.234-.382a3.307,3.307,0,0,0-2.8-1.568h-.025a3.375,3.375,0,0,0-3.147,2.159l-.082.21-.222.026a3.436,3.436,0,0,0-2.749,2.069l-.69-.292a4.182,4.182,0,0,1,2.735-2.394,2.623,2.623,0,0,0-1.532-.5h-.46l-.082-.262a3.04,3.04,0,0,0-2.911-2.134h-.037a2.989,2.989,0,0,0-2.4,1.212l-.144.194-.237-.05a3.514,3.514,0,0,0-.658-.066,3.165,3.165,0,0,0-.858.134,3.506,3.506,0,0,0-1.216.583,3.406,3.406,0,0,0-1.164,2.523l-.75,0a4.16,4.16,0,0,1,1.416-3.082,4.2,4.2,0,0,1,1.512-.743,4.189,4.189,0,0,1,1.64-.12,3.753,3.753,0,0,1,2.888-1.332h.014a3.781,3.781,0,0,1,3.529,2.4,3.37,3.37,0,0,1,2.053.771,4.111,4.111,0,0,1,3.55-2.052h.03a4.064,4.064,0,0,1,3.2,1.58,3.634,3.634,0,0,1,2.076-.655h0A3.56,3.56,0,0,1-110.779,34.837Zm-14.076-4.965h.75V26.159h-.75Zm4.179-.692V25.127h-.75V29.18Zm-6.857-.915V25.127h-.75v3.138Zm.291-15.74a2.7,2.7,0,0,1,2.7-2.7,2.7,2.7,0,0,1,2.7,2.7,2.7,2.7,0,0,1-2.7,2.7A2.7,2.7,0,0,1-127.242,12.525Zm.75,0a1.95,1.95,0,0,0,1.947,1.947,1.949,1.949,0,0,0,1.947-1.947,1.949,1.949,0,0,0-1.947-1.947A1.95,1.95,0,0,0-126.492,12.525Zm-2.644,6.759-4.954,4.954V15.2l4.012-1.952a17.007,17.007,0,0,1,.135-2.005,17.8,17.8,0,0,1,4.68-9.377l.705-.754.752.756a17.8,17.8,0,0,1,4.678,9.375,16.8,16.8,0,0,1,.134,1.931l4.166,2.026v9.038l-5.064-5.064a17.378,17.378,0,0,1-2.156,4.5.507.507,0,0,1-.259.224,7.219,7.219,0,0,1-2.238.352,7.252,7.252,0,0,1-2.144-.322l-.121-.037-.2-.22A17.332,17.332,0,0,1-129.136,19.284Zm6.782,4.17-.124-.09.011.032Zm1.695-4.411a10.123,10.123,0,0,1-3.865.778,10.117,10.117,0,0,1-3.887-.783,17.107,17.107,0,0,0,2.007,4.186,6.425,6.425,0,0,0,3.759-.009A17.418,17.418,0,0,0-120.659,19.043Zm5.081-3.374-3.415-1.661a18.251,18.251,0,0,1-.656,4.348l4.071,4.071ZM-127.155,5.655a6.642,6.642,0,0,0,5.236-.01A17.679,17.679,0,0,0-124.335,2.4l-.206-.207-.184.2A17.751,17.751,0,0,0-127.155,5.655Zm-1.552,12.408a9.519,9.519,0,0,0,8.338.018,17.072,17.072,0,0,0,.5-6.741,14.915,14.915,0,0,0-1.68-5.039,7.245,7.245,0,0,1-2.994.662,7.253,7.253,0,0,1-2.978-.653,14.9,14.9,0,0,0-1.677,5.03A17.045,17.045,0,0,0-128.707,18.063Zm-4.633,4.364,3.891-3.891c-.013-.006-.026-.011-.038-.018l.077-.136a18.223,18.223,0,0,1-.664-4.3l-3.266,1.588Z"
                        transform="translate(136.252 -1.112)"
                        fill="#fff"
                      />
                    </svg>{" "}
                    <svg
                      className="circle"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 118 118"
                      width={118}
                      height={118}
                      style={{ enableBackground: "new 0 0 118 118" }}
                      xmlSpace="preserve"
                      preserveAspectRatio="none"
                    >
                      <path
                        style={{ fill: "none", stroke: "#80ACD3" }}
                        d="M117.5,59c0,32.3-26.2,58.5-58.5,58.5C26.7,117.5,0.5,91.3,0.5,59S26.7,0.5,59,0.5C91.3,0.5,117.5,26.7,117.5,59"
                      ></path>
                    </svg>
                  </figure>
                </span>
                <span className="text_container">
                  <h3 className="metatext">Your Vision</h3>
                  <span className="text">
                    Everything starts with your idea and from here, we take over
                    the planning and implementation for you!
                  </span>
                </span>
              </Link>
              <Link
                to=""
                className="point position_left point2 positioned"
                data-point={2}
                style={{ top: "361.899px", left: 182 }}
              >
                <span className="text_container">
                  <h3 className="metatext">Process Solutions</h3>
                  <span className="text">
                    Your process solution from upstream to downstream -
                    everything from a single source!
                  </span>
                </span>
                <span className="image_container">
                  <figure>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32.567"
                      height="35.638"
                      viewBox="0 0 32.567 35.638"
                    >
                      <path
                        d="M26.951-291.5l0,4.308a3.475,3.475,0,0,1-3.344-3.79,3.991,3.991,0,0,1,1.265-3.147,4.609,4.609,0,0,0,1.43-3.545c0-2.046-2.02-3.269-3.973-3.269a4.908,4.908,0,0,0-4.194,2.92,6.319,6.319,0,0,0-1.534-.612l-.009-3.34a1.409,1.409,0,0,0,1.04-1.355,1.412,1.412,0,0,0-1.411-1.41,1.412,1.412,0,0,0-1.41,1.41,1.408,1.408,0,0,0,1.031,1.352l.009,3.2a6.438,6.438,0,0,0-.848-.062h-.024l-1.067,0a6.51,6.51,0,0,0-.819.061l-.007-1.318a1.408,1.408,0,0,0,1.039-1.354,1.412,1.412,0,0,0-1.41-1.411,1.412,1.412,0,0,0-1.41,1.411,1.406,1.406,0,0,0,1.031,1.352l.008,1.467a6.428,6.428,0,0,0-4.826,6.209v15.934l-.843.843a4,4,0,0,0-1.18,2.849v3.045h.75V-272.8a3.257,3.257,0,0,1,.961-2.319l.616-.617,6.271,0v6.627h.75v-6.627l6.277,0,.611.611a3.262,3.262,0,0,1,.96,2.319v3.045h.75V-272.8a4,4,0,0,0-1.18-2.849l-.843-.843V-281.8h5.53l-.007,12.509,11.122-.013v-22.2Zm-11.392-11.83a.661.661,0,0,1,.66-.66.662.662,0,0,1,.661.66.662.662,0,0,1-.661.661A.662.662,0,0,1,15.559-303.331Zm-3.506,1.88a.661.661,0,0,1,.66-.661.661.661,0,0,1,.66.661.661.661,0,0,1-.66.66A.661.661,0,0,1,12.053-301.451Zm10.274,1.257c1.585,0,3.223.942,3.223,2.519a3.833,3.833,0,0,1-1.237,3.042,4.725,4.725,0,0,0-1.458,3.65,4.222,4.222,0,0,0,4.093,4.544v1.264H21.416v-7.252a6.374,6.374,0,0,0-1.887-4.545,6.554,6.554,0,0,0-.765-.644A4.187,4.187,0,0,1,22.327-300.194Zm-8.415,2.1,1.068,0H15a5.625,5.625,0,0,1,4,1.652,5.619,5.619,0,0,1,1.629,3.643H8.285A5.675,5.675,0,0,1,13.912-298.09ZM8.266-276.483v-15.565h12.4v15.571Zm13.15-6.067v-1.875h5.531v1.875Zm15.9,12.5-9.622.011.012-20.709h9.61Zm-2.283-10.453H29.973v8.359h5.055Zm-.75,7.609H30.723v-6.859h3.555Zm-24.12-5.386h8.616v-4.087H10.158Zm.75-3.337h7.116v2.587H10.908ZM34.292-287.7H30.708v-.75h3.584Zm0,1.672H30.708v-.75h3.584Zm0,1.669H30.708v-.75h3.584ZM11.968-280.7h1.06v.75h-1.06Zm1.97,0H15v.75h-1.06Zm1.966,0h1.06v.75H15.9Z"
                        transform="translate(-5.493 304.741)"
                        fill="#fff"
                      />
                    </svg>{" "}
                    <svg
                      className="circle"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 118 118"
                      width={118}
                      height={118}
                      style={{ enableBackground: "new 0 0 118 118" }}
                      xmlSpace="preserve"
                      preserveAspectRatio="none"
                    >
                      <path
                        style={{ fill: "none", stroke: "#80ACD3" }}
                        d="M117.5,59c0,32.3-26.2,58.5-58.5,58.5C26.7,117.5,0.5,91.3,0.5,59S26.7,0.5,59,0.5C91.3,0.5,117.5,26.7,117.5,59"
                      ></path>
                    </svg>
                  </figure>
                </span>
              </Link>
              <Link
                to=""
                className="point position_right point3 positioned"
                data-point={3}
                style={{ top: "521.934px", left: "752.571px" }}
              >
                <span className="image_container">
                  <figure>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32.627"
                      height="32.628"
                      viewBox="0 0 32.627 32.628"
                    >
                      <path
                        d="M-74.85,31.817V25.851h-8.272V21.046h-.75v1.277H-88.49v3.586a1.555,1.555,0,0,0-1.184,1.506,1.557,1.557,0,0,0,1.555,1.556,1.558,1.558,0,0,0,1.556-1.556,1.556,1.556,0,0,0-1.177-1.5V23.073h3.868V26.6H-75.6V31.81a1.555,1.555,0,0,0-1.191,1.508,1.558,1.558,0,0,0,1.556,1.556,1.558,1.558,0,0,0,1.555-1.556A1.553,1.553,0,0,0-74.85,31.817Zm-12.463-4.4a.807.807,0,0,1-.806.806.807.807,0,0,1-.805-.806.807.807,0,0,1,.805-.806A.807.807,0,0,1-87.313,27.415Zm12.078,6.709a.806.806,0,0,1-.806-.806.8.8,0,0,1,.777-.8h.057a.8.8,0,0,1,.777.8A.806.806,0,0,1-75.235,34.124Zm14.167-17.71a1.553,1.553,0,0,0-1.5,1.174h-5.956v8.258h-4.749v.75h1.18v4.6h3.588A1.555,1.555,0,0,0-67,32.388a1.558,1.558,0,0,0,1.556-1.556A1.558,1.558,0,0,0-67,29.277a1.555,1.555,0,0,0-1.5,1.169h-2.845V26.6h3.569V18.338h5.2a1.555,1.555,0,0,0,1.507,1.187,1.557,1.557,0,0,0,1.556-1.555A1.558,1.558,0,0,0-61.068,16.414ZM-67,30.027a.806.806,0,0,1,.806.805.806.806,0,0,1-.806.806.806.806,0,0,1-.805-.806A.806.806,0,0,1-67,30.027Zm5.931-11.252a.807.807,0,0,1-.806-.805.807.807,0,0,1,.806-.806.807.807,0,0,1,.806.806A.807.807,0,0,1-61.068,18.775Zm-1.98,5.956v-3.6h-3.181v.75H-63.8v2.85a1.553,1.553,0,0,0-1.186,1.506,1.557,1.557,0,0,0,1.555,1.556,1.557,1.557,0,0,0,1.555-1.556A1.554,1.554,0,0,0-63.048,24.731Zm-.381,2.309a.806.806,0,0,1-.805-.806.806.806,0,0,1,.805-.8.806.806,0,0,1,.805.8A.806.806,0,0,1-63.429,27.04ZM-89.08,19.53h5.951V11.258h4.717v-.75h-1.17V5.921h-3.594a1.553,1.553,0,0,0-1.5-1.181A1.557,1.557,0,0,0-86.236,6.3a1.558,1.558,0,0,0,1.555,1.556,1.555,1.555,0,0,0,1.5-1.18h2.844v3.837h-3.547V18.78h-5.2a1.555,1.555,0,0,0-1.506-1.185,1.557,1.557,0,0,0-1.555,1.555,1.557,1.557,0,0,0,1.555,1.556A1.555,1.555,0,0,0-89.08,19.53Zm4.4-12.429a.806.806,0,0,1-.805-.806.806.806,0,0,1,.805-.805.806.806,0,0,1,.806.805A.806.806,0,0,1-84.681,7.1Zm-5.9,12.855a.806.806,0,0,1-.805-.806.806.806,0,0,1,.805-.805.806.806,0,0,1,.806.805A.806.806,0,0,1-90.584,19.956Zm1.987-7.565v3.591h3.26v-.75h-2.51V12.391a1.555,1.555,0,0,0,1.18-1.505A1.557,1.557,0,0,0-88.222,9.33a1.558,1.558,0,0,0-1.556,1.556A1.556,1.556,0,0,0-88.6,12.391Zm.375-2.311a.807.807,0,0,1,.805.806.807.807,0,0,1-.805.806.807.807,0,0,1-.806-.806A.807.807,0,0,1-88.222,10.08ZM-76.8,5.3v5.963h8.252v4.791h.75V14.839h4.6V11.228a1.554,1.554,0,0,0,1.172-1.5A1.558,1.558,0,0,0-63.585,8.17a1.558,1.558,0,0,0-1.556,1.556,1.556,1.556,0,0,0,1.19,1.508v2.855H-67.8V10.517h-8.252V5.309A1.555,1.555,0,0,0-74.86,3.8a1.558,1.558,0,0,0-1.556-1.556A1.558,1.558,0,0,0-77.972,3.8,1.554,1.554,0,0,0-76.8,5.3Zm12.408,4.422a.807.807,0,0,1,.806-.806.807.807,0,0,1,.806.806.807.807,0,0,1-.806.806A.807.807,0,0,1-64.391,9.726ZM-76.416,3a.807.807,0,0,1,.806.806.807.807,0,0,1-.806.806.807.807,0,0,1-.806-.806A.807.807,0,0,1-76.416,3Zm-4.149,20.667.731.167.083-.366a6,6,0,0,1,.836-1.861,3.87,3.87,0,0,0,2.3.726,4.608,4.608,0,0,0,2.87-1.025,7.177,7.177,0,0,0,1.988-7.762l-.193-.421-.372.275a6.84,6.84,0,0,1-3.283,1.065A5.977,5.977,0,0,0-78.714,15.5a4.336,4.336,0,0,0-1.6,2.937,3.538,3.538,0,0,0,.829,2.642l.016.015A6.8,6.8,0,0,0-80.482,23.3Zm.994-5.163a3.579,3.579,0,0,1,1.332-2.421A5.424,5.424,0,0,1-75.5,15.2a8.314,8.314,0,0,0,3.218-.935,6.446,6.446,0,0,1-1.933,6.45,3.55,3.55,0,0,1-4.264.274,10.8,10.8,0,0,1,3.257-2.771l.328-.181-.362-.657-.329.182a11.58,11.58,0,0,0-3.422,2.894A2.8,2.8,0,0,1-79.571,18.5ZM-72.5,6.54h2.839a1.556,1.556,0,0,0,1.5,1.179A1.558,1.558,0,0,0-66.6,6.163a1.557,1.557,0,0,0-1.555-1.555A1.556,1.556,0,0,0-69.657,5.79h-3.588V8.95h.75Zm4.344-1.182a.806.806,0,0,1,.805.805.806.806,0,0,1-.805.806.806.806,0,0,1-.806-.806A.806.806,0,0,1-68.151,5.358ZM-79.158,30.585h-2.836A1.555,1.555,0,0,0-83.5,29.4a1.558,1.558,0,0,0-1.556,1.556A1.558,1.558,0,0,0-83.5,32.513,1.555,1.555,0,0,0-82,31.335h3.588V28.154h-.75ZM-83.5,31.763a.807.807,0,0,1-.806-.806.807.807,0,0,1,.806-.806.807.807,0,0,1,.806.806A.807.807,0,0,1-83.5,31.763Z"
                        transform="translate(92.139 -2.246)"
                        fill="#fff"
                      />
                    </svg>{" "}
                    <svg
                      className="circle"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 118 118"
                      width={118}
                      height={118}
                      style={{ enableBackground: "new 0 0 118 118" }}
                      xmlSpace="preserve"
                      preserveAspectRatio="none"
                    >
                      <path
                        style={{ fill: "none", stroke: "#80ACD3" }}
                        d="M117.5,59c0,32.3-26.2,58.5-58.5,58.5C26.7,117.5,0.5,91.3,0.5,59S26.7,0.5,59,0.5C91.3,0.5,117.5,26.7,117.5,59"
                      ></path>
                    </svg>
                  </figure>
                </span>
                <span className="text_container">
                  <h3 className="metatext">CO2 Footprint</h3>
                  <span className="text">
                    Whether retrofitting or new planning - optimize the
                    sustainability of your process infrastructure!
                  </span>
                </span>
              </Link>
              <Link
                to=""
                className="point position_left point4 positioned"
                data-point={4}
                style={{ top: "981.898px", left: 473 }}
              >
                <span className="text_container">
                  <h3 className="metatext">Automation</h3>
                  <span className="text">
                    Increase your production efficiency with our flexible
                    automation solutions!
                  </span>
                </span>
                <span className="image_container">
                  <figure>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33.841"
                      height="29.698"
                      viewBox="0 0 33.841 29.698"
                    >
                      <path
                        d="M-101.213-275.613V-298.07h-9.82v.75h9.07V-280.4H-134.3V-297.32h5.362v-.75h-6.112v22.457h12.922v3.286H-126.2v.75h16.144v-.75h-4.067v-3.286Zm-33.091-.75v-3.29h32.341v3.29h-19.419v-.015h-.75v.015Zm19.432,4.036h-6.51v-3.286h6.51ZM-129.238-289.4a9.41,9.41,0,0,0,4.384,5.775,9.413,9.413,0,0,0,4.763,1.3,9.536,9.536,0,0,0,2.42-.314,9.493,9.493,0,0,0,2.008-.781l.267-.14a6,6,0,0,0,3.275.972,6.042,6.042,0,0,0,6.036-6.035,6.043,6.043,0,0,0-4.925-5.929l-.05-.157a9.471,9.471,0,0,0-11.42-6.255,9.41,9.41,0,0,0-5.774,4.383A9.411,9.411,0,0,0-129.238-289.4Zm.726-.191a8.7,8.7,0,0,1-.274-2.662,5.812,5.812,0,0,0,2.224,1.583,5.708,5.708,0,0,0,1.618.4,2.66,2.66,0,0,0,.19,2.234,1.828,1.828,0,0,0,.478.477,1.047,1.047,0,0,1,.309.307c.135.209.121.365.052.873a10.76,10.76,0,0,0-.113,1.284,7.013,7.013,0,0,0,.045,1.083c-.165-.083-.332-.163-.493-.257A8.665,8.665,0,0,1-128.512-289.587Zm5.375,5.948a4.126,4.126,0,0,1-.141-1.437,10.206,10.206,0,0,1,.106-1.2,1.8,1.8,0,0,0-.166-1.384,1.8,1.8,0,0,0-.494-.5,1.076,1.076,0,0,1-.3-.3,2.315,2.315,0,0,1,.043-2.035l.021-.059a1.716,1.716,0,0,0,.282-.035,1.25,1.25,0,0,1,.491-.005,1.831,1.831,0,0,1,1.025.487,3.046,3.046,0,0,0,1.294.684l.2.05a2.131,2.131,0,0,1,1.132.552c.122.223.154.68-.386,1.594a3.224,3.224,0,0,1-1.006,1.055,4.253,4.253,0,0,0-.933.872l-.066.085a3.137,3.137,0,0,0-.749,1.7C-122.9-283.55-123.019-283.594-123.137-283.639Zm16.3-4.983a5.291,5.291,0,0,1-5.286,5.285,5.291,5.291,0,0,1-5.285-5.285,5.291,5.291,0,0,1,5.285-5.286A5.292,5.292,0,0,1-106.835-288.622Zm-15.454-11.616a8.718,8.718,0,0,1,10.453,5.6c-.1-.005-.189-.015-.285-.015a6.042,6.042,0,0,0-6.035,6.036,6.021,6.021,0,0,0,2.1,4.562,8.715,8.715,0,0,1-1.8.7,8.683,8.683,0,0,1-4.191.061,2.445,2.445,0,0,1,.612-1.451l.069-.089a3.609,3.609,0,0,1,.786-.726,4,4,0,0,0,1.2-1.275c.215-.365.87-1.473.4-2.335a.991.991,0,0,0-.2-.259,2.9,2.9,0,0,0-1.416-.662l-.193-.049a2.337,2.337,0,0,1-1.009-.539,2.559,2.559,0,0,0-1.386-.646,1.952,1.952,0,0,0-.74.009.862.862,0,0,1-.417-.006c-.622-.129-1.681-.475-1.777-1.335a.877.877,0,0,1,.071-.486.679.679,0,0,1,.659-.369c.124.014.212.128.371.367a1.566,1.566,0,0,0,.6.609.471.471,0,0,0,.475-.034.765.765,0,0,0,.291-.651,1.306,1.306,0,0,0-.111-.41l-.027-.049a.548.548,0,0,1,.026-.232c.022-.066.083-.1.284-.188a1.657,1.657,0,0,0,.648-.428,1.164,1.164,0,0,0,.257-.892.937.937,0,0,1,.066-.483,1.087,1.087,0,0,1,.717-.51,1.217,1.217,0,0,0,.872-.714,1.6,1.6,0,0,0-.419-1.474,2.3,2.3,0,0,0-1.94-.879,1.022,1.022,0,0,0-.506.186,4.874,4.874,0,0,0-.755,1.021.325.325,0,0,1-.211.146.275.275,0,0,1-.211-.043,3.352,3.352,0,0,1-.4-.365c-.037-.036-.077-.07-.114-.107A8.71,8.71,0,0,1-122.289-300.238Zm-5.318,4.037a8.749,8.749,0,0,1,1.56-1.959c.051.049.1.1.154.146a4.178,4.178,0,0,0,.493.443,1.011,1.011,0,0,0,.8.171,1.073,1.073,0,0,0,.7-.487,5.669,5.669,0,0,1,.569-.822.5.5,0,0,1,.148-.035,1.558,1.558,0,0,1,1.271.616.934.934,0,0,1,.279.768c-.027.086-.176.147-.417.236a1.78,1.78,0,0,0-1.137.9,1.67,1.67,0,0,0-.136.829c.008.207.007.277-.075.373a1,1,0,0,1-.378.23,1.087,1.087,0,0,0-.7.637,1.244,1.244,0,0,0-.066.38,1.1,1.1,0,0,0-.767-.486,1.426,1.426,0,0,0-1.414.783,1.623,1.623,0,0,0-.143.9,1.875,1.875,0,0,0,.7,1.255c-.037-.014-.077-.02-.114-.034a5.156,5.156,0,0,1-2.382-1.958A8.711,8.711,0,0,1-127.607-296.2Zm13.793,11,4.717-3.329-4.717-3.329Zm.75-5.211,2.666,1.882-2.666,1.881Z"
                        transform="translate(135.054 301.275)"
                        fill="#fff"
                      />
                    </svg>{" "}
                    <svg
                      className="circle"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 118 118"
                      width={118}
                      height={118}
                      style={{ enableBackground: "new 0 0 118 118" }}
                      xmlSpace="preserve"
                      preserveAspectRatio="none"
                    >
                      <path
                        style={{ fill: "none", stroke: "#80ACD3" }}
                        d="M117.5,59c0,32.3-26.2,58.5-58.5,58.5C26.7,117.5,0.5,91.3,0.5,59S26.7,0.5,59,0.5C91.3,0.5,117.5,26.7,117.5,59"
                      ></path>
                    </svg>
                  </figure>
                </span>
              </Link>
              <Link
                to=""
                className="point position_right point5 positioned"
                data-point={5}
                style={{ top: "1281.93px", left: "632.571px" }}
              >
                <span className="image_container">
                  <figure>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="31.883"
                      height="31.811"
                      viewBox="0 0 31.883 31.811"
                    >
                      <path
                        d="M-42.034,13.906h.008a2.193,2.193,0,0,0,2.145-1.818h3.667l3.6,4.352h4.071v-.75h-3.717l-3.6-4.352h-4.02a2.161,2.161,0,0,0-.608-1.179,2.172,2.172,0,0,0-1.551-.638h-.006a2.179,2.179,0,0,0-1.547.649,2.182,2.182,0,0,0-.636,1.553A2.2,2.2,0,0,0-42.034,13.906ZM-43.06,10.7a1.439,1.439,0,0,1,1.026-.427h0a1.428,1.428,0,0,1,1.014.419,1.427,1.427,0,0,1,.424,1.016h0a1.445,1.445,0,0,1-1.436,1.449h-.006a1.445,1.445,0,0,1-1.443-1.436A1.437,1.437,0,0,1-43.06,10.7Zm2.282,8.858h8.973v-.75h-8.986a2.2,2.2,0,0,0-2.148-1.755,2.194,2.194,0,0,0-2.192,2.192,2.194,2.194,0,0,0,2.192,2.192A2.19,2.19,0,0,0-40.778,19.556Zm-3.6-.313A1.444,1.444,0,0,1-42.939,17.8,1.444,1.444,0,0,1-41.5,19.243a1.444,1.444,0,0,1-1.442,1.442A1.444,1.444,0,0,1-44.381,19.243Zm8.909-12.409a2.171,2.171,0,0,0,.775-.148l4.264,6.12h3.83a6.655,6.655,0,0,1,6.893,6.366,7.06,7.06,0,0,1-6.9,6.9l.018.75a7.812,7.812,0,0,0,7.634-7.643A7.405,7.405,0,0,0-26.6,12.056h-3.439L-34.053,6.3a2.181,2.181,0,0,0,.774-1.657,2.2,2.2,0,0,0-2.193-2.193,2.2,2.2,0,0,0-2.192,2.193A2.2,2.2,0,0,0-35.472,6.834Zm0-3.635a1.444,1.444,0,0,1,1.443,1.443,1.444,1.444,0,0,1-1.443,1.442,1.444,1.444,0,0,1-1.442-1.442A1.444,1.444,0,0,1-35.472,3.2Zm8,23.625v-.75h-3.926l-3.82,4.381a2.179,2.179,0,0,0-1.473-.58,2.195,2.195,0,0,0-2.192,2.193,2.195,2.195,0,0,0,2.192,2.192,2.2,2.2,0,0,0,2.193-2.192,2.167,2.167,0,0,0-.255-1l3.7-4.24Zm-9.219,6.686a1.444,1.444,0,0,1-1.442-1.442,1.444,1.444,0,0,1,1.442-1.443,1.444,1.444,0,0,1,1.443,1.443A1.444,1.444,0,0,1-36.687,33.51Zm20.7-11.359a11.25,11.25,0,0,1-1.127,2.6l1.594,1.806-3.487,3.551-1.9-1.545a10.328,10.328,0,0,1-2.718,1.1l-.018,2.351h-4.894V29.564h.75v1.7h3.4l.017-2.2.293-.064a9.612,9.612,0,0,0,3.006-1.214l.227-.14,1.78,1.448,2.52-2.566-1.5-1.7.149-.237a10.508,10.508,0,0,0,1.262-2.911l.074-.28H-14V17.478H-16.52l-.066-.294a12.473,12.473,0,0,0-1.319-3.443l-.123-.218,1.5-1.924L-19.049,9.02l-1.783,1.643-.243-.155a9.673,9.673,0,0,0-3.008-1.267l-.287-.067-.017-2.6h-3.4v2.74h-.75V5.826h4.894l.018,2.756a10.426,10.426,0,0,1,2.7,1.141l1.9-1.748,3.488,3.568-1.6,2.048a13.235,13.235,0,0,1,1.209,3.137h2.674v5.423Zm-19.859,4.871,3.6-4.352h5.682a3.494,3.494,0,0,0,3.49-3.489,3.5,3.5,0,0,0-3.49-3.491H-27.69v.75h1.122a2.744,2.744,0,0,1,2.74,2.741,2.743,2.743,0,0,1-2.74,2.739H-32.6l-3.6,4.352h-3.684a2.2,2.2,0,0,0-2.144-1.8,2.195,2.195,0,0,0-2.2,2.183,2.182,2.182,0,0,0,.636,1.553,2.179,2.179,0,0,0,1.556.648h.005a2.174,2.174,0,0,0,1.544-.637,2.166,2.166,0,0,0,.609-1.2Zm-4.748-.347a1.427,1.427,0,0,1-.424,1.016,1.431,1.431,0,0,1-1.021.418h0a1.433,1.433,0,0,1-1.018-.426,1.438,1.438,0,0,1-.418-1.022,1.445,1.445,0,0,1,1.443-1.436h.006a1.444,1.444,0,0,1,1.436,1.449Zm9.626-7.869h5.037v.75h-5.037Z"
                        transform="translate(45.131 -2.449)"
                        fill="#fff"
                      />
                    </svg>{" "}
                    <svg
                      className="circle"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 118 118"
                      width={118}
                      height={118}
                      style={{ enableBackground: "new 0 0 118 118" }}
                      xmlSpace="preserve"
                      preserveAspectRatio="none"
                    >
                      <path
                        style={{ fill: "none", stroke: "#80ACD3" }}
                        d="M117.5,59c0,32.3-26.2,58.5-58.5,58.5C26.7,117.5,0.5,91.3,0.5,59S26.7,0.5,59,0.5C91.3,0.5,117.5,26.7,117.5,59"
                      ></path>
                    </svg>
                  </figure>
                </span>
                <span className="text_container">
                  <h3 className="metatext">Pharma 4.0</h3>
                  <span className="text">
                    Get to know the digital twin of your production plant!
                  </span>
                </span>
              </Link>
              <Link
                to=""
                className="point position_right point6 positioned"
                data-point={6}
                style={{ top: "1663.93px", left: "438.071px" }}
              >
                <span className="image_container">
                  <figure>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34.183"
                      height="31.706"
                      viewBox="0 0 34.183 31.706"
                    >
                      <path
                        d="M30.887,22.022l.708.248-.756,2.161H13.362l1.087,3.437H29.568v.75H13.9L7.707,9.037H1.671v-.75H8.257l1.137,3.6h6.482v.75H9.632l3.493,11.046H30.307Zm-13.444,10.4A2.346,2.346,0,1,1,15.1,30.078,2.348,2.348,0,0,1,17.443,32.423Zm-.75,0a1.6,1.6,0,1,0-1.6,1.6A1.6,1.6,0,0,0,16.693,32.423Zm12.778,0a2.346,2.346,0,1,1-2.346-2.345A2.349,2.349,0,0,1,29.471,32.423Zm-.75,0a1.6,1.6,0,1,0-1.6,1.6A1.6,1.6,0,0,0,28.721,32.423Zm4.7-18.056a4.876,4.876,0,0,1-.46,1.1l1.72,1.7-3.02,3.019L29.93,18.457a6.952,6.952,0,0,1-1.111.46V21.4H24.551V18.917a7.032,7.032,0,0,1-1.111-.457l-1.729,1.732-3.02-3.014,1.72-1.709a4.861,4.861,0,0,1-.461-1.1H17.515V10.1h2.434a5.142,5.142,0,0,1,.465-1.14l-1.72-1.741L21.71,4.2l1.729,1.729a7.013,7.013,0,0,1,1.112-.459V3.062h4.268V5.471a7.01,7.01,0,0,1,1.112.462L31.66,4.206l3.016,3.021L32.955,8.958a5.185,5.185,0,0,1,.466,1.14h2.433v4.269ZM32,15.578l.168-.257a4.179,4.179,0,0,0,.589-1.408l.064-.3H35.1V10.848H32.823l-.063-.3a4.416,4.416,0,0,0-.592-1.45l-.16-.252,1.61-1.621L31.659,5.267l-1.6,1.6-.249-.143a6.237,6.237,0,0,0-1.465-.608l-.276-.075V3.812H25.3V6.038l-.277.075a6.286,6.286,0,0,0-1.466.605l-.248.142-1.6-1.6L19.751,7.22l1.61,1.629L21.2,9.1a4.416,4.416,0,0,0-.592,1.45l-.063.3H18.265v2.769h2.281l.064.3a4.179,4.179,0,0,0,.589,1.408l.167.256-1.612,1.6,1.956,1.952,1.6-1.6.249.142a6.3,6.3,0,0,0,1.466.6l.277.075v2.3h2.768v-2.3l.276-.075a6.292,6.292,0,0,0,1.466-.607l.248-.142,1.6,1.6,1.956-1.956Zm-2.48-3.345A2.838,2.838,0,1,1,26.685,9.4,2.841,2.841,0,0,1,29.523,12.233Zm-.75,0a2.088,2.088,0,1,0-2.088,2.087A2.09,2.09,0,0,0,28.773,12.233Z"
                        transform="translate(-1.671 -3.062)"
                        fill="#fff"
                      />
                    </svg>{" "}
                    <svg
                      className="circle"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 118 118"
                      width={118}
                      height={118}
                      style={{ enableBackground: "new 0 0 118 118" }}
                      xmlSpace="preserve"
                      preserveAspectRatio="none"
                    >
                      <path
                        style={{ fill: "none", stroke: "#80ACD3" }}
                        d="M117.5,59c0,32.3-26.2,58.5-58.5,58.5C26.7,117.5,0.5,91.3,0.5,59S26.7,0.5,59,0.5C91.3,0.5,117.5,26.7,117.5,59"
                      ></path>
                    </svg>
                  </figure>
                </span>
                <span className="text_container">
                  <h3 className="metatext">Procurement</h3>
                  <span className="text">
                    Time-to-market - our procurement strategies shorten your
                    project's duration!
                  </span>
                </span>
              </Link>
              <Link
                to=""
                className="point position_right point7 positioned"
                data-point={7}
                style={{ top: "2023.28px", left: "580.334px" }}
              >
                <span className="image_container">
                  <figure>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26.552"
                      height="35.28"
                      viewBox="0 0 26.552 35.28"
                    >
                      <path
                        d="M73.6,14.936a7.08,7.08,0,1,0-7.08,7.08A7.088,7.088,0,0,0,73.6,14.936Zm-7.08,6.33a6.33,6.33,0,1,1,6.33-6.33A6.338,6.338,0,0,1,66.519,21.266Zm3.068-8.735.53.53-4.624,4.624L63.15,15.343l.531-.531,1.812,1.813Zm6.045,11.018.469-5.194,3.427-4.187-3.764-3.779-.111-5.617-5.393.336L66.242.866,62.774,5.118l-5.818-.753-.005,6.11-3.974,3.694,3.7,4.119.2,5.261,1.671.2-3.334,9.814,4.345-1.807,2.349,4.08,3.184-9.373,1.161.967,1.241-.947,3.281,9.66,2.349-4.08,4.345,1.807L74.032,23.756Zm-13.9,10.479L59.88,30.813l-3.422,1.423,2.851-8.392,3.084.375,2.082,1.733ZM62.7,23.5l-5.1-.619-.184-4.894-3.391-3.772L57.7,10.8l0-5.585,5.386.7L66.284,2l3.672,3.879,4.963-.31.1,5.136,3.5,3.512-3.143,3.842-.436,4.824-4.771.618-3.895,2.973Zm10.609.466,2.913,8.577L72.8,31.121l-1.851,3.215-2.827-8.322,0-.007,2.343-1.788,2.833-.368A.353.353,0,0,0,73.312,23.967Z"
                        transform="translate(-52.977 -0.866)"
                        fill="#fff"
                      />
                    </svg>{" "}
                    <svg
                      className="circle"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 118 118"
                      width={118}
                      height={118}
                      style={{ enableBackground: "new 0 0 118 118" }}
                      xmlSpace="preserve"
                      preserveAspectRatio="none"
                    >
                      <path
                        style={{ fill: "none", stroke: "#80ACD3" }}
                        d="M117.5,59c0,32.3-26.2,58.5-58.5,58.5C26.7,117.5,0.5,91.3,0.5,59S26.7,0.5,59,0.5C91.3,0.5,117.5,26.7,117.5,59"
                      ></path>
                    </svg>
                  </figure>
                </span>
                <span className="text_container">
                  <h3 className="metatext">CQV</h3>
                  <span className="text">
                    From DQ, IQ, OQ to PQ - we ensure your qualification and
                    validation process!
                  </span>
                </span>
              </Link>
              <Link
                to=""
                className="point position_right point8 positioned"
                data-point={8}
                style={{ top: "2261.93px", left: "752.571px" }}
              >
                <span className="image_container">
                  <figure>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34.903"
                      height="32.079"
                      viewBox="0 0 34.903 32.079"
                    >
                      <path
                        d="M21.194-339.617l6.8-6.8a4.169,4.169,0,0,0,1.183-3.731,4.253,4.253,0,0,0-2.55-3.141,4.133,4.133,0,0,0-4.528.973l-.894.894-.9-.9a4.176,4.176,0,0,0-5.9.059,4.2,4.2,0,0,0,0,5.841Zm-6.254-12.12a3.414,3.414,0,0,1,2.445-1.026,3.4,3.4,0,0,1,2.39.974l1.425,1.424,1.424-1.424-.265-.266.265.265a3.389,3.389,0,0,1,3.7-.816,3.515,3.515,0,0,1,2.114,2.589,3.421,3.421,0,0,1-.973,3.064l-6.267,6.274-6.253-6.27A3.439,3.439,0,0,1,14.94-351.737Zm23.1,14.6a2.451,2.451,0,0,0-2.95-.51L30.5-335.2a2.349,2.349,0,0,0-.438-.673,2.331,2.331,0,0,0-1.707-.733H21.936a2.293,2.293,0,0,1-1.167-.326,8.276,8.276,0,0,0-4.285-.994c-4.479,0-7.561,3.336-8,3.833l-.895-.914-3.87,3.641,9.5,9.846,3.885-3.764-.883-.9a1.859,1.859,0,0,1,1.19-.437h7.441a5.643,5.643,0,0,0,3.007-.866l9.637-6.054a2.379,2.379,0,0,0,1.1-1.665A2.4,2.4,0,0,0,38.036-337.137ZM13.243-322.586,4.79-331.344l2.782-2.618,8.474,8.661Zm24.614-12.738a1.628,1.628,0,0,1-.753,1.141l-9.638,6.055a4.893,4.893,0,0,1-2.608.751H17.417a2.6,2.6,0,0,0-1.714.652l-6.688-6.834c.065-.076,3.114-3.621,7.469-3.621a7.607,7.607,0,0,1,3.9.888,3.032,3.032,0,0,0,1.55.432h6.421a1.587,1.587,0,0,1,1.163.5,1.588,1.588,0,0,1,.438,1.19,1.685,1.685,0,0,1-1.713,1.517H19.408v.75h8.837a2.442,2.442,0,0,0,2.462-2.228,2.321,2.321,0,0,0-.015-.324l4.741-2.527a1.691,1.691,0,0,1,2.036.335A1.624,1.624,0,0,1,37.857-335.324Zm-30.71,3.415,2.18,2.35-.55.51L6.6-331.4Z"
                        transform="translate(-3.723 353.603)"
                        fill="#fff"
                      />
                    </svg>{" "}
                    <svg
                      className="circle"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 118 118"
                      width={118}
                      height={118}
                      style={{ enableBackground: "new 0 0 118 118" }}
                      xmlSpace="preserve"
                      preserveAspectRatio="none"
                    >
                      <path
                        style={{ fill: "none", stroke: "#80ACD3" }}
                        d="M117.5,59c0,32.3-26.2,58.5-58.5,58.5C26.7,117.5,0.5,91.3,0.5,59S26.7,0.5,59,0.5C91.3,0.5,117.5,26.7,117.5,59"
                      ></path>
                    </svg>
                  </figure>
                </span>
                <span className="text_container">
                  <h3 className="metatext">Lifecycle Management</h3>
                  <span className="text">
                    You can rely on us - we are by your side 24/7!
                  </span>
                </span>
              </Link>
              <Link
                to=""
                className="point position_left point9 positioned"
                data-point={9}
                style={{ top: "2588.89px", left: "371.336px" }}
              >
                <span className="text_container">
                  <h3 className="metatext">Magnetic Agitators</h3>
                  <span className="text">
                    Whether from below, above or at an angle - we have the
                    solution for your stirring task!
                  </span>
                </span>
                <span className="image_container">
                  <figure>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34.337"
                      height="29.941"
                      viewBox="0 0 34.337 29.941"
                    >
                      <path
                        d="M-7.514-295.512l-10.958-6.02-1.557,1.556a6.114,6.114,0,0,0-2.3-.42c-2.2,0-3.92.981-3.92,2.234v1.083h-5.314l-10.29,6.106v6.282l7.155,1.843v2.2c0,3.676,5.548,6.667,12.369,6.667.667,0,1.339-.033,2-.09l2.443,2.476,1.1-.356v-2.732c4.216-1.128,6.825-3.394,6.825-5.965v-6.972l2.445-2.317Zm-14.813-4.134c1.867,0,3.169.782,3.169,1.484s-1.3,1.485-3.169,1.485-3.17-.783-3.17-1.485S-24.195-299.646-22.327-299.646Zm-3.92,7.112c-3,.684-4.935,2.137-4.935,3.739,0,2.338,3.835,4.169,8.731,4.169.607,0,1.209-.036,1.8-.094v2.105c-.552.041-1.111.073-1.676.073-6.407,0-11.619-2.654-11.619-5.917,0-2.457,3.153-4.72,7.7-5.562Zm5.6,7.061a17.513,17.513,0,0,1-1.8.1c-4.326,0-7.981-1.565-7.981-3.419,0-1.174,1.709-2.365,4.185-2.966v1.58c0,1.253,1.722,2.235,3.92,2.235a6.51,6.51,0,0,0,1.676-.233Zm0-8.462v4.984a5.651,5.651,0,0,1-1.676.255c-1.868,0-3.17-.783-3.17-1.485v-6.661a5.239,5.239,0,0,0,3.17.915,5.234,5.234,0,0,0,3.169-.915v3.361l-.621-.81Zm3.013,2.434c2.189.652,3.554,1.667,3.554,2.706,0,.875-1.009,1.766-2.7,2.415v-4.008Zm.854,5.927c2.225-.789,3.45-1.933,3.45-3.221,0-1.586-1.887-2.949-5.045-3.672l-.029-.037v-1.517c4.546.842,7.7,3.105,7.7,5.562,0,2.143-2.37,4.149-6.075,5.188Zm-24.317.3v-5.274l9.746-5.783h5.108v1.544c-5.059.9-8.449,3.429-8.449,6.326v4.836Zm7.155,4.628V-286.2c1.725,2.563,6.275,4.4,11.619,4.4.565,0,1.123-.033,1.676-.073v7.063c-.556.041-1.116.075-1.676.075C-28.734-274.727-33.946-277.381-33.946-280.644Zm16.412,8.151-.142.046L-19.9-274.7v-18.516l2.367,3.085Zm.75-2.963v-7.037c2.884-.772,5.017-2.076,6.075-3.647v5.5C-10.709-278.5-13.078-276.495-16.784-275.456Zm8.52-14.8-1.7,1.616h0c-.138-2.821-3.482-5.264-8.436-6.146v-3.457h-.014a1.836,1.836,0,0,0-.916-1.364l1-1,10.076,5.536Z"
                        transform="translate(41.851 301.532)"
                        fill="#fff"
                      />
                    </svg>{" "}
                    <svg
                      className="circle"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 118 118"
                      width={118}
                      height={118}
                      style={{ enableBackground: "new 0 0 118 118" }}
                      xmlSpace="preserve"
                      preserveAspectRatio="none"
                    >
                      <path
                        style={{ fill: "none", stroke: "#80ACD3" }}
                        d="M117.5,59c0,32.3-26.2,58.5-58.5,58.5C26.7,117.5,0.5,91.3,0.5,59S26.7,0.5,59,0.5C91.3,0.5,117.5,26.7,117.5,59"
                      ></path>
                    </svg>
                  </figure>
                </span>
              </Link>
            </div>
            <div className="numdash">
              <div
                ref={ref1}
                className="cnumdash position_left point1 positioned visible"
                data-point={1}
                style={{ top: "63.9998px", left: "38.6004px" }}
              >
                <span
                  className="celement animating"
                  data-from={0}
                  data-to={980}
                  style={{ minWidth: "173.562px" }}
                >
                  {inView1 && <CountUp start={0} end={980} duration={1.2} />}
                </span>
                <span className="text">
                  Satisfied <br />
                  customers
                </span>
              </div>
              <div
                ref={ref2}
                className="cnumdash position_right point2 positioned"
                data-point={2}
                style={{ top: "361.899px", left: 582 }}
              >
                <span
                  className="celement"
                  data-from={0}
                  data-to={1400}
                  style={{ minWidth: "234.125px" }}
                >
                  {inView2 && <CountUp start={0} end={1400} duration={1.2} />}
                </span>
                <span className="text">Employees</span>
              </div>
              <div
                ref={ref3}
                className="cnumdash position_left point3 positioned"
                data-point={3}
                style={{ top: "521.934px", left: "352.571px" }}
              >
                {/* <span className="count" data-from={0} data-to={23500} style={{ minWidth: '284.781px' }}>0</span> */}
                <span
                  className="celement"
                  data-from={0}
                  data-to={23500}
                  style={{ minWidth: "284.781px" }}
                >
                  {/* 23500 */}
                  {inView3 && <CountUp start={0} end={23500} duration={1.2} />}
                </span>
                <span className="text">
                  Square meter <br />
                  production area
                </span>
              </div>
              <div
                ref={ref4}
                className="cnumdash counter_larger position_right point4 positioned"
                data-point={4}
                style={{ top: "981.898px", left: 873 }}
              >
                <span className="celement">
                  {inView4 && <CountUp start={0} end={13} duration={1} />}
                </span>
                <span className="text">
                  Global <br /> business <br /> partners
                </span>
              </div>
              <div
                ref={ref5}
                className="cnumdash position_left point5 positioned"
                data-point={5}
                style={{ top: "1281.93px", left: "232.571px" }}
              >
                <span className="celement">
                  {inView5 && <CountUp start={0} end={31} duration={1} />}
                </span>
                <span className="text">
                  Locations <br /> in total
                </span>
              </div>
              <div
                ref={ref6}
                className="cnumdash counter_larger position_left point6 positioned"
                data-point={6}
                style={{ top: "1663.93px", left: "38.0714px" }}
              >
                <span className="celement">
                  0{inView6 && <CountUp start={0} end={3} duration={2} />}
                </span>
                <span className="text">Continents</span>
              </div>
              <div
                ref={ref7}
                className="cnumdash position_left point7 positioned"
                data-point={7}
                style={{ top: "2023.28px", left: "180.334px" }}
              >
                <span className="celement">
                  0{inView7 && <CountUp start={0} end={9} duration={2} />}
                </span>
                <span className="text">Countries</span>
              </div>
              <div
                ref={ref8}
                className="cnumdash position_left point8 positioned"
                data-point={8}
                style={{ top: "2261.93px", left: "352.571px" }}
              >
                <span className="celement">
                  {/* 4.225.781 */}
                  {inView8 && <CountUp start={0} end={42} duration={1.7} />}
                </span>
                <span className="text">
                  Project hours <br />
                  experience
                </span>
              </div>
              <div
                ref={ref9}
                className="cnumdash counter_larger position_right point9 positioned"
                data-point={9}
                style={{ top: "2588.89px", left: "771.336px" }}
              >
                <span className="celement">
                  0{inView9 && <CountUp start={0} end={8} duration={1.7} />}
                </span>
                <span className="text">
                  Patents <br /> applied for
                </span>
              </div>
            </div>
          </div>

          <div className="depthdock">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <figure className="symbolwrap">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="138.817"
                  height="128.989"
                  viewBox="0 0 138.817 128.989"
                >
                  <defs>
                    <filter
                      id="solutionpath-icon"
                      x={0}
                      y={0}
                      width="138.817"
                      height="128.989"
                      filterUnits="userSpaceOnUse"
                    >
                      <feOffset dy={3} input="SourceAlpha" />
                      <feGaussianBlur stdDeviation={10} result="b" />
                      <feFlood floodColor="#fff" floodOpacity="0.557" />
                      <feComposite operator="in" in2="b" />
                      <feComposite in="SourceGraphic" />
                    </filter>
                  </defs>
                  <rect
                    fill="transparent"
                    strokeWidth={0}
                    strokeLinecap="null"
                    stroke="none"
                    width="78.8167"
                    height="69.0167"
                    x={30}
                    y={26}
                  />
                  <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="none">
                    <path
                      d="M58.873,33.165C53.788,24.916,41.471,3.051,39.719,0,32.431,12.938,24.8,25.029,18.7,37.855,13.164,49.437,20.17,63.393,32.318,67.574a20.6,20.6,0,0,0,4.52,1.243,35.063,35.063,0,0,0,6.949,0C59.268,66.161,68.026,48.081,58.873,33.165ZM49.042,57.686a14.752,14.752,0,0,1-17.854.452C25.764,54.3,23,46.895,25.933,40.906,30,32.487,34.917,24.521,39.776,15.876c4.8,8.418,9.548,16.215,13.616,24.295C56.5,46.217,54.3,53.505,49.042,57.686ZM25.368,68.365H0C1.864,65.37,4.52,61.3,6.328,58.251c2.26-3.842,4.463-7.74,7.119-12.317C14.181,55.6,18.249,62.545,25.368,68.365Zm53.449-.452H53.675c7.627-5.311,11.7-12.2,12.486-21.978C70.625,53.675,74.636,60.624,78.817,67.913Z"
                      transform="translate(30 27)"
                      fill="#fff"
                    />
                  </g>
                </svg> */}
               <img src={bottomanimation} alt="" className="w-[90px] h-[90px] pt-12 mt-8 opacity-85 mb-10" />
              </figure>
            </div>
            <h3 className="metatext">
              Are you already <strong>convinced of DENDRITES?</strong>
            </h3>
            <div className="arraowbtnholder">
              <a
                href="https://www.DENDRITES.com/en/inquiry.html"
                target="_SELF"
                className="button readybutton"
              >
                <FaArrowRightLong />{" "}
                <span style={{ maxWidth: "93.7815px" }}>I'm ready!</span>
              </a>
            </div>
            <div className="morezone">
              <a
                className="readmore"
                href="https://www.zeta.com/en/company/about-zeta.html"
              >
                No, I need more info!
              </a>
            </div>
          </div>
        </div>

        <div className="settingsglyph">
          <div className="settingsglyph-first">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="1176.3"
              height="1176.3"
              viewBox="0 0 1176.3 1176.3"
              style={{ enableBackground: "new 0 0 1176.3 1176.3" }}
              xmlSpace="preserve"
            >
              <path
                style={{
                  opacity: "0.05",
                  fill: "#FFFFFF",
                  enableBackground: "new",
                }}
                d="M1176.3,560.6v55.1c0,13.8-11.2,26.1-24.9,27.5l-46.3,4.4c-7.9,0.8-15.7,8.2-17,16.1
l-9.5,47.9c-2,8.1,2.3,17.9,9.4,21.7l40.8,22c12.2,6.5,17.8,22.2,12.4,35l-21.3,50.8c-5.6,13-20.1,19.7-33.6,15.7l-44.4-13.7
c-7.6-2.4-17.7,1.4-21.9,8.2l-24.6,36.7c-4.9,6.6-4.6,17.5,0.5,23.5l29.5,36c8.8,10.6,8,27.2-1.7,37.1l-39,38.9
c-9.7,9.7-26.4,10.6-37.1,1.9l-35.9-29.6c-6.2-5.1-16.9-5.3-23.5-0.6l-43.1,28.5c-7,4.3-11,14.3-8.7,22l13.1,44.4
c3.9,13.2-3.3,28.2-16.2,33.4l-51.1,20.6c-12.9,5.2-28.5-0.6-34.8-12.9l-21.4-41.2c-3.6-7-13.5-11.5-21.3-9.7l-40.8,7.9
c-8.1,1.2-15.4,8.9-16.2,17l-4.5,46.2c-1.4,13.7-13.7,24.9-27.5,24.9h-55c-13.8,0-26.1-11.2-27.5-24.9l-4.5-46.2
c-0.8-8-8.1-15.8-16-17l-48.3-9.6c-8.1-2-17.9,2.3-21.7,9.4l-22,40.8c-6.6,12.1-22.3,17.7-35,12.3l-50.8-21.3
c-12.7-5.3-19.8-20.4-15.7-33.6l13.7-44.4c2.4-7.5-1.4-17.7-8.2-21.8l-36.6-24.7c-6.6-4.9-17.3-4.6-23.6,0.5l-35.8,29.6
c-10.7,8.8-27.4,7.9-37.1-1.8l-39-38.9c-9.7-9.9-10.5-26.5-1.7-37.1l29.5-35.9c5.1-6.1,5.4-17,0.7-23.3l-25.3-37.8
c-4.3-7-14.3-10.8-21.9-8.4l-44.4,13.6c-13.2,4.1-28.3-3-33.7-15.8l-21.2-50.8c-5.3-12.8,0.3-28.4,12.4-35L88,732.3
c7-3.7,11.5-13.7,9.5-21.3l-9.3-47c-1.3-8.2-9.1-15.5-17.1-16.3l-46.3-4.4C11.2,641.9,0,629.6,0,615.8v-55.1
c0-13.8,11.2-26.1,24.9-27.5l46.3-4.4c7.9-0.8,15.7-8.2,17-16.1l9.5-48c2-7.9-2.5-17.9-9.4-21.7L47.6,421
c-12.2-6.5-17.8-22.2-12.5-35l21.3-50.8c5.5-12.8,20.6-19.8,33.7-15.7l44.3,13.7c7.7,2.4,17.6-1.4,21.8-8.2l24.7-36.8
c4.9-6.7,4.7-17.3-0.5-23.4l-29.5-36c-8.8-10.7-8-27.3,1.7-37.1l39-38.9c9.7-9.7,26.4-10.6,37.1-1.9l35.9,29.6
c6.2,5.1,16.9,5.3,23.5,0.6l43.1-28.5c7.1-4.3,11-14.3,8.7-22l-13.1-44.4c-3.9-13.4,3.3-28.3,16.2-33.4l51-20.6
c12.9-5.1,28.5,0.7,34.8,13l21.4,41.1c3.6,7.1,13.5,11.6,21.2,9.8l40.9-7.8c8.1-1.3,15.4-9,16.2-17l4.5-46.2
c1.4-13.8,13.7-25,27.5-25h55c13.8,0,26.1,11.2,27.5,25l4.5,46.2c0.8,8,8.1,15.8,16,17l48.3,9.7c8.1,2,17.9-2.3,21.7-9.4l22-40.8
c6.9-12.4,21.9-17.7,35-12.3l50.8,21.3c12.7,5.3,19.7,20.4,15.7,33.6l-13.7,44.3c-2.4,7.6,1.4,17.8,8.2,21.9l36.6,24.7
c6.6,4.9,17.3,4.6,23.6-0.5l35.8-29.6c10.7-8.8,27.4-7.9,37.1,1.8l39,38.9c9.8,9.8,10.6,26.4,1.7,37.1l-29.5,35.9
c-5.2,6.2-5.5,16.8-0.7,23.3l25.3,37.7c4.3,7.1,14.3,10.9,22,8.5l44.4-13.6c13.3-4.1,28.4,3,33.6,15.8l21.2,50.8
c5.3,12.8-0.3,28.5-12.5,35l-40.8,21.9c-7.1,3.7-11.4,13.5-9.5,21.3l9.3,47c1.3,8.2,9.1,15.5,17.1,16.3l46.3,4.4
C1165.2,534.5,1176.3,546.8,1176.3,560.6z M1065.8,715.9c0-2.3,0.3-4.6,0.8-6.8l9.4-47.5c2.1-13.2,14.4-24.8,27.9-26.1l46.3-4.4
c7.8-1,13.6-7.5,13.9-15.3v-55.1c-0.2-7.8-6.1-14.3-13.9-15.3l-46.3-4.4c-13.5-1.3-25.7-12.9-27.9-26.3l-9.2-46.5
c-3.2-13,3.7-28.4,15.7-34.7l40.8-21.9c6.7-3.6,10-12.6,7-19.5l-21.2-50.8c-3.2-7.2-11.2-10.9-18.8-8.8L1046,346
c-13,4-28.8-2-35.8-13.6l-25-37.2c-8-10.8-7.5-27.7,1.2-38.2l29.4-35.9c4.8-5.9,4.4-15.4-0.9-20.7l-39-38.9
c-5.7-5.4-14.5-5.8-20.7-1L919.4,190c-10.6,8.6-27.4,9.1-38.3,1.1L845,166.7c-11.3-6.8-17.3-22.9-13.3-35.8l13.7-44.2
c2.2-7.3-1.8-15.9-8.7-18.8l-50.8-21.3c-7.3-2.9-15.6,0-19.5,6.9l-22,40.8c-6.5,12-21.9,18.8-35.1,15.5l-47.7-9.5
c-13.1-2-24.7-14.3-26-27.9L631,26.2c-0.7-7.6-7.8-14-15.3-14h-55c-7.9,0.3-14.4,6.2-15.3,14l-4.5,46.2
c-1.3,13.5-12.9,25.7-26.3,27.8l-40.4,7.7c-13.1,3.1-28.4-3.9-34.6-16.1l-21.4-41.1c-3.5-6.7-12.3-10-19.4-7.2l-51,20.6
c-7.2,3.1-11.1,11-9,18.6l13.1,44.5c3.8,13.1-2.3,28.8-13.9,35.8l-42.6,28.2c-10.8,7.8-27.6,7.4-38.2-1.2l-35.8-29.6
c-6.2-4.8-15-4.3-20.7,1.1l-39,38.9c-5.4,5.7-5.8,14.5-0.9,20.7l29.5,35.9c8.7,10.4,9.2,27.3,1,38.3l-24.4,36.4
c-6.9,11.4-22.7,17.3-35.7,13.3l-44.4-13.7c-7.2-2.3-15.8,1.7-18.8,8.8l-21.3,50.8c-2.8,7.3,0.2,15.6,7,19.5l40.8,21.9
c11.8,6.4,18.8,22.1,15.5,35.1l-9.4,47.5c-2.1,13.2-14.4,24.8-27.9,26.1l-46.3,4.4c-7.8,1-13.6,7.5-13.9,15.3v55.1
c0.2,7.8,6.1,14.3,13.9,15.3l46.3,4.4c13.5,1.3,25.7,12.9,27.9,26.3l9.2,46.5c3.2,12.9-3.6,28.2-15.7,34.7l-40.9,21.9
c-6.8,4-9.7,12.2-6.9,19.6l21.2,50.8c3.2,7.2,11.2,10.9,18.8,8.8l44.4-13.6c13-4,28.7,1.9,35.8,13.5l25,37.3
c7.9,10.6,7.4,27.8-1.3,38.1l-29.4,35.9c-4.8,6.2-4.4,15,1,20.7l39,38.9c5.7,5.4,14.5,5.8,20.7,1l35.8-29.6
c10.6-8.6,27.4-9.1,38.3-1.1l36.1,24.4c11.3,6.8,17.4,22.9,13.3,35.7l-13.7,44.3c-2.2,7.3,1.8,15.9,8.7,18.8l50.8,21.3
c7.3,2.8,15.6-0.1,19.5-6.9l22-40.8c6.4-12,21.8-18.8,35.1-15.5l47.8,9.5c13.1,2,24.7,14.3,26,27.9l4.5,46.2
c1,7.8,7.5,13.7,15.3,13.9h55c7.8-0.2,14.3-6.1,15.3-13.9l4.5-46.2c1.3-13.7,12.9-25.9,26.3-27.8l40.3-7.8c13.1-3,28.4,4,34.6,16.1
l21.4,41.2c3.8,6.8,12,9.9,19.4,7.1l51.1-20.6c7.2-3.1,11-11,9-18.6l-13.1-44.5c-3.8-13.1,2.4-28.8,13.9-35.8l42.6-28.2
c10.8-7.8,27.6-7.4,38.1,1.2l35.9,29.6c6.2,4.8,15,4.3,20.7-1.1l39-38.9c5.3-5.7,5.7-14.5,0.9-20.7l-29.5-35.9
c-8.6-10.3-9.1-27.5-1-38.3l24.3-36.3c7-11.4,22.8-17.3,35.8-13.3l44.4,13.7c7.6,2.1,15.5-1.6,18.8-8.8l21.3-50.8
c2.8-7.3-0.2-15.6-7-19.5l-40.8-22C1072.2,738.8,1065.8,727.2,1065.8,715.9L1065.8,715.9z M998.2,574.6H836.6l-0.4-5.7
c-3.9-52.6-24.6-102.6-59.1-142.5l-3.7-4.3l114.4-114.4l4.3,4.7c63.8,70.4,101.2,160.7,105.9,255.6L998.2,574.6z M847.9,562.4h137.5
c-5.7-87.6-40.2-170.9-98.1-236.8l-97.3,97.3C822.8,462.6,842.9,511.2,847.9,562.4L847.9,562.4z M998.2,601.8l-0.3,6.4
c-4.6,94.9-42.1,185.2-105.9,255.6l-4.3,4.7L773.3,754.2l3.7-4.3c34.5-39.9,55.3-89.9,59.1-142.5l0.4-5.7L998.2,601.8z M887.2,850.8
c57.9-66,92.4-149.2,98.1-236.8H847.9c-4.9,51.3-25.1,99.9-57.9,139.5L887.2,850.8z M868.5,288.6L754.2,403l-4.3-3.7
c-39.9-34.5-89.9-55.2-142.6-59.1l-5.7-0.4V178.1l6.4,0.3c94.9,4.7,185.2,42.1,255.6,105.9L868.5,288.6z M753.5,386.4l97.2-97.3
c-66-57.9-149.2-92.4-236.8-98.1v137.6C665.2,333.4,713.8,353.6,753.5,386.4L753.5,386.4z M868.5,887.7l-4.7,4.3
C793.4,955.9,703,993.3,608.1,998l-6.4,0.3V836.6l5.7-0.4c52.6-3.9,102.6-24.6,142.6-59.1l4.3-3.7L868.5,887.7z M613.9,985.4
c87.6-5.7,170.9-40.2,236.8-98.2L753.5,790c-39.7,32.8-88.3,53-139.6,57.8L613.9,985.4z M820.1,574.6h-64.4l-0.6-5.4
c-3.5-31.3-15.8-61-35.6-85.5l-3.4-4.3l45.5-45.6l4.3,5.1c30.8,36.4,49.5,81.5,53.6,129L820.1,574.6z M766.6,562.4h40.1
c-4.7-40.4-20.6-78.6-45.9-110.4l-28.4,28.4C750.6,504.4,762.3,532.6,766.6,562.4L766.6,562.4z M820.1,601.8l-0.6,6.6
c-4.1,47.5-22.8,92.6-53.6,129l-4.3,5.1L716.1,697l3.4-4.3c19.7-24.5,32.1-54.2,35.6-85.5l0.6-5.4L820.1,601.8z M760.8,724.4
c25.3-31.8,41.1-70.1,45.9-110.4h-40.1c-4.3,29.8-16,58-34.1,82L760.8,724.4z M742.6,761.8l-5.1,4.3
c-36.5,30.7-81.6,49.4-129.1,53.5l-6.6,0.6v-64.3l5.4-0.6c31.3-3.4,61-15.8,85.6-35.6l4.3-3.4L742.6,761.8z M613.9,806.7
c40.4-4.7,78.6-20.6,110.5-45.8l-28.4-28.4c-24,18.2-52.3,29.9-82.1,34.1V806.7z M742.5,414.6L697,460.2l-4.3-3.4
c-24.6-19.8-54.3-32.1-85.6-35.6l-5.4-0.6v-64.3l6.6,0.6c47.5,4.1,92.6,22.7,129,53.5L742.5,414.6z M696.1,443.9l28.3-28.4
c-31.8-25.2-70.1-41.1-110.4-45.8v40C643.8,414,672,425.7,696.1,443.9L696.1,443.9z M720.4,588.2c0,6.9-0.5,13.8-1.6,20.7
c-5.5,34.6-24.5,65.6-52.9,86.2c-16.9,12.4-36.5,20.6-57.2,23.8c-13.7,2.1-27.6,2.1-41.2,0c-20.7-3.3-40.3-11.4-57.2-23.8
c-11.2-8.2-21-18-29.2-29.2c-20.6-28.4-29.2-63.8-23.7-98.4c3.3-20.6,11.4-40.2,23.6-57.1c8.2-11.1,18.1-20.9,29.2-29.1
c16.9-12.3,36.5-20.5,57.2-23.8c6.8-1.1,13.7-1.6,20.7-1.6c6.9,0,13.8,0.5,20.6,1.6c20.7,3.2,40.3,11.4,57.2,23.8
c28.4,20.6,47.4,51.6,52.8,86.3C719.9,574.4,720.5,581.3,720.4,588.2L720.4,588.2z M468.1,588.2c0,6.3,0.5,12.5,1.5,18.7
c2.9,18.7,10.3,36.5,21.5,51.8c7.4,10.2,16.4,19.1,26.5,26.5c15.3,11.2,33.1,18.6,51.9,21.6c12.4,1.9,25,2,37.3,0
c18.8-2.9,36.6-10.3,51.9-21.6c10.2-7.4,19.1-16.4,26.5-26.5c18.7-25.7,26.4-57.8,21.5-89.3c-3-18.8-10.4-36.6-21.5-52
c-7.4-10.1-16.4-19-26.5-26.4c-15.3-11.3-33.1-18.7-51.9-21.6c-6.2-1-12.4-1.5-18.6-1.5c-6.3,0-12.5,0.5-18.7,1.5l0,0
c-18.8,3-36.6,10.4-51.9,21.6c-10.1,7.4-19.1,16.4-26.6,26.5c-11.1,15.4-18.4,33.1-21.4,51.8C468.6,575.7,468.1,581.9,468.1,588.2
L468.1,588.2z M574.6,178.1v161.7l-5.7,0.4c-52.6,3.9-102.6,24.6-142.6,59.1l-4.3,3.7L307.9,288.6l4.7-4.3
c70.4-63.8,160.7-101.2,255.6-105.9L574.6,178.1z M562.4,328.6V191c-87.6,5.7-170.9,40.2-236.8,98.1l97.2,97.3
C462.5,353.6,511.2,333.4,562.4,328.6L562.4,328.6z M574.6,356.3v64.3l-5.4,0.6c-31.3,3.5-61,15.8-85.6,35.6l-4.3,3.4l-45.5-45.5
l5.1-4.3c36.4-30.7,81.5-49.5,129-53.6L574.6,356.3z M562.4,409.8v-40c-40.4,4.7-78.6,20.6-110.4,45.9l28.3,28.3
C504.4,425.8,532.6,414,562.4,409.8L562.4,409.8z M574.6,755.8v64.3l-6.6-0.6c-47.5-4.1-92.6-22.8-129-53.6l-5.1-4.3l45.5-45.5
l4.3,3.4c24.6,19.7,54.3,32.1,85.6,35.6L574.6,755.8z M562.4,806.7v-40c-29.8-4.3-58.1-16-82.1-34.1L452,760.8
C483.8,786.1,522.1,801.9,562.4,806.7L562.4,806.7z M574.6,836.6v161.7l-6.4-0.3c-94.9-4.6-185.3-42.1-255.6-106l-4.7-4.3
l114.3-114.3l4.3,3.7c40,34.5,89.9,55.2,142.6,59.1L574.6,836.6z M562.4,985.4V847.8c-51.3-4.9-99.9-25.1-139.6-57.8l-97.2,97.2
C391.5,945.2,474.8,979.7,562.4,985.4z M460.2,479.4l-3.4,4.3c-19.7,24.5-32.1,54.2-35.6,85.5l-0.6,5.4h-64.4l0.6-6.6
c4.1-47.5,22.8-92.6,53.6-129l4.3-5.1L460.2,479.4z M409.8,562.4c4.3-29.8,16-58,34.1-82L415.5,452c-25.3,31.8-41.1,70.1-45.9,110.4
H409.8z M460.2,697l-45.6,45.6l-4.3-5.1c-30.8-36.4-49.5-81.5-53.6-129l-0.6-6.6h64.4l0.6,5.4c3.5,31.3,15.8,61,35.6,85.5L460.2,697
z M415.5,724.4l28.4-28.4c-18.1-24-29.9-52.2-34.1-82h-40.1C374.4,654.4,390.3,692.6,415.5,724.4L415.5,724.4z M403,422.2l-3.7,4.3
c-34.5,39.9-55.3,89.9-59.2,142.5l-0.4,5.7H178.2l0.3-6.4c4.6-94.9,42.1-185.2,105.9-255.6l4.3-4.7L403,422.2z M328.5,562.4
c4.9-51.3,25.1-99.9,57.9-139.5l-97.3-97.3c-57.9,66-92.4,149.2-98.1,236.8H328.5z M403,754.2L288.6,868.6l-4.3-4.7
c-63.8-70.4-101.2-160.7-105.9-255.6l-0.3-6.4h161.6l0.4,5.7c3.9,52.6,24.6,102.6,59.2,142.5L403,754.2z M289.1,850.8l97.3-97.3
c-32.8-39.7-53-88.3-57.9-139.5H191C196.7,701.6,231.2,784.9,289.1,850.8L289.1,850.8z"
              />
            </svg>
          </div>
          <div className="settingsglyph-middle">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="1176.3"
              height="1176.3"
              viewBox="0 0 1176.3 1176.3"
              style={{ enableBackground: "new 0 0 1176.3 1176.3" }}
              xmlSpace="preserve"
            >
              <path
                style={{
                  opacity: "0.05",
                  fill: "#FFFFFF",
                  enableBackground: "new",
                }}
                d="M1176.3,560.6v55.1c0,13.8-11.2,26.1-24.9,27.5l-46.3,4.4c-7.9,0.8-15.7,8.2-17,16.1
l-9.5,47.9c-2,8.1,2.3,17.9,9.4,21.7l40.8,22c12.2,6.5,17.8,22.2,12.4,35l-21.3,50.8c-5.6,13-20.1,19.7-33.6,15.7l-44.4-13.7
c-7.6-2.4-17.7,1.4-21.9,8.2l-24.6,36.7c-4.9,6.6-4.6,17.5,0.5,23.5l29.5,36c8.8,10.6,8,27.2-1.7,37.1l-39,38.9
c-9.7,9.7-26.4,10.6-37.1,1.9l-35.9-29.6c-6.2-5.1-16.9-5.3-23.5-0.6l-43.1,28.5c-7,4.3-11,14.3-8.7,22l13.1,44.4
c3.9,13.2-3.3,28.2-16.2,33.4l-51.1,20.6c-12.9,5.2-28.5-0.6-34.8-12.9l-21.4-41.2c-3.6-7-13.5-11.5-21.3-9.7l-40.8,7.9
c-8.1,1.2-15.4,8.9-16.2,17l-4.5,46.2c-1.4,13.7-13.7,24.9-27.5,24.9h-55c-13.8,0-26.1-11.2-27.5-24.9l-4.5-46.2
c-0.8-8-8.1-15.8-16-17l-48.3-9.6c-8.1-2-17.9,2.3-21.7,9.4l-22,40.8c-6.6,12.1-22.3,17.7-35,12.3l-50.8-21.3
c-12.7-5.3-19.8-20.4-15.7-33.6l13.7-44.4c2.4-7.5-1.4-17.7-8.2-21.8l-36.6-24.7c-6.6-4.9-17.3-4.6-23.6,0.5l-35.8,29.6
c-10.7,8.8-27.4,7.9-37.1-1.8l-39-38.9c-9.7-9.9-10.5-26.5-1.7-37.1l29.5-35.9c5.1-6.1,5.4-17,0.7-23.3l-25.3-37.8
c-4.3-7-14.3-10.8-21.9-8.4l-44.4,13.6c-13.2,4.1-28.3-3-33.7-15.8l-21.2-50.8c-5.3-12.8,0.3-28.4,12.4-35L88,732.3
c7-3.7,11.5-13.7,9.5-21.3l-9.3-47c-1.3-8.2-9.1-15.5-17.1-16.3l-46.3-4.4C11.2,641.9,0,629.6,0,615.8v-55.1
c0-13.8,11.2-26.1,24.9-27.5l46.3-4.4c7.9-0.8,15.7-8.2,17-16.1l9.5-48c2-7.9-2.5-17.9-9.4-21.7L47.6,421
c-12.2-6.5-17.8-22.2-12.5-35l21.3-50.8c5.5-12.8,20.6-19.8,33.7-15.7l44.3,13.7c7.7,2.4,17.6-1.4,21.8-8.2l24.7-36.8
c4.9-6.7,4.7-17.3-0.5-23.4l-29.5-36c-8.8-10.7-8-27.3,1.7-37.1l39-38.9c9.7-9.7,26.4-10.6,37.1-1.9l35.9,29.6
c6.2,5.1,16.9,5.3,23.5,0.6l43.1-28.5c7.1-4.3,11-14.3,8.7-22l-13.1-44.4c-3.9-13.4,3.3-28.3,16.2-33.4l51-20.6
c12.9-5.1,28.5,0.7,34.8,13l21.4,41.1c3.6,7.1,13.5,11.6,21.2,9.8l40.9-7.8c8.1-1.3,15.4-9,16.2-17l4.5-46.2
c1.4-13.8,13.7-25,27.5-25h55c13.8,0,26.1,11.2,27.5,25l4.5,46.2c0.8,8,8.1,15.8,16,17l48.3,9.7c8.1,2,17.9-2.3,21.7-9.4l22-40.8
c6.9-12.4,21.9-17.7,35-12.3l50.8,21.3c12.7,5.3,19.7,20.4,15.7,33.6l-13.7,44.3c-2.4,7.6,1.4,17.8,8.2,21.9l36.6,24.7
c6.6,4.9,17.3,4.6,23.6-0.5l35.8-29.6c10.7-8.8,27.4-7.9,37.1,1.8l39,38.9c9.8,9.8,10.6,26.4,1.7,37.1l-29.5,35.9
c-5.2,6.2-5.5,16.8-0.7,23.3l25.3,37.7c4.3,7.1,14.3,10.9,22,8.5l44.4-13.6c13.3-4.1,28.4,3,33.6,15.8l21.2,50.8
c5.3,12.8-0.3,28.5-12.5,35l-40.8,21.9c-7.1,3.7-11.4,13.5-9.5,21.3l9.3,47c1.3,8.2,9.1,15.5,17.1,16.3l46.3,4.4
C1165.2,534.5,1176.3,546.8,1176.3,560.6z M1065.8,715.9c0-2.3,0.3-4.6,0.8-6.8l9.4-47.5c2.1-13.2,14.4-24.8,27.9-26.1l46.3-4.4
c7.8-1,13.6-7.5,13.9-15.3v-55.1c-0.2-7.8-6.1-14.3-13.9-15.3l-46.3-4.4c-13.5-1.3-25.7-12.9-27.9-26.3l-9.2-46.5
c-3.2-13,3.7-28.4,15.7-34.7l40.8-21.9c6.7-3.6,10-12.6,7-19.5l-21.2-50.8c-3.2-7.2-11.2-10.9-18.8-8.8L1046,346
c-13,4-28.8-2-35.8-13.6l-25-37.2c-8-10.8-7.5-27.7,1.2-38.2l29.4-35.9c4.8-5.9,4.4-15.4-0.9-20.7l-39-38.9
c-5.7-5.4-14.5-5.8-20.7-1L919.4,190c-10.6,8.6-27.4,9.1-38.3,1.1L845,166.7c-11.3-6.8-17.3-22.9-13.3-35.8l13.7-44.2
c2.2-7.3-1.8-15.9-8.7-18.8l-50.8-21.3c-7.3-2.9-15.6,0-19.5,6.9l-22,40.8c-6.5,12-21.9,18.8-35.1,15.5l-47.7-9.5
c-13.1-2-24.7-14.3-26-27.9L631,26.2c-0.7-7.6-7.8-14-15.3-14h-55c-7.9,0.3-14.4,6.2-15.3,14l-4.5,46.2
c-1.3,13.5-12.9,25.7-26.3,27.8l-40.4,7.7c-13.1,3.1-28.4-3.9-34.6-16.1l-21.4-41.1c-3.5-6.7-12.3-10-19.4-7.2l-51,20.6
c-7.2,3.1-11.1,11-9,18.6l13.1,44.5c3.8,13.1-2.3,28.8-13.9,35.8l-42.6,28.2c-10.8,7.8-27.6,7.4-38.2-1.2l-35.8-29.6
c-6.2-4.8-15-4.3-20.7,1.1l-39,38.9c-5.4,5.7-5.8,14.5-0.9,20.7l29.5,35.9c8.7,10.4,9.2,27.3,1,38.3l-24.4,36.4
c-6.9,11.4-22.7,17.3-35.7,13.3l-44.4-13.7c-7.2-2.3-15.8,1.7-18.8,8.8l-21.3,50.8c-2.8,7.3,0.2,15.6,7,19.5l40.8,21.9
c11.8,6.4,18.8,22.1,15.5,35.1l-9.4,47.5c-2.1,13.2-14.4,24.8-27.9,26.1l-46.3,4.4c-7.8,1-13.6,7.5-13.9,15.3v55.1
c0.2,7.8,6.1,14.3,13.9,15.3l46.3,4.4c13.5,1.3,25.7,12.9,27.9,26.3l9.2,46.5c3.2,12.9-3.6,28.2-15.7,34.7l-40.9,21.9
c-6.8,4-9.7,12.2-6.9,19.6l21.2,50.8c3.2,7.2,11.2,10.9,18.8,8.8l44.4-13.6c13-4,28.7,1.9,35.8,13.5l25,37.3
c7.9,10.6,7.4,27.8-1.3,38.1l-29.4,35.9c-4.8,6.2-4.4,15,1,20.7l39,38.9c5.7,5.4,14.5,5.8,20.7,1l35.8-29.6
c10.6-8.6,27.4-9.1,38.3-1.1l36.1,24.4c11.3,6.8,17.4,22.9,13.3,35.7l-13.7,44.3c-2.2,7.3,1.8,15.9,8.7,18.8l50.8,21.3
c7.3,2.8,15.6-0.1,19.5-6.9l22-40.8c6.4-12,21.8-18.8,35.1-15.5l47.8,9.5c13.1,2,24.7,14.3,26,27.9l4.5,46.2
c1,7.8,7.5,13.7,15.3,13.9h55c7.8-0.2,14.3-6.1,15.3-13.9l4.5-46.2c1.3-13.7,12.9-25.9,26.3-27.8l40.3-7.8c13.1-3,28.4,4,34.6,16.1
l21.4,41.2c3.8,6.8,12,9.9,19.4,7.1l51.1-20.6c7.2-3.1,11-11,9-18.6l-13.1-44.5c-3.8-13.1,2.4-28.8,13.9-35.8l42.6-28.2
c10.8-7.8,27.6-7.4,38.1,1.2l35.9,29.6c6.2,4.8,15,4.3,20.7-1.1l39-38.9c5.3-5.7,5.7-14.5,0.9-20.7l-29.5-35.9
c-8.6-10.3-9.1-27.5-1-38.3l24.3-36.3c7-11.4,22.8-17.3,35.8-13.3l44.4,13.7c7.6,2.1,15.5-1.6,18.8-8.8l21.3-50.8
c2.8-7.3-0.2-15.6-7-19.5l-40.8-22C1072.2,738.8,1065.8,727.2,1065.8,715.9L1065.8,715.9z M998.2,574.6H836.6l-0.4-5.7
c-3.9-52.6-24.6-102.6-59.1-142.5l-3.7-4.3l114.4-114.4l4.3,4.7c63.8,70.4,101.2,160.7,105.9,255.6L998.2,574.6z M847.9,562.4h137.5
c-5.7-87.6-40.2-170.9-98.1-236.8l-97.3,97.3C822.8,462.6,842.9,511.2,847.9,562.4L847.9,562.4z M998.2,601.8l-0.3,6.4
c-4.6,94.9-42.1,185.2-105.9,255.6l-4.3,4.7L773.3,754.2l3.7-4.3c34.5-39.9,55.3-89.9,59.1-142.5l0.4-5.7L998.2,601.8z M887.2,850.8
c57.9-66,92.4-149.2,98.1-236.8H847.9c-4.9,51.3-25.1,99.9-57.9,139.5L887.2,850.8z M868.5,288.6L754.2,403l-4.3-3.7
c-39.9-34.5-89.9-55.2-142.6-59.1l-5.7-0.4V178.1l6.4,0.3c94.9,4.7,185.2,42.1,255.6,105.9L868.5,288.6z M753.5,386.4l97.2-97.3
c-66-57.9-149.2-92.4-236.8-98.1v137.6C665.2,333.4,713.8,353.6,753.5,386.4L753.5,386.4z M868.5,887.7l-4.7,4.3
C793.4,955.9,703,993.3,608.1,998l-6.4,0.3V836.6l5.7-0.4c52.6-3.9,102.6-24.6,142.6-59.1l4.3-3.7L868.5,887.7z M613.9,985.4
c87.6-5.7,170.9-40.2,236.8-98.2L753.5,790c-39.7,32.8-88.3,53-139.6,57.8L613.9,985.4z M820.1,574.6h-64.4l-0.6-5.4
c-3.5-31.3-15.8-61-35.6-85.5l-3.4-4.3l45.5-45.6l4.3,5.1c30.8,36.4,49.5,81.5,53.6,129L820.1,574.6z M766.6,562.4h40.1
c-4.7-40.4-20.6-78.6-45.9-110.4l-28.4,28.4C750.6,504.4,762.3,532.6,766.6,562.4L766.6,562.4z M820.1,601.8l-0.6,6.6
c-4.1,47.5-22.8,92.6-53.6,129l-4.3,5.1L716.1,697l3.4-4.3c19.7-24.5,32.1-54.2,35.6-85.5l0.6-5.4L820.1,601.8z M760.8,724.4
c25.3-31.8,41.1-70.1,45.9-110.4h-40.1c-4.3,29.8-16,58-34.1,82L760.8,724.4z M742.6,761.8l-5.1,4.3
c-36.5,30.7-81.6,49.4-129.1,53.5l-6.6,0.6v-64.3l5.4-0.6c31.3-3.4,61-15.8,85.6-35.6l4.3-3.4L742.6,761.8z M613.9,806.7
c40.4-4.7,78.6-20.6,110.5-45.8l-28.4-28.4c-24,18.2-52.3,29.9-82.1,34.1V806.7z M742.5,414.6L697,460.2l-4.3-3.4
c-24.6-19.8-54.3-32.1-85.6-35.6l-5.4-0.6v-64.3l6.6,0.6c47.5,4.1,92.6,22.7,129,53.5L742.5,414.6z M696.1,443.9l28.3-28.4
c-31.8-25.2-70.1-41.1-110.4-45.8v40C643.8,414,672,425.7,696.1,443.9L696.1,443.9z M720.4,588.2c0,6.9-0.5,13.8-1.6,20.7
c-5.5,34.6-24.5,65.6-52.9,86.2c-16.9,12.4-36.5,20.6-57.2,23.8c-13.7,2.1-27.6,2.1-41.2,0c-20.7-3.3-40.3-11.4-57.2-23.8
c-11.2-8.2-21-18-29.2-29.2c-20.6-28.4-29.2-63.8-23.7-98.4c3.3-20.6,11.4-40.2,23.6-57.1c8.2-11.1,18.1-20.9,29.2-29.1
c16.9-12.3,36.5-20.5,57.2-23.8c6.8-1.1,13.7-1.6,20.7-1.6c6.9,0,13.8,0.5,20.6,1.6c20.7,3.2,40.3,11.4,57.2,23.8
c28.4,20.6,47.4,51.6,52.8,86.3C719.9,574.4,720.5,581.3,720.4,588.2L720.4,588.2z M468.1,588.2c0,6.3,0.5,12.5,1.5,18.7
c2.9,18.7,10.3,36.5,21.5,51.8c7.4,10.2,16.4,19.1,26.5,26.5c15.3,11.2,33.1,18.6,51.9,21.6c12.4,1.9,25,2,37.3,0
c18.8-2.9,36.6-10.3,51.9-21.6c10.2-7.4,19.1-16.4,26.5-26.5c18.7-25.7,26.4-57.8,21.5-89.3c-3-18.8-10.4-36.6-21.5-52
c-7.4-10.1-16.4-19-26.5-26.4c-15.3-11.3-33.1-18.7-51.9-21.6c-6.2-1-12.4-1.5-18.6-1.5c-6.3,0-12.5,0.5-18.7,1.5l0,0
c-18.8,3-36.6,10.4-51.9,21.6c-10.1,7.4-19.1,16.4-26.6,26.5c-11.1,15.4-18.4,33.1-21.4,51.8C468.6,575.7,468.1,581.9,468.1,588.2
L468.1,588.2z M574.6,178.1v161.7l-5.7,0.4c-52.6,3.9-102.6,24.6-142.6,59.1l-4.3,3.7L307.9,288.6l4.7-4.3
c70.4-63.8,160.7-101.2,255.6-105.9L574.6,178.1z M562.4,328.6V191c-87.6,5.7-170.9,40.2-236.8,98.1l97.2,97.3
C462.5,353.6,511.2,333.4,562.4,328.6L562.4,328.6z M574.6,356.3v64.3l-5.4,0.6c-31.3,3.5-61,15.8-85.6,35.6l-4.3,3.4l-45.5-45.5
l5.1-4.3c36.4-30.7,81.5-49.5,129-53.6L574.6,356.3z M562.4,409.8v-40c-40.4,4.7-78.6,20.6-110.4,45.9l28.3,28.3
C504.4,425.8,532.6,414,562.4,409.8L562.4,409.8z M574.6,755.8v64.3l-6.6-0.6c-47.5-4.1-92.6-22.8-129-53.6l-5.1-4.3l45.5-45.5
l4.3,3.4c24.6,19.7,54.3,32.1,85.6,35.6L574.6,755.8z M562.4,806.7v-40c-29.8-4.3-58.1-16-82.1-34.1L452,760.8
C483.8,786.1,522.1,801.9,562.4,806.7L562.4,806.7z M574.6,836.6v161.7l-6.4-0.3c-94.9-4.6-185.3-42.1-255.6-106l-4.7-4.3
l114.3-114.3l4.3,3.7c40,34.5,89.9,55.2,142.6,59.1L574.6,836.6z M562.4,985.4V847.8c-51.3-4.9-99.9-25.1-139.6-57.8l-97.2,97.2
C391.5,945.2,474.8,979.7,562.4,985.4z M460.2,479.4l-3.4,4.3c-19.7,24.5-32.1,54.2-35.6,85.5l-0.6,5.4h-64.4l0.6-6.6
c4.1-47.5,22.8-92.6,53.6-129l4.3-5.1L460.2,479.4z M409.8,562.4c4.3-29.8,16-58,34.1-82L415.5,452c-25.3,31.8-41.1,70.1-45.9,110.4
H409.8z M460.2,697l-45.6,45.6l-4.3-5.1c-30.8-36.4-49.5-81.5-53.6-129l-0.6-6.6h64.4l0.6,5.4c3.5,31.3,15.8,61,35.6,85.5L460.2,697
z M415.5,724.4l28.4-28.4c-18.1-24-29.9-52.2-34.1-82h-40.1C374.4,654.4,390.3,692.6,415.5,724.4L415.5,724.4z M403,422.2l-3.7,4.3
c-34.5,39.9-55.3,89.9-59.2,142.5l-0.4,5.7H178.2l0.3-6.4c4.6-94.9,42.1-185.2,105.9-255.6l4.3-4.7L403,422.2z M328.5,562.4
c4.9-51.3,25.1-99.9,57.9-139.5l-97.3-97.3c-57.9,66-92.4,149.2-98.1,236.8H328.5z M403,754.2L288.6,868.6l-4.3-4.7
c-63.8-70.4-101.2-160.7-105.9-255.6l-0.3-6.4h161.6l0.4,5.7c3.9,52.6,24.6,102.6,59.2,142.5L403,754.2z M289.1,850.8l97.3-97.3
c-32.8-39.7-53-88.3-57.9-139.5H191C196.7,701.6,231.2,784.9,289.1,850.8L289.1,850.8z"
              />
            </svg>
          </div>
          <div className="settingsglyph-last">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="1176.3"
              height="1176.3"
              viewBox="0 0 1176.3 1176.3"
              style={{ enableBackground: "new 0 0 1176.3 1176.3" }}
              xmlSpace="preserve"
            >
              <path
                style={{
                  opacity: "0.05",
                  fill: "#FFFFFF",
                  enableBackground: "new",
                }}
                d="M1176.3,560.6v55.1c0,13.8-11.2,26.1-24.9,27.5l-46.3,4.4c-7.9,0.8-15.7,8.2-17,16.1
l-9.5,47.9c-2,8.1,2.3,17.9,9.4,21.7l40.8,22c12.2,6.5,17.8,22.2,12.4,35l-21.3,50.8c-5.6,13-20.1,19.7-33.6,15.7l-44.4-13.7
c-7.6-2.4-17.7,1.4-21.9,8.2l-24.6,36.7c-4.9,6.6-4.6,17.5,0.5,23.5l29.5,36c8.8,10.6,8,27.2-1.7,37.1l-39,38.9
c-9.7,9.7-26.4,10.6-37.1,1.9l-35.9-29.6c-6.2-5.1-16.9-5.3-23.5-0.6l-43.1,28.5c-7,4.3-11,14.3-8.7,22l13.1,44.4
c3.9,13.2-3.3,28.2-16.2,33.4l-51.1,20.6c-12.9,5.2-28.5-0.6-34.8-12.9l-21.4-41.2c-3.6-7-13.5-11.5-21.3-9.7l-40.8,7.9
c-8.1,1.2-15.4,8.9-16.2,17l-4.5,46.2c-1.4,13.7-13.7,24.9-27.5,24.9h-55c-13.8,0-26.1-11.2-27.5-24.9l-4.5-46.2
c-0.8-8-8.1-15.8-16-17l-48.3-9.6c-8.1-2-17.9,2.3-21.7,9.4l-22,40.8c-6.6,12.1-22.3,17.7-35,12.3l-50.8-21.3
c-12.7-5.3-19.8-20.4-15.7-33.6l13.7-44.4c2.4-7.5-1.4-17.7-8.2-21.8l-36.6-24.7c-6.6-4.9-17.3-4.6-23.6,0.5l-35.8,29.6
c-10.7,8.8-27.4,7.9-37.1-1.8l-39-38.9c-9.7-9.9-10.5-26.5-1.7-37.1l29.5-35.9c5.1-6.1,5.4-17,0.7-23.3l-25.3-37.8
c-4.3-7-14.3-10.8-21.9-8.4l-44.4,13.6c-13.2,4.1-28.3-3-33.7-15.8l-21.2-50.8c-5.3-12.8,0.3-28.4,12.4-35L88,732.3
c7-3.7,11.5-13.7,9.5-21.3l-9.3-47c-1.3-8.2-9.1-15.5-17.1-16.3l-46.3-4.4C11.2,641.9,0,629.6,0,615.8v-55.1
c0-13.8,11.2-26.1,24.9-27.5l46.3-4.4c7.9-0.8,15.7-8.2,17-16.1l9.5-48c2-7.9-2.5-17.9-9.4-21.7L47.6,421
c-12.2-6.5-17.8-22.2-12.5-35l21.3-50.8c5.5-12.8,20.6-19.8,33.7-15.7l44.3,13.7c7.7,2.4,17.6-1.4,21.8-8.2l24.7-36.8
c4.9-6.7,4.7-17.3-0.5-23.4l-29.5-36c-8.8-10.7-8-27.3,1.7-37.1l39-38.9c9.7-9.7,26.4-10.6,37.1-1.9l35.9,29.6
c6.2,5.1,16.9,5.3,23.5,0.6l43.1-28.5c7.1-4.3,11-14.3,8.7-22l-13.1-44.4c-3.9-13.4,3.3-28.3,16.2-33.4l51-20.6
c12.9-5.1,28.5,0.7,34.8,13l21.4,41.1c3.6,7.1,13.5,11.6,21.2,9.8l40.9-7.8c8.1-1.3,15.4-9,16.2-17l4.5-46.2
c1.4-13.8,13.7-25,27.5-25h55c13.8,0,26.1,11.2,27.5,25l4.5,46.2c0.8,8,8.1,15.8,16,17l48.3,9.7c8.1,2,17.9-2.3,21.7-9.4l22-40.8
c6.9-12.4,21.9-17.7,35-12.3l50.8,21.3c12.7,5.3,19.7,20.4,15.7,33.6l-13.7,44.3c-2.4,7.6,1.4,17.8,8.2,21.9l36.6,24.7
c6.6,4.9,17.3,4.6,23.6-0.5l35.8-29.6c10.7-8.8,27.4-7.9,37.1,1.8l39,38.9c9.8,9.8,10.6,26.4,1.7,37.1l-29.5,35.9
c-5.2,6.2-5.5,16.8-0.7,23.3l25.3,37.7c4.3,7.1,14.3,10.9,22,8.5l44.4-13.6c13.3-4.1,28.4,3,33.6,15.8l21.2,50.8
c5.3,12.8-0.3,28.5-12.5,35l-40.8,21.9c-7.1,3.7-11.4,13.5-9.5,21.3l9.3,47c1.3,8.2,9.1,15.5,17.1,16.3l46.3,4.4
C1165.2,534.5,1176.3,546.8,1176.3,560.6z M1065.8,715.9c0-2.3,0.3-4.6,0.8-6.8l9.4-47.5c2.1-13.2,14.4-24.8,27.9-26.1l46.3-4.4
c7.8-1,13.6-7.5,13.9-15.3v-55.1c-0.2-7.8-6.1-14.3-13.9-15.3l-46.3-4.4c-13.5-1.3-25.7-12.9-27.9-26.3l-9.2-46.5
c-3.2-13,3.7-28.4,15.7-34.7l40.8-21.9c6.7-3.6,10-12.6,7-19.5l-21.2-50.8c-3.2-7.2-11.2-10.9-18.8-8.8L1046,346
c-13,4-28.8-2-35.8-13.6l-25-37.2c-8-10.8-7.5-27.7,1.2-38.2l29.4-35.9c4.8-5.9,4.4-15.4-0.9-20.7l-39-38.9
c-5.7-5.4-14.5-5.8-20.7-1L919.4,190c-10.6,8.6-27.4,9.1-38.3,1.1L845,166.7c-11.3-6.8-17.3-22.9-13.3-35.8l13.7-44.2
c2.2-7.3-1.8-15.9-8.7-18.8l-50.8-21.3c-7.3-2.9-15.6,0-19.5,6.9l-22,40.8c-6.5,12-21.9,18.8-35.1,15.5l-47.7-9.5
c-13.1-2-24.7-14.3-26-27.9L631,26.2c-0.7-7.6-7.8-14-15.3-14h-55c-7.9,0.3-14.4,6.2-15.3,14l-4.5,46.2
c-1.3,13.5-12.9,25.7-26.3,27.8l-40.4,7.7c-13.1,3.1-28.4-3.9-34.6-16.1l-21.4-41.1c-3.5-6.7-12.3-10-19.4-7.2l-51,20.6
c-7.2,3.1-11.1,11-9,18.6l13.1,44.5c3.8,13.1-2.3,28.8-13.9,35.8l-42.6,28.2c-10.8,7.8-27.6,7.4-38.2-1.2l-35.8-29.6
c-6.2-4.8-15-4.3-20.7,1.1l-39,38.9c-5.4,5.7-5.8,14.5-0.9,20.7l29.5,35.9c8.7,10.4,9.2,27.3,1,38.3l-24.4,36.4
c-6.9,11.4-22.7,17.3-35.7,13.3l-44.4-13.7c-7.2-2.3-15.8,1.7-18.8,8.8l-21.3,50.8c-2.8,7.3,0.2,15.6,7,19.5l40.8,21.9
c11.8,6.4,18.8,22.1,15.5,35.1l-9.4,47.5c-2.1,13.2-14.4,24.8-27.9,26.1l-46.3,4.4c-7.8,1-13.6,7.5-13.9,15.3v55.1
c0.2,7.8,6.1,14.3,13.9,15.3l46.3,4.4c13.5,1.3,25.7,12.9,27.9,26.3l9.2,46.5c3.2,12.9-3.6,28.2-15.7,34.7l-40.9,21.9
c-6.8,4-9.7,12.2-6.9,19.6l21.2,50.8c3.2,7.2,11.2,10.9,18.8,8.8l44.4-13.6c13-4,28.7,1.9,35.8,13.5l25,37.3
c7.9,10.6,7.4,27.8-1.3,38.1l-29.4,35.9c-4.8,6.2-4.4,15,1,20.7l39,38.9c5.7,5.4,14.5,5.8,20.7,1l35.8-29.6
c10.6-8.6,27.4-9.1,38.3-1.1l36.1,24.4c11.3,6.8,17.4,22.9,13.3,35.7l-13.7,44.3c-2.2,7.3,1.8,15.9,8.7,18.8l50.8,21.3
c7.3,2.8,15.6-0.1,19.5-6.9l22-40.8c6.4-12,21.8-18.8,35.1-15.5l47.8,9.5c13.1,2,24.7,14.3,26,27.9l4.5,46.2
c1,7.8,7.5,13.7,15.3,13.9h55c7.8-0.2,14.3-6.1,15.3-13.9l4.5-46.2c1.3-13.7,12.9-25.9,26.3-27.8l40.3-7.8c13.1-3,28.4,4,34.6,16.1
l21.4,41.2c3.8,6.8,12,9.9,19.4,7.1l51.1-20.6c7.2-3.1,11-11,9-18.6l-13.1-44.5c-3.8-13.1,2.4-28.8,13.9-35.8l42.6-28.2
c10.8-7.8,27.6-7.4,38.1,1.2l35.9,29.6c6.2,4.8,15,4.3,20.7-1.1l39-38.9c5.3-5.7,5.7-14.5,0.9-20.7l-29.5-35.9
c-8.6-10.3-9.1-27.5-1-38.3l24.3-36.3c7-11.4,22.8-17.3,35.8-13.3l44.4,13.7c7.6,2.1,15.5-1.6,18.8-8.8l21.3-50.8
c2.8-7.3-0.2-15.6-7-19.5l-40.8-22C1072.2,738.8,1065.8,727.2,1065.8,715.9L1065.8,715.9z M998.2,574.6H836.6l-0.4-5.7
c-3.9-52.6-24.6-102.6-59.1-142.5l-3.7-4.3l114.4-114.4l4.3,4.7c63.8,70.4,101.2,160.7,105.9,255.6L998.2,574.6z M847.9,562.4h137.5
c-5.7-87.6-40.2-170.9-98.1-236.8l-97.3,97.3C822.8,462.6,842.9,511.2,847.9,562.4L847.9,562.4z M998.2,601.8l-0.3,6.4
c-4.6,94.9-42.1,185.2-105.9,255.6l-4.3,4.7L773.3,754.2l3.7-4.3c34.5-39.9,55.3-89.9,59.1-142.5l0.4-5.7L998.2,601.8z M887.2,850.8
c57.9-66,92.4-149.2,98.1-236.8H847.9c-4.9,51.3-25.1,99.9-57.9,139.5L887.2,850.8z M868.5,288.6L754.2,403l-4.3-3.7
c-39.9-34.5-89.9-55.2-142.6-59.1l-5.7-0.4V178.1l6.4,0.3c94.9,4.7,185.2,42.1,255.6,105.9L868.5,288.6z M753.5,386.4l97.2-97.3
c-66-57.9-149.2-92.4-236.8-98.1v137.6C665.2,333.4,713.8,353.6,753.5,386.4L753.5,386.4z M868.5,887.7l-4.7,4.3
C793.4,955.9,703,993.3,608.1,998l-6.4,0.3V836.6l5.7-0.4c52.6-3.9,102.6-24.6,142.6-59.1l4.3-3.7L868.5,887.7z M613.9,985.4
c87.6-5.7,170.9-40.2,236.8-98.2L753.5,790c-39.7,32.8-88.3,53-139.6,57.8L613.9,985.4z M820.1,574.6h-64.4l-0.6-5.4
c-3.5-31.3-15.8-61-35.6-85.5l-3.4-4.3l45.5-45.6l4.3,5.1c30.8,36.4,49.5,81.5,53.6,129L820.1,574.6z M766.6,562.4h40.1
c-4.7-40.4-20.6-78.6-45.9-110.4l-28.4,28.4C750.6,504.4,762.3,532.6,766.6,562.4L766.6,562.4z M820.1,601.8l-0.6,6.6
c-4.1,47.5-22.8,92.6-53.6,129l-4.3,5.1L716.1,697l3.4-4.3c19.7-24.5,32.1-54.2,35.6-85.5l0.6-5.4L820.1,601.8z M760.8,724.4
c25.3-31.8,41.1-70.1,45.9-110.4h-40.1c-4.3,29.8-16,58-34.1,82L760.8,724.4z M742.6,761.8l-5.1,4.3
c-36.5,30.7-81.6,49.4-129.1,53.5l-6.6,0.6v-64.3l5.4-0.6c31.3-3.4,61-15.8,85.6-35.6l4.3-3.4L742.6,761.8z M613.9,806.7
c40.4-4.7,78.6-20.6,110.5-45.8l-28.4-28.4c-24,18.2-52.3,29.9-82.1,34.1V806.7z M742.5,414.6L697,460.2l-4.3-3.4
c-24.6-19.8-54.3-32.1-85.6-35.6l-5.4-0.6v-64.3l6.6,0.6c47.5,4.1,92.6,22.7,129,53.5L742.5,414.6z M696.1,443.9l28.3-28.4
c-31.8-25.2-70.1-41.1-110.4-45.8v40C643.8,414,672,425.7,696.1,443.9L696.1,443.9z M720.4,588.2c0,6.9-0.5,13.8-1.6,20.7
c-5.5,34.6-24.5,65.6-52.9,86.2c-16.9,12.4-36.5,20.6-57.2,23.8c-13.7,2.1-27.6,2.1-41.2,0c-20.7-3.3-40.3-11.4-57.2-23.8
c-11.2-8.2-21-18-29.2-29.2c-20.6-28.4-29.2-63.8-23.7-98.4c3.3-20.6,11.4-40.2,23.6-57.1c8.2-11.1,18.1-20.9,29.2-29.1
c16.9-12.3,36.5-20.5,57.2-23.8c6.8-1.1,13.7-1.6,20.7-1.6c6.9,0,13.8,0.5,20.6,1.6c20.7,3.2,40.3,11.4,57.2,23.8
c28.4,20.6,47.4,51.6,52.8,86.3C719.9,574.4,720.5,581.3,720.4,588.2L720.4,588.2z M468.1,588.2c0,6.3,0.5,12.5,1.5,18.7
c2.9,18.7,10.3,36.5,21.5,51.8c7.4,10.2,16.4,19.1,26.5,26.5c15.3,11.2,33.1,18.6,51.9,21.6c12.4,1.9,25,2,37.3,0
c18.8-2.9,36.6-10.3,51.9-21.6c10.2-7.4,19.1-16.4,26.5-26.5c18.7-25.7,26.4-57.8,21.5-89.3c-3-18.8-10.4-36.6-21.5-52
c-7.4-10.1-16.4-19-26.5-26.4c-15.3-11.3-33.1-18.7-51.9-21.6c-6.2-1-12.4-1.5-18.6-1.5c-6.3,0-12.5,0.5-18.7,1.5l0,0
c-18.8,3-36.6,10.4-51.9,21.6c-10.1,7.4-19.1,16.4-26.6,26.5c-11.1,15.4-18.4,33.1-21.4,51.8C468.6,575.7,468.1,581.9,468.1,588.2
L468.1,588.2z M574.6,178.1v161.7l-5.7,0.4c-52.6,3.9-102.6,24.6-142.6,59.1l-4.3,3.7L307.9,288.6l4.7-4.3
c70.4-63.8,160.7-101.2,255.6-105.9L574.6,178.1z M562.4,328.6V191c-87.6,5.7-170.9,40.2-236.8,98.1l97.2,97.3
C462.5,353.6,511.2,333.4,562.4,328.6L562.4,328.6z M574.6,356.3v64.3l-5.4,0.6c-31.3,3.5-61,15.8-85.6,35.6l-4.3,3.4l-45.5-45.5
l5.1-4.3c36.4-30.7,81.5-49.5,129-53.6L574.6,356.3z M562.4,409.8v-40c-40.4,4.7-78.6,20.6-110.4,45.9l28.3,28.3
C504.4,425.8,532.6,414,562.4,409.8L562.4,409.8z M574.6,755.8v64.3l-6.6-0.6c-47.5-4.1-92.6-22.8-129-53.6l-5.1-4.3l45.5-45.5
l4.3,3.4c24.6,19.7,54.3,32.1,85.6,35.6L574.6,755.8z M562.4,806.7v-40c-29.8-4.3-58.1-16-82.1-34.1L452,760.8
C483.8,786.1,522.1,801.9,562.4,806.7L562.4,806.7z M574.6,836.6v161.7l-6.4-0.3c-94.9-4.6-185.3-42.1-255.6-106l-4.7-4.3
l114.3-114.3l4.3,3.7c40,34.5,89.9,55.2,142.6,59.1L574.6,836.6z M562.4,985.4V847.8c-51.3-4.9-99.9-25.1-139.6-57.8l-97.2,97.2
C391.5,945.2,474.8,979.7,562.4,985.4z M460.2,479.4l-3.4,4.3c-19.7,24.5-32.1,54.2-35.6,85.5l-0.6,5.4h-64.4l0.6-6.6
c4.1-47.5,22.8-92.6,53.6-129l4.3-5.1L460.2,479.4z M409.8,562.4c4.3-29.8,16-58,34.1-82L415.5,452c-25.3,31.8-41.1,70.1-45.9,110.4
H409.8z M460.2,697l-45.6,45.6l-4.3-5.1c-30.8-36.4-49.5-81.5-53.6-129l-0.6-6.6h64.4l0.6,5.4c3.5,31.3,15.8,61,35.6,85.5L460.2,697
z M415.5,724.4l28.4-28.4c-18.1-24-29.9-52.2-34.1-82h-40.1C374.4,654.4,390.3,692.6,415.5,724.4L415.5,724.4z M403,422.2l-3.7,4.3
c-34.5,39.9-55.3,89.9-59.2,142.5l-0.4,5.7H178.2l0.3-6.4c4.6-94.9,42.1-185.2,105.9-255.6l4.3-4.7L403,422.2z M328.5,562.4
c4.9-51.3,25.1-99.9,57.9-139.5l-97.3-97.3c-57.9,66-92.4,149.2-98.1,236.8H328.5z M403,754.2L288.6,868.6l-4.3-4.7
c-63.8-70.4-101.2-160.7-105.9-255.6l-0.3-6.4h161.6l0.4,5.7c3.9,52.6,24.6,102.6,59.2,142.5L403,754.2z M289.1,850.8l97.3-97.3
c-32.8-39.7-53-88.3-57.9-139.5H191C196.7,701.6,231.2,784.9,289.1,850.8L289.1,850.8z"
              />
            </svg>
          </div>
        </div>
      </div>

      <MobileHomeAnimation />
    </div>
  );
};

export default HomeAnimatedSection;
