// import logo from "./logo.svg";
import "@fontsource/ubuntu"; // Defaults to weight 400
import "@fontsource/ubuntu/400.css"; // Specify weight
import "@fontsource/ubuntu/400-italic.css"; // Specify weight and style
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { RouteData } from "./Routes/Routes";
import LeftButtom from "./views/home/LeftButtom";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Services from "./views/Modals/Services";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "./redux/ModalSlice";
import ModalOf from "./views/Modals/ModalOf";

function App() {
  const dispatch = useDispatch();
  const {modalContent, isModalOpen, modalData} = useSelector((state) => state.modal);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (modalContent) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }

    // Cleanup on component unmount or when modal content changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalContent]);

  // Render the correct modal based on `modalContent`
  // const renderModal = () => {
  //   switch (modalContent) {
  //     case "Services":
  //       return <Services onClose={() => dispatch(closeModal())} />; 
  //     case "Solutions":
  //       return <Solutions onClose={() => dispatch(closeModal())} />;
  //     case "Innovation":
  //       return <Innovation onClose={() => dispatch(closeModal())} />;
  //     case "Company":
  //       return <Company onClose={() => dispatch(closeModal())} />;
  //     case "Jobs":
  //       return <Jobs onClose={() => dispatch(closeModal())} />;
  //     case "Search":
  //       return <Search onClose={() => dispatch(closeModal())} />;
  //     case "NewsRoom":
  //       return <NewsRoom onClose={() => dispatch(closeModal())} />;
  //     default:
  //       return null;
  //   }
  // };

   // Extract the data for the currently active modal
   const currentModalData = modalData[modalContent] || {};

  return (
    <>
      <div
        className={`transition-all duration-2000 bg-[#0f3353] ${
          modalContent ? "blur-md bg-opacity-50 bg-[#0f3353]" : "blur-none opacity-100"
        }`}
      >
      <Routes>
        {RouteData?.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <LeftButtom />
      </div>

      {/* Render Modal */}
      {/* {modalContent && (
        <div className="fixed inset-0 z-50">{renderModal()}</div>
      )} */}
      {isModalOpen  && (
        <div className="fixed inset-0 z-50">
          <ModalOf 
            title={currentModalData.title}
            modalData={currentModalData.data}
            onClose={() => dispatch(closeModal())}
          />
        </div>
      )}
      
    </>
  );
}

export default App;
