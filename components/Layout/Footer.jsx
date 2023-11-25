import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaGooglePlay } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";

const Footer = () => {
  return (
    <div
      className="clr_p d-flex flex-column flex-md-row p-5 gap-5 align-items-center flex-wrap"
      dir="rtl"
    >
      <Link className="d-flex" href="/">
        <Image
          style={{ height: "65px", width: "auto" }}
          src={logo}
          alt="logo"
        />
      </Link>
      <div className="d-flex flex-column gap-2 text-center">
        <div className="d-flex align-items-center gap-2 text-light">
          <FaLocationDot />
          <p>المملكة العربية السعودية</p>
        </div>
        <div className="d-flex align-items-center gap-2 text-light">
          <FaPhone />
          <p>+966530852675</p>
        </div>
        <div className="d-flex align-items-center gap-2 text-light">
          <IoMail />
          <Link href="mailto:+care@beauty-centeer.com">
            +care@beauty-centeer.com
          </Link>
        </div>
      </div>
      <div className="d-flex flex-column gap-2 text-center">
        <Link href="/#home">عن متجرنا</Link>
        <Link href="/#services">خدماتنا</Link>
        <Link href="/#questions">الاسئلة الشائعة</Link>
      </div>
      <div className="d-flex flex-column gap-2 text-center">
        <Link href="/seller">كن شريكاً</Link>
        <Link href="/contact">تواصل معنا</Link>
      </div>
      <div className="d-flex flex-column gap-2 text-center ">
        <h5 className="text-light">قم بتحميل التطبيق</h5>
        <Link
          href="/seller"
          className="d-flex gap-3 bg-light text_p justify-content-center align-items-center  p-2 border rounded "
        >
          <h6>جوجل بلاي</h6>
          <FaGooglePlay />
        </Link>
        <Link
          href="/seller"
          className="d-flex bg-light text_p justify-content-center gap-3 align-items-center  p-2 border rounded "
        >
          <h6>آبل ستور</h6>
          <GrAppleAppStore />
        </Link>
      </div>
      <div className="d-flex flex-column gap-2 text-center" style={{maxWidth:'400px'}}>
        <h5 className="text-light">وسائل الدفع</h5>
        <div className="d-flex gap-2 flex-wrap justify-content-center">
        <img
        className="bg-light p-1 rounded"
          style={{ height: "35px", width: "auto" }}
          src='https://beauty-t-center.com/_/assets/front-end/img/8.png'
          alt="logo"
        />
        <img
        className="bg-light p-1 rounded"
          style={{ height: "35px", width: "auto" }}
          src='https://beauty-t-center.com/_/assets/front-end/img/7.png'
          alt="logo"
        />
        <img
        className="bg-light p-1 rounded"
          style={{ height: "35px", width: "auto" }}
          src='https://beauty-t-center.com/_/assets/front-end/img/6.png'
          alt="logo"
        />
        <img
        className="bg-light p-1 rounded"
          style={{ height: "35px", width: "auto" }}
          src='https://beauty-t-center.com/_/assets/front-end/img/5.png'
          alt="logo"
        />
        <img
        className="bg-light p-1 rounded"
          style={{ height: "35px", width: "auto" }}
          src='https://beauty-t-center.com/_/assets/front-end/img/4.png'
          alt="logo"
        />
        <img
        className="bg-light p-1 rounded"
          style={{ height: "35px", width: "auto" }}
          src='https://beauty-t-center.com/_/assets/front-end/img/3.png'
          alt="logo"
        />
        <img
          style={{ height: "35px", width: "auto" }}
          src='https://beauty-t-center.com/_/assets/front-end/img/2.png'
          alt="logo"
        />
        <img
          style={{ height: "35px", width: "auto" }}
          src='https://beauty-t-center.com/_/assets/front-end/img/1.png'
          alt="logo"
        />
        </div>
      </div>
    </div>
  );
};

export default Footer;
