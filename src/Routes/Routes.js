import AboutUs from "../views/Companypages/about/AboutUs";
import ContactPage from "../views/Companypages/contact/ContactPage";
import Index from "../views/home/Index";
import Products from "../views/products/Products";
import Engineering from "../views/ServicesPages/Engineering/Engineering";
import Epcmv from "../views/ServicesPages/EPCMV/Epcmv";

export const RouteData = [
    {
      path: `/`,
      element: <Index />,
    },
    {
      path: `/products`,
      element: <Products />,
    },
    {
      path: `/company/contact`,
      element: <ContactPage />,
    },
    {
      path: `/company/about`,
      element: <AboutUs />,
    },
    {
      path: "/services/engineering",  
      element: <Engineering />, 
    },
    {
      path: "/services/epcmv",  
      element: <Epcmv />, 
    },
  ];