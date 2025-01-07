import ContactPage from "../views/contact/ContactPage";
import Index from "../views/home/Index";
import Products from "../views/products/Products";

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
  ];