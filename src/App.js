// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { RouteData } from "./Routes/Routes";
import LeftButtom from "./views/home/LeftButtom";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Services from "./views/Modals/Services";
import Solutions from "./views/Modals/Solutions";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "./redux/ModalSlice";

function App() {
  const dispatch = useDispatch();
  const modalContent = useSelector((state) => state.modal.modalContent);
 

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
  const renderModal = () => {
    switch (modalContent) {
      case "Services":
        return <Services onClose={() => dispatch(closeModal())} />;
      case "Solutions":
        return <Solutions onClose={() => dispatch(closeModal())} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Routes>
        {RouteData?.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
       {/* Render Modal */}
       {modalContent && (
        <div className="fixed inset-0 z-50">
          {renderModal()}
        </div>
      )}
      <LeftButtom/>
    </>
  );
}

export default App;
