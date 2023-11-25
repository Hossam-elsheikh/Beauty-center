import React from "react";
import Link from "next/link";
import logo from "../../public/logo.svg";
import Image from "next/image";

const MobNav = (props) => {
  return (
    <div className="mob_nav py-3">
      <nav className=" ">
        <ul className="d-flex flex-column gap-3 justify-content-center align-items-center pt-1">
          <Link onClick={()=>props.close()} className="d-flex d-md-none border-bottom pb-2" href="/">
            <Image
              style={{ height: "55px", width: "auto" }}
              src={logo}
              alt="logo"
            />
          </Link>
          <Link onClick={()=>props.close()} href="/">
            <li>الرئيسية</li>
          </Link>
          <Link onClick={()=>props.close()} href="/#about_us">
            <li>من نحن</li>
          </Link>
          <Link onClick={()=>props.close()} href="/#services">
            <li>خدماتنا</li>
          </Link>
          <Link onClick={()=>props.close()} href="/">
            <li>الاسئلة الشائعة</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default MobNav;
