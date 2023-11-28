import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdContactSupport } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';


import logo from "../../public/logo.svg";
import { useState } from "react";
const MainNavigation = (props) => {
  const router = useRouter();
  const currentRoute = usePathname();

  const [menu, setMenu] = useState(false);
  return (
    <div
      className="d-flex fixed-top justify-content-between py-3 px-4 clr_p align-items-center"
      dir="rtl"
    >
      <GiHamburgerMenu
        style={{ cursor: "pointer" }}
        onClick={() => props.toggle()}
        className="d-flex d-md-none"
        color="white"
        size="25px"
      />
      <Link className="d-flex d-md-none" href="/">
        <Image
          style={{ height: "35px", width: "auto" }}
          src={logo}
          alt="logo"
        />
      </Link>
      <Link href='/contact'         className="d-flex d-md-none"
>
      <MdContactSupport
        style={{ cursor: "pointer" }}
        color="white"
        size="30px"
        />
        </Link>

      <nav className="d-none d-md-flex">
        <ul className="d-flex gap-3 align-items-center">
          <div style={{ borderLeft: "2px solid white", paddingLeft: "10px" }}>
            <Link href="/#home">
              <Image
                style={{ height: "35px", width: "auto" }}
                src={logo}
                alt="logo"
              />
            </Link>
          </div>
          <Link href="/#home" >
            <li>الرئيسية</li>
          </Link>
          <Link href="/#about_us" >
            <li>من نحن</li>
          </Link>
          <Link href="/#services">
            <li>خدماتنا</li>
          </Link>
          <Link href="/#questions" >
            <li>الاسئلة الشائعة</li>
          </Link>
        </ul>
      </nav>
      <div className="d-none d-md-flex gap-4 align-items-center">
        <Link href="/seller">
          <button className="nav_btn shadow">كن شريكاً</button>
        </Link>
        <Link href="/contact">
          <button className="nav_btn shadow">تواصل معنا</button>
        </Link>
        {/* <p className="p-0 text-white">En</p> */}
      </div>
    </div>
  );
};

export default MainNavigation;
