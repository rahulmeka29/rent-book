import Success from "./components/Success";

const Routes = [
  {
    element: <app />,
    path: "/",
    title: "Home",
    children: [
      {
        element: <login />,
        path: "/login",
        title: "Login",
      },
      {
        element: <signup />,
        path: "/signup",
        title: "Signup",
      },

      {
        element: <cart />,
        path: "/cart",
        title: "Cart",
      },
      {
        element: <success />,
        path: "/success",
        title: "success",
      },
    ],
  },
];
export default Routes;
