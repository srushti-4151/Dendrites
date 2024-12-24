import Index from "../views/home/Index";
import Services from "../views/Modals/Services";
import Solutions from "../views/Modals/Solutions";
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
  ];