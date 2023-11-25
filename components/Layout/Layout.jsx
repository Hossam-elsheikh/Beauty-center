import "bootstrap/dist/css/bootstrap.css";
import MainNavigation from "./MainNavigation";
import Aggrements from "../seller/Aggrements";
import { useContext, useState } from "react";
import { aggContext } from "../Context/aggContext";
import MobNav from "./MobNav";
import Footer from "./Footer";

const Layout = (props) => {
  const { isShown, setIsShown } = useContext(aggContext);
  const [menu, setMenu] = useState(false);
  return (
    <>
      {menu && <MobNav close={() => setMenu(false)} />}
      <div
        style={{
          height: "100vh",
          overflow: `${isShown ? "hidden" : "auto"}`,
          scrollBehavior: "smooth",
        }}
      >
        {!menu && <MainNavigation toggle={() => setMenu(!menu)} />}
        {isShown && (
          <>
            <div
              className="bck bg-dark opacity-50 "
              onClick={() => setIsShown(false)}
            ></div>
            <Aggrements close={() => setIsShown(false)} />
          </>
        )}
        <main className="mt-5 pt-3">{props.children}</main>
        <footer >
          <Footer/>
        </footer>
      </div>
    </>
  );
};

export default Layout;
