import {Outlet} from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <h1>App Layout</h1>
      <header />
      <Outlet />
      <footer />
    </>
  );
};

export default AppLayout;
