import ContactPage from "../views/contact/ContactPage";
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
      path: `/contact`,
      element: <ContactPage />,
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