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
import Solutions from "./views/Modals/Solutions";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "./redux/ModalSlice";
import Innovation from "./views/Modals/Innovation";
import Company from "./views/Modals/Company";
import Jobs from "./views/Modals/Jobs";
import Search from "./views/Modals/Search";

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
      case "Innovation":
        return <Innovation onClose={() => dispatch(closeModal())} />;
      case "Company":
        return <Company onClose={() => dispatch(closeModal())} />;
      case "Jobs":
        return <Jobs onClose={() => dispatch(closeModal())} />;
      case "Search":
        return <Search onClose={() => dispatch(closeModal())} />;
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
      <LeftButtom />
    </>
  );
}

export default App;
